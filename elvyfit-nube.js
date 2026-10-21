/* ============================================================
   elvyfit-nube.js — UNO PARA TODOS LOS PLANNINGS
   Envía a la nube (Firestore, colección "seguimiento") lo que el
   cliente apunta en su seguimiento, para que Marc lo vea en
   COACH_ELVYFIT.html.
   - No cambia nada del planning: no pinta nada, no toca el guardado
     del móvil. Solo lee las casillas y las manda.
   - Se activa con una línea en cada planning:
     <script src="elvyfit-nube.js" data-slug="chechu" data-nombre="Chechu" data-clave="chechu_plan_v1" defer></script>
     (data-clave = donde guarda el planning en el móvil; sirve para
     enviar al abrir solo si ese móvil ya ha apuntado algo)
   - El móvil de Marc no envía nada (lo marca COACH_ELVYFIT.html).
   ============================================================ */
(function () {
  "use strict";
  var S = document.currentScript || document.querySelector('script[src*="elvyfit-nube.js"]');
  if (!S || !window.Promise || !document.addEventListener) return;
  var SLUG = S.getAttribute("data-slug");
  var NOMBRE = S.getAttribute("data-nombre") || SLUG;
  var CLAVE = S.getAttribute("data-clave") || "";
  if (!SLUG) return;

  var FB = {
    apiKey: "AIzaSyA6JVOspcEiMEDik00juvDEKNH9PtYJckc",
    authDomain: "elvyfit-617ee.firebaseapp.com",
    projectId: "elvyfit-617ee",
    storageBucket: "elvyfit-617ee.firebasestorage.app",
    messagingSenderId: "886955262250",
    appId: "1:886955262250:web:411f3dc3662b63bd619e53"
  };
  var SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
  var COLECCION = "seguimiento";

  function ls(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      localStorage.setItem(k, v);
    } catch (e) {}
    return null;
  }
  if (ls("elvyfit_coach") === "1") return; /* móvil de Marc */
  var DISP = ls("elvyfit_dispositivo");
  if (!DISP) { DISP = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); ls("elvyfit_dispositivo", DISP); }
  var UA = navigator.userAgent || "";
  var EQUIPO = /iPhone/.test(UA) ? "iPhone" : /iPad/.test(UA) ? "iPad" : /Android/.test(UA) ? "Android" : /Mac/.test(UA) ? "Mac" : /Windows/.test(UA) ? "Windows" : "Otro";

  /* ---------- leer el seguimiento tal y como se ve en la página ---------- */
  var SALTA = { TABLE: 1, SCRIPT: 1, STYLE: 1, INPUT: 1, BUTTON: 1, SELECT: 1, TEXTAREA: 1 };
  var RE_PESO = /^(?:pc_|peso_w)(\d+)$/;
  function limpia(t) { return String(t || "").replace(/\s+/g, " ").trim(); }
  function textos(el) {
    var out = [];
    (function walk(n) {
      for (var i = 0; i < n.childNodes.length; i++) {
        var c = n.childNodes[i];
        if (c.nodeType === 3) { var t = limpia(c.textContent); if (t) out.push(t); }
        else if (c.nodeType === 1 && !SALTA[c.tagName]) walk(c);
      }
    })(el);
    return out;
  }
  function casillas(el) {
    return [].slice.call(el.querySelectorAll("input")).filter(function (i) {
      var t = (i.type || "text").toLowerCase();
      return t !== "radio" && t !== "checkbox" && t !== "file" && t !== "button" && t !== "hidden";
    });
  }
  function tipo(t) {
    t = limpia(t).toLowerCase();
    if (/kg/.test(t)) return "kg";
    if (/rep/.test(t)) return "rep";
    if (/rir/.test(t)) return "rir";
    if (/fallo/.test(t)) return "fallo";
    return "";
  }
  /* qué semana y qué dato (kg/rep/rir) es cada casilla de una fila */
  function columnas(tabla) {
    var cab = tabla.tHead ? [].slice.call(tabla.tHead.rows) : [];
    if (!cab.length) return null;
    var sems = [];
    [].forEach.call(cab[0].cells, function (c) {
      var t = limpia(c.textContent), m = /(\d+)/.exec(t);
      if (!m) return;
      for (var k = 0; k < (c.colSpan || 1); k++) sems.push(m[1]);
    });
    if (!sems.length) return null;
    var subs = [];
    if (cab.length > 1) [].forEach.call(cab[cab.length - 1].cells, function (c) { var x = tipo(c.textContent); if (x) subs.push(x); });
    subs = subs.slice(-sems.length);
    if (subs.length !== sems.length) {
      subs = [];
      for (var i = 0; i < sems.length; i++) subs.push(i % 2 ? "rep" : "kg");
    }
    return sems.map(function (s, i) { return { sem: s, dato: subs[i] }; });
  }
  function nombreDe(tabla) {
    var a = tabla.parentElement, n = 0;
    while (a && n < 6) { var t = textos(a); if (t.length) return { el: a, t: t }; a = a.parentElement; n++; }
    return { el: tabla.parentElement, t: [] };
  }
  function diaDe(el) {
    var d = el ? el.parentElement : null, n = 0;
    while (d && n < 6) {
      if (d.querySelectorAll("table").length > 1) {
        for (var i = 0; i < d.children.length; i++) {
          var c = d.children[i];
          if (!c.querySelector("table") && !c.querySelector("input") && limpia(c.textContent)) return limpia(c.textContent).slice(0, 80);
        }
        return "";
      }
      d = d.parentElement; n++;
    }
    return "";
  }
  function serieDe(fila) {
    var c = fila.cells[0];
    if (!c || c.querySelector("input")) return "";
    var t = textos(c);
    return t[0] || "";
  }

  function foto() {
    var peso = {}, hayPeso = false;
    casillas(document).forEach(function (i) {
      var m = RE_PESO.exec(i.id || ""), v = limpia(i.value);
      if (m && v) { peso[m[1]] = v; hayPeso = true; }
    });
    var dias = [], porDia = {};
    function diaObj(nombre) {
      if (!porDia[nombre]) { porDia[nombre] = { dia: nombre, ejercicios: [] }; dias.push(porDia[nombre]); }
      return porDia[nombre];
    }
    var tablas = [];
    casillas(document).forEach(function (i) {
      var t = i.closest ? i.closest("table") : null;
      if (t && tablas.indexOf(t) < 0) tablas.push(t);
    });
    tablas.forEach(function (tabla) {
      var cols = columnas(tabla);
      if (!cols) return;
      var nom = nombreDe(tabla);
      var filas = [].slice.call(tabla.rows).filter(function (f) { return !f.parentElement || f.parentElement.tagName !== "THEAD"; });
      var porTitulos = filas.some(function (f) { return !casillas(f).length && limpia(f.textContent); });
      var dia = porTitulos ? (nom.t[0] || "") : diaDe(nom.el);
      var ej = porTitulos ? null : { nombre: nom.t[0] || "Ejercicio", detalle: nom.t[1] || "", series: [] };
      var lista = diaObj(dia).ejercicios;
      if (ej) lista.push(ej);
      filas.forEach(function (f) {
        var cs = casillas(f);
        if (!cs.length) {
          var tt = textos(f);
          if (porTitulos && tt.length) { ej = { nombre: tt[0], detalle: tt.slice(1).join(" · "), series: [] }; lista.push(ej); }
          return;
        }
        if (!ej || RE_PESO.test(cs[0].id || "")) return;
        var sem = {}, algo = false;
        cs.forEach(function (c, k) {
          var v = limpia(c.value), col = cols[k];
          if (!v || !col) return;
          (sem[col.sem] = sem[col.sem] || {})[col.dato || "v"] = v;
          algo = true;
        });
        if (algo) ej.series.push({ s: serieDe(f) || ("Serie " + (ej.series.length + 1)), sem: sem });
      });
    });
    dias.forEach(function (d) { d.ejercicios = d.ejercicios.filter(function (e) { return e.series.length; }); });
    dias = dias.filter(function (d) { return d.ejercicios.length; });
    if (!dias.length && !hayPeso) return null;
    var archivo = "";
    try { archivo = decodeURIComponent(location.pathname.split("/").pop()); } catch (e) {}
    return { slug: SLUG, nombre: NOMBRE, archivo: archivo, t: Date.now(), disp: DISP, equipo: EQUIPO, peso: peso, dias: dias };
  }
  window.ELVYFIT_NUBE_FOTO = foto; /* para comprobar desde la consola */

  /* ---------- envío ---------- */
  var listo = null;
  function carga(src) {
    return new Promise(function (ok, ko) {
      var s = document.createElement("script");
      s.src = src; s.async = true; s.onload = ok; s.onerror = ko;
      document.head.appendChild(s);
    });
  }
  function base() {
    if (listo) return listo;
    listo = (window.firebase ? Promise.resolve() : carga(SDK + "firebase-app-compat.js"))
      .then(function () { return firebase.firestore ? null : carga(SDK + "firebase-firestore-compat.js"); })
      .then(function () {
        var app = firebase.apps && firebase.apps.length ? firebase.app() : firebase.initializeApp(FB);
        return app.firestore();
      });
    listo.catch(function () { listo = null; });
    return listo;
  }
  var reloj = null, pendiente = false, ultimo = "";
  function enviar() {
    clearTimeout(reloj); reloj = null; pendiente = false;
    var f = foto();
    if (!f) return;
    var firma = JSON.stringify([f.peso, f.dias]);
    if (firma === ultimo) return;
    base().then(function (db) {
      return db.collection(COLECCION).doc(SLUG + "__" + DISP).set(f);
    }).then(function () { ultimo = firma; }).catch(function () {});
  }
  function programa(ms) { pendiente = true; clearTimeout(reloj); reloj = setTimeout(enviar, ms); }
  function esCasilla(t) {
    return t && t.tagName === "INPUT" && ((t.closest && t.closest("table")) || RE_PESO.test(t.id || ""));
  }
  ["input", "change"].forEach(function (ev) {
    document.addEventListener(ev, function (e) { if (esCasilla(e.target)) programa(4000); }, true);
  });
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden" && pendiente) enviar(); });
  window.addEventListener("pagehide", function () { if (pendiente) enviar(); });
  /* al abrir: si este móvil ya ha apuntado algo en este planning, se manda (así Marc lo ve sin esperar al siguiente entreno) */
  function alAbrir() { setTimeout(function () { if (CLAVE && ls(CLAVE)) enviar(); }, 5000); }
  if (document.readyState === "complete") alAbrir(); else window.addEventListener("load", alAbrir);
})();
