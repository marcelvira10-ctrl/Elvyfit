/* ============================================================
   ALEX GUTIÉRREZ BORDERA (GUTI) — DATOS DEL PLAN

   ESTE es el archivo que tocas tú.
   Cambia un número, guarda, y el planning recalcula solo
   las kcal del día, los macros y la lista de la compra.

   Los pesos van EN CRUDO (arroz, pasta, patata, boniato, carne).
   Los nombres de los alimentos salen de elvyfit-motor.js
   ============================================================ */

/* Dos alimentos que el motor común aún no tiene.
   Se añaden aquí para no tocar elvyfit-motor.js. */
if (typeof ELVYFIT !== "undefined") {
  ELVYFIT.ALIMENTOS.miel     = ELVYFIT.ALIMENTOS.miel     || { n:"Miel",     p:0.4, c:80.0, g:0.0, crudo:false, ok:false, cat:"carbo" };
  ELVYFIT.ALIMENTOS.espinaca = ELVYFIT.ALIMENTOS.espinaca || { n:"Espinaca", p:2.9, c:1.4,  g:0.4, crudo:false, ok:false, cat:"verdura" };
  /* Patata de la COMIDA (C2): es la que sube con las kcal extra. La de la cena no se mueve. */
  ELVYFIT.ALIMENTOS.patata_comida = ELVYFIT.ALIMENTOS.patata_comida || Object.assign({}, ELVYFIT.ALIMENTOS.patata, { n: "Patata (comida)" });
}

