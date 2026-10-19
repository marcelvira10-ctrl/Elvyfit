/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.pan_integral   = AL.pan_integral   || { n:"Pan integral",                p:10.0, c:48.0, g:3.5,  crudo:false, ok:false, cat:"carbo" };
  AL.carne_picada   = AL.carne_picada   || { n:"Carne picada de vacuno",      p:21.0, c:0.0,  g:6.0,  crudo:true,  ok:false, cat:"prote" };
  AL.hamburguesa    = AL.hamburguesa    || { n:"Hamburguesa de ternera",      p:18.0, c:1.0,  g:14.0, crudo:true,  ok:false, cat:"prote" };
  AL.tortitas_jamon = AL.tortitas_jamon || { n:"Tortitas de maíz sabor jamón", p:7.0,  c:80.0, g:3.5,  crudo:false, ok:false, cat:"carbo" };
}

var CLIENTE = {
  "nombre": "SERGI",
  "apellido": "Yáñez Sampedro",
  "slug": "chechu",
  "clave": "chechu_plan_v1",
  "claveAntigua": "chechu_tracking_v0",
  "kcal": 2005,
  "peso": 94,
  "pasos": 9500,
  "ratios": {
    "p": 1.6,
    "g": 0.33
  },
  "soloEstos": ["arroz", "pasta", "patata", "boniato"],
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
      "fecha": "19 oct",
      "texto": "Definición: 2.005 kcal al día con 150 g de proteína, 31 g de grasa y 282 g de carbohidratos (0,33 g/kg de grasa). Pasos de 9.000 a 10.000 y fútbol sala martes y jueves."
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
              80
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
              "rodaballo",
              152
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
              "carne_picada",
              130
            ],
            [
              "patata",
              420
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
              "hamburguesa",
              110
            ],
            [
              "arroz",
              80
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
              375
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
              80
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
      "dia": "VIE",
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
      "dia": "SÁB",
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
              80
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
              80
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
              445
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
          "nombre": "Press banca inclinado",
          "reps": [
            "6",
            "8"
          ],
          "video": "https://youtube.com/shorts/HboHdKXrYG8"
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
  ]
};
