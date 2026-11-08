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
  "kcal": 2950,
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
  "ajuste": { "desdeKcal": 3150 },
  "historial": [
    {
      "fecha": "8 nov",
      "texto": "Recomposición corporal: 2.950 kcal al día (P 105 · C 499 · G 61, lo que pone su planning). Bajamos 200 kcal quitando 260 g de patata en la cena: de 600 a 340 g todos los días. Dos semanas en 68,8 kg."
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
          "video": "https://youtube.com/shorts/A7hGOJQTpq0"
        },
        {
          "nombre": "Press máquina pecho inclinado",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/MlLOzsUSZZg"
        },
        {
          "nombre": "Pec Deck (aperturas)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/rfVptEGJOsU"
        },
        {
          "nombre": "Press militar máquina",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/1UzJs7-v4Hk"
        },
        {
          "nombre": "Elevaciones laterales mancuernas",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/QgpNsybiDoE"
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
          "video": "https://youtube.com/shorts/N1Yd3QvShQE"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/XDk_-I6OrcI"
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
          "video": "https://youtube.com/shorts/ON-RH5nYzcU"
        },
        {
          "nombre": "Remo máquina neutro unilateral",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/RlN63rVkCGk"
        },
        {
          "nombre": "Jalón al pecho agarre cerrado",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/mtyPkNukKKE"
        },
        {
          "nombre": "Pullover polea",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/0CMRVXlo80c"
        },
        {
          "nombre": "Curl predicador máquina",
          "reps": [
            "6",
            "8",
            "8"
          ],
          "video": "https://youtube.com/shorts/zk8JJELT6dE"
        },
        {
          "nombre": "Curl martillo",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/pYziGLf2EsA"
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
          "video": "https://youtube.com/shorts/Gmq0SBcaZz4"
        },
        {
          "nombre": "Prensa inclinada",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/B2T2F2pa-co"
        },
        {
          "nombre": "Sentadilla búlgara (por pierna)",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/I8Qlppfsf6A"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/lUaVtil2FHc"
        },
        {
          "nombre": "Curl femoral tumbado (individual)",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/wDaV9_SUPJM"
        },
        {
          "nombre": "Gemelo en prensa",
          "reps": [
            "10",
            "10",
            "12",
            "12"
          ],
          "video": "https://youtube.com/shorts/oZujMzKYUDw"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/XDk_-I6OrcI"
        }
      ]
    },
    {
      "id": "D3V",
      "emoji": "🦵",
      "color": "var(--green)",
      "cc": "var(--green)",
      "chip": "D3 variante · Pierna",
      "titulo": "DÍA 3 VARIANTE — PIERNA",
      "ejercicios": [
        {
          "nombre": "Prensa inclinada",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/B2T2F2pa-co"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/lUaVtil2FHc"
        },
        {
          "nombre": "Curl femoral tumbado",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/wDaV9_SUPJM"
        },
        {
          "nombre": "Hip thrust en máquina o con barra ligera",
          "reps": [
            "10",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/lhF0xo5VCa4"
        },
        {
          "nombre": "Curl femoral sentado",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/p1jzT2MUGvk"
        },
        {
          "nombre": "Gemelo en prensa",
          "reps": [
            "10",
            "10",
            "12",
            "12"
          ],
          "video": "https://youtube.com/shorts/oZujMzKYUDw"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/XDk_-I6OrcI"
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
          "video": "https://youtube.com/shorts/cNBXWUd9e_8"
        },
        {
          "nombre": "Elevación lateral unilateral en polea",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/YnKUoDiszTY"
        },
        {
          "nombre": "Pájaros en máquina (Pec Deck invertido)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/Sws1EXvDTYU"
        },
        {
          "nombre": "Press inclinado en multipower (pecho superior)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/EXTwFezH_tQ"
        },
        {
          "nombre": "Cruces en polea baja (pecho inferior)",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/JZ6oKKEY2NY"
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
          "video": "https://youtube.com/shorts/gGsRlXt2E00"
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
          "video": "https://youtube.com/shorts/BGt07gzfQlA"
        },
        {
          "nombre": "Curl predicador en máquina o banco",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/zk8JJELT6dE"
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
          "video": "https://youtube.com/shorts/cp_UtwkkDP4"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra (por lado)",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://youtube.com/shorts/XDk_-I6OrcI"
        }
      ]
    }
  ],
  "ficha": {
    "objetivo": "Recomposición corporal",
    "pasos": "9–10k",
    "agua": "3,5",
    "fase": "Recomposición · desde el 25/10",
    "meta": "recomp",
    "resumen": "22 años, 1,72 m. Entrena 5 días con todas las series al fallo (RIR 0). La pierna la hace con el Día 3 variante por molestias lumbares. Prepara una Spartan de 5 km en septiembre.",
    "macros": {
      "kcal": 2950,
      "p": 105,
      "c": 499,
      "g": 61,
      "nota": "Son los números que pone su planning (contados al alza). Sumando los gramos del plato sale bastante más: ~3.600 kcal y ~195 g de proteína si se lo come todo."
    },
    "gasto": false,
    "gastoNota": "Sin gasto calculado: la estimación del motor (~2.250 kcal) se queda muy corta para lo que come con el peso estable.",
    "suplementos": [
      "Creatina 6 g/día",
      "Whey isolate 30 g (C4)"
    ],
    "habitos": [
      [
        "Pasos",
        "9.000–10.000 al día, también el finde"
      ],
      [
        "Sueño",
        "objetivo 8 h · 12–18/10: 8 h 47 de media · 19–25/10: 7 h 31 (jueves 3 h 30)"
      ],
      [
        "Agua",
        "3,5 L mínimo"
      ],
      [
        "Báscula",
        "domingo en ayunas + cintura a la altura del ombligo"
      ],
      [
        "Fotos",
        "cada 2 semanas (frente, lado y espalda, misma luz)"
      ],
      [
        "Estiramientos",
        "12 min al día"
      ]
    ],
    "comidas": [
      {
        "titulo": "🍳 C1 — Desayuno",
        "kcal": 650,
        "items": [
          [
            "Huevos",
            "2 ud"
          ],
          [
            "Claras",
            "100 ml"
          ],
          [
            "Pan de espelta integral",
            "4 rebanadas"
          ],
          [
            "Loncha de pavo",
            "1 ud"
          ],
          [
            "Aceite de oliva (en las tostadas)",
            "10 ml"
          ],
          [
            "Arándanos",
            "40 g"
          ]
        ]
      },
      {
        "titulo": "🥣 C2 — Media mañana",
        "kcal": 555,
        "items": [
          [
            "Almendras",
            "15 g"
          ],
          [
            "Arándanos",
            "150 g"
          ],
          [
            "Tortitas sabor jamón (2 paquetes)",
            "70 g"
          ],
          [
            "Crema de cacahuete",
            "10 g"
          ]
        ]
      },
      {
        "titulo": "🍽️ C3 — Comida",
        "kcal": 870,
        "items": [
          [
            "Arroz (integral o blanco) o pasta, en crudo",
            "250 g"
          ],
          [
            "Carne o pescado",
            "140 g"
          ],
          [
            "Verdura",
            "150 g"
          ],
          [
            "Aceite de oliva",
            "5 ml"
          ]
        ],
        "nota": "La proteína y la verdura cambian cada día."
      },
      {
        "titulo": "💪 C4 — Pre/post entreno",
        "kcal": 455,
        "items": [
          [
            "Whey isolate",
            "30 g"
          ],
          [
            "Plátano",
            "2 ud"
          ],
          [
            "Tortitas sabor jamón (2 paquetes)",
            "70 g"
          ],
          [
            "Crema de cacahuete",
            "25 g"
          ],
          [
            "Creatina",
            "6 g"
          ]
        ]
      },
      {
        "titulo": "🌙 C5 — Cena",
        "kcal": 365,
        "items": [
          [
            "Carne o pescado",
            "140 g"
          ],
          [
            "Ensalada o verdura",
            "150 g"
          ],
          [
            "Patata",
            "340 g"
          ],
          [
            "Yogur de proteína",
            "1 ud"
          ]
        ],
        "nota": "La proteína cambia cada día (salmón, merluza, pollo…)."
      }
    ],
    "comidasNota": "Su planning es estático: estas son las comidas que pone el HTML, no las calcula el motor.",
    "rutinaPausada": [
      "D3"
    ],
    "objetivos": [
      "Recomposición: peso estable y cintura que baja",
      "Volver a superar en el Día 1 lo que hacía antes de la descarga",
      "Jalón prono a 77 kg para hacer 6–8 repes limpias",
      "Spartan de 5 km en septiembre"
    ],
    "lesiones": [
      "Molestias lumbares: hace el Día 3 variante (sin hack ni búlgara). El Día 3 de siempre queda en pausa por si vuelve.",
      "Poca flexibilidad en la extensión de cuádriceps: estiramientos 12 min cada día."
    ],
    "notas": [
      "Todas las series al fallo (RIR 0) con una serie de aproximación antes.",
      "Semana 9 (19–25/10): descarga.",
      "Semana 10: finde de Halloween con alcohol y el domingo sin pasos; se pesó la mañana siguiente (68,8 kg). No se tocan kcal.",
      "Dice que ahora duerme mejor; falta la captura de sueño de esta semana para comprobarlo.",
      "Semana 11: aún sin medidas de cintura ni captura de sueño; el peso se queda en 68,8."
    ],
    "hitos": [
      {
        "fecha": "20/10",
        "texto": "Vuelve su planning de 3.150 kcal (P 110 · C 543 · G 61)."
      },
      {
        "fecha": "22/10",
        "texto": "Activada la nube: lo que apunta llega a Coach."
      },
      {
        "fecha": "25/10",
        "texto": "Pasa a recomposición corporal. Fuera aguacate y manzana; aceite 10 ml en las tostadas y arándanos 150 g. Pasos 9–10k fijos. Añadido el Día 3 variante. Peso 68,3 kg."
      },
      {
        "fecha": "2/11",
        "texto": "Historial de su Excel en Coach (semanas 1–9). El planning sigue en la semana 10."
      },
      {
        "fecha": "3/11",
        "texto": "Semana 10: 68,8 kg tras Halloween. Pierna, D4 y D5 suben claro; D1 por debajo de antes de la descarga. Kcal igual, foco en subir cargas con técnica perfecta."
      },
      {
        "fecha": "8/11",
        "texto": "Semana 11: 68,8 kg (igual que la 10, ya sin Halloween). D1 vuelve a lo de antes de la descarga, D4 y pierna siguen subiendo (prensa 155×10). D2 sale idéntico a la semana 10 y el Hammer lleva 3 semanas igual."
      },
      {
        "fecha": "8/11",
        "texto": "−200 kcal: 3.150 → 2.950. Patata de la cena 600 → 340 g todos los días. El resto, igual."
      }
    ]
  },
  "progreso": {
    "D1": {
      "Press máquina pecho plano": {
        "5": [
          "50x7,5",
          "45x8"
        ],
        "6": [
          "50x7,5",
          "45x8"
        ],
        "7": [
          "50x7",
          "45x8"
        ],
        "8": [
          "50x7",
          "45x8"
        ],
        "9": [
          "50x6",
          "45x7"
        ],
        "10": [
          "50x6",
          "45x7"
        ],
        "11": [
          "50x7",
          "45x8"
        ]
      },
      "Press máquina pecho inclinado": {
        "5": [
          "65x7,5",
          "57,5x9,5"
        ],
        "6": [
          "65x7,5",
          "57,5x9,5"
        ],
        "7": [
          "62,5x8",
          "57,5x9,5"
        ],
        "8": [
          "62,5x8,5",
          "57,5x9,5"
        ],
        "9": [
          "62,5x7,5",
          "57,5x8,5"
        ],
        "10": [
          "62,5x8",
          "57,5x8"
        ],
        "11": [
          "62,5x8",
          "57,5x9"
        ]
      },
      "Pec Deck (aperturas)": {
        "5": [
          "50x7",
          "40x9"
        ],
        "6": [
          "50x8",
          "40x10"
        ],
        "7": [
          "50x8",
          "40x11"
        ],
        "8": [
          "50x10",
          "40x13"
        ],
        "9": [
          "50x8",
          "40x10"
        ],
        "10": [
          "50x9",
          "40x11"
        ],
        "11": [
          "50x10",
          "40x12"
        ]
      },
      "Press militar máquina": {
        "5": [
          "50x8",
          "47,5x7"
        ],
        "6": [
          "50x6",
          "47,5x7"
        ],
        "7": [
          "50x7",
          "47,5x7"
        ],
        "8": [
          "50x7,5",
          "47,5x8"
        ],
        "9": [
          "50x7",
          "47,5x6,5"
        ],
        "10": [
          "50x7",
          "47,5x7"
        ],
        "11": [
          "50x8",
          "47,5x9"
        ]
      },
      "Elevaciones laterales mancuernas": {
        "5": [
          "10x8",
          "7,5x10,5",
          "7,5x10"
        ],
        "6": [
          "10x8",
          "7,5x10,5",
          "7,5x9,5"
        ],
        "7": [
          "10x8",
          "7,5x11",
          "7,5x9"
        ],
        "8": [
          "10x9",
          "7,5x12",
          "7,5x9"
        ],
        "9": [
          "10x6",
          "7,5x10",
          "7,5x10"
        ],
        "10": [
          "10x8",
          "7,5x11",
          "7,5x10"
        ],
        "11": [
          "10x8",
          "7,5x12",
          "7,5x11"
        ]
      },
      "Tríceps katana unilateral": {
        "5": [
          "14,85x9",
          "13,6x9",
          "13,6x8"
        ],
        "6": [
          "14,85x9,5",
          "13,6x9",
          "13,6x9"
        ],
        "7": [
          "14,85x9",
          "13,6x9",
          "13,6x9"
        ],
        "8": [
          "14,85x10",
          "13,6x10",
          "13,6x9"
        ],
        "9": [
          "14,85x8",
          "13,6x10",
          "13,6x9"
        ],
        "10": [
          "14,85x8",
          "13,6x8",
          "13,6x8"
        ],
        "11": [
          "14,85x8",
          "13,6x9",
          "13,6x9"
        ]
      },
      "Fondos para tríceps": {
        "5": [
          "25,2x7",
          "22,7x9",
          "22,7x8"
        ],
        "6": [
          "25,2x7",
          "22,7x10",
          "22,7x9"
        ],
        "7": [
          "25,2x8",
          "22,7x10",
          "22,7x9"
        ],
        "8": [
          "27,2x6",
          "23,95x8",
          "22,7x9"
        ],
        "9": [
          "27,2x6",
          "23,95x9",
          "22,7x9"
        ],
        "10": [
          "27,2x7",
          "23,95x9",
          "22,7x9"
        ],
        "11": [
          "27,2x8",
          "23,95x9",
          "22,7x9"
        ]
      }
    },
    "D2": {
      "Jalón al pecho agarre prono": {
        "5": [
          "81,7x6",
          "76,2x9"
        ],
        "6": [
          "81,7x6",
          "76,2x8"
        ],
        "7": [
          "81,7x6,5",
          "75,1x7"
        ],
        "8": [
          "81,7x6",
          "75,1x7"
        ],
        "9": [
          "81,7x4",
          "72,6x8"
        ],
        "10": [
          "81,7x4",
          "72,6x6",
          "63,6x8"
        ],
        "11": [
          "81,7x4",
          "72,6x6",
          "63,6x8"
        ]
      },
      "Remo máquina neutro unilateral": {
        "5": [
          "40x9",
          "35x11"
        ],
        "6": [
          "40x8",
          "35x10"
        ],
        "7": [
          "42,5x7",
          "37,5x7"
        ],
        "8": [
          "42,5x8",
          "37,5x9"
        ],
        "9": [
          "40x7",
          "37,5x8"
        ],
        "10": [
          "40x10",
          "37,5x10"
        ],
        "11": [
          "40x10",
          "37,5x10"
        ]
      },
      "Jalón al pecho agarre cerrado": {
        "5": [
          "72,6x7,5",
          "63,6x9"
        ],
        "6": [
          "72,6x7,5",
          "63,6x10"
        ],
        "7": [
          "72,6x7",
          "64,85x6,5"
        ],
        "8": [
          "72,6x8,5",
          "64,85x7"
        ],
        "9": [
          "72,6x6,5",
          "63,6x7"
        ],
        "10": [
          "72,6x9",
          "63,6x9"
        ],
        "11": [
          "72,6x9",
          "63,6x9"
        ]
      },
      "Pullover polea": {
        "5": [
          "49,9x9",
          "45,4x9",
          "40,8x10"
        ],
        "6": [
          "49,9x9",
          "45,4x9",
          "40,8x10"
        ],
        "7": [
          "54,4x5",
          "49,9x6,5"
        ],
        "8": [
          "49,9x9",
          "45,4x8",
          "40,8x9"
        ],
        "9": [
          "49,9x7,5",
          "45,4x7,5",
          "40,8x9"
        ],
        "10": [
          "49,9x8",
          "45,4x8",
          "40,8x9"
        ],
        "11": [
          "49,9x8",
          "45,4x8",
          "40,8x9"
        ]
      },
      "Curl predicador máquina": {
        "5": [
          "40x6",
          "30x8",
          "25x10"
        ],
        "6": [
          "35x10",
          "25x12",
          "25x11"
        ],
        "7": [
          "40x9",
          "40x6,5"
        ],
        "8": [
          "45x5",
          "30x8",
          "25x10"
        ],
        "9": [
          "35x9",
          "30x9"
        ],
        "10": [
          "40x10",
          "35x9",
          "30x10"
        ],
        "11": [
          "40x10",
          "35x9",
          "30x10"
        ]
      },
      "Curl martillo": {
        "5": [
          "15x8",
          "12,5x11"
        ],
        "6": [
          "15x8",
          "12,5x10"
        ],
        "7": [
          "15x7",
          "12,5x10"
        ],
        "8": [
          "15x9",
          "12,5x11"
        ],
        "9": [
          "15x5,5",
          "12,5x9"
        ],
        "10": [
          "15x7",
          "12,5x8"
        ],
        "11": [
          "15x7",
          "12,5x8"
        ]
      }
    },
    "D3": {
      "Sentadilla Hack en máquina": {
        "1": [
          "60x8",
          "50x10",
          "40x12"
        ],
        "2": [
          "60x10",
          "52,5x10",
          "42,5x12"
        ],
        "3": [
          "65x8",
          "55x9",
          "45x12"
        ],
        "4": [
          "67,5x9",
          "55x11",
          "50x13"
        ]
      },
      "Prensa inclinada": {
        "1": [
          "120x8",
          "100x10",
          "80x12"
        ],
        "2": [
          "120x6",
          "90x12",
          "80x12"
        ],
        "3": [
          "120x7",
          "100x10",
          "90x12"
        ],
        "4": [
          "120x9",
          "105x10",
          "95x12"
        ]
      },
      "Sentadilla búlgara (por pierna)": {
        "1": [
          "22,5x11",
          "20x10",
          "15x12"
        ],
        "2": [
          "25x10",
          "20x10",
          "17,5x12"
        ],
        "3": [
          "25x10",
          "22,5x10",
          "17,5x11"
        ],
        "4": [
          "30x9",
          "20x14"
        ]
      },
      "Extensión de cuádriceps en máquina": {
        "1": [
          "65x10",
          "55x11",
          "45x13"
        ],
        "2": [
          "65x11",
          "60x10",
          "50x12"
        ],
        "3": [
          "70x11",
          "65x10",
          "55x11"
        ],
        "4": [
          "75x9",
          "70x9",
          "60x12"
        ]
      },
      "Curl femoral tumbado (individual)": {
        "1": [
          "30x9",
          "25x10",
          "20x10"
        ],
        "2": [
          "15x10",
          "15x9",
          "10x12"
        ],
        "3": [
          "20x10",
          "15x10",
          "15x9"
        ],
        "4": [
          "20x12",
          "15x12",
          "15x12"
        ]
      },
      "Gemelo en prensa": {
        "1": [
          "65x10",
          "55x10",
          "45x12",
          "40x12"
        ],
        "2": [
          "65x9",
          "55x9",
          "45x12"
        ],
        "3": [
          "50x10",
          "40x18",
          "40x18",
          "40x16"
        ],
        "4": [
          "55x10",
          "50x14",
          "50x11",
          "47,5x13"
        ]
      }
    },
    "D3V": {
      "Prensa inclinada": {
        "5": [
          "150x7",
          "130x10",
          "120x11"
        ],
        "6": [
          "150x7",
          "135x8"
        ],
        "7": [
          "150x8",
          "135x10",
          "120x11"
        ],
        "8": [
          "150x7",
          "135x8",
          "120x10"
        ],
        "10": [
          "150x10",
          "135x12",
          "120x11"
        ],
        "11": [
          "155x10",
          "140x12",
          "120x12"
        ]
      },
      "Extensión de cuádriceps en máquina": {
        "5": [
          "85x12,5",
          "85x10",
          "75x11"
        ],
        "6": [
          "90x7",
          "85x7"
        ],
        "7": [
          "90x9",
          "85x9",
          "80x10"
        ],
        "8": [
          "90x8",
          "85x9",
          "80x9"
        ],
        "10": [
          "90x12",
          "85x11",
          "80x11"
        ],
        "11": [
          "90x8",
          "85x8",
          "75x8"
        ]
      },
      "Curl femoral tumbado": {
        "5": [
          "45x7",
          "35x10",
          "30x12"
        ],
        "6": [
          "45x8",
          "40x8"
        ],
        "7": [
          "45x8",
          "40x9",
          "30x12"
        ],
        "8": [
          "45x7",
          "40x8",
          "30x11"
        ],
        "10": [
          "45x9",
          "40x10",
          "30x11"
        ],
        "11": [
          "45x10",
          "40x10",
          "30x12"
        ]
      },
      "Hip thrust en máquina o con barra ligera": {
        "5": [
          "80x12",
          "80x11",
          "80x11"
        ],
        "6": [
          "80x10",
          "80x10"
        ],
        "7": [
          "80x11",
          "80x10",
          "80x10"
        ],
        "10": [
          "80x12",
          "80x12",
          "80x"
        ],
        "11": [
          "80x12",
          "80x12",
          "80x12"
        ]
      },
      "Gemelo en prensa": {
        "5": [
          "50x14",
          "50x11",
          "50x10"
        ],
        "6": [
          "60x9",
          "60x8"
        ],
        "7": [
          "60x10",
          "60x9",
          "50x11",
          "50x9"
        ],
        "8": [
          "60x9",
          "60x9",
          "50x10"
        ],
        "10": [
          "60x9",
          "50x10",
          "45x12",
          "40x13"
        ],
        "11": [
          "60x9",
          "50x10",
          "45x12",
          "40x13"
        ]
      }
    },
    "D4": {
      "Press militar con mancuernas": {
        "5": [
          "25x4,5",
          "20x7"
        ],
        "6": [
          "22,5x7",
          "20x7,5"
        ],
        "7": [
          "22,5x8",
          "20x9"
        ],
        "8": [
          "22,5x8",
          "20x8"
        ],
        "10": [
          "22,5x9",
          "20x10"
        ],
        "11": [
          "25x5",
          "20x10"
        ]
      },
      "Elevación lateral unilateral en polea": {
        "5": [
          "13,6x7",
          "10,35x9",
          "9,1x13"
        ],
        "6": [
          "13,6x5",
          "10,35x7"
        ],
        "7": [
          "13,6x8",
          "10,35x9",
          "9,1x12"
        ],
        "8": [
          "13,6x6",
          "10,35x9",
          "9,1x12"
        ],
        "10": [
          "13,6x9",
          "10,35x12",
          "9,1x15"
        ],
        "11": [
          "13,6x11",
          "10,35x13",
          "10,35x11"
        ]
      },
      "Pájaros en máquina (Pec Deck invertido)": {
        "5": [
          "50x9",
          "45x10"
        ],
        "6": [
          "50x6",
          "45x9"
        ],
        "7": [
          "50x8",
          "45x11"
        ],
        "8": [
          "50x8",
          "45x10"
        ],
        "10": [
          "50x10",
          "45x10"
        ],
        "11": [
          "50x11",
          "45x12"
        ]
      },
      "Press inclinado en multipower (pecho superior)": {
        "5": [
          "42,5x8",
          "37,5x8"
        ],
        "6": [
          "42,5x6",
          "37,5x7"
        ],
        "7": [
          "42,5x6,5",
          "37,5x8"
        ],
        "8": [
          "42,5x7",
          "37,5x8"
        ],
        "10": [
          "42,5x8",
          "37,5x8"
        ],
        "11": [
          "42,5x8",
          "37,5x9"
        ]
      },
      "Cruces en polea baja (pecho inferior)": {
        "5": [
          "27,2x9",
          "25,2x10,5",
          "22,7x10"
        ],
        "6": [
          "27,2x7",
          "22,7x8",
          "20,6x10"
        ],
        "7": [
          "27,2x7,5",
          "22,7x10"
        ],
        "8": [
          "27,2x7",
          "22,7x10",
          "18,1x11"
        ],
        "10": [
          "27,2x7",
          "22,7x9",
          "18,1x12"
        ],
        "11": [
          "27,2x9",
          "22,7x10",
          "18,1x15"
        ]
      }
    },
    "D5": {
      "Remo en máquina convergente (Hammer Strength)": {
        "5": [
          "73,95x10",
          "68,6x11",
          "63,6x13"
        ],
        "6": [
          "81,7x5",
          "72,6x6"
        ],
        "7": [
          "81,7x6",
          "72,6x8",
          "63,6x10"
        ],
        "8": [
          "81,7x6",
          "72,6x7",
          "63,6x8"
        ],
        "10": [
          "81,7x6",
          "72,6x7",
          "63,6x8"
        ],
        "11": [
          "81,7x6",
          "72,6x7",
          "63,6x8"
        ]
      },
      "Curl de bíceps tumbado en banco": {
        "5": [
          "15x8",
          "12,5x9,5"
        ],
        "6": [
          "15x6",
          "12,5x6"
        ],
        "7": [
          "15x7",
          "12,5x7"
        ],
        "8": [
          "15x6",
          "12,5x7"
        ],
        "10": [
          "15x7",
          "12,5x8"
        ],
        "11": [
          "15x8",
          "12,5x9"
        ]
      },
      "Curl de bíceps BAYESIAN unilateral (cada brazo)": {
        "5": [
          "22,7x9",
          "19,35x12"
        ],
        "6": [
          "19,35x8",
          "18,1x10"
        ],
        "7": [
          "19,35x8",
          "18,1x11"
        ],
        "8": [
          "19,35x7",
          "18,1x10"
        ],
        "10": [
          "19,35x11",
          "18,1x12"
        ],
        "11": [
          "20,6x8",
          "18,1x13"
        ]
      },
      "Curl predicador en máquina o banco": {
        "5": [
          "40x7,5",
          "30x11"
        ],
        "6": [
          "40x6",
          "30x8"
        ],
        "7": [
          "40x8",
          "30x10"
        ],
        "8": [
          "40x8",
          "30x9"
        ],
        "10": [
          "40x10",
          "30x12"
        ],
        "11": [
          "45x8",
          "35x11"
        ]
      },
      "Extensión de tríceps en polea unilateral": {
        "5": [
          "20,6x10",
          "19,35x10",
          "18,1x12"
        ],
        "6": [
          "22,7x6",
          "18,1x10"
        ],
        "7": [
          "20,6x7",
          "18,1x11"
        ],
        "8": [
          "20,6x7",
          "18,1x10",
          "18,1x10"
        ],
        "10": [
          "20,6x8",
          "18,1x11",
          "18,1x9"
        ],
        "11": [
          "20,6x7",
          "18,1x11",
          "18,1x10"
        ]
      },
      "Press francés barra recta": {
        "5": [
          "20x8",
          "17,5x9",
          "15x11"
        ],
        "6": [
          "20x6",
          "15x9"
        ],
        "7": [
          "20x7",
          "15x7",
          "10x10"
        ],
        "10": [
          "20x8",
          "15x9",
          "15x8"
        ],
        "11": [
          "20x7",
          "15x10",
          "12,5x12"
        ]
      }
    },
    "pesoCorporal": {
      "9": "68.3",
      "10": "68.8",
      "11": "68.8"
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
