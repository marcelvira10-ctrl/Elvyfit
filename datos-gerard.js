/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.pan_integral     = AL.pan_integral     || { n:"Pan integral",            p:10.0, c:48.0, g:3.5,  crudo:false, ok:false, cat:"carbo" };
  AL.queso_fresco     = AL.queso_fresco     || { n:"Queso fresco batido 0%",  p:9.0,  c:4.0,  g:0.5,  crudo:false, ok:false, cat:"prote" };
  AL.leche_desnatada  = AL.leche_desnatada  || { n:"Leche desnatada",         p:3.4,  c:4.8,  g:0.2,  crudo:false, ok:false, cat:"prote", ml:true };
  AL.yogur_griego     = AL.yogur_griego     || { n:"Yogur griego 0%",         p:10.0, c:3.6,  g:0.2,  crudo:false, ok:false, cat:"prote" };
  AL.tortitas_arroz   = AL.tortitas_arroz   || { n:"Tortitas de arroz",       p:7.5,  c:80.0, g:3.0,  crudo:false, ok:false, cat:"carbo" };
  AL.atun             = AL.atun             || { n:"Atún al natural",         p:25.0, c:0.0,  g:1.0,  crudo:false, ok:false, cat:"prote" };
  AL.garbanzos        = AL.garbanzos        || { n:"Garbanzos secos",          p:20.5, c:45.0, g:6.0,  crudo:true,  ok:false, cat:"carbo" };
  AL.crema_cacahuete  = AL.crema_cacahuete  || { n:"Crema de cacahuete 100%", p:25.0, c:20.0, g:50.0, crudo:false, ok:false, cat:"grasa" };
  AL.almendras        = AL.almendras        || { n:"Almendras crudas",        p:21.0, c:22.0, g:49.0, crudo:false, ok:false, cat:"grasa" };
}

