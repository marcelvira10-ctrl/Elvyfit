/* ============================================================
   datos-marc-torres.js — Marc Torres (Elvyfit)
   Plan de inicio 6/11/2026 · 2.450 kcal · P 1,6 g/kg · G 0,4 g/kg
   ============================================================ */
/* Alimentos que el motor común no tiene todavía (referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.mandarina = AL.mandarina || { n:"Mandarina", p:0.8, c:10.0, g:0.3, crudo:false, ok:false, cat:"fruta" };
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
    "aguacate": "Aguacate (medio)"
  },
  "progreso": {},
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
      "fecha": "9 nov",
      "texto": "Cambiamos los arándanos del desayuno (C1) por 2 mandarinas: 145 g, las mismas kcal. Lo demás de tu plan sigue igual."
    }
  ],
  "ajuste": {
    "nuevos": [
      ["🍊 Desayuno (C1): mandarinas en lugar de arándanos", "NUEVO · 145 g (2 mandarinas)"]
    ],
    "nuevosAlimentos": ["mandarina"]
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
          "nombre": "Jalón unilateral en polea con banco inclinado",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=8gNlj7wMklA"
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
          "nombre": "Fondos de tríceps (en máquina o libres)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/N1Yd3QvShQE",
          "nota": "⚡ Superserie con el crunch en máquina: acabas los fondos y sin descanso haces la de abdominales. Luego los 3 min."
        },
        {
          "nombre": "Crunch abdominal en máquina (superserie)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://youtube.com/shorts/9UA6L8ADUfI",
          "nota": "⚡ Va pegado a los fondos, sin descanso entre los dos."
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
  ]
};
