/* ============================================================
   ÁLVARO LEAL AGUILERA — DATOS DEL PLAN

   ESTE es el archivo que tocas tú.
   Cambia un número, guarda, y el planning recalcula solo
   las kcal del día, los macros y la lista de la compra.

   Los pesos van EN CRUDO (carne, arroz, pasta, patata, boniato).
   Los nombres de los alimentos salen de elvyfit-motor.js
   ============================================================ */

var CLIENTE = {

  nombre:   "ÁLVARO",
  apellido: "Leal Aguilera",

  /* ══════════════════════════════════════════════════
     LOS 3 NÚMEROS QUE TOCAS TÚ
     Cambia cualquiera y el planning entero se recalcula:
     gramos de cada día, macros y lista de la compra.
     ══════════════════════════════════════════════════ */

  kcal:  2300,     /* kcal al día */
  peso:  113,      /* kg — de aquí salen la proteína y la grasa */
  pasos: 15000,    /* media diaria de pasos */

  /* proteína 1,6 g/kg · grasa 0,4 g/kg · el resto a carbohidratos */
  ratios: { p: 1.6, g: 0.4 },

  /* --- DATOS PARA CALCULAR SU GASTO --- */
  perfil: {
    edad: 20, altura: 175, sexo: "hombre",
    trabajo: 120,                        /* kcal/día de trabajo físico */
    gymDias: 5,     gymMin: 60,          /* días y minutos de gym */
    deporte: "pádel", deporteDias: 2.5, deporteMin: 90
  },

  /* ══════════════════════════════════════════════════
     DE DÓNDE PARTIMOS — no lo toques.
     Es la foto del día 1. El planning compara estos
     números con los de arriba y escribe solo, en el
     Perfil, qué hemos subido o bajado y cuántos gramos
     se ha movido cada alimento.
     ══════════════════════════════════════════════════ */
  inicio: { kcal: 2300, peso: 113, pasos: 15000, fecha: "10 oct" },

  /* --- NOTAS TUYAS (opcional) --- */
  /*  Lo de arriba ya se escribe solo. Esto es por si     */
  /*  quieres añadir el porqué de un cambio.             */
  historial: [
  ],

  /* --- LAS 4 COMIDAS: ESTO ES LA BASE --- */
  /*  Los gramos de aquí son el punto de partida. El planning   */
  /*  los ajusta solo para cuadrar con las kcal de arriba,      */
  /*  moviendo un poco de cada cosa. No hace falta que los      */
  /*  toques salvo que quieras cambiar QUÉ come, no cuánto.     */
  dias: [

    /* ─────────── LUN ─────────── */
    {
      dia: "LUN",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["arroz", 110],
            ["pollo", 195],
            ["cherry", 120],
            ["pepino", 80],
            ["aove", 9],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["patata", 475],
            ["ternera", 205],
            ["calabacin", 250],
            ["aove", 7]
          ]
        }
      ]
    },

    /* ─────────── MAR ─────────── */
    {
      dia: "MAR",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["pasta", 130],
            ["pollo", 140],
            ["champinon", 120],
            ["tom_triturado", 100],
            ["aove", 8],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["boniato", 370],
            ["pavo", 190],
            ["judia_verde", 250],
            ["aove", 13]
          ]
        }
      ]
    },

    /* ─────────── MIÉ ─────────── */
    {
      dia: "MIÉ",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["arroz", 100],
            ["pavo", 190],
            ["pimiento", 120],
            ["tomate", 100],
            ["aove", 12],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["patata", 450],
            ["ternera", 190],
            ["brocoli", 250],
            ["aove", 8]
          ]
        }
      ]
    },

    /* ─────────── JUE ─────────── */
    {
      dia: "JUE",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["arroz", 105],
            ["pollo", 195],
            ["ensalada", 120],
            ["zanahoria", 80],
            ["aove", 9],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["boniato", 390],
            ["ternera", 220],
            ["calabacin", 150],
            ["tom_triturado", 100],
            ["aove", 7]
          ]
        }
      ]
    },

    /* ─────────── VIE ─────────── */
    {
      dia: "VIE",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["pasta", 130],
            ["pollo", 145],
            ["tom_triturado", 120],
            ["champinon", 100],
            ["aove", 8],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["patata", 435],
            ["pavo", 175],
            ["judia_verde", 250],
            ["aove", 13]
          ]
        }
      ]
    },

    /* ─────────── SÁB ─────────── */
    {
      dia: "SÁB",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["arroz", 105],
            ["ternera", 210],
            ["ensalada", 120],
            ["cherry", 100],
            ["aove", 7],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["patata", 465],
            ["pollo", 190],
            ["pimiento", 120],
            ["calabacin", 100],
            ["aove", 10]
          ]
        }
      ]
    },

    /* ─────────── DOM ─────────── */
    {
      dia: "DOM",
      comidas: [
        {
          titulo: "🌅 C1 — DESAYUNO (antes del gym)",
          clase:  "ct-orange",
          items: [
            ["pan_espelta", 100],
            ["claras", 200],
            ["huevo", 60],
            ["tomate", 150],
            ["leche", 50]
          ]
        },
        {
          titulo: "🍱 C2 — COMIDA (mediodía)",
          clase:  "ct-blue",
          items: [
            ["arroz", 85],
            ["pollo", 205],
            ["tomate", 120],
            ["manzana", 150],
            ["aove", 9],
            ["omega3", 2]
          ]
        },
        {
          titulo: "🥤 C3 — POST-ENTRENO (igual cada día)",
          clase:  "ct-purple",
          items: [
            ["crema_arroz", 50],
            ["isolate", 30],
            ["platano", 120]
          ]
        },
        {
          titulo: "🌙 C4 — CENA",
          clase:  "ct-red",
          items: [
            ["boniato", 370],
            ["pavo", 190],
            ["judia_verde", 250],
            ["aove", 13]
          ]
        }
      ]
    }
  ],

  /* --- LA RUTINA: PUSH / PULL / LEGS en bucle --- */
  /*  reps: [6,8,9] son 3 series a 6, 8 y 9 reps.               */
  /*  Añade o quita un número y en Progreso aparece o           */
  /*  desaparece esa serie sola. Lo ya apuntado no se toca.     */
  rutina: [

    {
      id:     "PUSH",
      emoji:  "🔵",
      color:  "var(--blue)",
      cc:     "#6fd0ff",
      titulo: "PUSH — PECHO · HOMBRO · TRÍCEPS",
      nota:   "🫱 <strong>Hombro:</strong> en los press no bajes por debajo de la línea de la oreja y en las elevaciones no pases de la altura del hombro, con el pulgar ligeramente arriba. Empieza por lo más pesado y acaba con el aislamiento de tríceps.",
      ejercicios: [
        { nombre: "Press máquina pecho plano",
          reps:   [6, 8, 9],
          video:  "https://youtube.com/shorts/m-KFtIghoqw" },
        { nombre: "Press máquina pecho inclinado",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/vdWbsdOtKII" },
        { nombre: "Pec Deck (aperturas)",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/HL88KYqhzQI" },
        { nombre: "Press militar en máquina",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/BqdJeb6jHko" },
        { nombre: "Elevaciones laterales mancuernas",
          reps:   [6, 8, 9],
          video:  "https://youtube.com/shorts/j2tjiP-YoDU" },
        { nombre: "Tríceps katana unilateral en polea",
          reps:   [6, 8, 9],
          video:  "https://youtube.com/shorts/HNH6a33SZB0" },
        { nombre: "Extensión tríceps polea barra recta",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/sU9snn0qTEs" }
      ]
    },

    {
      id:     "PULL",
      emoji:  "🔴",
      color:  "var(--red)",
      cc:     "#ff5a63",
      titulo: "PULL — ESPALDA · BÍCEPS",
      nota:   "🔙 <strong>Espalda:</strong> la fuerza sale del codo, no de la mano. En el remo en T no tires con la zona lumbar: pecho apoyado o espalda bloqueada y el movimiento lo hace la espalda. En el jalón unilateral trabaja un lado cada vez y busca el estiramiento completo arriba.",
      ejercicios: [
        { nombre: "Jalón al pecho agarre prono",
          reps:   [10, 12],
          video:  "https://youtu.be/55X8yLezpwc" },
        { nombre: "Remo en T",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/udi--2PLXAQ" },
        { nombre: "Jalón en máquina unilateral",
          reps:   [10, 12],
          video:  "https://youtube.com/shorts/ha8ql5D3G1o" },
        { nombre: "Pullover en polea",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/dX5DHCZ-7p8" },
        { nombre: "Curl predicador máquina",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/vq9JynSsol8" },
        { nombre: "Curl martillo",
          reps:   [6, 8],
          video:  "https://youtube.com/shorts/NCeVr-vm6Ig" }
      ]
    },

    {
      id:     "LEGS",
      emoji:  "🦵",
      color:  "var(--green)",
      cc:     "#7ed492",
      titulo: "LEGS — PIERNA COMPLETA",
      nota:   "🦵 <strong>Tu rodilla (cruzado operado):</strong> no te frena, pero manda sobre el recorrido. Baja hasta donde el rango vaya limpio, sin forzar el final, y sube el peso solo cuando ese rango no te dé ninguna señal. Empieza por lo más demandante (hack y prensa) y acaba con el aislamiento.",
      ejercicios: [
        { nombre: "Sentadilla Hack en máquina",
          reps:   [6, 8, 10],
          video:  "https://www.youtube.com/watch?v=R8ZyWx1EgoY" },
        { nombre: "Prensa de piernas (leg press)",
          reps:   [6, 8, 10],
          video:  "https://www.youtube.com/watch?v=AJ6N_TcoU6M" },
        { nombre: "Extensión de cuádriceps en máquina",
          reps:   [6, 8],
          video:  "https://www.youtube.com/watch?v=PAPf4i-VJoc" },
        { nombre: "Isquiotibiales sentado en máquina",
          reps:   [6, 8, 10],
          video:  "https://www.youtube.com/watch?v=CBCPBnMzsMI" },
        { nombre: "Abductor de glúteo en máquina",
          reps:   [6, 8],
          video:  "https://www.youtube.com/watch?v=0wZ_dRSbnsA" },
        { nombre: "Gemelo en máquina",
          reps:   [6, 8, 9, 9, 9, 9],
          video:  "https://www.youtube.com/watch?v=6KKDFgOKZY0" }
      ]
    }
  ],

  /* --- TEXTO QUE VE ÁLVARO EN CADA ALIMENTO --- */
  /*  Cambia solo cómo se lee, no afecta a las cuentas  */
  textos: {
    aove: "AOVE en crudo (al final, nunca en la sartén)",
    arroz: "Arroz blanco",
    boniato: "Boniato, luego al horno",
    brocoli: "Brócoli en ramilletes, luego al vapor",
    calabacin: "Calabacín en rodajas, luego a la plancha",
    champinon: "Champiñón laminado, luego salteado",
    cherry: "Tomate cherry partido por la mitad",
    claras: "Claras de huevo pasteurizadas (revueltas, sin aceite)",
    crema_arroz: "Harina de arroz Hacendado (la crema de arroz), con agua",
    ensalada: "Ensalada variada (canónigos, rúcula, brotes)",
    huevo: "Huevo entero (1 ud, M)",
    isolate: "Proteína aislada",
    judia_verde: "Judía verde redonda, luego hervida",
    leche: "Leche entera, solo para el café",
    manzana: "Manzana golden de postre",
    omega3: "Omega 3 — 2 cápsulas, con la comida",
    pan_espelta: "Pan de espelta integral, tostado",
    pasta: "Pasta integral",
    patata: "Patata, luego cocida o al horno",
    pavo: "Solomillo de pavo, luego a la plancha",
    pepino: "Pepino en rodajas finas",
    pimiento: "Pimiento rojo y verde en tiras, luego al horno",
    platano: "Plátano maduro en rodajas",
    pollo: "Pechuga de pollo fileteada, luego a la plancha",
    ternera: "Filete de ternera blanca, luego a la plancha",
    tom_triturado: "Tomate triturado natural",
    tomate: "Tomate pera rallado o en rodajas",
    zanahoria: "Zanahoria rallada"
  }
};
