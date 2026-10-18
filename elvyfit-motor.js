/* ============================================================
   ELVYFIT — MOTOR COMÚN
   Marc Elvira Peinado · @elvyfit9

   Este archivo es el MISMO para todos los clientes.
   Aquí viven la tabla de alimentos y las cuentas.

   Si cambias un dato de un alimento aquí, se actualizan
   TODOS los plannings que lo lleven.
   Los gramos de cada cliente van en su propio datos-XXX.js

   REGLA DE PESADO: TODO EN CRUDO, sin excepciones.
   Carne, pescado, arroz, pasta, patata, boniato y la verdura
   que se cocine se pesan ANTES de cocinar. Los alimentos que
   se comen tal cual (pan, claras, fruta, ensalada) se pesan
   como vienen. Los marcados con "crudo:true" llevan el aviso
   "(peso en CRUDO)" en el planning automáticamente.
   ============================================================ */

var ELVYFIT = (function () {

  /* ---------------------------------------------------------
     TABLA DE ALIMENTOS — valores por 100 g (o 100 ml)
     [proteína, carbohidratos, grasa]
     "ok: true"  = comprobado en la etiqueta del producto
     "ok: false" = valor de referencia, pendiente de comprobar
     --------------------------------------------------------- */
  var ALIMENTOS = {
    /* ---- CARBOHIDRATOS ---- */
    arroz:        { n:"Arroz blanco",                p:8.2,  c:75.0, g:1.0,  crudo:true,  ok:true,  cat:"carbo" },
    pasta:        { n:"Pasta integral",              p:13.5, c:62.0, g:2.4,  crudo:true,  ok:true,  cat:"carbo" },
    pan_espelta:  { n:"Pan de espelta 100% integral",p:10.1, c:45.6, g:4.1,  crudo:false, ok:true,  cat:"carbo" },
    crema_arroz:  { n:"Harina de arroz Hacendado",   p:7.4,  c:79.0, g:0.5,  crudo:false, ok:true,  cat:"carbo" },
    patata:       { n:"Patata",                      p:2.0,  c:17.0, g:0.1,  crudo:true,  ok:false, cat:"carbo" },
    boniato:      { n:"Boniato",                     p:1.6,  c:20.0, g:0.1,  crudo:true,  ok:false, cat:"carbo" },
    avena:        { n:"Avena",                       p:13.0, c:60.0, g:7.0,  crudo:false, ok:false, cat:"carbo" },
    tortas_arroz: { n:"Tortas de arroz",             p:8.0,  c:81.0, g:3.0,  crudo:false, ok:false, cat:"carbo" },
    datiles:      { n:"Dátiles",                     p:2.5,  c:66.0, g:0.4,  crudo:false, ok:false, cat:"carbo" },

    /* ---- PROTEÍNAS ---- */
    pollo:        { n:"Pechuga de pollo fileteada",  p:22.0, c:0.0,  g:2.1,  crudo:true,  ok:true,  cat:"prote" },
    pavo:         { n:"Solomillo de pavo",           p:23.0, c:1.0,  g:0.5,  crudo:true,  ok:true,  cat:"prote" },
    ternera:      { n:"Filete de ternera blanca",    p:20.0, c:0.5,  g:3.0,  crudo:true,  ok:true,  cat:"prote" },
    picada:       { n:"Carne picada de vacuno",      p:19.0, c:0.5,  g:14.0, crudo:true,  ok:true,  cat:"prote" },
    claras:       { n:"Claras pasteurizadas",        p:11.0, c:0.5,  g:0.1,  crudo:false, ok:true,  cat:"prote", ml:true },
    huevo:        { n:"Huevo entero",                p:12.5, c:0.7,  g:10.0, crudo:false, ok:false, cat:"prote", ud:60 },
    salmon:       { n:"Salmón",                      p:20.0, c:0.0,  g:13.0, crudo:true,  ok:false, cat:"prote" },
    merluza:      { n:"Merluza",                     p:17.0, c:0.0,  g:2.0,  crudo:true,  ok:false, cat:"prote" },
    rodaballo:    { n:"Rodaballo",                   p:17.0, c:0.0,  g:3.0,  crudo:true,  ok:false, cat:"prote" },
    lenguado:     { n:"Lenguado",                    p:16.5, c:0.0,  g:1.5,  crudo:true,  ok:false, cat:"prote" },
    queso_batido: { n:"Queso fresco batido 0%",      p:8.0,  c:4.0,  g:0.2,  crudo:false, ok:false, cat:"prote" },
    isolate:      { n:"Proteína aislada",            p:87.0, c:5.0,  g:1.0,  crudo:false, ok:false, cat:"supl" },

    /* ---- GRASAS ---- */
    aove:         { n:"AOVE en crudo",               p:0.0,  c:0.0,  g:100.0,crudo:false, ok:false, cat:"grasa" },
    aguacate:     { n:"Aguacate",                    p:2.0,  c:1.8,  g:15.0, crudo:false, ok:false, cat:"grasa" },
    leche:        { n:"Leche entera",                p:3.1,  c:4.7,  g:3.6,  crudo:false, ok:false, cat:"grasa", ml:true },

    /* ---- FRUTA ---- */
    platano:      { n:"Plátano",                     p:1.1,  c:20.0, g:0.3,  crudo:false, ok:false, cat:"fruta" },
    manzana:      { n:"Manzana",                     p:0.3,  c:12.0, g:0.2,  crudo:false, ok:false, cat:"fruta" },
    arandanos:    { n:"Arándanos",                   p:0.7,  c:9.7,  g:0.3,  crudo:false, ok:false, cat:"fruta" },

    /* ---- VERDURA ---- */
    tomate:       { n:"Tomate pera",                 p:0.9,  c:3.5,  g:0.2,  crudo:false, ok:false, cat:"verdura" },
    cherry:       { n:"Tomate cherry",               p:0.9,  c:3.5,  g:0.2,  crudo:false, ok:false, cat:"verdura" },
    tom_triturado:{ n:"Tomate triturado natural",    p:1.2,  c:5.0,  g:0.2,  crudo:false, ok:false, cat:"verdura" },
    calabacin:    { n:"Calabacín",                   p:1.2,  c:2.0,  g:0.3,  crudo:true , ok:false, cat:"verdura" },
    judia_verde:  { n:"Judía verde",                 p:1.8,  c:4.5,  g:0.2,  crudo:true , ok:false, cat:"verdura" },
    brocoli:      { n:"Brócoli",                     p:2.8,  c:4.0,  g:0.4,  crudo:true , ok:false, cat:"verdura" },
    champinon:    { n:"Champiñón",                   p:3.0,  c:1.0,  g:0.3,  crudo:true , ok:false, cat:"verdura" },
    pimiento:     { n:"Pimiento rojo y verde",       p:1.0,  c:5.0,  g:0.3,  crudo:true , ok:false, cat:"verdura" },
    pepino:       { n:"Pepino",                      p:0.7,  c:2.0,  g:0.1,  crudo:false, ok:false, cat:"verdura" },
    zanahoria:    { n:"Zanahoria",                   p:0.9,  c:8.0,  g:0.2,  crudo:false, ok:false, cat:"verdura" },
    ensalada:     { n:"Ensalada variada",            p:1.5,  c:2.0,  g:0.3,  crudo:false, ok:false, cat:"verdura" },

    /* ---- SUPLEMENTOS (no suman gramos de comida) ---- */
    omega3:       { n:"Omega 3",                     p:0.0,  c:0.0,  g:100.0,crudo:false, ok:false, cat:"supl", caps:true },
    creatina:     { n:"Creatina monohidrato",        p:0.0,  c:0.0,  g:0.0,  crudo:false, ok:false, cat:"supl" }
  };

  /* Cómo se colorea cada macro en las fichas de comida */
  var CLASE = { carbo:"q-c", prote:"q-p", grasa:"q-g", verdura:"q-v", fruta:"q-c", supl:"q-g" };

  /* Cómo se agrupan en la lista de la compra */
  var GRUPOS = [
    { id:"prote",   titulo:"🥩 Proteínas",        clase:"ct-blue"   },
    { id:"carbo",   titulo:"🍚 Carbohidratos",    clase:"ct-yellow" },
    { id:"grasa",   titulo:"🥑 Grasas y lácteos", clase:"ct-pink"   },
    { id:"fruta",   titulo:"🍌 Fruta",            clase:"ct-yellow" },
    { id:"verdura", titulo:"🥦 Verdura",          clase:"ct-green"  },
    { id:"supl",    titulo:"💊 Suplementos",      clase:"ct-purple" }
  ];

  /* ---------------------------------------------------------
     CUENTAS
     --------------------------------------------------------- */

  /* Proteína y carbos 4 kcal/g · grasa 9 kcal/g */
  function kcal(p, c, g) { return p * 4 + c * 4 + g * 9; }

  /* Macros de una lista de [clave, gramos] */
  function macros(items) {
    var P = 0, C = 0, G = 0;
    items.forEach(function (it) {
      var a = ALIMENTOS[it[0]];
      if (!a) { console.warn("Elvyfit: alimento desconocido →", it[0]); return; }
      P += a.p * it[1] / 100;
      C += a.c * it[1] / 100;
      G += a.g * it[1] / 100;
    });
    return { kcal: kcal(P, C, G), p: P, c: C, g: G };
  }

  /* Suma varios bloques de macros */
  function suma(lista) {
    var t = { kcal: 0, p: 0, c: 0, g: 0 };
    lista.forEach(function (m) { t.kcal += m.kcal; t.p += m.p; t.c += m.c; t.g += m.g; });
    return t;
  }

  /* Cómo se escribe la cantidad de un alimento */
  function cantidad(clave, g) {
    var a = ALIMENTOS[clave]; if (!a) return g + " g";
    if (a.caps) return g + (g === 1 ? " cáps." : " cáps.");
    if (clave === "huevo") return Math.round(g / 60) + " ud (" + g + " g)";
    if (a.ml) return g + " ml";
    return g + " g";
  }

  /* Nombre que ve el cliente, con "(peso CRUDO)" donde toca */
  function nombre(clave, texto) {
    var a = ALIMENTOS[clave]; if (!a) return clave;
    var base = texto || a.n;
    if (a.crudo && base.toLowerCase().indexOf("crudo") < 0 && base.toLowerCase().indexOf("cruda") < 0) {
      base += " (peso en CRUDO)";
    }
    return base;
  }

  /* Suma los 7 días reales y agrupa por categoría para la compra */
  function compra(dias) {
    var total = {};
    dias.forEach(function (dia) {
      dia.comidas.forEach(function (comida) {
        comida.items.forEach(function (it) {
          total[it[0]] = (total[it[0]] || 0) + it[1];
        });
      });
    });
    return GRUPOS.map(function (grp) {
      var filas = [];
      Object.keys(total).forEach(function (k) {
        var a = ALIMENTOS[k];
        if (!a || a.cat !== grp.id) return;
        filas.push({ clave: k, nombre: a.n, gramos: total[k], ok: a.ok, crudo: a.crudo,
                     ml: a.ml, caps: a.caps, ud: a.ud });
      });
      filas.sort(function (x, y) { return y.gramos - x.gramos; });
      return { titulo: grp.titulo, clase: grp.clase, filas: filas };
    }).filter(function (grp) { return grp.filas.length; });
  }

  /* Cómo se escribe un peso en la lista de la compra */
  function peso(g, ml) {
    if (g >= 1000) return (g / 1000).toFixed(1).replace(".", ",") + (ml ? " L" : " kg");
    return Math.round(g) + (ml ? " ml" : " g");
  }

  /* Formatea un número con punto de miles (2300 → 2.300) */
  function num(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return {
    ALIMENTOS: ALIMENTOS,
    CLASE: CLASE,
    GRUPOS: GRUPOS,
    kcal: kcal,
    macros: macros,
    suma: suma,
    cantidad: cantidad,
    nombre: nombre,
    compra: compra,
    peso: peso,
    num: num,
    version: "1.0"
  };
})();
