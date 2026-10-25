/* ============================================================
   AMARO — DATOS DEL PLAN

   ESTE es el archivo que tocas tú (o te lo cambio yo desde el chat).
   Cambia un número, guarda, y el planning recalcula solo
   los gramos de cada día, los macros y la lista de la compra.
   Pesos EN CRUDO (arroz, pasta, patata, carne, pescado).
   ============================================================ */

/* Alimentos que el motor común no tiene todavía (se añaden aquí, sin tocar el motor).
   Los valores marcados ok:false son de referencia: se comprueban con la etiqueta. */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.arroz_integral  = AL.arroz_integral  || { n:"Arroz integral",               p:7.5,  c:76.0, g:2.9,  crudo:true,  ok:false, cat:"carbo" };
  AL.pasta_blanca    = AL.pasta_blanca    || { n:"Pasta blanca",                  p:12.5, c:71.0, g:1.5,  crudo:true,  ok:false, cat:"carbo" };
  AL.tortitas_jamon  = AL.tortitas_jamon  || { n:"Tortitas sabor jamón",          p:8.0,  c:81.0, g:3.0,  crudo:false, ok:false, cat:"carbo" };
  AL.alcachofa       = AL.alcachofa       || { n:"Alcachofa",                     p:3.3,  c:11.0, g:0.2,  crudo:true,  ok:false, cat:"verdura" };
  AL.almendras       = AL.almendras       || { n:"Almendras",                     p:21.0, c:22.0, g:49.0, crudo:false, ok:false, cat:"grasa" };
  AL.crema_cacahuete = AL.crema_cacahuete || { n:"Crema de cacahuete",            p:25.0, c:20.0, g:50.0, crudo:false, ok:false, cat:"grasa" };
  AL.yogur_proteina  = AL.yogur_proteina  || { n:"Yogur proteico de chocolate",   p:9.0,  c:6.0,  g:2.0,  crudo:false, ok:false, cat:"prote" };
  AL.pavo_loncha     = AL.pavo_loncha     || { n:"Loncha de pavo",               p:18.0, c:1.5,  g:1.5,  crudo:false, ok:false, cat:"prote" };
}

