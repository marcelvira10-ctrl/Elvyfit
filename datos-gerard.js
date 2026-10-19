/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.pan_integral     = AL.pan_integral     || { n:"Pan integral",            p:10.0, c:48.0, g:3.5,  crudo:false, ok:false, cat:"carbo" };
  AL.queso_fresco     = AL.queso_fresco     || { n:"Queso fresco batido 0%",  p:9.0,  c:4.0,  g:0.5,  crudo:false, ok:false, cat:"prote" };
  AL.leche_desnatada  = AL.leche_desnatada  || { n:"Leche desnatada",         p:3.4,  c:4.8,  g:0.2,  crudo:false, ok:false, cat:"prote", ml:true };
  AL.yogur_griego     = AL.yogur_griego     || { n:"Yogur griego 0%",         p:10.0, c:3.6,  g:0.2,  crudo:false, ok:false, cat:"prote" };
  AL.tortitas_arroz   = AL.tortitas_arroz   || { n:"Tortitas de arroz",       p:7.5,  c:80.0, g:3.0,  crudo:false, ok:false, cat:"carbo" };
  AL.atun             = AL.atun             || { n:"Atún al natural",         p:25.0, c:0.0,  g:1.0,  crudo:false, ok:false, cat:"prote" };
  AL.garbanzos        = AL.garbanzos        || { n:"Garbanzos cocidos",       p:8.9,  c:27.0, g:2.6,  crudo:false, ok:false, cat:"carbo" };
  AL.crema_cacahuete  = AL.crema_cacahuete  || { n:"Crema de cacahuete 100%", p:25.0, c:20.0, g:50.0, crudo:false, ok:false, cat:"grasa" };
  AL.almendras        = AL.almendras        || { n:"Almendras crudas",        p:21.0, c:22.0, g:49.0, crudo:false, ok:false, cat:"grasa" };
}

