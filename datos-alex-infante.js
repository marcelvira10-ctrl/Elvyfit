/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.queso_fresco   = AL.queso_fresco   || { n:"Queso fresco batido 0%",  p:9.0,  c:4.0,  g:0.5,  crudo:false, ok:false, cat:"prote" };
  AL.espinaca       = AL.espinaca       || { n:"Espinacas",               p:2.9,  c:1.4,  g:0.4,  crudo:true,  ok:false, cat:"verdura" };
  AL.arroz_integral = AL.arroz_integral || { n:"Arroz integral",          p:7.5,  c:76.0, g:2.9,  crudo:true,  ok:false, cat:"carbo" };
}

var CLIENTE = {
  "nombre": "ÀLEX",
  "apellido": "Infante",
  "slug": "alex-infante",
  "clave": "alex_infante_plan_v1",
  "claveAntigua": "alex_infante_tracking_v0",
  "kcal": 2050,
  "peso": 122,
  "pasos": 18000,
  "ratios": {
    "p": 1.5,
    "g": 0.475
  },
  "soloEstos": [
    "arroz",
    "arroz_integral",
    "pasta",
    "patata",
    "boniato"
  ],
  "perfil": {
    "edad": 23,
    "altura": 183,
    "sexo": "hombre",
    "trabajo": 60,
    "gymDias": 5,
    "gymMin": 60,
    "deporte": "Cinta (cardio)",
    "deporteDias": 2,
    "deporteMin": 30
  },
  "entreno": {
    "detalle": "🔥 <b>RIR 1 en las primeras series, fallo en el resto</b> · tempo 2-1-1-1 · ⏱️ 3 min en básicos, 2:30 en aislamientos",
    "tip": "🎬 Toca el ejercicio para ver el vídeo. Apunta peso, reps y RIR cada semana."
  },
  "extraCompra": [
    [
      "Omega 3",
      "2 cápsulas/día (14 cápsulas)"
    ]
  ],
  "historial": [
    {
      "fecha": "19 oct",
      "texto": "Fase 2.1: 2.050 kcal de lunes a sábado y 2.350 el domingo (refeed). Proteína fija en 183 g. Los carbohidratos suben en comida y cena. 18.000 pasos los 7 días y cardio sábado y domingo."
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
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              55
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL",
          "clase": "ct-green",
          "items": [
            [
              "arroz_integral",
              40
            ],
            [
              "pollo",
              200
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              40
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              20
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "salmon",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "patata",
              60
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
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              55
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL",
          "clase": "ct-green",
          "items": [
            [
              "arroz",
              40
            ],
            [
              "ternera",
              200
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
          "titulo": "💪 C4 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              40
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              20
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "merluza",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "patata",
              60
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
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              55
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL",
          "clase": "ct-green",
          "items": [
            [
              "arroz_integral",
              40
            ],
            [
              "pavo",
              200
            ],
            [
              "brocoli",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              40
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              20
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "pollo",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "boniato",
              60
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
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              55
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL",
          "clase": "ct-green",
          "items": [
            [
              "arroz",
              40
            ],
            [
              "pollo",
              200
            ],
            [
              "zanahoria",
              75
            ],
            [
              "calabacin",
              75
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              40
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              20
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "merluza",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "patata",
              60
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
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              55
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL",
          "clase": "ct-green",
          "items": [
            [
              "arroz_integral",
              40
            ],
            [
              "ternera",
              200
            ],
            [
              "brocoli",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              40
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              20
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "salmon",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "boniato",
              60
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
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              55
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL",
          "clase": "ct-green",
          "items": [
            [
              "pasta",
              48
            ],
            [
              "pollo",
              200
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
          "titulo": "💪 C4 — MERIENDA",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              40
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              20
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "pavo",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "patata",
              60
            ]
          ]
        }
      ]
    },
    {
      "dia": "DOM",
      "kcal": 2350,
      "comidas": [
        {
          "titulo": "🌅 C1 — DESAYUNO · REFEED",
          "clase": "ct-orange",
          "items": [
            [
              "huevo",
              120
            ],
            [
              "claras",
              150
            ],
            [
              "pan_espelta",
              110
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
          "titulo": "☕ C2 — MEDIA MAÑANA",
          "clase": "ct-yellow",
          "items": [
            [
              "queso_fresco",
              100
            ],
            [
              "manzana",
              150
            ]
          ]
        },
        {
          "titulo": "🍽️ C3 — COMIDA PRINCIPAL · REFEED",
          "clase": "ct-green",
          "items": [
            [
              "arroz_integral",
              70
            ],
            [
              "pavo",
              240
            ],
            [
              "brocoli",
              150
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "💪 C4 — MERIENDA · REFEED",
          "clase": "ct-blue",
          "items": [
            [
              "isolate",
              60
            ],
            [
              "platano",
              120
            ],
            [
              "crema_arroz",
              50
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C5 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "merluza",
              180
            ],
            [
              "espinaca",
              200
            ],
            [
              "patata",
              100
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
      "titulo": "DÍA 1 — PECHO · HOMBRO · TRÍCEPS + ABS",
      "ejercicios": [
        {
          "nombre": "Press superior inclinado mancuernas",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=press%20inclinado%20mancuernas%20pecho%20tutorial"
        },
        {
          "nombre": "Press máquina pecho plano",
          "reps": [
            "6",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=press%20maquina%20pecho%20plano%20tutorial"
        },
        {
          "nombre": "Pec Deck",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=pec%20deck%20mariposa%20pecho%20tutorial"
        },
        {
          "nombre": "Press militar máquina",
          "reps": [
            "6",
            "8",
            "8"
          ],
          "video": "https://www.youtube.com/results?search_query=press%20militar%20maquina%20hombro%20tutorial"
        },
        {
          "nombre": "Elevaciones laterales mancuernas",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=elevaciones%20laterales%20mancuernas%20hombro%20tutorial"
        },
        {
          "nombre": "Tríceps katana unilateral",
          "reps": [
            "12",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=triceps%20katana%20polea%20unilateral%20tutorial"
        },
        {
          "nombre": "Extensión tríceps cuerno",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=extension%20triceps%20cuerno%20polea%20tutorial"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=crunch%20abdominal%20maquina%20tutorial"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=oblicuo%20lateral%20colgado%20barra%20dominadas%20tutorial"
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
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=jalon%20al%20pecho%20agarre%20prono%20espalda%20tutorial"
        },
        {
          "nombre": "Remo unilateral en polea con banco",
          "reps": [
            "6",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=remo%20unilateral%20polea%20banco%20espalda%20tutorial"
        },
        {
          "nombre": "Jalón al pecho agarre cerrado",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=jalon%20agarre%20cerrado%20espalda%20tutorial"
        },
        {
          "nombre": "Pullover en polea",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=pullover%20polea%20espalda%20tutorial"
        },
        {
          "nombre": "Curl predicador máquina",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=curl%20predicador%20maquina%20biceps%20tutorial"
        },
        {
          "nombre": "Curl martillo",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=curl%20martillo%20mancuernas%20biceps%20tutorial"
        }
      ]
    },
    {
      "id": "D3",
      "emoji": "🟢",
      "color": "#4caf50",
      "cc": "#4caf50",
      "chip": "D3 · Pierna",
      "titulo": "DÍA 3 — PIERNA COMPLETA + ABS",
      "ejercicios": [
        {
          "nombre": "Sentadilla Hack en máquina",
          "reps": [
            "6",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=sentadilla%20hack%20maquina%20cuadriceps%20tutorial"
        },
        {
          "nombre": "Prensa inclinada",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=prensa%20inclinada%20pierna%20tutorial"
        },
        {
          "nombre": "Sentadilla búlgara",
          "reps": [
            "10",
            "12",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=sentadilla%20bulgara%20pierna%20tutorial"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "10",
            "12",
            "15"
          ],
          "video": "https://www.youtube.com/results?search_query=extension%20cuadriceps%20maquina%20tutorial"
        },
        {
          "nombre": "Curl femoral sentado",
          "reps": [
            "8",
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=curl%20femoral%20sentado%20isquiotibiales%20tutorial"
        },
        {
          "nombre": "Gemelo en máquina",
          "reps": [
            "15",
            "12",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=gemelo%20maquina%20pantorrilla%20tutorial"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=crunch%20abdominal%20maquina%20tutorial"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=oblicuo%20lateral%20colgado%20barra%20dominadas%20tutorial"
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
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=press%20militar%20mancuernas%20hombro%20tutorial"
        },
        {
          "nombre": "Elevación lateral unilateral en polea",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=elevacion%20lateral%20unilateral%20polea%20hombro%20tutorial"
        },
        {
          "nombre": "Pájaros en polea unilateral (Pec Deck inv.)",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=pajaros%20polea%20unilateral%20hombro%20posterior%20tutorial"
        },
        {
          "nombre": "Press inclinado en multipower (pecho sup.)",
          "reps": [
            "6",
            "8",
            "8"
          ],
          "video": "https://www.youtube.com/results?search_query=press%20inclinado%20smith%20multipower%20pecho%20tutorial"
        },
        {
          "nombre": "Cruces en polea baja (pecho inferior)",
          "reps": [
            "10",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=cruces%20polea%20baja%20pecho%20inferior%20tutorial"
        }
      ]
    },
    {
      "id": "D5",
      "emoji": "🔴",
      "color": "#ff8fb1",
      "cc": "#ff8fb1",
      "chip": "D5 · Espalda · Brazos",
      "titulo": "DÍA 5 — ESPALDA · BÍCEPS · TRÍCEPS + ABS",
      "ejercicios": [
        {
          "nombre": "Remo en barra multipower",
          "reps": [
            "6",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=remo%20barra%20multipower%20smith%20espalda%20tutorial"
        },
        {
          "nombre": "Curl de bíceps tumbado en banco",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=curl%20biceps%20tumbado%20banco%20inclinado%20tutorial"
        },
        {
          "nombre": "Curl de bíceps en polea arriba unilateral",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=curl%20biceps%20polea%20alta%20unilateral%20tutorial"
        },
        {
          "nombre": "Curl predicador en máquina o banco",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=curl%20predicador%20maquina%20banco%20biceps%20tutorial"
        },
        {
          "nombre": "Extensión de tríceps en polea unilateral",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://www.youtube.com/results?search_query=extension%20triceps%20polea%20unilateral%20tutorial"
        },
        {
          "nombre": "Press francés barra recta",
          "reps": [
            "8",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=press%20frances%20barra%20recta%20triceps%20tutorial"
        },
        {
          "nombre": "Crunch abdominales en máquina",
          "reps": [
            "12",
            "10",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=crunch%20abdominal%20maquina%20tutorial"
        },
        {
          "nombre": "Oblicuo de lado colgado en barra",
          "reps": [
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/results?search_query=oblicuo%20lateral%20colgado%20barra%20dominadas%20tutorial"
        }
      ]
    }
  ]
};
