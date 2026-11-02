/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.pan_integral   = AL.pan_integral   || { n:"Pan integral",                p:10.0, c:48.0, g:3.5,  crudo:false, ok:false, cat:"carbo" };
  AL.carne_picada   = AL.carne_picada   || { n:"Carne picada de vacuno",      p:21.0, c:0.0,  g:6.0,  crudo:true,  ok:false, cat:"prote" };
  AL.hamburguesa    = AL.hamburguesa    || { n:"Hamburguesa de ternera",      p:18.0, c:1.0,  g:14.0, crudo:true,  ok:false, cat:"prote" };
  AL.tortitas_jamon = AL.tortitas_jamon || { n:"Tortitas de maíz sabor jamón", p:6.9,  c:77.0, g:8.6,  crudo:false, ok:false, cat:"carbo" };
  /* alternativas (2/11): ñoquis Hacendado (etiqueta) y corazones de alcachofa al natural Hacendado */
  AL.noquis         = AL.noquis         || { n:"Ñoquis de patata (pesados tal cual del paquete)", p:4.5, c:37.5, g:0.4, crudo:false, ok:false, cat:"carbo" };
  AL.alcachofa      = AL.alcachofa      || { n:"Alcachofa (al natural escurrida, o fresca: solo lo que se come)", p:1.7, c:3.2, g:0.4, crudo:false, ok:false, cat:"verdura" };
}

