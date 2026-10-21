/* ============================================================
   coach-clientes.js — los clientes que salen en COACH_ELVYFIT.html
   Una línea por cliente:
     slug     = el mismo que data-slug en su planning (elvyfit-nube.js)
     nombre   = como sale en Coach
     planning = su ÚLTIMO planning (de aquí salen las fotos del inicio)
     datos    = su datos-<cliente>.js (plan, kcal, rutina y pesos que
                Marc va pasando). Vacío si su planning no lo usa.
   Si un cliente cambia de planning, se cambia SOLO su línea.
   ============================================================ */
window.COACH_CLIENTES = [
  { slug: "chechu",       nombre: "Chechu",       planning: "SERGI_DEFINICION_2300-5.html",      datos: "datos-chechu.js" },
  { slug: "guti",         nombre: "Guti",         planning: "PLANNING_ALEX_GUTIERREZ.html",      datos: "datos-guti.js" },
  { slug: "amaro",        nombre: "Amaro",        planning: "AMARO VOLUMEN 3200.html",           datos: "datos-amaro.js" },
  { slug: "alvaro",       nombre: "Álvaro",       planning: "PLANNING ALVARO LEAL.html",         datos: "datos-alvaro.js" },
  { slug: "marcos",       nombre: "Marcos",       planning: "PLANNING_MARCOS_BANDERA-2.html",    datos: "datos-marcos.js" },
  { slug: "alex-infante", nombre: "Alex Infante", planning: "PLANNING_ALEX_INFANTE_v3.html",     datos: "datos-alex-infante.js" },
  { slug: "gerard",       nombre: "Gerard",       planning: "PLANNING GERARD REGORDOSA-6.html",  datos: "datos-gerard.js" }
];