var CLIENTE = {
  "nombre": "GERARD",
  "apellido": "Regordosa Yañez",
  "slug": "gerard",
  "clave": "gerard_plan_v1",
  "claveAntigua": "gerard_tracking_v0",
  "kcal": 2300,
  "peso": 99,
  "pasos": 15000,
  "ratios": {
    "p": 1.6,
    "g": 0.6
  },
  "soloEstos": [
    "arroz",
    "pasta",
    "patata",
    "boniato"
  ],
  "perfil": {
    "edad": 21,
    "altura": 191,
    "sexo": "hombre",
    "trabajo": 250,
    "gymDias": 5,
    "gymMin": 60,
    "deporte": "Caminar",
    "deporteDias": 3,
    "deporteMin": 40
  },
  "entreno": {
    "detalle": "❤️ <b>RIR 1-2, sin llegar al fallo</b> hasta el alta del cardiólogo · ⏱️ <b>2:30 entre series</b> · tempo 2-1-1",
    "tip": "🎬 Toca «Ver vídeo». Respira siempre, nunca aguantes el aire al empujar. Apunta kg y reps en Progreso."
  },
  "extraCompra": [
    [
      "Creatina monohidrato",
      "5 g/día"
    ]
  ],
  "historial": [
    {
      "fecha": "19 oct",
      "texto": "Recomposición: 2.300 kcal al día con 158 g de proteína, 59 g de grasa y 284 g de carbohidratos. Entreno en RIR 1-2 hasta el alta del cardiólogo. 15.000 pasos al día."
    }
  ],
  "dias": [
    {
      "dia": "LUN",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "avena",
              80
            ],
            [
              "isolate",
              22
            ],
            [
              "platano",
              130
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "leche_desnatada",
              200
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              110
            ],
            [
              "pollo",
              140
            ],
            [
              "cherry",
              75
            ],
            [
              "pepino",
              75
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "yogur_griego",
              180
            ],
            [
              "isolate",
              15
            ],
            [
              "almendras",
              15
            ],
            [
              "manzana",
              190
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              360
            ],
            [
              "salmon",
              130
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              8
            ]
          ]
        }
      ]
    },
    {
      "dia": "MAR",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "pan_integral",
              120
            ],
            [
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "tomate",
              100
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "pasta",
              135
            ],
            [
              "atun",
              130
            ],
            [
              "zanahoria",
              75
            ],
            [
              "tomate",
              75
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "queso_fresco",
              220
            ],
            [
              "tortitas_arroz",
              40
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "platano",
              120
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "boniato",
              360
            ],
            [
              "pavo",
              140
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              8
            ]
          ]
        }
      ]
    },
    {
      "dia": "MIÉ",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "avena",
              80
            ],
            [
              "isolate",
              22
            ],
            [
              "platano",
              130
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "leche_desnatada",
              200
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              110
            ],
            [
              "pavo",
              140
            ],
            [
              "garbanzos",
              60
            ],
            [
              "tomate",
              10
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "yogur_griego",
              180
            ],
            [
              "isolate",
              15
            ],
            [
              "almendras",
              15
            ],
            [
              "manzana",
              190
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              360
            ],
            [
              "merluza",
              160
            ],
            [
              "huevo",
              60
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              8
            ]
          ]
        }
      ]
    },
    {
      "dia": "JUE",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "pan_integral",
              120
            ],
            [
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "tomate",
              100
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              110
            ],
            [
              "pollo",
              140
            ],
            [
              "ensalada",
              150
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "queso_fresco",
              220
            ],
            [
              "tortitas_arroz",
              40
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "platano",
              120
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              360
            ],
            [
              "ternera",
              130
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              8
            ]
          ]
        }
      ]
    },
    {
      "dia": "VIE",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "avena",
              80
            ],
            [
              "isolate",
              22
            ],
            [
              "platano",
              130
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "leche_desnatada",
              200
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "pasta",
              135
            ],
            [
              "atun",
              120
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              75
            ],
            [
              "pepino",
              75
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "yogur_griego",
              180
            ],
            [
              "isolate",
              15
            ],
            [
              "almendras",
              15
            ],
            [
              "manzana",
              190
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              360
            ],
            [
              "pollo",
              140
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              8
            ]
          ]
        }
      ]
    },
    {
      "dia": "SÁB",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "pan_integral",
              120
            ],
            [
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "tomate",
              100
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              55
            ],
            [
              "pollo",
              165
            ],
            [
              "judia_verde",
              100
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "queso_fresco",
              220
            ],
            [
              "tortitas_arroz",
              40
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "platano",
              120
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              360
            ],
            [
              "pollo",
              140
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              8
            ]
          ]
        }
      ]
    },
    {
      "dia": "DOM",
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "avena",
              80
            ],
            [
              "isolate",
              22
            ],
            [
              "platano",
              130
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "leche_desnatada",
              200
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — TRABAJO (tupper frío)",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              110
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
              "manzana",
              150
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🥪 C3 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "queso_fresco",
              220
            ],
            [
              "tortitas_arroz",
              40
            ],
            [
              "crema_cacahuete",
              10
            ],
            [
              "platano",
              120
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "boniato",
              360
            ],
            [
              "salmon",
              130
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              8
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
      "color": "#6fd0ff",
      "cc": "#6fd0ff",
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
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/vdWbsdOtKII"
        },
        {
          "nombre": "Pec Deck (aperturas)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/HL88KYqhzQI"
        },
        {
          "nombre": "Press militar en máquina",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/BqdJeb6jHko"
        },
        {
          "nombre": "Elevaciones laterales mancuernas",
          "reps": [
            "6"
          ],
          "video": "https://youtube.com/shorts/j2tjiP-YoDU"
        },
        {
          "nombre": "Tríceps katana unilateral en polea",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/HNH6a33SZB0"
        },
        {
          "nombre": "Extensión tríceps polea barra recta",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/sU9snn0qTEs"
        }
      ]
    },
    {
      "id": "D2",
      "emoji": "🔴",
      "color": "#ff6b6b",
      "cc": "#ff6b6b",
      "chip": "D2 · Espalda",
      "titulo": "DÍA 2 — ESPALDA · BÍCEPS",
      "ejercicios": [
        {
          "nombre": "Jalón al pecho agarre prono",
          "reps": [
            "6",
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
          "nombre": "Pullover en polea",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/dX5DHCZ-7p8"
        },
        {
          "nombre": "Curl predicador máquina",
          "reps": [
            "6",
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
      "color": "#ffd166",
      "cc": "#ffd166",
      "chip": "D3 · Pierna",
      "titulo": "DÍA 3 — PIERNA COMPLETA",
      "ejercicios": [
        {
          "nombre": "Sentadilla Hack en máquina",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://www.youtube.com/watch?v=R8ZyWx1EgoY"
        },
        {
          "nombre": "Prensa de piernas (leg press)",
          "reps": [
            "6"
          ],
          "video": "https://www.youtube.com/watch?v=AJ6N_TcoU6M"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "6"
          ],
          "video": "https://www.youtube.com/watch?v=PAPf4i-VJoc"
        },
        {
          "nombre": "Isquiotibiales sentado en máquina",
          "reps": [
            "6"
          ],
          "video": "https://www.youtube.com/watch?v=CBCPBnMzsMI"
        },
        {
          "nombre": "Abductor de glúteo en máquina",
          "reps": [
            "6"
          ],
          "video": "https://www.youtube.com/watch?v=0wZ_dRSbnsA"
        },
        {
          "nombre": "Gemelo en máquina",
          "reps": [
            "6",
            "8",
            "9",
            "9",
            "9",
            "9"
          ],
          "video": "https://www.youtube.com/watch?v=6KKDFgOKZY0"
        }
      ]
    },
    {
      "id": "D4",
      "emoji": "🔵",
      "color": "#2196f3",
      "cc": "#2196f3",
      "chip": "D4 · Pecho · Hombro",
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
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/3uljNfhx1EI"
        },
        {
          "nombre": "Pájaros en máquina (Pec Deck invertido)",
          "reps": [
            "6",
            "8"
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
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/gHNpRoKeAdA"
        }
      ]
    },
    {
      "id": "D5",
      "emoji": "🔴",
      "color": "#ff8fb1",
      "cc": "#ff8fb1",
      "chip": "D5 · Espalda · Brazos",
      "titulo": "DÍA 5 — ESPALDA · BÍCEPS · TRÍCEPS",
      "ejercicios": [
        {
          "nombre": "Remo en máquina convergente (Hammer Strength)",
          "reps": [
            "6",
            "8"
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
          "nombre": "Curl de bíceps en polea arriba unilateral",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/7kLT9OxHyw0"
        },
        {
          "nombre": "Curl predicador en máquina o banco",
          "reps": [
            "6"
          ],
          "video": "https://youtube.com/shorts/vq9JynSsol8"
        },
        {
          "nombre": "Extensión de tríceps en polea unilateral",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/hip11n3QXzU"
        },
        {
          "nombre": "Press francés barra recta",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtu.be/hBz7jSJM3Yw"
        }
      ]
    }
  ]
};