var CLIENTE = {
  "nombre": "AMARO",
  "apellido": "",
  "slug": "amaro",
  "clave": "amaro_plan_v12",
  "claveAntigua": "amaro_tracking_v1",
  "kcal": 3150,
  "peso": 68.4,
  "pasos": 8000,
  "ratios": {
    "p": 3.19,
    "g": 1.29
  },
  "perfil": {
    "edad": 22,
    "altura": 172,
    "sexo": "hombre",
    "trabajo": 60,
    "gymDias": 5,
    "gymMin": 60,
    "deporte": "Calistenia",
    "deporteDias": 0,
    "deporteMin": 0
  },
  "entreno": {
    "detalle": "🔥 <b>Todas las series al fallo (RIR 0)</b> · 🧠 <b>técnica perfecta</b> y una serie de aproximación antes de cada ejercicio",
    "tip": "🎬 Toca «Ver vídeo» para ver cómo se hace. Técnica perfecta siempre."
  },
  "extraCompra": [
    [
      "Creatina monohidrato",
      "6 g/día (42 g)"
    ]
  ],
  "ajuste": { "desdeKcal": 4110 },
  "historial": [
    {
      "fecha": "19 oct",
      "texto": "Plan de volumen: 3.150 kcal al día, con 218 g de proteína y 88 g de grasa. Bajamos 960 kcal sobre todo en carbohidratos (de 612 g a 372 g). Proteína y grasa se mantienen en 218 g y 88 g, y alguna fuente de proteína sube unos gramos para cuadrar. Nueva rutina de 5 días con fondos, búlgara y bayesian, y abdominales en los días 1, 3 y 5."
    }
  ],
  "dias": [
    {
      "dia": "LUN",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "arroz_integral",
              250
            ],
            [
              "pollo",
              140
            ],
            [
              "alcachofa",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "salmon",
              140
            ],
            [
              "ensalada",
              150
            ],
            [
              "patata",
              600
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "MAR",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "arroz",
              250
            ],
            [
              "ternera",
              140
            ],
            [
              "judia_verde",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "merluza",
              140
            ],
            [
              "calabacin",
              150
            ],
            [
              "patata",
              600
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "MIÉ",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "arroz_integral",
              250
            ],
            [
              "pavo",
              140
            ],
            [
              "alcachofa",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "pollo",
              140
            ],
            [
              "judia_verde",
              150
            ],
            [
              "patata",
              600
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "JUE",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "arroz",
              250
            ],
            [
              "pollo",
              140
            ],
            [
              "calabacin",
              75
            ],
            [
              "zanahoria",
              75
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "merluza",
              140
            ],
            [
              "patata",
              600
            ],
            [
              "ensalada",
              150
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "VIE",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "arroz_integral",
              250
            ],
            [
              "ternera",
              140
            ],
            [
              "alcachofa",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "salmon",
              140
            ],
            [
              "judia_verde",
              150
            ],
            [
              "patata",
              600
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "SÁB",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "pasta_blanca",
              250
            ],
            [
              "pollo",
              140
            ],
            [
              "calabacin",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "pavo",
              140
            ],
            [
              "ensalada",
              200
            ],
            [
              "patata",
              600
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "DOM",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              100
            ],
            [
              "pan_espelta",
              220
            ],
            [
              "pavo_loncha",
              30
            ],
            [
              "aguacate",
              75
            ],
            [
              "arandanos",
              40
            ]
          ]
        },
        {
          "titulo": "🥣 C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "almendras",
              15
            ],
            [
              "manzana",
              150
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              10
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA",
          "clase": "ct-blue",
          "items": [
            [
              "arroz_integral",
              250
            ],
            [
              "pavo",
              140
            ],
            [
              "calabacin",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — PRE/POST ENTRENO",
          "clase": "ct-purple",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "platano",
              240
            ],
            [
              "tortitas_jamon",
              70
            ],
            [
              "crema_cacahuete",
              25
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-green",
          "items": [
            [
              "merluza",
              140
            ],
            [
              "judia_verde",
              150
            ],
            [
              "patata",
              600
            ],
            [
              "yogur_proteina",
              150
            ]
          ]
        }
      ]
    }
  ],
  "rutina": [
    {
      "id": "D1",
      "emoji": "🔵",
      "color": "var(--blue)",
      "cc": "var(--blue)",
      "chip": "D1 · Pecho",
      "titulo": "DÍA 1 — PECHO · HOMBRO · TRÍCEPS",
      "ejercicios": [
        {
          "nombre": "Press máquina pecho plano",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/m-KFtIghoqw"
        },
        {
          "nombre": "Press máquina pecho inclinado",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/vdWbsdOtKII"
        },
        {
          "nombre": "Pec Deck (aperturas)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/HL88KYqhzQI"
        },
        {
          "nombre": "Press militar máquina",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/BqdJeb6jHko"
        },
        {
          "nombre": "Elevaciones laterales mancuernas",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/j2tjiP-YoDU"
        },
        {
          "nombre": "Tríceps katana unilateral",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/HNH6a33SZB0"
        },
        {
          "nombre": "Fondos para tríceps",
          "reps": [
            "6",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=HRTD0ggY3MI"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=DLU0RKjZV2g"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=TXdViheU-b0"
        }
      ]
    },
    {
      "id": "D2",
      "emoji": "🔴",
      "color": "var(--red)",
      "cc": "var(--red)",
      "chip": "D2 · Espalda",
      "titulo": "DÍA 2 — ESPALDA · BÍCEPS",
      "ejercicios": [
        {
          "nombre": "Jalón al pecho agarre prono",
          "reps": [
            "6",
            "8",
            "8"
          ],
          "video": "https://youtu.be/55X8yLezpwc"
        },
        {
          "nombre": "Remo máquina neutro unilateral",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/sYl2uUE7kt0"
        },
        {
          "nombre": "Jalón al pecho agarre cerrado",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/bBM95Ir4zCs"
        },
        {
          "nombre": "Pullover polea",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/dX5DHCZ-7p8"
        },
        {
          "nombre": "Curl predicador máquina",
          "reps": [
            "6",
            "8",
            "8"
          ],
          "video": "https://youtube.com/shorts/vq9JynSsol8"
        },
        {
          "nombre": "Curl martillo",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/NCeVr-vm6Ig"
        }
      ]
    },
    {
      "id": "D3",
      "emoji": "🦵",
      "color": "var(--green)",
      "cc": "var(--green)",
      "chip": "D3 · Pierna",
      "titulo": "DÍA 3 — PIERNA",
      "ejercicios": [
        {
          "nombre": "Sentadilla Hack en máquina",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/watch?v=R8ZyWx1EgoY"
        },
        {
          "nombre": "Prensa inclinada",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/watch?v=AJ6N_TcoU6M"
        },
        {
          "nombre": "Sentadilla búlgara (por pierna)",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/watch?v=7bV1tIUC2Es"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/watch?v=PAPf4i-VJoc"
        },
        {
          "nombre": "Curl femoral tumbado (individual)",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=9xbBr5Ytl8c"
        },
        {
          "nombre": "Gemelo en prensa",
          "reps": [
            "10",
            "10",
            "12",
            "12"
          ],
          "video": "https://www.youtube.com/watch?v=zmNBx-Ilhdc"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=DLU0RKjZV2g"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=TXdViheU-b0"
        }
      ]
    },
    {
      "id": "D4",
      "emoji": "🔵",
      "color": "var(--cyan)",
      "cc": "var(--cyan)",
      "chip": "D4 · Pecho",
      "titulo": "DÍA 4 — PECHO · HOMBRO",
      "ejercicios": [
        {
          "nombre": "Press militar con mancuernas",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/PWtkHROaH3Y"
        },
        {
          "nombre": "Elevación lateral unilateral en polea",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/3uljNfhx1EI"
        },
        {
          "nombre": "Pájaros en máquina (Pec Deck invertido)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/LLgkANwIKzk"
        },
        {
          "nombre": "Press inclinado en multipower (pecho superior)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/6Ijq_ukPE50"
        },
        {
          "nombre": "Cruces en polea baja (pecho inferior)",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/gHNpRoKeAdA"
        }
      ]
    },
    {
      "id": "D5",
      "emoji": "🔴",
      "color": "var(--orange)",
      "cc": "var(--orange)",
      "chip": "D5 · Espalda",
      "titulo": "DÍA 5 — ESPALDA · BÍCEPS · TRÍCEPS",
      "ejercicios": [
        {
          "nombre": "Remo en máquina convergente (Hammer Strength)",
          "reps": [
            "8",
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/yFo-EFYzf1s"
        },
        {
          "nombre": "Curl de bíceps tumbado en banco",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/2bzTfdB3j4M"
        },
        {
          "nombre": "Curl de bíceps BAYESIAN unilateral (cada brazo)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=7e04YRwlZ9U"
        },
        {
          "nombre": "Curl predicador en máquina o banco",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/vq9JynSsol8"
        },
        {
          "nombre": "Extensión de tríceps en polea unilateral",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/hip11n3QXzU"
        },
        {
          "nombre": "Press francés barra recta",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://youtu.be/hBz7jSJM3Yw"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=DLU0RKjZV2g"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=TXdViheU-b0"
        }
      ]
    }
  ],
  "progreso": {
    "D1": {
      "Press máquina pecho plano": {
        "1": [
          "50x7,5",
          "45x8"
        ],
        "2": [
          "50x7,5",
          "45x8"
        ],
        "3": [
          "50x7",
          "45x8"
        ],
        "4": [
          "50x7",
          "45x8"
        ],
        "5": [
          "50x6",
          "45x7"
        ]
      },
      "Press máquina pecho inclinado": {
        "1": [
          "65x7,5",
          "57,5x9,5"
        ],
        "2": [
          "65x7,5",
          "57,5x9,5"
        ],
        "3": [
          "62,5x8",
          "57,5x9,5"
        ],
        "4": [
          "62,5x8,5",
          "57,5x9,5"
        ],
        "5": [
          "62,5x7,5",
          "57,5x8,5"
        ]
      },
      "Pec Deck (aperturas)": {
        "1": [
          "50x7",
          "40x9"
        ],
        "2": [
          "50x8",
          "40x10"
        ],
        "3": [
          "50x8",
          "40x11"
        ],
        "4": [
          "50x10",
          "40x13"
        ],
        "5": [
          "50x8",
          "40x10"
        ]
      },
      "Press militar máquina": {
        "1": [
          "50x8",
          "47,5x7"
        ],
        "2": [
          "50x6",
          "47,5x7"
        ],
        "3": [
          "50x7",
          "47,5x7"
        ],
        "4": [
          "50x7,5",
          "47,5x8"
        ],
        "5": [
          "50x7",
          "47,5x6,5"
        ]
      },
      "Elevaciones laterales mancuernas": {
        "1": [
          "10x8",
          "7,5x10,5",
          "7,5x10"
        ],
        "2": [
          "10x8",
          "7,5x10,5",
          "7,5x9,5"
        ],
        "3": [
          "10x8",
          "7,5x11",
          "7,5x9"
        ],
        "4": [
          "10x9",
          "7,5x12",
          "7,5x9"
        ],
        "5": [
          "10x6",
          "7,5x10",
          "7,5x10"
        ]
      },
      "Tríceps katana unilateral": {
        "1": [
          "14,85x9",
          "13,6x9",
          "13,6x8"
        ],
        "2": [
          "14,85x9,5",
          "13,6x9",
          "13,6x9"
        ],
        "3": [
          "14,85x9",
          "13,6x9",
          "13,6x9"
        ],
        "4": [
          "14,85x10",
          "13,6x10",
          "13,6x9"
        ],
        "5": [
          "14,85x8",
          "13,6x10",
          "13,6x9"
        ]
      },
      "Fondos para tríceps": {
        "1": [
          "25,2x7",
          "22,7x9",
          "22,7x8"
        ],
        "2": [
          "25,2x7",
          "22,7x10",
          "22,7x9"
        ],
        "3": [
          "25,2x8",
          "22,7x10",
          "22,7x9"
        ],
        "4": [
          "27,2x6",
          "23,95x8",
          "22,7x9"
        ],
        "5": [
          "27,2x6",
          "23,95x9",
          "22,7x9"
        ]
      }
    },
    "D2": {
      "Jalón al pecho agarre prono": {
        "1": [
          "81,7x6",
          "76,2x9"
        ],
        "2": [
          "81,7x6",
          "76,2x8"
        ],
        "3": [
          "81,7x6,5",
          "75,1x7"
        ],
        "4": [
          "81,7x6",
          "75,1x7"
        ],
        "5": [
          "81,7x4",
          "72,6x8"
        ]
      },
      "Remo máquina neutro unilateral": {
        "1": [
          "40x9",
          "35x11"
        ],
        "2": [
          "40x8",
          "35x10"
        ],
        "3": [
          "42,5x7",
          "37,5x7"
        ],
        "4": [
          "42,5x8",
          "37,5x9"
        ],
        "5": [
          "40x7",
          "37,5x8"
        ]
      },
      "Jalón al pecho agarre cerrado": {
        "1": [
          "72,6x7,5",
          "63,6x9"
        ],
        "2": [
          "72,6x7,5",
          "63,6x10"
        ],
        "3": [
          "72,6x7",
          "64,85x6,5"
        ],
        "4": [
          "72,6x8,5",
          "64,85x7"
        ],
        "5": [
          "72,6x6,5",
          "63,6x7"
        ]
      },
      "Pullover polea": {
        "1": [
          "49,9x9",
          "45,4x9",
          "40,8x10"
        ],
        "2": [
          "49,9x9",
          "45,4x9",
          "40,8x10"
        ],
        "3": [
          "54,4x5",
          "49,9x6,5"
        ],
        "4": [
          "49,9x9",
          "45,4x8",
          "40,8x9"
        ],
        "5": [
          "49,9x7,5",
          "45,4x7,5",
          "40,8x9"
        ]
      },
      "Curl predicador máquina": {
        "1": [
          "40x6",
          "30x8",
          "25x10"
        ],
        "2": [
          "35x10",
          "25x12",
          "25x11"
        ],
        "3": [
          "40x9",
          "40x6,5"
        ],
        "4": [
          "45x5",
          "30x8",
          "25x10"
        ],
        "5": [
          "35x9",
          "30x9"
        ]
      },
      "Curl martillo": {
        "1": [
          "15x8",
          "12,5x11"
        ],
        "2": [
          "15x8",
          "12,5x10"
        ],
        "3": [
          "15x7",
          "12,5x10"
        ],
        "4": [
          "15x9",
          "12,5x11"
        ],
        "5": [
          "15x5,5",
          "12,5x9"
        ]
      }
    },
    "D3": {
      "Prensa inclinada": {
        "1": [
          "150x7",
          "130x10",
          "120x11"
        ],
        "2": [
          "150x7",
          "135x8"
        ],
        "3": [
          "150x8",
          "135x10",
          "120x11"
        ],
        "4": [
          "150x7",
          "135x8",
          "120x10"
        ]
      },
      "Extensión de cuádriceps en máquina": {
        "1": [
          "85x12,5",
          "85x10",
          "75x11"
        ],
        "2": [
          "90x7",
          "85x7"
        ],
        "3": [
          "90x9",
          "85x9",
          "80x10"
        ],
        "4": [
          "90x8",
          "85x9",
          "80x9"
        ]
      },
      "Gemelo en prensa": {
        "1": [
          "50x14",
          "50x11",
          "50x10"
        ],
        "2": [
          "60x9",
          "60x8"
        ],
        "3": [
          "60x10",
          "60x9",
          "50x11",
          "50x9"
        ],
        "4": [
          "60x9",
          "60x9",
          "50x10"
        ]
      }
    },
    "D4": {
      "Press militar con mancuernas": {
        "1": [
          "25x4,5",
          "20x7"
        ],
        "2": [
          "22,5x7",
          "20x7,5"
        ],
        "3": [
          "22,5x8",
          "20x9"
        ],
        "4": [
          "22,5x8",
          "20x8"
        ]
      },
      "Elevación lateral unilateral en polea": {
        "1": [
          "13,6x7",
          "10,35x9",
          "9,1x13"
        ],
        "2": [
          "13,6x5",
          "10,35x7"
        ],
        "3": [
          "13,6x8",
          "10,35x9",
          "9,1x12"
        ],
        "4": [
          "13,6x6",
          "10,35x9",
          "9,1x12"
        ]
      },
      "Pájaros en máquina (Pec Deck invertido)": {
        "1": [
          "50x9",
          "45x10"
        ],
        "2": [
          "50x6",
          "45x9"
        ],
        "3": [
          "50x8",
          "45x11"
        ],
        "4": [
          "50x8",
          "45x10"
        ]
      },
      "Press inclinado en multipower (pecho superior)": {
        "1": [
          "42,5x8",
          "37,5x8"
        ],
        "2": [
          "42,5x6",
          "37,5x7"
        ],
        "3": [
          "42,5x6,5",
          "37,5x8"
        ],
        "4": [
          "42,5x7",
          "37,5x8"
        ]
      },
      "Cruces en polea baja (pecho inferior)": {
        "1": [
          "27,2x9",
          "25,2x10,5",
          "22,7x10"
        ],
        "2": [
          "27,2x7",
          "22,7x8",
          "20,6x10"
        ],
        "3": [
          "27,2x7,5",
          "22,7x10"
        ],
        "4": [
          "27,2x7",
          "22,7x10",
          "18,1x11"
        ]
      }
    },
    "D5": {
      "Remo en máquina convergente (Hammer Strength)": {
        "1": [
          "73,95x10",
          "68,6x11",
          "63,6x13"
        ],
        "2": [
          "81,7x5",
          "72,6x6"
        ],
        "3": [
          "81,7x6",
          "72,6x8",
          "63,6x10"
        ],
        "4": [
          "81,7x6",
          "72,6x7",
          "63,6x8"
        ]
      },
      "Curl de bíceps tumbado en banco": {
        "1": [
          "15x8",
          "12,5x9,5"
        ],
        "2": [
          "15x6",
          "12,5x6"
        ],
        "3": [
          "15x7",
          "12,5x7"
        ],
        "4": [
          "15x6",
          "12,5x7"
        ]
      },
      "Curl de bíceps BAYESIAN unilateral (cada brazo)": {
        "1": [
          "22,7x9",
          "19,35x12"
        ],
        "2": [
          "19,35x8",
          "18,1x10"
        ],
        "3": [
          "19,35x8",
          "18,1x11"
        ],
        "4": [
          "19,35x7",
          "18,1x10"
        ]
      },
      "Curl predicador en máquina o banco": {
        "1": [
          "40x7,5",
          "30x11"
        ],
        "2": [
          "40x6",
          "30x8"
        ],
        "3": [
          "40x8",
          "30x10"
        ],
        "4": [
          "40x8",
          "30x9"
        ]
      },
      "Extensión de tríceps en polea unilateral": {
        "1": [
          "20,6x10",
          "19,35x10",
          "18,1x12"
        ],
        "2": [
          "22,7x6",
          "18,1x10"
        ],
        "3": [
          "20,6x7",
          "18,1x11"
        ],
        "4": [
          "20,6x7",
          "18,1x10",
          "18,1x10"
        ]
      },
      "Press francés barra recta": {
        "1": [
          "20x8",
          "17,5x9",
          "15x11"
        ],
        "2": [
          "20x6",
          "15x9"
        ],
        "3": [
          "20x7",
          "15x7",
          "10x10"
        ]
      }
    },
    "pesoCorporal": {
      "5": "68.3"
    }
  },
  "textos": {
    "huevo": "Huevo entero",
    "claras": "Claras pasteurizadas (revueltas, sin aceite)",
    "pan_espelta": "Pan de espelta integral, tostado",
    "pavo_loncha": "Loncha de pavo",
    "aguacate": "Aguacate",
    "arandanos": "Arándanos",
    "almendras": "Almendras",
    "manzana": "Manzana golden (1 ud)",
    "tortitas_jamon": "Tortitas sabor jamón (2 paquetes)",
    "crema_cacahuete": "Crema de cacahuete",
    "arroz_integral": "Arroz integral",
    "arroz": "Arroz blanco",
    "pasta_blanca": "Pasta (macarrones / espaguetis)",
    "pollo": "Pechuga de pollo fileteada",
    "ternera": "Ternera magra",
    "pavo": "Solomillo de pavo",
    "merluza": "Merluza",
    "salmon": "Salmón",
    "alcachofa": "Alcachofas a la plancha",
    "judia_verde": "Judías verdes",
    "calabacin": "Calabacín a la plancha",
    "zanahoria": "Zanahoria",
    "ensalada": "Ensalada (hojas, zanahoria, tomate, cebolla)",
    "aove": "Aceite de oliva virgen extra",
    "isolate": "Proteína whey isolate",
    "platano": "Plátano (2 ud)",
    "patata": "Patata",
    "yogur_proteina": "Yogur proteico de chocolate (1 ud)"
  }
};