var CLIENTE = {
  "nombre": "GERARD",
  "apellido": "Regordosa Yañez",
  "slug": "gerard",
  "clave": "gerard_plan_v1",
  "claveAntigua": "gerard_tracking_v0",
  "progreso": {
    "D1": {
      "Press máquina pecho plano": {
        "1": [
          "30x6",
          "30x8"
        ],
        "2": [
          "30x6",
          "32x8"
        ],
        "3": [
          "30x6",
          "30x8"
        ],
        "4": [
          "40x6",
          "30x8"
        ],
        "5": [
          "50x6",
          "40x8"
        ],
        "6": [
          "40x6",
          "40x8"
        ]
      },
      "Press máquina pecho inclinado": {
        "1": [
          "40x8",
          "30x10"
        ],
        "2": [
          "40x8",
          "30x10"
        ],
        "3": [
          "30x8",
          "20x10"
        ],
        "4": [
          "30x6",
          "30x8"
        ],
        "5": [
          "60x6",
          "50x8"
        ],
        "6": [
          "70x6",
          "60x8"
        ]
      },
      "Pec Deck (aperturas)": {
        "1": [
          "40x10",
          "40x10"
        ],
        "2": [
          "45x10",
          "35x10"
        ],
        "3": [
          "45x10",
          "40x10"
        ],
        "4": [
          "6x60",
          "8x55"
        ],
        "5": [
          "60x6",
          "55x8"
        ],
        "6": [
          "60x6",
          "55x8"
        ]
      },
      "Press militar en máquina": {
        "1": [
          "14x6",
          "16x8"
        ],
        "2": [
          "16x6",
          "18x8"
        ],
        "3": [
          "20x6",
          "20x8"
        ],
        "4": [
          "30x6",
          "30x8"
        ],
        "5": [
          "40x6",
          "30x8"
        ],
        "6": [
          "40x"
        ]
      },
      "Elevaciones laterales mancuernas": {
        "1": [
          "8x10"
        ],
        "2": [
          "10x10"
        ],
        "3": [
          "10x10"
        ],
        "4": [
          "12x6"
        ],
        "5": [
          "12x6"
        ]
      },
      "Fondos de tríceps (en máquina o libres)": {
        "2": [
          "20x10",
          "20x10"
        ],
        "4": [
          "20x6",
          "20x8"
        ],
        "5": [
          "20x6",
          "20x8"
        ]
      },
      "Extensión tríceps polea barra recta": {
        "1": [
          "50x10",
          "50x10"
        ],
        "2": [
          "55x10",
          "65x10"
        ],
        "3": [
          "65x10",
          "70x10"
        ],
        "4": [
          "80x6",
          "75x8"
        ],
        "5": [
          "80x6",
          "75x8"
        ]
      }
    },
    "D2": {
      "Jalón al pecho agarre prono": {
        "1": [
          "70x6",
          "65x8"
        ],
        "2": [
          "75x6",
          "75x8"
        ],
        "3": [
          "70x6",
          "70x8"
        ],
        "4": [
          "75x6",
          "65x8"
        ],
        "5": [
          "75x6",
          "70x8"
        ],
        "6": [
          "80x6",
          "75x8"
        ]
      },
      "Remo máquina neutro unilateral": {
        "1": [
          "35x8",
          "40x10"
        ],
        "2": [
          "40x8",
          "50x10"
        ],
        "3": [
          "35x8",
          "25x10"
        ],
        "4": [
          "55x6",
          "55x8"
        ],
        "5": [
          "60x6",
          "60x8"
        ],
        "6": [
          "70x6",
          "65x8"
        ]
      },
      "Jalón al pecho agarre cerrado": {
        "1": [
          "65x8",
          "65x10"
        ],
        "2": [
          "70x8",
          "60x6"
        ],
        "3": [
          "65x8",
          "60x10"
        ],
        "4": [
          "70x6",
          "65x8"
        ],
        "5": [
          "75x6",
          "70x8"
        ],
        "6": [
          "75x6",
          "70x8"
        ]
      },
      "Pullover en polea": {
        "1": [
          "45x10",
          "55x8"
        ],
        "2": [
          "45x10",
          "45x10"
        ],
        "3": [
          "45x10",
          "45x10"
        ],
        "4": [
          "50x6",
          "45x8"
        ],
        "5": [
          "60x6",
          "55x8"
        ],
        "6": [
          "60x6",
          "55x8"
        ]
      },
      "Curl predicador máquina": {
        "1": [
          "20x8",
          "22.5x7"
        ],
        "2": [
          "22.5x8",
          "20x10"
        ],
        "3": [
          "45x8",
          "30x10"
        ],
        "4": [
          "50x6",
          "45x8"
        ],
        "5": [
          "55x6",
          "50x8"
        ],
        "6": [
          "55x6",
          "50x8"
        ]
      },
      "Curl martillo": {
        "1": [
          "14x8",
          "12x10"
        ],
        "2": [
          "16x8",
          "14x10"
        ],
        "3": [
          "16x8",
          "14x10"
        ],
        "4": [
          "18x6",
          "14x8"
        ],
        "5": [
          "16x6",
          "16x8"
        ],
        "6": [
          "16x6",
          "14x8"
        ]
      }
    },
    "D4": {
      "Press militar con mancuernas": {
        "1": [
          "16x6",
          "18x2"
        ],
        "2": [
          "20x6",
          "20x8"
        ],
        "4": [
          "22x6",
          "22x8"
        ],
        "5": [
          "24x6",
          "22x8"
        ],
        "6": [
          "24x6",
          "22x8"
        ]
      },
      "Elevación lateral unilateral en polea": {
        "1": [
          "15x8",
          "15x10"
        ],
        "2": [
          "15x8",
          "15x10"
        ],
        "4": [
          "20x6",
          "15x8"
        ],
        "5": [
          "20x6",
          "15x8"
        ],
        "6": [
          "20x6",
          "15x8"
        ]
      },
      "Pájaros en máquina (Pec Deck invertido)": {
        "1": [
          "50x8",
          "45x10"
        ],
        "2": [
          "55x8",
          "50x10"
        ],
        "4": [
          "55x6",
          "50x8"
        ],
        "5": [
          "55x6",
          "50x8"
        ],
        "6": [
          "55x6",
          "60x8"
        ]
      },
      "Press inclinado en multipower (pecho superior)": {
        "1": [
          "40x6",
          "45x6"
        ],
        "2": [
          "42.5x6",
          "40x8"
        ],
        "4": [
          "30x6",
          "28x8"
        ],
        "6": [
          "30x6",
          "28x8"
        ]
      },
      "Cruces en polea baja (pecho inferior)": {
        "1": [
          "20x10",
          "20x10"
        ],
        "2": [
          "22x10",
          "22x10"
        ],
        "6": [
          "25x6",
          "22x8"
        ]
      }
    },
    "D5": {
      "Curl de bíceps tumbado en banco": {
        "1": [
          "14x8",
          "14x10"
        ],
        "2": [
          "14x8",
          "14x10"
        ],
        "4": [
          "16x6",
          "14x8"
        ],
        "6": [
          "16x6",
          "14x8"
        ]
      },
      "Curl de bíceps en polea arriba unilateral": {
        "1": [
          "20x8",
          "30x10"
        ],
        "2": [
          "25x8",
          "20x10"
        ],
        "4": [
          "30x6",
          "25x8"
        ],
        "6": [
          "30x6",
          "25x8"
        ]
      },
      "Curl predicador en máquina o banco": {
        "1": [
          "30x12"
        ],
        "2": [
          "20x12"
        ],
        "4": [
          "50x6"
        ],
        "6": [
          "50x6"
        ]
      },
      "Extensión de tríceps en polea unilateral": {
        "1": [
          "25x10",
          "30x10"
        ],
        "2": [
          "30x10",
          "30x10"
        ],
        "4": [
          "30x6",
          "30x8"
        ],
        "6": [
          "30x6",
          "30x8"
        ]
      },
      "Press francés barra recta": {
        "6": [
          "30x6",
          "30x8"
        ]
      }
    },
    "pesoCorporal": {
      "6": "99"
    }
  },
  "kcal": 2300,
  "peso": 99,
  "pasos": 15000,
  "ratios": {
    "p": 1.6,
    "g": 0.6
  },
  "gastoTotal": 3230,
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
              23
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
          "nombre": "Fondos de tríceps (en máquina o libres)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://www.youtube.com/watch?v=4PEcd1VDpKY"
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