var CLIENTE = {

  nombre:   "ALEX",
  apellido: "Gutiérrez Bordera",

  /* ══════════════════════════════════════════════════
     LOS 3 NÚMEROS QUE TOCAS TÚ
     Cambia cualquiera y el planning entero se recalcula:
     gramos de cada día, macros y lista de la compra.
     La proteína y la grasa salen del peso, así que si
     solo subes kcal, TODO lo que sube son carbohidratos.
     ══════════════════════════════════════════════════ */

  kcal:  3750,     /* kcal al día */
  peso:  64,       /* kg — de aquí salen la proteína y la grasa */
  pasos: 9579,     /* media diaria de pasos */

  /* proteína 1,6 g/kg · grasa 0,6 g/kg · el resto a carbohidratos.
     Con tantos carbos, la avena, el pan y la patata ya traen mucha
     proteína: por eso no lleva carne ni pescado. La proteína sale del
     batido, el huevo y los propios carbos (real ≈1,7 g/kg).
     Si algún día quieres meter carne, sube "p" a 2 o 2,2.        */
  ratios: { p: 1.6, g: 0.6 },

  /* SOLO se mueven estos alimentos al cambiar kcal. El resto del plan queda igual.
     Marc decide cada cambio; si no hay lista, se reparte entre todos. */
  soloEstos: ["patata_comida"],

  /* --- DATOS PARA CALCULAR SU GASTO --- */
  perfil: {
    edad: 26, altura: 183, sexo: "hombre",
    trabajo: 60,                         /* oficina: casi nada de trabajo físico */
    gymDias: 5,     gymMin: 60,
    deporte: "Futbol sala + castellers", deporteDias: 3, deporteMin: 100
  },

  /* --- ÚLTIMO AJUSTE: sale en el Perfil con lo que sube/baja cada alimento.
         "desdeKcal" = las kcal que tenía justo antes de este cambio.          --- */
  /* desdeKcal = las kcal de ANTES del último cambio. Cada vez que cambies kcal,
     pon aquí la cifra vieja: así el planning enseña ▲ / ▼ de lo que cambia. */
  ajuste: { desdeKcal: 3550 },
  /* --- ÚLTIMO AJUSTE: sale en el Perfil. Solo lo nuevo, sin números viejos --- */
  historial: [
    { fecha: "18 nov", texto: "Subimos a 3.750 kcal al día: +200 kcal de carbohidratos, todos en la comida (más patata). La proteína y la grasa siguen igual. El resto del plan no cambia." }
  ],

  /* --- LAS 4 COMIDAS: ESTO ES LA BASE --- */
  /*  Los gramos de aquí son el punto de partida. El planning   */
  /*  los ajusta solo para cuadrar con las kcal de arriba.      */
  /*  La proteína en polvo, el huevo y la verdura no se tocan.  */
  /*  Solo hace falta tocarlo si quieres cambiar QUÉ come.      */
  dias: [

    /* ─────────── LUN ─────────── */
    {
      dia: "LUN",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["arroz", 40],
            ["patata_comida", 380],
            ["brocoli", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["patata", 500],
            ["platano", 150],
            ["espinaca", 120],
            ["aove", 4]
          ]
        }
      ]
    },

    /* ─────────── MAR ─────────── */
    {
      dia: "MAR",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["arroz", 40],
            ["patata_comida", 380],
            ["zanahoria", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["patata", 500],
            ["platano", 150],
            ["calabacin", 120],
            ["aove", 4]
          ]
        }
      ]
    },

    /* ─────────── MIÉ ─────────── */
    {
      dia: "MIÉ",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["patata_comida", 560],
            ["judia_verde", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["boniato", 480],
            ["platano", 150],
            ["judia_verde", 120],
            ["aove", 4]
          ]
        }
      ]
    },

    /* ─────────── JUE ─────────── */
    {
      dia: "JUE",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["pasta", 40],
            ["patata_comida", 380],
            ["calabacin", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["patata", 500],
            ["platano", 150],
            ["brocoli", 120],
            ["aove", 4]
          ]
        }
      ]
    },

    /* ─────────── VIE ─────────── */
    {
      dia: "VIE",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["arroz", 40],
            ["patata_comida", 380],
            ["brocoli", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["patata", 500],
            ["platano", 150],
            ["zanahoria", 120],
            ["aove", 4]
          ]
        }
      ]
    },

    /* ─────────── SÁB ─────────── */
    {
      dia: "SÁB",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["boniato", 540],
            ["patata_comida", 150],
            ["zanahoria", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["patata", 500],
            ["platano", 150],
            ["calabacin", 120],
            ["aove", 4]
          ]
        }
      ]
    },

    /* ─────────── DOM ─────────── */
    {
      dia: "DOM",
      comidas: [
        {
          titulo: "🌅 C1 · DESAYUNO",
          clase:  "c1",
          items: [
            ["pan_espelta", 70],
            ["huevo", 60],
            ["platano", 200],
            ["miel", 80]
          ]
        },
        {
          titulo: "🍖 C2 · ALMUERZO",
          clase:  "c2",
          items: [
            ["patata_comida", 560],
            ["judia_verde", 120],
            ["aove", 4]
          ]
        },
        {
          titulo: "⚡ C3 · POST-ENTRENO (batido líquido)",
          clase:  "c3",
          items: [
            ["isolate", 30],
            ["avena", 110],
            ["crema_arroz", 120],
            ["leche", 300],
            ["platano", 180],
            ["miel", 80]
          ]
        },
        {
          titulo: "🌙 C4 · CENA",
          clase:  "c4",
          items: [
            ["boniato", 480],
            ["platano", 150],
            ["espinaca", 120],
            ["aove", 4]
          ]
        }
      ]
    }
  ],

  /* --- ENTRENO: 5 días, todas las series al fallo, 3 min de descanso --- */
  /*  "reps" = una cifra por serie. Si añades o quitas una cifra, */
  /*  añades o quitas una serie (y su fila en PROGRESO).          */
  rutina: [
    {
      id: "D1", emoji: "💪", color: "var(--blue)", chip: "D1 · PECHO",
      titulo: "DÍA 1 — PECHO · HOMBRO · TRÍCEPS",
      ejercicios: [
        { nombre: "Press máquina pecho plano", reps: ["6", "8", "10"], video: "https://youtube.com/shorts/A7hGOJQTpq0" },
        { nombre: "Press máquina pecho inclinado", reps: ["8", "10"], video: "https://youtube.com/shorts/MlLOzsUSZZg" },
        { nombre: "Pec Deck (aperturas)", reps: ["10", "10"], video: "https://youtube.com/shorts/rfVptEGJOsU" },
        { nombre: "Press militar en máquina", reps: ["6", "8"], video: "https://youtube.com/shorts/1UzJs7-v4Hk" },
        { nombre: "Elevaciones laterales mancuernas", reps: ["10", "10", "12"], video: "https://youtube.com/shorts/QgpNsybiDoE" },
        { nombre: "Tríceps katana unilateral en polea", reps: ["10", "10", "12"], video: "https://youtube.com/shorts/HNH6a33SZB0" },
        { nombre: "Extensión tríceps polea barra recta", reps: ["10", "10"], video: "https://youtube.com/shorts/jDEmN9FwS1U" }
      ]
    },
    {
      id: "D2", emoji: "🔙", color: "var(--orange)", chip: "D2 · ESPALDA",
      titulo: "DÍA 2 — ESPALDA · BÍCEPS",
      ejercicios: [
        { nombre: "Jalón al pecho agarre prono", reps: ["6", "8", "8"], video: "https://youtube.com/shorts/ON-RH5nYzcU" },
        { nombre: "Remo máquina neutro unilateral", reps: ["8", "10", "10"], video: "https://youtube.com/shorts/RlN63rVkCGk" },
        { nombre: "Jalón al pecho agarre cerrado", reps: ["8", "10"], video: "https://youtube.com/shorts/mtyPkNukKKE" },
        { nombre: "Pullover en polea", reps: ["10", "10"], video: "https://youtube.com/shorts/0CMRVXlo80c" },
        { nombre: "Curl predicador máquina", reps: ["8", "10", "10"], video: "https://youtube.com/shorts/zk8JJELT6dE" },
        { nombre: "Curl martillo", reps: ["8", "10"], video: "https://youtube.com/shorts/pYziGLf2EsA" }
      ]
    },
    {
      id: "D3", emoji: "🦵", color: "var(--green)", chip: "D3 · PIERNA",
      titulo: "DÍA 3 — PIERNA COMPLETA",
      ejercicios: [
        { nombre: "Sentadilla Hack en máquina", reps: ["8", "10", "12"], video: "https://youtube.com/shorts/Gmq0SBcaZz4" },
        { nombre: "Prensa de piernas (leg press)", reps: ["10", "12", "12"], video: "https://youtube.com/shorts/B2T2F2pa-co" },
        { nombre: "Extensión de cuádriceps en máquina", reps: ["12", "12", "15"], video: "https://youtube.com/shorts/lUaVtil2FHc" },
        { nombre: "Isquiotibiales sentado en máquina", reps: ["12", "12", "15"], video: "https://youtube.com/shorts/p1jzT2MUGvk" },
        { nombre: "Abductor de glúteo en máquina", reps: ["15", "15"], video: "https://youtube.com/shorts/-8GDbWX1MQo" },
        { nombre: "Gemelo en máquina", reps: ["15-20", "15-20", "15-20", "15-20", "15-20"], video: "https://youtube.com/shorts/mwqmUDZINrQ" }
      ]
    },
    {
      id: "D4", emoji: "💪", color: "var(--cyan)", chip: "D4 · PECHO",
      titulo: "DÍA 4 — PECHO · HOMBRO",
      ejercicios: [
        { nombre: "Press militar con mancuernas", reps: ["6", "8"], video: "https://youtube.com/shorts/cNBXWUd9e_8" },
        { nombre: "Elevación lateral unilateral en polea", reps: ["8", "10", "12"], video: "https://youtube.com/shorts/YnKUoDiszTY" },
        { nombre: "Pájaros en máquina (Pec Deck invertido)", reps: ["8", "10"], video: "https://youtube.com/shorts/Sws1EXvDTYU" },
        { nombre: "Press inclinado en multipower (pecho superior)", reps: ["6", "8", "8"], video: "https://youtube.com/shorts/EXTwFezH_tQ" },
        { nombre: "Cruces en polea baja (pecho inferior)", reps: ["10", "10", "12"], video: "https://youtube.com/shorts/JZ6oKKEY2NY" }
      ]
    },
    {
      id: "D5", emoji: "🔙", color: "var(--red)", chip: "D5 · ESPALDA",
      titulo: "DÍA 5 — ESPALDA · BÍCEPS · TRÍCEPS",
      ejercicios: [
        { nombre: "Remo en máquina convergente (Hammer Strength)", reps: ["8", "10", "10"], video: "https://youtube.com/shorts/gGsRlXt2E00" },
        { nombre: "Curl de bíceps tumbado en banco", reps: ["8", "10", "12"], video: "https://youtube.com/shorts/2bzTfdB3j4M" },
        { nombre: "Curl de bíceps en polea arriba unilateral", reps: ["8", "10"], video: "https://youtube.com/shorts/7kLT9OxHyw0" },
        { nombre: "Curl predicador en máquina o banco", reps: ["12", "10"], video: "https://youtube.com/shorts/zk8JJELT6dE" },
        { nombre: "Extensión de tríceps en polea unilateral", reps: ["10", "10", "12"], video: "https://youtube.com/shorts/hip11n3QXzU" },
        { nombre: "Press francés barra recta", reps: ["6", "8", "10"], video: "https://youtube.com/shorts/cp_UtwkkDP4" }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     PESOS YA APUNTADOS (lo que ha mandado Guti)
     Semana 1 = 12 oct · Semana 2 = 19 oct
     "kg x reps", una por serie. Salen ya rellenos en
     PROGRESO; lo que él apunte en el móvil manda encima.
     ══════════════════════════════════════════════════ */
  progreso: {
    pesoCorporal: { 1: "64,8", 2: "64", 3: "64,9", 4: "65,5" },
    D1: {
      "Press máquina pecho plano": { 1: ["20x8", "22,5x8", "22,5x6"], 2: ["20x10", "20x10", "20x10"], 3: ["20x10", "20x10", "22,5x4"], "4": ["22,5x8", "22,5x8", "22,5x8"] },
      "Press máquina pecho inclinado": { 1: ["30x8", "30x9"], 2: ["40x4", "40x5"], 3: ["40x8", "40x8"], "4": ["45x8", "45x6"] },
      "Pec Deck (aperturas)": { 1: ["25x10", "25x"], 2: ["45x8", "45x7"], 3: ["45x8", "45x8"], "4": ["45x10", "45x10"] },
      "Press militar en máquina": { 1: ["20x8", "20x8"], 2: ["20x8", "20x8"], 3: ["20x6", "20x6"], "4": ["25x8", "25x6"] },
      "Elevaciones laterales mancuernas": { 1: ["10x8", "10x8", "10x8"], 2: ["10x10", "10x12", "10x12"], 3: ["15x8", "15x8", "15x8"], "4": ["15x10", "15x10", "15x10"] },
      "Tríceps katana unilateral en polea": { 1: ["15x10", "15x10", "15x10"], 2: ["15x12", "15x12", "15x12"], 3: ["15x10", "15x10", "15x10"], "4": ["15x10", "15x10", "15x10"] },
      "Extensión tríceps polea barra recta": { 1: ["40x10", "40x10"], 2: ["45x7", "45x8"], 3: ["45x10", "45x8"], "4": ["45x10", "45x10"] },
    },
    D2: {
      "Jalón al pecho agarre prono": { 1: ["50x6", "50x6", "50x6"], 2: ["50x5", "50x6", "50x6"], 3: ["55x6", "55x7", "55x7"], "4": ["55x8", "55x8", "55x8"] },
      "Remo máquina neutro unilateral": { 1: ["40x8", "40x8", "40x6"], 2: ["40x8", "40x8", "40x8"], 3: ["40x8", "40x10", "40x10"], "4": ["50x8", "50x7", "50x6"] },
      "Jalón al pecho agarre cerrado": { 1: ["15x8", "15x10"], 2: ["15x8", "15x8"], 3: ["15x10", "15x10"], "4": ["20x8", "20x8"] },
      "Pullover en polea": { 1: ["35x10", "35x10"], 2: ["40x10", "40x11"], 3: ["40x12", "40x12"], "4": ["45x10", "45x8"] },
      "Curl predicador máquina": { 1: ["15x8", "15x8", "15x8"], 2: ["15x8", "15x8", "15x8"], 3: ["15x10", "15x10", "15x10"], "4": ["17,5x8", "17,5x8", "17,5x8"] },
      "Curl martillo": { 1: ["10x10", "10x10"], 2: ["10x10", "10x10"], 3: ["10x10", "10x10"], "4": ["12,5x8", "12,5x7"] },
    },
    D4: {
      "Press militar con mancuernas": { 1: ["15x10", "15x10"], 2: ["20x8", "20x8"], 3: ["20x8", "20x8"], "4": ["20x10", "20x10"] },
      "Elevación lateral unilateral en polea": { 1: ["10x6", "10x7", "10x7"], 2: ["10x8", "10x8", "10x8"], 3: ["10x8", "10x10", "10x10"], "4": ["10x10", "10x10", "10x10"] },
      "Pájaros en máquina (Pec Deck invertido)": { 1: ["25x10", "25x10"], 2: ["30x10", "30x10"], 3: ["35x10", "35x10"], "4": ["40x8", "40x8"] },
      "Press inclinado en multipower (pecho superior)": { 1: ["20x10", "20x10", "20x10"], 2: ["22,5x8", "22,5x8", "22,5x8"], 3: ["22,5x8", "22,5x8", "22,5x8"], "4": ["25x8", "25x6", "25x6"] },
      "Cruces en polea baja (pecho inferior)": { 2: ["25x10", "25x10", "25x10"], 3: ["30x8", "30x8", "30x8"], "4": ["35x8", "35x7", "35x7"] },
    },
    D5: {
      "Curl de bíceps tumbado en banco": { "4": ["20x8", "20x8", "20x8"] },
      "Curl de bíceps en polea arriba unilateral": { "4": ["25x8", "25x8"] },
      "Curl predicador en máquina o banco": { "4": ["17,5x10", "17,5x10"] },
      "Extensión de tríceps en polea unilateral": { "4": ["15x10", "15x10", "15x10"] },
      "Press francés barra recta": { "4": ["15x10", "15x10", "15x10"] }
    }
  },
  /* --- CÓMO SE LLAMA CADA ALIMENTO EN SU PLAN --- */
  /*  Cambia solo cómo se lee, no afecta a las cuentas  */
  textos: {
    aove: "Aceite de oliva virgen extra (en crudo)",
    arroz: "Arroz blanco",
    avena: "Avena molida (a la batidora)",
    crema_arroz: "Crema de arroz Mercadona (a la batidora)",
    boniato: "Boniato, al horno o hervido",
    brocoli: "Brócoli, al vapor",
    calabacin: "Calabacín a la plancha",
    espinaca: "Espinacas salteadas",
    huevo: "Huevo entero",
    isolate: "Proteína Isolate Zumub",
    judia_verde: "Judía verde, hervida",
    leche: "Leche entera",
    miel: "Miel",
    pan_espelta: "Pan de espelta integral, tostado",
    pasta: "Pasta",
    patata: "Patata, cocida o al horno",
    patata_comida: "Patata, cocida o al horno (comida)",
    platano: "Plátano",
    zanahoria: "Zanahoria"
  }
};
