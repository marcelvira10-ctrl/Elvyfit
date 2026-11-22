/* ============================================================
   datos-marc-torres.js — Marc Torres (Elvyfit)
   Plan de inicio 6/11/2026 · 2.450 kcal · P 1,6 g/kg · G 0,4 g/kg
   ============================================================ */
/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.mandarina = AL.mandarina || { n:"Mandarina", p:0.8, c:10.0, g:0.3, crudo:false, ok:false, cat:"fruta" };
  AL.noquis = AL.noquis || { n:"Ñoquis de patata", p:4.5, c:37.5, g:0.4, crudo:false, ok:false, cat:"carbo" };
  AL.tortilla_int = AL.tortilla_int || { n:"Tortillas de trigo integrales", p:9.5, c:48.0, g:7.5, crudo:false, ok:false, cat:"carbo" };
  AL.cebolla = AL.cebolla || { n:"Cebolla", p:1.2, c:6.0, g:0.1, crudo:true, ok:false, cat:"verdura" };
  AL.soja = AL.soja || { n:"Salsa de soja", p:8.0, c:5.0, g:0.0, crudo:false, ok:false, cat:"otros" };
  AL.esparrago = AL.esparrago || { n:"Espárragos verdes", p:2.2, c:2.0, g:0.2, crudo:true, ok:false, cat:"verdura" };
  AL.arroz_inflado = AL.arroz_inflado || { n:"Arroz inflado", p:6.0, c:84.0, g:1.5, crudo:false, ok:false, cat:"carbo" };
  AL.lomo_cerdo = AL.lomo_cerdo || { n:"Cinta de lomo de cerdo", p:21.0, c:0.0, g:5.0, crudo:true, ok:false, cat:"prote" };
}

