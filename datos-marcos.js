/* Alimento que el motor común no tiene todavía (valor de referencia, ok:false). */
if (typeof ELVYFIT !== "undefined") {
  var AL = ELVYFIT.ALIMENTOS;
  AL.pasta_integral = AL.pasta_integral || { n:"Pasta integral", p:13.0, c:63.0, g:2.5, crudo:true, ok:false, cat:"carbo" };
}

var CLIENTE = {
  "nombre": "MARCOS",
  "apellido": "Bandera Ortiz",
  "slug": "marcos",
  "clave": "marcos_plan_v1",
  "claveAntigua": "marcos_tracking_v0",
  "kcal": 2100,
  "peso": 116,
  "pasos": 15000,
  "ratios": {
    "p": 1.6,
    "g": 0.4
  },
  "gastoTotal": 3200,
  "soloEstos": [
    "patata",
    "boniato",
    "arroz",
    "pasta_integral"
  ],
  "perfil": {
    "edad": 28,
    "altura": 182,
    "sexo": "hombre",
    "trabajo": 60,
    "gymDias": 5,
    "gymMin": 60,
    "deporte": "Pádel",
    "deporteDias": 1,
    "deporteMin": 90
  },
  "entreno": {
    "detalle": "🔥 <b>Top set al fallo</b> desde la semana 3 (las 2 primeras, a 2 reps del fallo) · ⏱️ <b>3 min de descanso</b> · tempo 2-1-1",
    "tip": "🎬 Toca «Ver vídeo» para ver cómo se hace. Apunta kg y reps de cada serie en PROGRESO."
  },
  "extraCompra": [
    [
      "Creatina monohidrato",
      "5 g/día (35 g)"
    ]
  ],
  "historial": [
    {
      "fecha": "19 oct",
      "texto": "Plan de pérdida de grasa: 2.100 kcal al día con 186 g de proteína, 46 g de grasa y 235 g de carbohidratos. Ciclo PUSH · PULL · LEGS · DESCANSO. Pasos subiendo de 5.000 a 15.000 en 4 semanas."
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              85
            ],
            [
              "pollo",
              205
            ],
            [
              "cherry",
              120
            ],
            [
              "pepino",
              80
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              370
            ],
            [
              "merluza",
              290
            ],
            [
              "calabacin",
              250
            ],
            [
              "aove",
              5
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "pasta_integral",
              105
            ],
            [
              "pavo",
              180
            ],
            [
              "tom_triturado",
              100
            ],
            [
              "champinon",
              100
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
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
              180
            ],
            [
              "judia_verde",
              250
            ],
            [
              "aove",
              5
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              80
            ],
            [
              "merluza",
              280
            ],
            [
              "pimiento",
              120
            ],
            [
              "tomate",
              100
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "boniato",
              325
            ],
            [
              "pavo",
              200
            ],
            [
              "brocoli",
              250
            ],
            [
              "aove",
              5
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "boniato",
              340
            ],
            [
              "pollo",
              205
            ],
            [
              "ensalada",
              100
            ],
            [
              "zanahoria",
              80
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              355
            ],
            [
              "merluza",
              285
            ],
            [
              "judia_verde",
              250
            ],
            [
              "aove",
              5
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              85
            ],
            [
              "pavo",
              205
            ],
            [
              "cherry",
              120
            ],
            [
              "pepino",
              80
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              370
            ],
            [
              "pollo",
              205
            ],
            [
              "calabacin",
              250
            ],
            [
              "aove",
              5
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "pasta_integral",
              105
            ],
            [
              "pollo",
              180
            ],
            [
              "tom_triturado",
              100
            ],
            [
              "champinon",
              100
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "boniato",
              325
            ],
            [
              "merluza",
              250
            ],
            [
              "brocoli",
              250
            ],
            [
              "aove",
              5
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
              "pan_espelta",
              50
            ],
            [
              "claras",
              250
            ],
            [
              "huevo",
              60
            ],
            [
              "tomate",
              150
            ],
            [
              "leche",
              60
            ]
          ]
        },
        {
          "titulo": "🍱 C2 — COMIDA",
          "clase": "ct-yellow",
          "items": [
            [
              "arroz",
              80
            ],
            [
              "merluza",
              285
            ],
            [
              "ensalada",
              100
            ],
            [
              "cherry",
              120
            ],
            [
              "aove",
              5
            ]
          ]
        },
        {
          "titulo": "🥤 C3 — POST-ENTRENO",
          "clase": "ct-green",
          "items": [
            [
              "crema_arroz",
              50
            ],
            [
              "isolate",
              30
            ],
            [
              "platano",
              120
            ],
            [
              "creatina",
              5
            ]
          ]
        },
        {
          "titulo": "🌙 C4 — CENA",
          "clase": "ct-purple",
          "items": [
            [
              "patata",
              380
            ],
            [
              "pavo",
              200
            ],
            [
              "pimiento",
              150
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
        }
      ]
    }
  ],
  "rutina": [
    {
      "id": "PUSH",
      "emoji": "🔵",
      "color": "#6fd0ff",
      "cc": "#6fd0ff",
      "chip": "PUSH · Pecho",
      "titulo": "PUSH — PECHO · HOMBRO · TRÍCEPS",
      "ejercicios": [
        {
          "nombre": "Press máquina pecho plano",
          "reps": [
            "6-8",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=m-KFtIghoqw"
        },
        {
          "nombre": "Press máquina pecho inclinado",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=vdWbsdOtKII"
        },
        {
          "nombre": "Pec Deck (aperturas)",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=HL88KYqhzQI"
        },
        {
          "nombre": "Press militar en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=BqdJeb6jHko"
        },
        {
          "nombre": "Elevaciones laterales mancuernas",
          "reps": [
            "6-8",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=j2tjiP-YoDU"
        },
        {
          "nombre": "Tríceps katana unilateral en polea",
          "reps": [
            "6-8",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=HNH6a33SZB0"
        },
        {
          "nombre": "Extensión tríceps polea barra recta",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=sU9snn0qTEs"
        }
      ]
    },
    {
      "id": "PULL",
      "emoji": "🔴",
      "color": "#ff6b6b",
      "cc": "#ff6b6b",
      "chip": "PULL · Espalda",
      "titulo": "PULL — ESPALDA · BÍCEPS",
      "ejercicios": [
        {
          "nombre": "Jalón al pecho agarre prono",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=55X8yLezpwc"
        },
        {
          "nombre": "Remo en T",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=udi--2PLXAQ"
        },
        {
          "nombre": "Jalón en máquina unilateral",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=ha8ql5D3G1o"
        },
        {
          "nombre": "Pullover en polea",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=dX5DHCZ-7p8"
        },
        {
          "nombre": "Curl predicador máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=vq9JynSsol8"
        },
        {
          "nombre": "Curl martillo",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=NCeVr-vm6Ig"
        }
      ]
    },
    {
      "id": "LEGS",
      "emoji": "🦵",
      "color": "#ffd166",
      "cc": "#ffd166",
      "chip": "LEGS · Pierna",
      "titulo": "LEGS — PIERNA COMPLETA",
      "ejercicios": [
        {
          "nombre": "Sentadilla Hack en máquina",
          "reps": [
            "6-8",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=R8ZyWx1EgoY"
        },
        {
          "nombre": "Prensa de piernas (leg press)",
          "reps": [
            "6-8",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=AJ6N_TcoU6M"
        },
        {
          "nombre": "Extensión de cuádriceps en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=PAPf4i-VJoc"
        },
        {
          "nombre": "Isquiotibiales sentado en máquina",
          "reps": [
            "6-8",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=CBCPBnMzsMI"
        },
        {
          "nombre": "Abductor de glúteo en máquina",
          "reps": [
            "6-8",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=0wZ_dRSbnsA"
        },
        {
          "nombre": "Gemelo en máquina prensa",
          "reps": [
            "6-8",
            "8-10",
            "8-10",
            "8-10"
          ],
          "video": "https://www.youtube.com/watch?v=_EkH6H7GNyY"
        }
      ]
    }
  ]
};