var CLIENTE = {
  "nombre": "SERGI",
  "apellido": "Yáñez Sampedro",
  "slug": "chechu",
  "clave": "chechu_plan_v1",
  "claveAntigua": "sergi_tracking_v1",
  "kcal": 1817,
  "peso": 91,
  "pasos": 9500,
  "ratios": {
    "p": 1.6,
    "g": 0.33
  },
  "soloEstos": [
    "arroz",
    "pasta",
    "patata",
    "boniato"
  ],
  "progreso": {
    "LUN": {
      "Jalón al pecho barra recta": {
        "1": [
          "65x7",
          "65x7"
        ],
        "2": [
          "69x6",
          "69x6"
        ],
        "3": [
          "70x6",
          "70x6"
        ],
        "4": [
          "70x8",
          "70x7"
        ],
        "5": [
          "74x6",
          "70x8"
        ]
      },
      "Remo en máquina agarre neutro (2 manos)": {
        "1": [
          "65x10",
          "85x5"
        ],
        "2": [
          "85x7",
          "85x6"
        ],
        "3": [
          "85x8",
          "85x7"
        ],
        "4": [
          "90x7",
          "90x7"
        ],
        "5": [
          "95x7",
          "95x7"
        ]
      },
      "Press inclinado en máquina": {
        "1": [
          "30x13",
          "65x6"
        ],
        "2": [
          "70x5",
          "65x7"
        ],
        "3": [
          "66x6",
          "66x4"
        ],
        "4": [
          "65x7",
          "65x7"
        ],
        "5": [
          "65x9",
          "68x7"
        ]
      },
      "Laterales mancuerna (banco inclinado atrás)": {
        "1": [
          "7x9",
          "7x10",
          "7x8"
        ],
        "2": [
          "9x9",
          "9x8",
          "9x8"
        ],
        "3": [
          "10x8",
          "10x8",
          "10x8"
        ],
        "4": [
          "10x9",
          "10x9",
          "10x10"
        ],
        "5": [
          "10x8",
          "10x8",
          "10x8"
        ]
      },
      "Fondos con peso corporal (tríceps)": {
        "1": [
          "x4",
          "x4"
        ],
        "2": [
          "x5",
          "x5"
        ],
        "3": [
          "x6",
          "x5"
        ],
        "4": [
          "x7",
          "x7"
        ],
        "5": [
          "x9",
          "x7"
        ]
      },
      "Tríceps katana unilateral": {
        "1": [
          "3x13",
          "4x7"
        ],
        "2": [
          "4x10",
          "4x8"
        ],
        "3": [
          "4x10",
          "4x9"
        ],
        "4": [
          "4x10",
          "4x9"
        ],
        "5": [
          "4x10",
          "4x10"
        ]
      },
      "Curl mancuernas (banco inclinado atrás)": {
        "1": [
          "7x18",
          "14x5"
        ],
        "2": [
          "11x9",
          "11x8"
        ],
        "3": [
          "11x10",
          "11x10"
        ],
        "4": [
          "14x8",
          "14x5"
        ],
        "5": [
          "14x8",
          "14x6"
        ]
      },
      "Dragon flag (abdominales)": {
        "1": [
          "x9",
          "x10",
          "x8"
        ],
        "3": [
          "x10",
          "x9",
          "x7"
        ]
      }
    },
    "MIE": {
      "Sentadilla multipower c/ almohadilla espalda": {
        "1": [
          "55x7",
          "45x8",
          "42,5x10"
        ],
        "2": [
          "60x7",
          "54x9",
          "50x10"
        ],
        "4": [
          "60x7",
          "58x9",
          "54x10"
        ]
      },
      "Búlgara unilateral (pierna en banco)": {
        "1": [
          "14x8",
          "14x10",
          "14x10"
        ],
        "2": [
          "8x10",
          "14x10",
          "18x8"
        ]
      },
      "Extensión de cuádriceps en máquina": {
        "1": [
          "40x7",
          "40x9",
          "40x10"
        ],
        "2": [
          "45x8",
          "40x9",
          "40x9"
        ],
        "4": [
          "45x9",
          "45x10",
          "45x10"
        ]
      },
      "Curl femoral tumbado": {
        "1": [
          "40x8",
          "35x12",
          "37x10"
        ],
        "2": [
          "40x10",
          "40x8",
          "40x7"
        ],
        "4": [
          "45x6",
          "40x9",
          "40x10"
        ]
      },
      "Gemelo de pie en escalera (peso en mano)": {
        "1": [
          "14x25",
          "14x31",
          "14x28"
        ],
        "2": [
          "16x24",
          "16x28",
          "16x27"
        ],
        "3": [
          "23x26",
          "x24",
          "x22"
        ],
        "4": [
          "23x26",
          "23x24",
          "23x21"
        ]
      }
    },
    "JUE": {
      "Press inclinado en multipower": {
        "1": [
          "45x12",
          "55x8"
        ],
        "2": [
          "45x12",
          "55x8"
        ],
        "3": [
          "60x8",
          "60x5"
        ],
        "4": [
          "60x7",
          "60x6"
        ],
        "5": [
          "60x8",
          "60x6"
        ]
      },
      "Peck deck (aperturas pecho)": {
        "1": [
          "55x10",
          "55x10"
        ],
        "2": [
          "55x10",
          "55x10"
        ],
        "3": [
          "60x8",
          "60x9"
        ],
        "4": [
          "64x9",
          "64x10"
        ],
        "5": [
          "69x10",
          "69x7"
        ]
      },
      "Press militar con mancuernas": {
        "1": [
          "20x8",
          "20x9"
        ],
        "2": [
          "20x8",
          "20x9"
        ],
        "3": [
          "20x9",
          "20x9"
        ],
        "4": [
          "23x7",
          "23x7"
        ],
        "5": [
          "23x8",
          "23x8"
        ]
      },
      "Elevaciones laterales en polea": {
        "1": [
          "3x11",
          "3x10",
          "3x11"
        ],
        "2": [
          "3x11",
          "3x10",
          "3x11"
        ],
        "3": [
          "4x8",
          "4x8",
          "4x8"
        ],
        "4": [
          "4x8",
          "4x9",
          "4x8"
        ],
        "5": [
          "4x9",
          "4x9",
          "4x9"
        ]
      },
      "Tríceps polea unilateral (muñequera)": {
        "1": [
          "4x10",
          "4x10"
        ],
        "2": [
          "4x10",
          "4x10"
        ],
        "3": [
          "4x12",
          "5x8"
        ],
        "4": [
          "5x9",
          "5x8"
        ],
        "5": [
          "5x9",
          "5x9"
        ]
      },
      "Press francés": {
        "1": [
          "20x7",
          "20x8",
          "20x8"
        ],
        "2": [
          "20x7",
          "20x8",
          "20x8"
        ],
        "3": [
          "20x10",
          "20x10",
          "24x7"
        ],
        "4": [
          "24x9",
          "24x8",
          "24x6"
        ],
        "5": [
          "20x10",
          "20x12",
          "20x12"
        ]
      }
    },
    "VIE": {
      "Jalón al pecho agarre cerrado": {
        "1": [
          "60x8",
          "60x8"
        ],
        "2": [
          "65,5x9",
          "65,5x9"
        ],
        "3": [
          "69x8",
          "69x8"
        ],
        "4": [
          "74x7",
          "74x7"
        ],
        "5": [
          "80x8",
          "80x7"
        ]
      },
      "Remo alto en máquina (codos abiertos)": {
        "1": [
          "50x12",
          "60x8"
        ],
        "2": [
          "60x11",
          "65,5x9"
        ],
        "3": [
          "65x12",
          "69x10"
        ],
        "4": [
          "74x10",
          "80x8"
        ],
        "5": [
          "80x9",
          "80x7"
        ]
      },
      "Jalón al pecho agarre supino unilateral": {
        "1": [
          "20x12",
          "24x10"
        ],
        "2": [
          "25x9",
          "25x8"
        ],
        "5": [
          "50x12",
          "56x10"
        ]
      },
      "Pullover con cuerda": {
        "1": [
          "14x12",
          "14x11"
        ],
        "2": [
          "15x10",
          "15x10"
        ],
        "3": [
          "6x12",
          "7x10"
        ],
        "5": [
          "7x10",
          "7x9"
        ]
      },
      "Curl predicador": {
        "1": [
          "37x9",
          "40x6"
        ],
        "2": [
          "40x6",
          "40x6"
        ],
        "3": [
          "40x8",
          "40x7"
        ],
        "4": [
          "40x8"
        ],
        "5": [
          "20x10",
          "20x8"
        ]
      },
      "Curl bíceps barra (agarre ancho hombros)": {
        "1": [
          "20x12",
          "30x6"
        ],
        "2": [
          "30x7",
          "30x6"
        ],
        "3": [
          "30x7",
          "30x6"
        ],
        "5": [
          "30x7",
          "32x5"
        ]
      },
      "Dragon flag (abdominales)": {
        "1": [
          "x10",
          "x8",
          "x7"
        ],
        "2": [
          "x9",
          "x9",
          "x8"
        ],
        "3": [
          "x9",
          "x8",
          "x8"
        ],
        "5": [
          "x10",
          "x10",
          "x9"
        ]
      }
    },
    "pesoCorporal": {
      "1": "92",
      "2": "91.2",
      "3": "89.9",
      "4": "91",
      "5": "90"
    },
    "pasosSemana": {
      "4": 9200,
      "5": 10000
    }
  },
  "perfil": {
    "edad": 22,
    "altura": 185,
    "sexo": "hombre",
    "trabajo": 60,
    "gymDias": 4,
    "gymMin": 75,
    "deporte": "Fútbol sala",
    "deporteDias": 2,
    "deporteMin": 90
  },
  "entreno": {
    "detalle": "🔥 <b>RIR 0</b> · ritmo 2-1-1-1 (2 s bajada, 1 s pausa, 1 s subida, 1 s contracción) · ⏱️ <b>3 min de descanso</b>",
    "tip": "🎬 Toca «Ver vídeo» para ver cómo se hace. Apunta kg y reps de cada serie en Seguimiento."
  },
  "extraCompra": [
    [
      "Creatina monohidratada",
      "8 g/día (56 g)"
    ]
  ],
  "historial": [
    {
      "fecha": "2 nov",
      "texto": "Nuevas alternativas para cambiar si quieres: alcachofa en lugar de judía verde (mismos gramos) y ñoquis de patata en lugar de arroz, pasta, patata o boniato (los gramos de ñoquis los tienes en cada comida). En el entreno del lunes, el press banca inclinado pasa a press inclinado en máquina. El resto del plan sigue igual."
    }
  ],
  "dias": [
    {
      "dia": "LUN",
      "kcal": 1730,
      "comidas": [
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "salmon",
              90
            ],
            [
              "arroz",
              100
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              60
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "pollo",
              240
            ],
            [
              "boniato",
              425
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "MAR",
      "kcal": 1662,
      "comidas": [
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "rodaballo",
              152
            ],
            [
              "pasta",
              95
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              60
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "carne_picada",
              180
            ],
            [
              "patata",
              495
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "MIÉ",
      "kcal": 1710,
      "comidas": [
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "hamburguesa",
              110
            ],
            [
              "arroz",
              100
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              60
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "rodaballo",
              306
            ],
            [
              "boniato",
              395
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "JUE",
      "kcal": 2042,
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "pavo",
              145
            ],
            [
              "pan_integral",
              150
            ],
            [
              "aguacate",
              20
            ],
            [
              "arandanos",
              80
            ]
          ]
        },
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "salmon",
              90
            ],
            [
              "arroz",
              100
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              30
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "pollo",
              150
            ],
            [
              "patata",
              490
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "VIE",
      "kcal": 1666,
      "comidas": [
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "ternera",
              130
            ],
            [
              "pasta",
              90
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              60
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "rodaballo",
              241
            ],
            [
              "boniato",
              435
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "SÁB",
      "kcal": 2050,
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "pavo",
              145
            ],
            [
              "pan_integral",
              150
            ],
            [
              "aguacate",
              20
            ],
            [
              "arandanos",
              80
            ]
          ]
        },
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "pollo",
              150
            ],
            [
              "arroz",
              100
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              30
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "salmon",
              90
            ],
            [
              "boniato",
              425
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    },
    {
      "dia": "DOM",
      "kcal": 2054,
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO",
          "clase": "ct-orange",
          "items": [
            [
              "pavo",
              145
            ],
            [
              "pan_integral",
              150
            ],
            [
              "aguacate",
              20
            ],
            [
              "arandanos",
              80
            ]
          ]
        },
        {
          "titulo": "🥗 C2 — ALMUERZO",
          "clase": "ct-yellow",
          "items": [
            [
              "carne_picada",
              120
            ],
            [
              "arroz",
              100
            ],
            [
              "judia_verde",
              150
            ],
            [
              "manzana",
              130
            ]
          ]
        },
        {
          "titulo": "💪 C3 — POST ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "tortitas_jamon",
              35
            ],
            [
              "isolate",
              30
            ],
            [
              "creatina",
              8
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "rodaballo",
              161
            ],
            [
              "boniato",
              430
            ],
            [
              "judia_verde",
              150
            ]
          ]
        }
      ]
    }
  ],
  "rutina": [
    {
      "id": "LUN",
      "emoji": "🟥",
      "color": "#ff6b6b",
      "cc": "#ff6b6b",
      "chip": "LUN · Full Body",
      "titulo": "LUNES — FULL BODY",
      "ejercicios": [
        {
          "nombre": "Jalón al pecho barra recta",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtu.be/55X8yLezpwc"
        },
        {
          "nombre": "Remo en máquina agarre neutro (2 manos)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/c-e5Gojxh8I"
        },
        {
          "nombre": "Press inclinado en máquina",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://www.youtube.com/watch?v=T4M8IIKyFdk",
          "nuevo": true
        },
        {
          "nombre": "Laterales mancuerna (banco inclinado atrás)",
          "reps": [
            "8",
            "8",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=j2tjiP-YoDU"
        },
        {
          "nombre": "Fondos con peso corporal (tríceps)",
          "reps": [
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/s5BLhbKWD3E"
        },
        {
          "nombre": "Tríceps katana unilateral",
          "reps": [
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/HNH6a33SZB0"
        },
        {
          "nombre": "Curl mancuernas (banco inclinado atrás)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://www.youtube.com/watch?v=ysEVZPMY0Y8"
        },
        {
          "nombre": "Dragon flag (abdominales)",
          "reps": [
            "fallo",
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/O6Jocf8FC4I"
        }
      ]
    },
    {
      "id": "MIE",
      "emoji": "🦵",
      "color": "#ffd166",
      "cc": "#ffd166",
      "chip": "MIÉ · Pierna",
      "titulo": "MIÉRCOLES — PIERNA",
      "ejercicios": [
        {
          "nombre": "Sentadilla multipower c/ almohadilla espalda",
          "reps": [
            "6",
            "8",
            "9"
          ],
          "video": "https://www.youtube.com/watch?v=xNRI7xVZpAQ"
        },
        {
          "nombre": "Búlgara unilateral (pierna en banco)",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=7bV1tIUC2Es"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "6",
            "8",
            "9"
          ],
          "video": "https://www.youtube.com/watch?v=PAPf4i-VJoc"
        },
        {
          "nombre": "Curl femoral tumbado",
          "reps": [
            "8",
            "10",
            "10"
          ],
          "video": "https://www.youtube.com/watch?v=9xbBr5Ytl8c"
        },
        {
          "nombre": "Gemelo de pie en escalera (peso en mano)",
          "reps": [
            "fallo",
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/JhDqNv2DoAU"
        }
      ]
    },
    {
      "id": "JUE",
      "emoji": "🔵",
      "color": "#6fd0ff",
      "cc": "#6fd0ff",
      "chip": "JUE · Pecho",
      "titulo": "JUEVES — PECHO · HOMBRO · TRÍCEPS",
      "ejercicios": [
        {
          "nombre": "Press inclinado en multipower",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/6Ijq_ukPE50"
        },
        {
          "nombre": "Peck deck (aperturas pecho)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/HL88KYqhzQI"
        },
        {
          "nombre": "Press militar con mancuernas",
          "reps": [
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/PWtkHROaH3Y"
        },
        {
          "nombre": "Elevaciones laterales en polea",
          "reps": [
            "8",
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/_2fqg87DE1g"
        },
        {
          "nombre": "Tríceps polea unilateral (muñequera)",
          "reps": [
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/hip11n3QXzU"
        },
        {
          "nombre": "Press francés",
          "reps": [
            "6",
            "8",
            "9"
          ],
          "video": "https://youtu.be/hBz7jSJM3Yw"
        }
      ]
    },
    {
      "id": "VIE",
      "emoji": "🔴",
      "color": "#ff8fb1",
      "cc": "#ff8fb1",
      "chip": "VIE · Espalda",
      "titulo": "VIERNES — ESPALDA · BÍCEPS",
      "ejercicios": [
        {
          "nombre": "Jalón al pecho agarre cerrado",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/bBM95Ir4zCs"
        },
        {
          "nombre": "Remo alto en máquina (codos abiertos)",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtube.com/shorts/rcS3dvtBXDY"
        },
        {
          "nombre": "Jalón al pecho agarre supino unilateral",
          "reps": [
            "8",
            "10"
          ],
          "video": "https://youtu.be/QSN4qb6OPtY"
        },
        {
          "nombre": "Pullover con cuerda",
          "reps": [
            "10",
            "12"
          ],
          "video": "https://youtube.com/shorts/dX5DHCZ-7p8"
        },
        {
          "nombre": "Curl predicador",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/vq9JynSsol8"
        },
        {
          "nombre": "Curl bíceps barra (agarre ancho hombros)",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/l-BPupny6cM"
        },
        {
          "nombre": "Dragon flag (abdominales)",
          "reps": [
            "fallo",
            "fallo",
            "fallo"
          ],
          "video": "https://youtube.com/shorts/O6Jocf8FC4I"
        }
      ]
    }
  ],
  "ajuste": {
    "nuevos": [
      [
        "🥬 Alcachofa",
        "en lugar de judía verde, mismos gramos"
      ],
      [
        "🥔 Ñoquis de patata",
        "en lugar de arroz, pasta, patata o boniato"
      ],
      [
        "🏋️ Press inclinado en máquina",
        "lunes, en lugar del press banca inclinado"
      ]
    ]
  },
  "renombres": {
    "LUN|Press banca inclinado": "Press inclinado en máquina"
  },
  "alternativas": {
    "arroz": [
      {
        "k": "noquis",
        "modo": "kcal",
        "nuevo": true
      }
    ],
    "pasta": [
      {
        "k": "noquis",
        "modo": "kcal",
        "nuevo": true
      }
    ],
    "patata": [
      {
        "k": "noquis",
        "modo": "kcal",
        "nuevo": true
      }
    ],
    "boniato": [
      {
        "k": "noquis",
        "modo": "kcal",
        "nuevo": true
      }
    ],
    "judia_verde": [
      {
        "k": "alcachofa",
        "modo": "peso",
        "nuevo": true
      }
    ]
  }
};