var CLIENTE = {
  "nombre": "MARC",
  "apellido": "Torres",
  "slug": "marc-torres",
  "clave": "marc_torres_plan_v1",
  "kcal": 2450,
  "peso": 90.75,
  "pasos": 14000,
  "ratios": {
    "p": 1.6,
    "g": 0.4
  },
  "soloEstos": [
    "arroz",
    "patata",
    "boniato"
  ],
  "textos": {
    "pollo": "Pechuga de pollo fileteada (Mercadona)",
    "pavo": "Solomillo de pavo (Mercadona)",
    "ternera": "Filetes de ternera blanca (Mercadona)",
    "lomo_cerdo": "Cinta de lomo de cerdo en filetes (Mercadona · sin la grasa del borde)",
    "tortas_arroz": "Tortitas de arroz (Hacendado · las normales)",
    "crema_arroz": "Crema de arroz (harina de arroz Hacendado · con agua)",
    "isolate": "Proteína aislada Zumub 100% Whey Isolate",
    "mandarina": "Mandarina",
    "manzana": "Manzana",
    "aove": "Aceite de oliva virgen extra (medido con cuchara)",
    "omega3": "Omega 3 Zumub (cápsulas)",
    "creatina": "Creatina monohidrato Zumub",
    "arroz": "Arroz blanco",
    "patata": "Patata",
    "boniato": "Boniato",
    "pasta": "Pasta integral",
    "brocoli": "Brócoli",
    "judia_verde": "Judía verde",
    "calabacin": "Calabacín",
    "pimiento": "Pimiento rojo y verde",
    "pan_espelta": "Pan de espelta 100% integral",
    "huevo": "Huevo entero",
    "claras": "Claras de huevo (brick Hacendado)",
    "aguacate": "Aguacate (medio)",
    "noquis": "Ñoquis de patata (Hacendado)",
    "tortilla_int": "Tortillas de trigo integrales (Hacendado)",
    "cebolla": "Cebolla",
    "soja": "Salsa de soja",
    "esparrago": "Espárragos verdes",
    "arroz_inflado": "Arroz inflado sin azúcar",
    "ensalada": "Lechuga o mezcla de ensalada",
    "tomate": "Tomate",
    "pepino": "Pepino",
    "zanahoria": "Zanahoria",
    "cherry": "Tomate cherry",
    "tom_triturado": "Tomate triturado (Hacendado)",
    "champinon": "Champiñones",
    "queso_batido": "Queso fresco batido 0 % (Hacendado)",
    "avena": "Copos de avena",
    "datiles": "Dátiles (sin hueso)",
    "platano": "Plátano (pelado)"
  },
  "progreso": {
    "LUN": {
      "Press inclinado en máquina": {
        "1": [
          "20x11",
          "22x9"
        ],
        "2": [
          "50x9",
          "50x6"
        ]
      },
      "Jalón al pecho agarre neutro": {
        "1": [
          "50x8",
          "55x7"
        ],
        "2": [
          "50x10",
          "55x8"
        ]
      },
      "Remo en T": {
        "1": [
          "35x14",
          "45x10"
        ],
        "2": [
          "55x10",
          "60x10"
        ]
      },
      "Elevaciones laterales con mancuernas": {
        "1": [
          "7x10",
          "8x8"
        ],
        "2": [
          "8x9",
          "9x7"
        ]
      },
      "Curl predicador en máquina": {
        "1": [
          "12.5x10",
          "12.5x7"
        ],
        "2": [
          "12.5x10",
          "15x5"
        ]
      },
      "Extensión de tríceps en polea con barra recta": {
        "1": [
          "17.5x15",
          "20x10"
        ],
        "2": [
          "20x11",
          "25x8"
        ]
      },
      "Crunch abdominal en máquina (superserie)": {
        "1": [
          "45x10",
          "45x12"
        ],
        "2": [
          "50x9",
          "50x8"
        ]
      }
    },
    "MAR": {
      "Sentadilla hack en máquina": {
        "1": [
          "40x8",
          "40x9"
        ],
        "2": [
          "40x10",
          "40x9"
        ]
      },
      "Prensa de piernas": {
        "1": [
          "40x14",
          "80x12"
        ],
        "2": [
          "80x10",
          "80x10"
        ]
      },
      "Extensión de cuádriceps en máquina": {
        "1": [
          "25x16",
          "40x9"
        ],
        "2": [
          "35x10",
          "45x10"
        ]
      },
      "Abductor en máquina (triserie 1/3)": {
        "1": [
          "40x20",
          "50x18"
        ],
        "2": [
          "50x13",
          "50x14"
        ]
      },
      "Aductor en máquina (triserie 2/3)": {
        "1": [
          "25x20",
          "30x20"
        ],
        "2": [
          "50x11",
          "50x11"
        ]
      },
      "Gemelo sentado en máquina (triserie 3/3)": {
        "1": [
          "20x12",
          "20x10"
        ],
        "2": [
          "40x6",
          "35x8"
        ]
      },
      "Curl femoral sentado en máquina": {
        "2": [
          "40x10",
          "45x8"
        ]
      }
    },
    "JUE": {
      "Jalón en máquina unilateral": {
        "1": [
          "20x12",
          "30x7"
        ],
        "2": [
          "25x10",
          "38x8"
        ]
      },
      "Remo bajo en máquina": {
        "1": [
          "50x12",
          "60x5"
        ],
        "2": [
          "55x9",
          "55x8"
        ]
      },
      "Elevaciones laterales en polea": {
        "1": [
          "7.5x10",
          "7.5x8"
        ],
        "2": [
          "7.5x8",
          "10x6"
        ]
      },
      "Curl de bíceps con codos apoyados (banco Scott)": {
        "1": [
          "12.5x10",
          "12.5x8"
        ],
        "2": [
          "12.5x9",
          "15x6"
        ]
      },
      "Crunch abdominal en máquina (superserie)": {
        "1": [
          "35x20",
          "45x14"
        ],
        "2": [
          "55x9",
          "55x8"
        ]
      },
      "Peck deck (aperturas pecho)": {
        "2": [
          "25x8",
          "25x8"
        ]
      }
    },
    "VIE": {
      "Sentadilla hack en máquina": {
        "1": [
          "40x8",
          "40x8"
        ],
        "2": [
          "45x7",
          "45x6"
        ]
      },
      "Prensa de piernas": {
        "1": [
          "66x12",
          "79x11"
        ],
        "2": [
          "85x10",
          "85x8"
        ]
      },
      "Extensión de cuádriceps en máquina": {
        "1": [
          "39x10",
          "45x10"
        ],
        "2": [
          "45x8",
          "45x7"
        ]
      },
      "Curl femoral sentado en máquina": {
        "1": [
          "39x9",
          "45x8"
        ],
        "2": [
          "45x8",
          "45x6"
        ]
      },
      "Abductor en máquina (triserie 1/3)": {
        "1": [
          "59x14",
          "66x12"
        ],
        "2": [
          "66x10",
          "73x8"
        ]
      },
      "Aductor en máquina (triserie 2/3)": {
        "1": [
          "66x15",
          "73x12"
        ],
        "2": [
          "66x9",
          "73x7"
        ]
      },
      "Gemelo sentado en máquina (triserie 3/3)": {
        "1": [
          "20x12",
          "40x10"
        ],
        "2": [
          "35x8",
          "35x7"
        ]
      }
    },
    "pesoCorporal": {
      "1": "91",
      "2": "90.5"
    },
    "pasosSemana": {
      "1": 8200
    }
  },
  "perfil": {
    "edad": 22,
    "altura": 185,
    "sexo": "hombre",
    "trabajo": 60,
    "gymDias": 4,
    "gymMin": 60,
    "deporte": "Fútbol (pachanga)",
    "deporteDias": 1,
    "deporteMin": 60
  },
  "entreno": {
    "detalle": "🔥 <b>2 series</b>: la 1ª a <b>6-8 reps</b> y la 2ª a <b>8-10 reps</b> · <b>RIR 0</b> · ritmo 2-1-1-1 (2 s bajada, 1 s pausa, 1 s subida, 1 s contracción) · ⏱️ <b>3 min de descanso</b> (a los 2:45 ya estás colocado en la máquina)",
    "tip": "🎬 Toca «Ver vídeo» para ver cómo se hace. Apunta kg y reps de cada serie en Progreso."
  },
  "extraCompra": [
    [
      "Si haces la opción B del desayuno (por día)",
      "1 reb. pan espelta 55 g · 1 huevo · 170 ml claras · ½ aguacate"
    ]
  ],
  "historial": [
    {
      "fecha": "22 nov",
      "texto": "Semana 2: 91 → 90,5 kg y subiendo cargas, vamos por buen camino. Nueva pestaña VARIACIONES: comidas y cenas con las mismas kcal (macarrones, wok, ñoquis, burritos, bandeja al horno, lomo con arroz, hamburguesa casera), verduras y ensaladas para cambiar el brócoli, sustitutos de las tortitas y su lista de la compra. En PROGRESO tienes tus pesos objetivo de la semana 3. Las kcal y lo demás de tu plan siguen igual."
    }
  ],
  "ajuste": {
    "nuevos": [
      [
        "🔁 Pestaña VARIACIONES",
        "NUEVO · comidas y cenas con las mismas kcal"
      ],
      [
        "🥗 Verduras y ensaladas",
        "NUEVO · cambia el brócoli por la que quieras"
      ],
      [
        "🍘 Sustitutos de las tortitas",
        "NUEVO · mismas kcal"
      ],
      [
        "🎯 Objetivos semana 3",
        "NUEVO · en PROGRESO"
      ]
    ],
    "nuevosAlimentos": []
  },
  "renombres": {
    "JUE|Fondos de tríceps (en máquina o libres)": "Extensión de tríceps por encima de la cabeza unilateral en polea",
    "JUE|Jalón unilateral en polea con banco inclinado": "Jalón en máquina unilateral"
  },
  "alternativas": {
    "arroz": [
      {
        "k": "pasta",
        "modo": "kcal"
      }
    ],
    "patata": [
      {
        "k": "boniato",
        "modo": "kcal"
      },
      {
        "k": "arroz",
        "modo": "kcal"
      }
    ],
    "boniato": [
      {
        "k": "patata",
        "modo": "kcal"
      },
      {
        "k": "arroz",
        "modo": "kcal"
      }
    ],
    "tortas_arroz": [
      {
        "k": "crema_arroz",
        "modo": "kcal",
        "en": "C3"
      }
    ]
  },
  "ficha": {
    "objetivo": "Perder grasa y ganar músculo (recomposición en déficit)",
    "fase": "Inicio · déficit de 400 kcal",
    "inicio": "6 nov 2026",
    "meta": "def",
    "resumen": "22 años, 1,85 m, 90,75 kg. Oficina de 9 a 19 (sentado casi todo el día) y FGC a Barcelona. Un año sin entrenar regular. Quiere marcarse, ganar algo de tamaño y seguir atlético para el fútbol.",
    "pasos": "15.000 al día (8.000 el miércoles + partido)",
    "agua": "3-3,5 L",
    "suplementos": [
      "Proteína aislada Zumub: 2 scoops al día (C1 y C3)",
      "Creatina monohidrato: 5 g al día (C3)",
      "Omega 3: 3 cápsulas al día con la cena (no come pescado)"
    ],
    "habitos": [
      [
        "Sueño",
        "7 h"
      ],
      [
        "Estrés",
        "6-7 / 10"
      ],
      [
        "Alcohol",
        "alguna copa el finde; cubatas 1 finde al mes"
      ],
      [
        "Cachimba",
        "hasta 2 al mes"
      ]
    ],
    "objetivos": [
      "Bajar ~0,4 kg por semana sin perder fuerza",
      "Subir cargas cada semana (sobrecarga progresiva)",
      "Llegar a 15.000 pasos cada día menos el miércoles"
    ],
    "notas": [
      "No le gusta el pescado (omega 3 en cápsulas), ni el queso sin cocinar, ni las olivas",
      "Come fuera algún día según la semana",
      "Prepara tuppers; microondas en el trabajo"
    ],
    "hitos": [
      {
        "fecha": "6 nov 2026",
        "texto": "Empieza el plan: 2.450 kcal, Upper/Lower 4 días, 15.000 pasos"
      }
    ]
  },
  "dias": [
    {
      "dia": "LUN",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "pollo",
              110
            ],
            [
              "arroz",
              145
            ],
            [
              "brocoli",
              200
            ],
            [
              "aove",
              11
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "ternera",
              110
            ],
            [
              "patata",
              725
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              8
            ],
            [
              "omega3",
              3
            ]
          ]
        }
      ]
    },
    {
      "dia": "MAR",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "pavo",
              115
            ],
            [
              "arroz",
              135
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "lomo_cerdo",
              115
            ],
            [
              "boniato",
              675
            ],
            [
              "brocoli",
              200
            ],
            [
              "aove",
              8
            ],
            [
              "omega3",
              3
            ]
          ]
        }
      ]
    },
    {
      "dia": "MIÉ",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "pollo",
              120
            ],
            [
              "arroz",
              145
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "ternera",
              120
            ],
            [
              "patata",
              715
            ],
            [
              "pimiento",
              200
            ],
            [
              "aove",
              8
            ],
            [
              "omega3",
              3
            ]
          ]
        }
      ]
    },
    {
      "dia": "JUE",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "pavo",
              115
            ],
            [
              "arroz",
              130
            ],
            [
              "brocoli",
              200
            ],
            [
              "aove",
              12
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "pollo",
              115
            ],
            [
              "boniato",
              660
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              10
            ],
            [
              "omega3",
              3
            ]
          ]
        }
      ]
    },
    {
      "dia": "VIE",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "pollo",
              110
            ],
            [
              "arroz",
              145
            ],
            [
              "pimiento",
              200
            ],
            [
              "aove",
              9
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "lomo_cerdo",
              110
            ],
            [
              "patata",
              720
            ],
            [
              "brocoli",
              200
            ],
            [
              "aove",
              7
            ],
            [
              "omega3",
              3
            ]
          ]
        }
      ]
    },
    {
      "dia": "SÁB",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "ternera",
              120
            ],
            [
              "arroz",
              145
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              10
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "pollo",
              120
            ],
            [
              "patata",
              735
            ],
            [
              "calabacin",
              200
            ],
            [
              "aove",
              8
            ],
            [
              "omega3",
              3
            ]
          ]
        }
      ]
    },
    {
      "dia": "DOM",
      "comidas": [
        {
          "titulo": "🍳 C1 — DESAYUNO (TUPPER OFI)",
          "clase": "ct-orange",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              63
            ],
            [
              "mandarina",
              145
            ]
          ],
          "opcionB": {
            "titulo": "Opción B · pan de espelta, huevo, claras y aguacate",
            "items": [
              [
                "pan_espelta",
                55
              ],
              [
                "huevo",
                60
              ],
              [
                "claras",
                170
              ],
              [
                "aguacate",
                70
              ]
            ],
            "nota": "Mismas kcal y misma proteína que la opción A. Lleva más grasa (aguacate y huevo) y menos hidrato; el total del día no cambia. Ideal el finde o si desayunas en casa."
          }
        },
        {
          "titulo": "🥗 C2 — COMIDA (TUPPER)",
          "clase": "ct-yellow",
          "items": [
            [
              "pavo",
              120
            ],
            [
              "arroz",
              130
            ],
            [
              "brocoli",
              200
            ],
            [
              "aove",
              12
            ]
          ]
        },
        {
          "titulo": "🍎 C3 — MERIENDA (TUPPER)",
          "clase": "ct-green",
          "items": [
            [
              "isolate",
              30
            ],
            [
              "tortas_arroz",
              56
            ],
            [
              "manzana",
              200
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA (EN CASA)",
          "clase": "ct-purple",
          "items": [
            [
              "ternera",
              120
            ],
            [
              "boniato",
              660
            ],
            [
              "judia_verde",
              200
            ],
            [
              "aove",
              9
            ],
            [
              "omega3",
              3
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
      "chip": "LUN · Upper 1",
      "titulo": "LUNES — UPPER 1 · PECHO · ESPALDA · HOMBRO · BRAZO + ABS",
      "ejercicios": [
        {
          "nombre": "Press inclinado en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/MlLOzsUSZZg"
        },
        {
          "nombre": "Jalón al pecho agarre neutro",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/mtyPkNukKKE"
        },
        {
          "nombre": "Remo en T",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/RsQUTVBL25E"
        },
        {
          "nombre": "Elevaciones laterales con mancuernas",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/QgpNsybiDoE"
        },
        {
          "nombre": "Curl predicador en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/zk8JJELT6dE"
        },
        {
          "nombre": "Extensión de tríceps en polea con barra recta",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/jDEmN9FwS1U",
          "nota": "⚡ Superserie con el crunch en máquina: acabas la serie de tríceps y sin descanso haces la de abdominales. Luego los 3 min."
        },
        {
          "nombre": "Crunch abdominal en máquina (superserie)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI",
          "nota": "⚡ Va pegado a la extensión de tríceps con barra, sin descanso entre los dos."
        }
      ]
    },
    {
      "id": "MAR",
      "emoji": "🦵",
      "color": "#ffd166",
      "cc": "#ffd166",
      "chip": "MAR · Lower",
      "titulo": "MARTES — LOWER · PIERNA COMPLETA",
      "ejercicios": [
        {
          "nombre": "Sentadilla hack en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/Gmq0SBcaZz4"
        },
        {
          "nombre": "Prensa de piernas",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/B2T2F2pa-co"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/lUaVtil2FHc"
        },
        {
          "nombre": "Curl femoral sentado en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/p1jzT2MUGvk"
        },
        {
          "nombre": "Abductor en máquina (triserie 1/3)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/-8GDbWX1MQo",
          "nota": "⚡ TRISERIE: abductor → aductor → gemelo sentado, seguidos y sin descanso entre ellos. Al acabar el gemelo, los 3 min y vuelves a empezar."
        },
        {
          "nombre": "Aductor en máquina (triserie 2/3)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/_9aRtyNy4Ik",
          "nota": "⚡ TRISERIE: va justo después del abductor, sin descanso. Luego el gemelo."
        },
        {
          "nombre": "Gemelo sentado en máquina (triserie 3/3)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/mwqmUDZINrQ",
          "nota": "⚡ TRISERIE: cierra la triserie. Ahora sí, 3 min de descanso."
        }
      ]
    },
    {
      "id": "JUE",
      "emoji": "🔵",
      "color": "#6fd0ff",
      "cc": "#6fd0ff",
      "chip": "JUE · Upper 2",
      "titulo": "JUEVES — UPPER 2 · ESPALDA · PECHO · HOMBRO · BRAZO + ABS",
      "ejercicios": [
        {
          "nombre": "Jalón en máquina unilateral",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/X5e1dC0bRIk",
          "nuevo": true
        },
        {
          "nombre": "Remo bajo en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=TKPHugihgiA"
        },
        {
          "nombre": "Peck deck (aperturas pecho)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/rfVptEGJOsU"
        },
        {
          "nombre": "Elevaciones laterales en polea",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/YnKUoDiszTY"
        },
        {
          "nombre": "Curl de bíceps con codos apoyados (banco Scott)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/KBVGI8S3Foo"
        },
        {
          "nombre": "Extensión de tríceps por encima de la cabeza unilateral en polea",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/HNH6a33SZB0",
          "nuevo": true,
          "nota": "⚡ Superserie con el crunch en máquina: acabas la extensión (las dos series con cada brazo) y sin descanso haces la de abdominales. Luego los 3 min."
        },
        {
          "nombre": "Crunch abdominal en máquina (superserie)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI",
          "nota": "⚡ Va pegado a la extensión de tríceps por encima de la cabeza, sin descanso entre los dos."
        }
      ]
    },
    {
      "id": "VIE",
      "emoji": "🟡",
      "color": "#ffb84d",
      "cc": "#ffb84d",
      "chip": "VIE · Lower",
      "titulo": "VIERNES — LOWER · PIERNA COMPLETA",
      "ejercicios": [
        {
          "nombre": "Sentadilla hack en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/Gmq0SBcaZz4"
        },
        {
          "nombre": "Prensa de piernas",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/B2T2F2pa-co"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/lUaVtil2FHc"
        },
        {
          "nombre": "Curl femoral sentado en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/p1jzT2MUGvk"
        },
        {
          "nombre": "Abductor en máquina (triserie 1/3)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/-8GDbWX1MQo",
          "nota": "⚡ TRISERIE: abductor → aductor → gemelo sentado, seguidos y sin descanso entre ellos. Al acabar el gemelo, los 3 min y vuelves a empezar."
        },
        {
          "nombre": "Aductor en máquina (triserie 2/3)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/_9aRtyNy4Ik",
          "nota": "⚡ TRISERIE: va justo después del abductor, sin descanso. Luego el gemelo."
        },
        {
          "nombre": "Gemelo sentado en máquina (triserie 3/3)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/mwqmUDZINrQ",
          "nota": "⚡ TRISERIE: cierra la triserie. Ahora sí, 3 min de descanso."
        }
      ]
    }
  ],
  "variaciones": {
    "c2": [
      {
        "titulo": "Macarrones integrales con sofrito y ternera a trozos",
        "items": [
          [
            "cebolla",
            50
          ],
          [
            "pimiento",
            50
          ],
          [
            "tom_triturado",
            150
          ],
          [
            "ternera",
            80
          ],
          [
            "pasta",
            165
          ],
          [
            "aove",
            7
          ]
        ],
        "pasos": [
          "Cuece los macarrones (pésalos en crudo). Si los hacen en casa para todos, coge tu ración de la olla antes de mezclarla con la salsa de la familia: 165 g crudos son unos 365 g cocidos.",
          "Sofrito: cebolla y pimiento picados en el aceite a fuego medio 8-10 min, añade el tomate triturado, sal y orégano, 10 min más.",
          "La ternera a trozos pequeños, vuelta y vuelta en la sartén y a la salsa. Mezcla con los macarrones."
        ]
      },
      {
        "titulo": "Wok de arroz con pollo y verduras",
        "items": [
          [
            "pimiento",
            100
          ],
          [
            "calabacin",
            100
          ],
          [
            "zanahoria",
            50
          ],
          [
            "soja",
            15
          ],
          [
            "pollo",
            120
          ],
          [
            "arroz",
            135
          ],
          [
            "aove",
            10
          ]
        ],
        "pasos": [
          "Cuece el arroz.",
          "Saltea en el aceite el pollo a tiras y luego la verdura en tiras finas, fuego fuerte.",
          "Junta todo con la salsa de soja 2 minutos."
        ]
      },
      {
        "titulo": "Ñoquis con pavo, tomate y champiñones",
        "items": [
          [
            "cebolla",
            50
          ],
          [
            "champinon",
            100
          ],
          [
            "tom_triturado",
            150
          ],
          [
            "pavo",
            100
          ],
          [
            "noquis",
            270
          ],
          [
            "aove",
            12
          ]
        ],
        "pasos": [
          "Sofríe la cebolla y los champiñones en el aceite.",
          "Añade el pavo a dados y después el tomate triturado; 10 min.",
          "Ñoquis 2-3 min en agua hirviendo (cuando flotan, fuera) y a la salsa. Pésalos tal cual salen del paquete."
        ]
      },
      {
        "titulo": "Burritos de pollo y arroz",
        "items": [
          [
            "tortilla_int",
            80
          ],
          [
            "pollo",
            95
          ],
          [
            "arroz",
            85
          ],
          [
            "pimiento",
            80
          ],
          [
            "cebolla",
            50
          ],
          [
            "cherry",
            50
          ],
          [
            "queso_batido",
            50
          ],
          [
            "aove",
            5
          ]
        ],
        "pasos": [
          "Pollo y verdura a la plancha (el aceite aquí); mezcla con el arroz cocido.",
          "Salsa: el queso batido 0 % con pimentón, comino, ajo en polvo y sal.",
          "Rellena las 2 tortillas y enrolla. Aguantan en tupper y van al micro."
        ]
      }
    ],
    "c4": [
      {
        "titulo": "Bandeja al horno: pollo, patata y pimientos",
        "items": [
          [
            "pimiento",
            150
          ],
          [
            "cebolla",
            80
          ],
          [
            "pollo",
            110
          ],
          [
            "patata",
            720
          ],
          [
            "aove",
            10
          ]
        ],
        "pasos": [
          "Patata a gajos con el aceite, sal y especias: 25 min a 200 °C.",
          "Añade el pollo a trozos, el pimiento y la cebolla: 15-20 min más."
        ]
      },
      {
        "titulo": "Lomo con arroz y verduras salteadas",
        "items": [
          [
            "calabacin",
            100
          ],
          [
            "champinon",
            100
          ],
          [
            "pimiento",
            50
          ],
          [
            "lomo_cerdo",
            105
          ],
          [
            "arroz",
            175
          ],
          [
            "aove",
            5
          ]
        ],
        "pasos": [
          "Cuece el arroz.",
          "Lomo a la plancha y verduras salteadas con el aceite. Todo junto."
        ]
      },
      {
        "titulo": "Hamburguesa casera de ternera con boniato al horno y ensalada",
        "items": [
          [
            "ensalada",
            80
          ],
          [
            "cherry",
            100
          ],
          [
            "cebolla",
            30
          ],
          [
            "ternera",
            140
          ],
          [
            "boniato",
            640
          ],
          [
            "aove",
            8
          ]
        ],
        "pasos": [
          "Pica en casa el filete de ternera (o pide que te lo piquen), sal y especias, y forma la hamburguesa. La carne picada ya hecha del súper no vale: lleva mucha más grasa.",
          "Boniato en bastones con el aceite: 30-35 min a 200 °C.",
          "Ensalada con lechuga, cherry y cebolla, con vinagre o limón."
        ]
      }
    ],
    "verduras": [
      [
        "Ensalada mixta",
        [
          [
            "ensalada",
            80
          ],
          [
            "tomate",
            80
          ],
          [
            "pepino",
            40
          ],
          [
            "zanahoria",
            40
          ]
        ]
      ],
      [
        "Ensalada de tomate y cebolla",
        [
          [
            "tomate",
            170
          ],
          [
            "cebolla",
            30
          ]
        ]
      ],
      [
        "Tomate y pepino",
        [
          [
            "tomate",
            120
          ],
          [
            "pepino",
            80
          ]
        ]
      ],
      [
        "Lechuga y zanahoria rallada",
        [
          [
            "ensalada",
            120
          ],
          [
            "zanahoria",
            80
          ]
        ]
      ],
      [
        "Champiñones salteados",
        [
          [
            "champinon",
            200
          ]
        ]
      ],
      [
        "Pimientos asados",
        [
          [
            "pimiento",
            200
          ]
        ]
      ],
      [
        "Calabacín a la plancha",
        [
          [
            "calabacin",
            200
          ]
        ]
      ],
      [
        "Espárragos verdes a la plancha",
        [
          [
            "esparrago",
            200
          ]
        ]
      ],
      [
        "Verduras salteadas",
        [
          [
            "calabacin",
            70
          ],
          [
            "pimiento",
            70
          ],
          [
            "champinon",
            60
          ]
        ]
      ],
      [
        "Judía verde",
        [
          [
            "judia_verde",
            200
          ]
        ]
      ],
      [
        "Brócoli",
        [
          [
            "brocoli",
            200
          ]
        ]
      ]
    ],
    "tortitas": [
      "crema_arroz",
      "avena",
      "pan_espelta",
      "arroz_inflado",
      "platano",
      "datiles"
    ]
  },
  "objetivosSemana": {
    "semana": 3,
    "nota": "1ª serie la pesada (6-8 reps); 2ª serie baja ~10 % el peso (8-10 reps). Si llegas a 8 y a 10, la semana siguiente subes.",
    "dias": {
      "LUN": [
        [
          "Press inclinado en máquina",
          "52,5",
          "47,5"
        ],
        [
          "Jalón al pecho agarre neutro",
          "60",
          "52,5"
        ],
        [
          "Remo en T",
          "65",
          "57,5"
        ],
        [
          "Elevaciones laterales con mancuernas",
          "9",
          "8"
        ],
        [
          "Curl predicador en máquina",
          "15",
          "12,5"
        ],
        [
          "Extensión de tríceps en polea con barra recta",
          "27,5",
          "22,5"
        ],
        [
          "Crunch abdominal en máquina",
          "55",
          "50"
        ]
      ],
      "MAR": [
        [
          "Sentadilla hack en máquina",
          "45",
          "40"
        ],
        [
          "Prensa de piernas",
          "90",
          "80"
        ],
        [
          "Extensión de cuádriceps en máquina",
          "50",
          "45"
        ],
        [
          "Curl femoral sentado en máquina",
          "47,5",
          "42,5"
        ],
        [
          "Abductor en máquina",
          "55",
          "50"
        ],
        [
          "Aductor en máquina",
          "55",
          "50"
        ],
        [
          "Gemelo sentado en máquina",
          "40",
          "35"
        ]
      ],
      "JUE": [
        [
          "Jalón en máquina unilateral",
          "40",
          "35"
        ],
        [
          "Remo bajo en máquina",
          "60",
          "55"
        ],
        [
          "Peck deck (aperturas pecho)",
          "30",
          "25"
        ],
        [
          "Elevaciones laterales en polea",
          "10",
          "7,5"
        ],
        [
          "Curl de bíceps con codos apoyados (banco Scott)",
          "15",
          "12,5"
        ],
        [
          "Extensión de tríceps por encima de la cabeza unilateral en polea",
          "tantea",
          "y apunta"
        ],
        [
          "Crunch abdominal en máquina",
          "60",
          "55"
        ]
      ],
      "VIE": [
        [
          "Sentadilla hack en máquina",
          "45",
          "40"
        ],
        [
          "Prensa de piernas",
          "90",
          "80"
        ],
        [
          "Extensión de cuádriceps en máquina",
          "45",
          "40"
        ],
        [
          "Curl femoral sentado en máquina",
          "45",
          "40"
        ],
        [
          "Abductor en máquina",
          "73",
          "66"
        ],
        [
          "Aductor en máquina",
          "73",
          "66"
        ],
        [
          "Gemelo sentado en máquina",
          "40",
          "35"
        ]
      ]
    }
  }
};
