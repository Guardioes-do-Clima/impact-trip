const data = [
  {
    "key": 0,
    "origem": "ALEGRETE, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 1,
    "origem": "ALMEIRIM, RS",
    "destino": "BELEM, PA",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 2,
    "origem": "ALTA FLORESTA, MT",
    "destino": "CUIABA, MT",
    "co2Emitido": 117,
    "fatorEmissao": 0.06,
    "valor": 7.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.775
  },
  {
    "key": 3,
    "origem": "ALTAMIRA, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 116,
    "fatorEmissao": 0.06,
    "valor": 6.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.7
  },
  {
    "key": 4,
    "origem": "APUI, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 71,
    "fatorEmissao": 0.06,
    "valor": 4.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.325
  },
  {
    "key": 5,
    "origem": "ARACAJU, SE",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 6,
    "origem": "ARACAJU, SE",
    "destino": "BRASILIA, DF",
    "co2Emitido": 232,
    "fatorEmissao": 0.06,
    "valor": 13.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.4
  },
  {
    "key": 7,
    "origem": "ARACAJU, SE",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 8,
    "origem": "ARACAJU, SE",
    "destino": "RECIFE, PE",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 9,
    "origem": "ARACAJU, SE",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 240,
    "fatorEmissao": 0.06,
    "valor": 14.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18
  },
  {
    "key": 10,
    "origem": "ARACAJU, SE",
    "destino": "SALVADOR, BA",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 11,
    "origem": "ARACAJU, SE",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 274,
    "fatorEmissao": 0.06,
    "valor": 16.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.55
  },
  {
    "key": 12,
    "origem": "ARACATI, CE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 24,
    "fatorEmissao": 0.06,
    "valor": 1.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.8
  },
  {
    "key": 13,
    "origem": "ARACATUBA, SP",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 67,
    "fatorEmissao": 0.06,
    "valor": 4.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.025
  },
  {
    "key": 14,
    "origem": "ARACATUBA, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 362,
    "fatorEmissao": 0.06,
    "valor": 21.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.15
  },
  {
    "key": 15,
    "origem": "ARACATUBA, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 237,
    "fatorEmissao": 0.06,
    "valor": 14.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.775
  },
  {
    "key": 16,
    "origem": "ARACATUBA, SP",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 81,
    "fatorEmissao": 0.06,
    "valor": 4.86,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.075
  },
  {
    "key": 17,
    "origem": "ARAGUAINA, TO",
    "destino": "BRASILIA, DF",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 18,
    "origem": "ARARIPINA, PE",
    "destino": "RECIFE, PE",
    "co2Emitido": 84,
    "fatorEmissao": 0.06,
    "valor": 5.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.3
  },
  {
    "key": 19,
    "origem": "ARAXA, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 20,
    "origem": "ARIPUANA, MT",
    "destino": "JUINA, RO",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 21,
    "origem": "BAGE, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 50,
    "fatorEmissao": 0.06,
    "valor": 3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.75
  },
  {
    "key": 22,
    "origem": "BARCELOS, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 23,
    "origem": "BARRA DO GARÇAS, MT",
    "destino": "CUIABA, MT",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 24,
    "origem": "BARREIRAS, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 132,
    "fatorEmissao": 0.06,
    "valor": 7.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.9
  },
  {
    "key": 25,
    "origem": "BARREIRAS, BA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 26,
    "origem": "BARREIRAS, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 27,
    "origem": "BARREIRINHAS, MA",
    "destino": "PARNAIBA, PI",
    "co2Emitido": 24,
    "fatorEmissao": 0.06,
    "valor": 1.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.8
  },
  {
    "key": 28,
    "origem": "BARREIRINHAS, MA",
    "destino": "SÃO LUIZ, MA",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 29,
    "origem": "BAURU, SP",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 30,
    "origem": "BAURU, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 320,
    "fatorEmissao": 0.06,
    "valor": 19.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24
  },
  {
    "key": 31,
    "origem": "BAURU, SP",
    "destino": "MARILIA, SP",
    "co2Emitido": 23,
    "fatorEmissao": 0.06,
    "valor": 1.38,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.725
  },
  {
    "key": 32,
    "origem": "BAURU, SP",
    "destino": "NATAL, RN",
    "co2Emitido": 362,
    "fatorEmissao": 0.06,
    "valor": 21.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.15
  },
  {
    "key": 33,
    "origem": "BAURU, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 248,
    "fatorEmissao": 0.06,
    "valor": 14.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.6
  },
  {
    "key": 34,
    "origem": "BAURU, SP",
    "destino": "RECIFE, PE",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 35,
    "origem": "BELEM, PA",
    "destino": "ALMEIRIM, PA",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 36,
    "origem": "BELEM, PA",
    "destino": "ALTAMIRA, PA",
    "co2Emitido": 116,
    "fatorEmissao": 0.06,
    "valor": 6.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.7
  },
  {
    "key": 37,
    "origem": "BELEM, PA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 334,
    "fatorEmissao": 0.06,
    "valor": 20.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.05
  },
  {
    "key": 38,
    "origem": "BELEM, PA",
    "destino": "BOA VISTA, RR",
    "co2Emitido": 252,
    "fatorEmissao": 0.06,
    "valor": 15.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.9
  },
  {
    "key": 39,
    "origem": "BELEM, PA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 260,
    "fatorEmissao": 0.06,
    "valor": 15.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.5
  },
  {
    "key": 40,
    "origem": "BELEM, PA",
    "destino": "BREVES, PA",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 41,
    "origem": "BELEM, PA",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 328,
    "fatorEmissao": 0.06,
    "valor": 19.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.6
  },
  {
    "key": 42,
    "origem": "BELEM, PA",
    "destino": "CARAJAS, PA",
    "co2Emitido": 96,
    "fatorEmissao": 0.06,
    "valor": 5.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.2
  },
  {
    "key": 43,
    "origem": "BELEM, PA",
    "destino": "CAYENA, GUF",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 44,
    "origem": "BELEM, PA",
    "destino": "FORT LAUDERDALE, USA",
    "co2Emitido": 503,
    "fatorEmissao": 0.06,
    "valor": 30.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 37.725
  },
  {
    "key": 45,
    "origem": "BELEM, PA",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 46,
    "origem": "BELEM, PA",
    "destino": "LISBOA, PRT",
    "co2Emitido": 512,
    "fatorEmissao": 0.06,
    "valor": 30.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 38.4
  },
  {
    "key": 47,
    "origem": "BELEM, PA",
    "destino": "MACAPA, AP",
    "co2Emitido": 53,
    "fatorEmissao": 0.06,
    "valor": 3.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.975
  },
  {
    "key": 48,
    "origem": "BELEM, PA",
    "destino": "MANAUS, AM",
    "co2Emitido": 236,
    "fatorEmissao": 0.06,
    "valor": 14.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.7
  },
  {
    "key": 49,
    "origem": "BELEM, PA",
    "destino": "MARABA, PA",
    "co2Emitido": 63,
    "fatorEmissao": 0.06,
    "valor": 3.78,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.725
  },
  {
    "key": 50,
    "origem": "BELEM, PA",
    "destino": "MONTE DOURADO, PA",
    "co2Emitido": 68,
    "fatorEmissao": 0.06,
    "valor": 4.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.1
  },
  {
    "key": 51,
    "origem": "BELEM, PA",
    "destino": "NATAL, RN",
    "co2Emitido": 264,
    "fatorEmissao": 0.06,
    "valor": 15.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.8
  },
  {
    "key": 52,
    "origem": "BELEM, PA",
    "destino": "PARAGOMINAS, PA",
    "co2Emitido": 36,
    "fatorEmissao": 0.06,
    "valor": 2.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.7
  },
  {
    "key": 53,
    "origem": "BELEM, PA",
    "destino": "PARAMARIBO, SUR",
    "co2Emitido": 219,
    "fatorEmissao": 0.06,
    "valor": 13.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.425
  },
  {
    "key": 54,
    "origem": "BELEM, PA",
    "destino": "PORTO DE MOZ, PA",
    "co2Emitido": 62,
    "fatorEmissao": 0.06,
    "valor": 3.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.65
  },
  {
    "key": 55,
    "origem": "BELEM, PA",
    "destino": "RECIFE, PE",
    "co2Emitido": 282,
    "fatorEmissao": 0.06,
    "valor": 16.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.15
  },
  {
    "key": 56,
    "origem": "BELEM, PA",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 350,
    "fatorEmissao": 0.06,
    "valor": 21,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.25
  },
  {
    "key": 57,
    "origem": "BELEM, PA",
    "destino": "SALINOPOLIS, PA",
    "co2Emitido": 26,
    "fatorEmissao": 0.06,
    "valor": 1.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.95
  },
  {
    "key": 58,
    "origem": "BELEM, PA",
    "destino": "SANTAREM, PA",
    "co2Emitido": 154,
    "fatorEmissao": 0.06,
    "valor": 9.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.55
  },
  {
    "key": 59,
    "origem": "BELEM, PA",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 60,
    "origem": "BELEM, PA",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 358,
    "fatorEmissao": 0.06,
    "valor": 21.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.85
  },
  {
    "key": 61,
    "origem": "BELEM, PA",
    "destino": "TERESINA, PI",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 62,
    "origem": "BELEM, PA",
    "destino": "TUCURUI, PA",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 63,
    "origem": "BELO HORIZONTE, MG",
    "destino": "ARACAJU, SE",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 64,
    "origem": "BELO HORIZONTE, MG",
    "destino": "ARAXA, MG",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 65,
    "origem": "BELO HORIZONTE, MG",
    "destino": "BARREIRAS, BA",
    "co2Emitido": 132,
    "fatorEmissao": 0.06,
    "valor": 7.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.9
  },
  {
    "key": 66,
    "origem": "BELO HORIZONTE, MG",
    "destino": "BELEM, PA",
    "co2Emitido": 334,
    "fatorEmissao": 0.06,
    "valor": 20.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.05
  },
  {
    "key": 67,
    "origem": "BELO HORIZONTE, MG",
    "destino": "BOGOTA, COL",
    "co2Emitido": 470,
    "fatorEmissao": 0.06,
    "valor": 28.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 35.25
  },
  {
    "key": 68,
    "origem": "BELO HORIZONTE, MG",
    "destino": "BRASILIA, DF",
    "co2Emitido": 101,
    "fatorEmissao": 0.06,
    "valor": 6.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.575
  },
  {
    "key": 69,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CABO FRIO, RJ",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 70,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CALDAS NOVAS, GO",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 71,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CAMPINA GRANDE, PB",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 72,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CARAJAS, PA",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 73,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 91,
    "fatorEmissao": 0.06,
    "valor": 5.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.825
  },
  {
    "key": 74,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CAMPO GRANDE, MS",
    "co2Emitido": 216,
    "fatorEmissao": 0.06,
    "valor": 12.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.2
  },
  {
    "key": 75,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CUIABA, MT",
    "co2Emitido": 245,
    "fatorEmissao": 0.06,
    "valor": 14.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.375
  },
  {
    "key": 76,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CURACAO, CUR",
    "co2Emitido": 521,
    "fatorEmissao": 0.06,
    "valor": 31.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 39.075
  },
  {
    "key": 77,
    "origem": "BELO HORIZONTE, MG",
    "destino": "CURITIBA, PR",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 78,
    "origem": "BELO HORIZONTE, MG",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 79,
    "origem": "BELO HORIZONTE, MG",
    "destino": "FORT LAUDERDALE, USA",
    "co2Emitido": 586,
    "fatorEmissao": 0.06,
    "valor": 35.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 43.95
  },
  {
    "key": 80,
    "origem": "BELO HORIZONTE, MG",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 81,
    "origem": "BELO HORIZONTE, MG",
    "destino": "GOIANIA, GO",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 82,
    "origem": "BELO HORIZONTE, MG",
    "destino": "GOVERNADOR VALADARES, MG",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 83,
    "origem": "BELO HORIZONTE, MG",
    "destino": "GUANAMBI, MG",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 84,
    "origem": "BELO HORIZONTE, MG",
    "destino": "HOUSTON, USA",
    "co2Emitido": 710,
    "fatorEmissao": 0.06,
    "valor": 42.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 53.25
  },
  {
    "key": 85,
    "origem": "BELO HORIZONTE, MG",
    "destino": "ILHEUS, BA",
    "co2Emitido": 142,
    "fatorEmissao": 0.06,
    "valor": 8.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.65
  },
  {
    "key": 86,
    "origem": "BELO HORIZONTE, MG",
    "destino": "IMPERATRIZ, MA",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 87,
    "origem": "BELO HORIZONTE, MG",
    "destino": "IPATINGA, MG",
    "co2Emitido": 36,
    "fatorEmissao": 0.06,
    "valor": 2.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.7
  },
  {
    "key": 88,
    "origem": "BELO HORIZONTE, MG",
    "destino": "JERICOACOARA, CE",
    "co2Emitido": 282,
    "fatorEmissao": 0.06,
    "valor": 16.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.15
  },
  {
    "key": 89,
    "origem": "BELO HORIZONTE, MG",
    "destino": "JOAO PESSOA, PA",
    "co2Emitido": 252,
    "fatorEmissao": 0.06,
    "valor": 15.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.9
  },
  {
    "key": 90,
    "origem": "BELO HORIZONTE, MG",
    "destino": "JUIZ DE FORA, MG",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 91,
    "origem": "BELO HORIZONTE, MG",
    "destino": "LENÇOIS, BA",
    "co2Emitido": 160,
    "fatorEmissao": 0.06,
    "valor": 9.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12
  },
  {
    "key": 92,
    "origem": "BELO HORIZONTE, MG",
    "destino": "LISBOA, PRT",
    "co2Emitido": 640,
    "fatorEmissao": 0.06,
    "valor": 38.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 48
  },
  {
    "key": 93,
    "origem": "BELO HORIZONTE, MG",
    "destino": "MACEIO, AL",
    "co2Emitido": 248,
    "fatorEmissao": 0.06,
    "valor": 14.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.6
  },
  {
    "key": 94,
    "origem": "BELO HORIZONTE, MG",
    "destino": "MANAUS, AM",
    "co2Emitido": 392,
    "fatorEmissao": 0.06,
    "valor": 23.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 29.4
  },
  {
    "key": 95,
    "origem": "BELO HORIZONTE, MG",
    "destino": "MARABA, PA",
    "co2Emitido": 268,
    "fatorEmissao": 0.06,
    "valor": 16.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.1
  },
  {
    "key": 96,
    "origem": "BELO HORIZONTE, MG",
    "destino": "MONTES CLAROS, MG",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 97,
    "origem": "BELO HORIZONTE, MG",
    "destino": "NATAL, RN",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 98,
    "origem": "BELO HORIZONTE, MG",
    "destino": "NAVEGANTES, SC",
    "co2Emitido": 210,
    "fatorEmissao": 0.06,
    "valor": 12.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.75
  },
  {
    "key": 99,
    "origem": "BELO HORIZONTE, MG",
    "destino": "ORLANDO, USA",
    "co2Emitido": 602,
    "fatorEmissao": 0.06,
    "valor": 36.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 45.15
  },
  {
    "key": 100,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PALMAS, TO",
    "co2Emitido": 230,
    "fatorEmissao": 0.06,
    "valor": 13.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.25
  },
  {
    "key": 101,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PANAMA CITY, PAN",
    "co2Emitido": 586,
    "fatorEmissao": 0.06,
    "valor": 35.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 43.95
  },
  {
    "key": 102,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PARACATU, MG",
    "co2Emitido": 62,
    "fatorEmissao": 0.06,
    "valor": 3.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.65
  },
  {
    "key": 103,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PARNAIBA, PI",
    "co2Emitido": 222,
    "fatorEmissao": 0.06,
    "valor": 13.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.65
  },
  {
    "key": 104,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PATOS DE MINAS, MG",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 105,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 106,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 107,
    "origem": "BELO HORIZONTE, MG",
    "destino": "PORTO VELHO, RO",
    "co2Emitido": 376,
    "fatorEmissao": 0.06,
    "valor": 22.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.2
  },
  {
    "key": 108,
    "origem": "BELO HORIZONTE, MG",
    "destino": "RECIFE, PE",
    "co2Emitido": 270,
    "fatorEmissao": 0.06,
    "valor": 16.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.25
  },
  {
    "key": 109,
    "origem": "BELO HORIZONTE, MG",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 110,
    "origem": "BELO HORIZONTE, MG",
    "destino": "SALVADOR, BA",
    "co2Emitido": 190,
    "fatorEmissao": 0.06,
    "valor": 11.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.25
  },
  {
    "key": 111,
    "origem": "BELO HORIZONTE, MG",
    "destino": "SANTAREM, PA",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 112,
    "origem": "BELO HORIZONTE, MG",
    "destino": "SANTIAGO, CHI",
    "co2Emitido": 448,
    "fatorEmissao": 0.06,
    "valor": 26.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 33.6
  },
  {
    "key": 113,
    "origem": "BELO HORIZONTE, MG",
    "destino": "SAO JOAO DEL REI, MG",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 114,
    "origem": "BELO HORIZONTE, MG",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 310,
    "fatorEmissao": 0.06,
    "valor": 18.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.25
  },
  {
    "key": 115,
    "origem": "BELO HORIZONTE, MG",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 92,
    "fatorEmissao": 0.06,
    "valor": 5.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.9
  },
  {
    "key": 116,
    "origem": "BELO HORIZONTE, MG",
    "destino": "TEOFILO OTONI, MG",
    "co2Emitido": 75,
    "fatorEmissao": 0.06,
    "valor": 4.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.625
  },
  {
    "key": 117,
    "origem": "BELO HORIZONTE, MG",
    "destino": "TERESINA, PI - BRA",
    "co2Emitido": 273,
    "fatorEmissao": 1.06,
    "valor": 289.38,
    "fatorFloresta": 1.8,
    "florestaProtegida": 160.7666667
  },
  {
    "key": 118,
    "origem": "BELO HORIZONTE, MG",
    "destino": "UBERABA, MG - BRA",
    "co2Emitido": 119,
    "fatorEmissao": 0.06,
    "valor": 7.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.925
  },
  {
    "key": 119,
    "origem": "BELO HORIZONTE, MG",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 105,
    "fatorEmissao": 0.06,
    "valor": 6.3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.875
  },
  {
    "key": 120,
    "origem": "BELO HORIZONTE, MG",
    "destino": "UNA, BA",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 121,
    "origem": "BELO HORIZONTE, MG",
    "destino": "VARGINHA, MG",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 122,
    "origem": "BELO HORIZONTE, MG",
    "destino": "VITORIA, ES",
    "co2Emitido": 95,
    "fatorEmissao": 0.06,
    "valor": 5.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.125
  },
  {
    "key": 123,
    "origem": "BELO HORIZONTE, MG",
    "destino": "VITORIA DA CONQUISTA, BA",
    "co2Emitido": 117,
    "fatorEmissao": 0.06,
    "valor": 7.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.775
  },
  {
    "key": 124,
    "origem": "BLUMENAU, SC",
    "destino": "CUTITIBA, PR",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 125,
    "origem": "BLUMENAU, SC",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 81,
    "fatorEmissao": 0.06,
    "valor": 4.86,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.075
  },
  {
    "key": 126,
    "origem": "BOA VISTA, RR",
    "destino": "BELEM, PA",
    "co2Emitido": 252,
    "fatorEmissao": 0.06,
    "valor": 15.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.9
  },
  {
    "key": 127,
    "origem": "BOA VISTA, RR",
    "destino": "BRASILIA, DF",
    "co2Emitido": 384,
    "fatorEmissao": 0.06,
    "valor": 23.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.8
  },
  {
    "key": 128,
    "origem": "BOA VISTA, RR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 468,
    "fatorEmissao": 0.06,
    "valor": 28.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 35.1
  },
  {
    "key": 129,
    "origem": "BOA VISTA, RR",
    "destino": "MANAUS, AM",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 130,
    "origem": "BONITO, MS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 188,
    "fatorEmissao": 0.06,
    "valor": 11.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.1
  },
  {
    "key": 131,
    "origem": "BONITO, MS",
    "destino": "CORUMBA, MS",
    "co2Emitido": 54,
    "fatorEmissao": 0.06,
    "valor": 3.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.05
  },
  {
    "key": 132,
    "origem": "BONITO, MS",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 194,
    "fatorEmissao": 0.06,
    "valor": 11.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.55
  },
  {
    "key": 133,
    "origem": "BORBA, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 134,
    "origem": "BRASILIA, DF",
    "destino": "ARACAJU, SE",
    "co2Emitido": 232,
    "fatorEmissao": 0.06,
    "valor": 13.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.4
  },
  {
    "key": 135,
    "origem": "BRASILIA, DF",
    "destino": "ARAGUAINA, TO",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 136,
    "origem": "BRASILIA, DF",
    "destino": "BARREIRAS, BA",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 137,
    "origem": "BRASILIA, DF",
    "destino": "BELEM, PA",
    "co2Emitido": 262,
    "fatorEmissao": 0.06,
    "valor": 15.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.65
  },
  {
    "key": 138,
    "origem": "BRASILIA, DF",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 101,
    "fatorEmissao": 0.06,
    "valor": 6.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.575
  },
  {
    "key": 139,
    "origem": "BRASILIA, DF",
    "destino": "BOA VISTA, RR",
    "co2Emitido": 384,
    "fatorEmissao": 0.06,
    "valor": 23.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.8
  },
  {
    "key": 140,
    "origem": "BRASILIA, DF",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 378,
    "fatorEmissao": 0.06,
    "valor": 22.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.35
  },
  {
    "key": 141,
    "origem": "BRASILIA, DF",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 121,
    "fatorEmissao": 0.06,
    "valor": 7.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.075
  },
  {
    "key": 142,
    "origem": "BRASILIA, DF",
    "destino": "CAMPO GRANDE, MS",
    "co2Emitido": 133,
    "fatorEmissao": 0.06,
    "valor": 7.98,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.975
  },
  {
    "key": 143,
    "origem": "BRASILIA, DF",
    "destino": "CUIABA, MT",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 144,
    "origem": "BRASILIA, DF",
    "destino": "CURITIBA, PR",
    "co2Emitido": 201,
    "fatorEmissao": 0.06,
    "valor": 12.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.075
  },
  {
    "key": 145,
    "origem": "BRASILIA, DF",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 236,
    "fatorEmissao": 0.06,
    "valor": 14.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.7
  },
  {
    "key": 146,
    "origem": "BRASILIA, DF",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 274,
    "fatorEmissao": 0.06,
    "valor": 16.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.55
  },
  {
    "key": 147,
    "origem": "BRASILIA, DF",
    "destino": "GOIANIA, GO",
    "co2Emitido": 58,
    "fatorEmissao": 0.06,
    "valor": 3.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.35
  },
  {
    "key": 148,
    "origem": "BRASILIA, DF",
    "destino": "IMPERATRIZ, MA",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 149,
    "origem": "BRASILIA, DF",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 278,
    "fatorEmissao": 0.06,
    "valor": 16.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.85
  },
  {
    "key": 150,
    "origem": "BRASILIA, DF",
    "destino": "LIMA, PER",
    "co2Emitido": 462,
    "fatorEmissao": 0.06,
    "valor": 27.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 34.65
  },
  {
    "key": 151,
    "origem": "BRASILIA, DF",
    "destino": "LISBOA, PRT",
    "co2Emitido": 626,
    "fatorEmissao": 0.06,
    "valor": 37.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 46.95
  },
  {
    "key": 152,
    "origem": "BRASILIA, DF",
    "destino": "MACAPA, AP",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 153,
    "origem": "BRASILIA, DF",
    "destino": "MACEIO, AL",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 154,
    "origem": "BRASILIA, DF",
    "destino": "MANAUS, MA",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 155,
    "origem": "BRASILIA, DF",
    "destino": "MARABA, PA",
    "co2Emitido": 230,
    "fatorEmissao": 0.06,
    "valor": 13.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.25
  },
  {
    "key": 156,
    "origem": "BRASILIA, DF",
    "destino": "MIAMI, USA",
    "co2Emitido": 499,
    "fatorEmissao": 0.06,
    "valor": 29.94,
    "fatorFloresta": 0.8,
    "florestaProtegida": 37.425
  },
  {
    "key": 157,
    "origem": "BRASILIA, DF",
    "destino": "NATAL, RN",
    "co2Emitido": 278,
    "fatorEmissao": 0.06,
    "valor": 16.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.85
  },
  {
    "key": 158,
    "origem": "BRASILIA, DF",
    "destino": "ORLANDO, USA",
    "co2Emitido": 523,
    "fatorEmissao": 0.06,
    "valor": 31.38,
    "fatorFloresta": 0.8,
    "florestaProtegida": 39.225
  },
  {
    "key": 159,
    "origem": "BRASILIA, DF",
    "destino": "PALMAS, TO",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 160,
    "origem": "BRASILIA, DF",
    "destino": "PANAMA CITY, PAN",
    "co2Emitido": 518,
    "fatorEmissao": 0.06,
    "valor": 31.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 38.85
  },
  {
    "key": 161,
    "origem": "BRASILIA, DF",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 266,
    "fatorEmissao": 0.06,
    "valor": 15.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.95
  },
  {
    "key": 162,
    "origem": "BRASILIA, DF",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 188,
    "fatorEmissao": 0.06,
    "valor": 11.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.1
  },
  {
    "key": 163,
    "origem": "BRASILIA, DF",
    "destino": "PORTO VELHO, RO",
    "co2Emitido": 306,
    "fatorEmissao": 0.06,
    "valor": 18.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.95
  },
  {
    "key": 164,
    "origem": "BRASILIA, DF",
    "destino": "RECIFE, PE",
    "co2Emitido": 272,
    "fatorEmissao": 0.06,
    "valor": 16.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.4
  },
  {
    "key": 165,
    "origem": "BRASILIA, DF",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 123,
    "fatorEmissao": 0.06,
    "valor": 7.38,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.225
  },
  {
    "key": 166,
    "origem": "BRASILIA, DF",
    "destino": "RIO BRANCO, AC",
    "co2Emitido": 344,
    "fatorEmissao": 0.06,
    "valor": 20.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.8
  },
  {
    "key": 167,
    "origem": "BRASILIA, DF",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 178,
    "fatorEmissao": 0.06,
    "valor": 10.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.35
  },
  {
    "key": 168,
    "origem": "BRASILIA, DF",
    "destino": "SALVADOR, BA",
    "co2Emitido": 198,
    "fatorEmissao": 0.06,
    "valor": 11.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.85
  },
  {
    "key": 169,
    "origem": "BRASILIA, DF",
    "destino": "SANTAREM, PA",
    "co2Emitido": 294,
    "fatorEmissao": 0.06,
    "valor": 17.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.05
  },
  {
    "key": 170,
    "origem": "BRASILIA, DF",
    "destino": "SAO JOSE DO RIO PRETO, SP",
    "co2Emitido": 100,
    "fatorEmissao": 0.06,
    "valor": 6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.5
  },
  {
    "key": 171,
    "origem": "BRASILIA, DF",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 250,
    "fatorEmissao": 0.06,
    "valor": 15,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.75
  },
  {
    "key": 172,
    "origem": "BRASILIA, DF",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 173,
    "origem": "BRASILIA, DF",
    "destino": "SINOP, MT",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 174,
    "origem": "BRASILIA, DF",
    "destino": "TERESINA, PI",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 175,
    "origem": "BRASILIA, DF",
    "destino": "UNA, BA",
    "co2Emitido": 190,
    "fatorEmissao": 0.06,
    "valor": 11.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.25
  },
  {
    "key": 176,
    "origem": "BRASILIA, DF",
    "destino": "VITORIA, ES",
    "co2Emitido": 188,
    "fatorEmissao": 0.06,
    "valor": 11.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.1
  },
  {
    "key": 177,
    "origem": "BREVES, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 178,
    "origem": "BREVES, PA",
    "destino": "PORTO DE MOZ, PA",
    "co2Emitido": 34,
    "fatorEmissao": 0.06,
    "valor": 2.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.55
  },
  {
    "key": 179,
    "origem": "CABO FRIO, RJ",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 180,
    "origem": "CAJAZEIRAS, PE",
    "destino": "RECIFE, PE",
    "co2Emitido": 64,
    "fatorEmissao": 0.06,
    "valor": 3.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.8
  },
  {
    "key": 181,
    "origem": "CALDAS NOVAS, GO",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 182,
    "origem": "CALDAS NOVAS, GO",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 154,
    "fatorEmissao": 0.06,
    "valor": 9.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.55
  },
  {
    "key": 183,
    "origem": "CALDAS NOVAS, GO",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 184,
    "origem": "CAMPINA GRANDE, PB",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 185,
    "origem": "CAMPINA GRANDE, PB",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 84,
    "fatorEmissao": 0.06,
    "valor": 5.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.3
  },
  {
    "key": 186,
    "origem": "CAMPINA GRANDE, PB",
    "destino": "RECIFE, PE",
    "co2Emitido": 32,
    "fatorEmissao": 0.06,
    "valor": 1.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.4
  },
  {
    "key": 187,
    "origem": "CAMPINA GRANDE, PB",
    "destino": "SALVADOR, BA",
    "co2Emitido": 130,
    "fatorEmissao": 0.06,
    "valor": 7.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.75
  },
  {
    "key": 188,
    "origem": "CAMPINAS, SP",
    "destino": "ARACAJU, SE",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 189,
    "origem": "CAMPINAS, SP",
    "destino": "ARACATUBA, SP",
    "co2Emitido": 67,
    "fatorEmissao": 0.06,
    "valor": 4.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.025
  },
  {
    "key": 190,
    "origem": "CAMPINAS, SP",
    "destino": "BAURU, SP",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 191,
    "origem": "CAMPINAS, SP",
    "destino": "BELEM, PA",
    "co2Emitido": 328,
    "fatorEmissao": 0.06,
    "valor": 19.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.6
  },
  {
    "key": 192,
    "origem": "CAMPINAS, SP",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 91,
    "fatorEmissao": 0.06,
    "valor": 5.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.825
  },
  {
    "key": 193,
    "origem": "CAMPINAS, SP",
    "destino": "BOA VISTA, RO",
    "co2Emitido": 468,
    "fatorEmissao": 0.06,
    "valor": 28.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 35.1
  },
  {
    "key": 194,
    "origem": "CAMPINAS, SP",
    "destino": "BONITO, MS",
    "co2Emitido": 188,
    "fatorEmissao": 0.06,
    "valor": 11.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.1
  },
  {
    "key": 195,
    "origem": "CAMPINAS, SP",
    "destino": "BRASILIA, DF",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 196,
    "origem": "CAMPINAS, SP",
    "destino": "CALDAS NOVAS, GO",
    "co2Emitido": 154,
    "fatorEmissao": 0.06,
    "valor": 9.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.55
  },
  {
    "key": 197,
    "origem": "CAMPINAS, SP",
    "destino": "CAMPO GRANDE, MS",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 198,
    "origem": "CAMPINAS, SP",
    "destino": "CAMPOS, RJ",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 199,
    "origem": "CAMPINAS, SP",
    "destino": "CASCAVEL, PR",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 200,
    "origem": "CAMPINAS, SP",
    "destino": "CAXIAS DO SUL, RS",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 201,
    "origem": "CAMPINAS, SP",
    "destino": "CHAPECO, SC",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 202,
    "origem": "CAMPINAS, SP",
    "destino": "CORREIA PINTO, SC",
    "co2Emitido": 103,
    "fatorEmissao": 0.06,
    "valor": 6.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.725
  },
  {
    "key": 203,
    "origem": "CAMPINAS, SP",
    "destino": "CORUMBA, MS",
    "co2Emitido": 208,
    "fatorEmissao": 0.06,
    "valor": 12.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.6
  },
  {
    "key": 204,
    "origem": "CAMPINAS, SP",
    "destino": "CUIABA, MT",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 205,
    "origem": "CAMPINAS, SP",
    "destino": "CURITIBA, PR",
    "co2Emitido": 92,
    "fatorEmissao": 0.06,
    "valor": 5.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.9
  },
  {
    "key": 206,
    "origem": "CAMPINAS, SP",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 207,
    "origem": "CAMPINAS, SP",
    "destino": "FORT LAUDERDALE, USA",
    "co2Emitido": 614,
    "fatorEmissao": 0.06,
    "valor": 36.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 46.05
  },
  {
    "key": 208,
    "origem": "CAMPINAS, SP",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 209,
    "origem": "CAMPINAS, SP",
    "destino": "GOIANIA, GO",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 210,
    "origem": "CAMPINAS, SP",
    "destino": "GUARAPUAVA, PR",
    "co2Emitido": 88,
    "fatorEmissao": 0.06,
    "valor": 5.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.6
  },
  {
    "key": 211,
    "origem": "CAMPINAS, SP",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 150,
    "fatorEmissao": 0.06,
    "valor": 9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.25
  },
  {
    "key": 212,
    "origem": "CAMPINAS, SP",
    "destino": "ILHEUS, BA",
    "co2Emitido": 235,
    "fatorEmissao": 0.06,
    "valor": 14.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.625
  },
  {
    "key": 213,
    "origem": "CAMPINAS, SP",
    "destino": "JAGUARUNA, SC",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 214,
    "origem": "CAMPINAS, SP",
    "destino": "JERICOACOARA, CE",
    "co2Emitido": 356,
    "fatorEmissao": 0.06,
    "valor": 21.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.7
  },
  {
    "key": 215,
    "origem": "CAMPINAS, SP",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 318,
    "fatorEmissao": 0.06,
    "valor": 19.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.85
  },
  {
    "key": 216,
    "origem": "CAMPINAS, SP",
    "destino": "JOINVILLE, SC",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 217,
    "origem": "CAMPINAS, SP",
    "destino": "JUAZEIRO DO NORTE, CE",
    "co2Emitido": 228,
    "fatorEmissao": 0.06,
    "valor": 13.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.1
  },
  {
    "key": 218,
    "origem": "CAMPINAS, SP",
    "destino": "JUIZ DE FORA, MG",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 219,
    "origem": "CAMPINAS, SP",
    "destino": "LISBOA, PRT",
    "co2Emitido": 698,
    "fatorEmissao": 0.06,
    "valor": 41.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 52.35
  },
  {
    "key": 220,
    "origem": "CAMPINAS, SP",
    "destino": "LONDRINA, PR",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 221,
    "origem": "CAMPINAS, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 310,
    "fatorEmissao": 0.06,
    "valor": 18.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.25
  },
  {
    "key": 222,
    "origem": "CAMPINAS, SP",
    "destino": "MANAUS, AM",
    "co2Emitido": 352,
    "fatorEmissao": 0.06,
    "valor": 21.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.4
  },
  {
    "key": 223,
    "origem": "CAMPINAS, SP",
    "destino": "MARILIA, SP",
    "co2Emitido": 62,
    "fatorEmissao": 0.06,
    "valor": 3.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.65
  },
  {
    "key": 224,
    "origem": "CAMPINAS, SP",
    "destino": "MARINGA, PR",
    "co2Emitido": 138,
    "fatorEmissao": 0.06,
    "valor": 8.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.35
  },
  {
    "key": 225,
    "origem": "CAMPINAS, SP",
    "destino": "NATAL, RN",
    "co2Emitido": 360,
    "fatorEmissao": 0.06,
    "valor": 21.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27
  },
  {
    "key": 226,
    "origem": "CAMPINAS, SP",
    "destino": "NAVEGANTES, SC",
    "co2Emitido": 100,
    "fatorEmissao": 0.06,
    "valor": 6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.5
  },
  {
    "key": 227,
    "origem": "CAMPINAS, SP",
    "destino": "ORLANDO, USA",
    "co2Emitido": 636,
    "fatorEmissao": 0.06,
    "valor": 38.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 47.7
  },
  {
    "key": 228,
    "origem": "CAMPINAS, SP",
    "destino": "PALMAS, TO",
    "co2Emitido": 245,
    "fatorEmissao": 0.06,
    "valor": 14.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.375
  },
  {
    "key": 229,
    "origem": "CAMPINAS, SP",
    "destino": "PARIS, FRA",
    "co2Emitido": 896,
    "fatorEmissao": 0.06,
    "valor": 53.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 67.2
  },
  {
    "key": 230,
    "origem": "CAMPINAS, SP",
    "destino": "PASSO FUNDO, RS",
    "co2Emitido": 171,
    "fatorEmissao": 0.06,
    "valor": 10.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.825
  },
  {
    "key": 231,
    "origem": "CAMPINAS, SP",
    "destino": "PETROLINA, PE",
    "co2Emitido": 296,
    "fatorEmissao": 0.06,
    "valor": 17.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.2
  },
  {
    "key": 232,
    "origem": "CAMPINAS, SP",
    "destino": "PONTA GROSSA, PR",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 233,
    "origem": "CAMPINAS, SP",
    "destino": "PONTA PORA, MS",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 234,
    "origem": "CAMPINAS, SP",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 235,
    "origem": "CAMPINAS, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 196,
    "fatorEmissao": 0.06,
    "valor": 11.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.7
  },
  {
    "key": 236,
    "origem": "CAMPINAS, SP",
    "destino": "PRESIDENTE PRUDENTE, SP",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 237,
    "origem": "CAMPINAS, SP",
    "destino": "RECIFE, PE",
    "co2Emitido": 291,
    "fatorEmissao": 0.06,
    "valor": 17.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.825
  },
  {
    "key": 238,
    "origem": "CAMPINAS, SP",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 239,
    "origem": "CAMPINAS, SP",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 92,
    "fatorEmissao": 0.06,
    "valor": 5.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.9
  },
  {
    "key": 240,
    "origem": "CAMPINAS, SP",
    "destino": "RIO VERDE, GO",
    "co2Emitido": 116,
    "fatorEmissao": 0.06,
    "valor": 6.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.7
  },
  {
    "key": 241,
    "origem": "CAMPINAS, SP",
    "destino": "RONDONOPOLIS, MT",
    "co2Emitido": 187,
    "fatorEmissao": 0.06,
    "valor": 11.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.025
  },
  {
    "key": 242,
    "origem": "CAMPINAS, SP",
    "destino": "SALVADOR, BA",
    "co2Emitido": 258,
    "fatorEmissao": 0.06,
    "valor": 15.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.35
  },
  {
    "key": 243,
    "origem": "CAMPINAS, SP",
    "destino": "SAO JOSE RIO PRETO, SP",
    "co2Emitido": 68,
    "fatorEmissao": 0.06,
    "valor": 4.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.1
  },
  {
    "key": 244,
    "origem": "CAMPINAS, SP",
    "destino": "SÃO LUIZ, MA",
    "co2Emitido": 356,
    "fatorEmissao": 0.06,
    "valor": 21.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.7
  },
  {
    "key": 245,
    "origem": "CAMPINAS, SP",
    "destino": "SINOP, MT",
    "co2Emitido": 264,
    "fatorEmissao": 0.06,
    "valor": 15.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.8
  },
  {
    "key": 246,
    "origem": "CAMPINAS, SP",
    "destino": "TERESINA, PI",
    "co2Emitido": 328,
    "fatorEmissao": 0.06,
    "valor": 19.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.6
  },
  {
    "key": 247,
    "origem": "CAMPINAS, SP",
    "destino": "TOLEDO, PR",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 248,
    "origem": "CAMPINAS, SP",
    "destino": "TRES LAGOAS, MS",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 249,
    "origem": "CAMPINAS, SP",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 115,
    "fatorEmissao": 0.06,
    "valor": 6.9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.625
  },
  {
    "key": 250,
    "origem": "CAMPINAS, SP",
    "destino": "UNA, BA",
    "co2Emitido": 226,
    "fatorEmissao": 0.06,
    "valor": 13.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.95
  },
  {
    "key": 251,
    "origem": "CAMPINAS, SP",
    "destino": "VITORIA, ES",
    "co2Emitido": 115,
    "fatorEmissao": 0.06,
    "valor": 6.9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.625
  },
  {
    "key": 252,
    "origem": "CAMPO GRANDE, MS",
    "destino": "BELO HOEIZONTE, MG",
    "co2Emitido": 216,
    "fatorEmissao": 0.06,
    "valor": 12.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.2
  },
  {
    "key": 253,
    "origem": "CAMPO GRANDE, MS",
    "destino": "BRASILIA, DF",
    "co2Emitido": 133,
    "fatorEmissao": 0.06,
    "valor": 7.98,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.975
  },
  {
    "key": 254,
    "origem": "CAMPO GRANDE, MS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 255,
    "origem": "CAMPO GRANDE, MS",
    "destino": "CUIABA, MT",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 256,
    "origem": "CAMPO GRANDE, MS",
    "destino": "CURITIBA, PR",
    "co2Emitido": 152,
    "fatorEmissao": 0.06,
    "valor": 9.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.4
  },
  {
    "key": 257,
    "origem": "CAMPO GRANDE, MS",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 178,
    "fatorEmissao": 0.06,
    "valor": 10.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.35
  },
  {
    "key": 258,
    "origem": "CAMPOS,  RJ",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 259,
    "origem": "CARAJAS,  PA",
    "destino": "BELEM, PA",
    "co2Emitido": 96,
    "fatorEmissao": 0.06,
    "valor": 5.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.2
  },
  {
    "key": 260,
    "origem": "CARAJAS,  PA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 261,
    "origem": "CARAUARI, AM",
    "destino": "COARI, AM",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 262,
    "origem": "CARAUARI, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 126,
    "fatorEmissao": 0.06,
    "valor": 7.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.45
  },
  {
    "key": 263,
    "origem": "CARUARU, PE",
    "destino": "RECIFE, PE",
    "co2Emitido": 22,
    "fatorEmissao": 0.06,
    "valor": 1.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.65
  },
  {
    "key": 264,
    "origem": "CASCAVEL,  PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 265,
    "origem": "CASCAVEL,  PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 266,
    "origem": "CASCAVEL,  PR",
    "destino": "MACEIO, AL",
    "co2Emitido": 386,
    "fatorEmissao": 0.06,
    "valor": 23.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.95
  },
  {
    "key": 267,
    "origem": "CASCAVEL,  PR",
    "destino": "NATAL, RN",
    "co2Emitido": 427,
    "fatorEmissao": 0.06,
    "valor": 25.62,
    "fatorFloresta": 0.8,
    "florestaProtegida": 32.025
  },
  {
    "key": 268,
    "origem": "CASCAVEL,  PR",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 160,
    "fatorEmissao": 0.06,
    "valor": 9.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12
  },
  {
    "key": 269,
    "origem": "CAXIAS DO SUL, RS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 270,
    "origem": "CAXIAS DO SUL, RS",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 196,
    "fatorEmissao": 0.06,
    "valor": 11.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.7
  },
  {
    "key": 271,
    "origem": "CAXIAS DO SUL, RS",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 169,
    "fatorEmissao": 0.06,
    "valor": 10.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.675
  },
  {
    "key": 272,
    "origem": "CHAPECO, SC",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 273,
    "origem": "CHAPECO, SC",
    "destino": "FLORIAOPOLIS, SC",
    "co2Emitido": 130,
    "fatorEmissao": 0.06,
    "valor": 7.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.75
  },
  {
    "key": 274,
    "origem": "CHAPECO, SC",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 158,
    "fatorEmissao": 0.06,
    "valor": 9.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.85
  },
  {
    "key": 275,
    "origem": "COARI, AM",
    "destino": "CARAUARI, AM",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 276,
    "origem": "COARI, AM",
    "destino": "LABREA, AM",
    "co2Emitido": 60
  },
  {
    "key": 277,
    "origem": "COARI, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 58,
    "fatorEmissao": 0.06,
    "valor": 3.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.35
  },
  {
    "key": 278,
    "origem": "COCOAL, MT",
    "destino": "CUIABA, MT",
    "co2Emitido": 135,
    "fatorEmissao": 0.06,
    "valor": 8.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.125
  },
  {
    "key": 279,
    "origem": "CORREIA PINTO, SC",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 103,
    "fatorEmissao": 0.06,
    "valor": 6.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.725
  },
  {
    "key": 280,
    "origem": "CORUMBA, MS",
    "destino": "BONITO, MS",
    "co2Emitido": 54,
    "fatorEmissao": 0.06,
    "valor": 3.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.05
  },
  {
    "key": 281,
    "origem": "CORUMBA, MS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 208,
    "fatorEmissao": 0.06,
    "valor": 12.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.6
  },
  {
    "key": 282,
    "origem": "CRATEUS, CE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 283,
    "origem": "CRATEUS, CE",
    "destino": "IGUATU, CE",
    "co2Emitido": 33,
    "fatorEmissao": 0.06,
    "valor": 1.98,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.475
  },
  {
    "key": 284,
    "origem": "CRUZEIRO DO SUL, AC",
    "destino": "RIO BRANCO, AC",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 285,
    "origem": "CUIABA, MT",
    "destino": "ALTA FLORESTA, MT",
    "co2Emitido": 117,
    "fatorEmissao": 0.06,
    "valor": 7.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.775
  },
  {
    "key": 286,
    "origem": "CUIABA, MT",
    "destino": "ARIPUANA, MT",
    "co2Emitido": 133,
    "fatorEmissao": 0.06,
    "valor": 7.98,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.975
  },
  {
    "key": 287,
    "origem": "CUIABA, MT",
    "destino": "BARRA DO GARÇA, MT",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 288,
    "origem": "CUIABA, MT",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 245,
    "fatorEmissao": 0.06,
    "valor": 14.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.375
  },
  {
    "key": 289,
    "origem": "CUIABA, MT",
    "destino": "BRASILIA, DF",
    "co2Emitido": 158,
    "fatorEmissao": 0.06,
    "valor": 9.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.85
  },
  {
    "key": 290,
    "origem": "CUIABA, MT",
    "destino": "CAMPO GRANDE, MS",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 291,
    "origem": "CUIABA, MT",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 292,
    "origem": "CUIABA, MT",
    "destino": "COCOAL, MT",
    "co2Emitido": 135,
    "fatorEmissao": 0.06,
    "valor": 8.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.125
  },
  {
    "key": 293,
    "origem": "CUIABA, MT",
    "destino": "CURITIBA, PR",
    "co2Emitido": 249,
    "fatorEmissao": 0.06,
    "valor": 14.94,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.675
  },
  {
    "key": 294,
    "origem": "CUIABA, MT",
    "destino": "GOIANIA, GO",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 295,
    "origem": "CUIABA, MT",
    "destino": "JI-PARANÁ, RO",
    "co2Emitido": 147,
    "fatorEmissao": 0.06,
    "valor": 8.82,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.025
  },
  {
    "key": 296,
    "origem": "CUIABA, MT",
    "destino": "JUINA, MT",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 297,
    "origem": "CUIABA, MT",
    "destino": "MACEIO, AL",
    "co2Emitido": 360,
    "fatorEmissao": 0.06,
    "valor": 21.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27
  },
  {
    "key": 298,
    "origem": "CUIABA, MT",
    "destino": "PORTO VELHO, RO",
    "co2Emitido": 218,
    "fatorEmissao": 0.06,
    "valor": 13.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.35
  },
  {
    "key": 299,
    "origem": "CUIABA, MT",
    "destino": "SAO JOSE DO RIO PRETO, SP",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 300,
    "origem": "CUIABA, MT",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 301,
    "origem": "CUIABA, MT",
    "destino": "SINOP, MT",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 302,
    "origem": "CUIABA, MT",
    "destino": "SORRISO, MT",
    "co2Emitido": 71,
    "fatorEmissao": 0.06,
    "valor": 4.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.325
  },
  {
    "key": 303,
    "origem": "CUIABA, MT",
    "destino": "VILHENA, RO",
    "co2Emitido": 98,
    "fatorEmissao": 0.06,
    "valor": 5.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.35
  },
  {
    "key": 304,
    "origem": "CURITIBA, PR",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 305,
    "origem": "CURITIBA, PR",
    "destino": "BLUMENAU, SC",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 306,
    "origem": "CURITIBA, PR",
    "destino": "BRASILIA, DF",
    "co2Emitido": 201,
    "fatorEmissao": 0.06,
    "valor": 12.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.075
  },
  {
    "key": 307,
    "origem": "CURITIBA, PR",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 308,
    "origem": "CURITIBA, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 309,
    "origem": "CURITIBA, PR",
    "destino": "CAMPO GRANDE, MS",
    "co2Emitido": 152,
    "fatorEmissao": 0.06,
    "valor": 9.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.4
  },
  {
    "key": 310,
    "origem": "CURITIBA, PR",
    "destino": "CASCAVEL, PR",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 311,
    "origem": "CURITIBA, PR",
    "destino": "CUIBA, MT",
    "co2Emitido": 249,
    "fatorEmissao": 0.06,
    "valor": 14.94,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.675
  },
  {
    "key": 312,
    "origem": "CURITIBA, PR",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 313,
    "origem": "CURITIBA, PR",
    "destino": "GUAIRA, PR",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 314,
    "origem": "CURITIBA, PR",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 103,
    "fatorEmissao": 0.06,
    "valor": 6.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.725
  },
  {
    "key": 315,
    "origem": "CURITIBA, PR",
    "destino": "LONDRINA, PR",
    "co2Emitido": 64,
    "fatorEmissao": 0.06,
    "valor": 3.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.8
  },
  {
    "key": 316,
    "origem": "CURITIBA, PR",
    "destino": "MARINGA, PR",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 317,
    "origem": "CURITIBA, PR",
    "destino": "MONTEVIDEO, URU",
    "co2Emitido": 269,
    "fatorEmissao": 0.06,
    "valor": 16.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.175
  },
  {
    "key": 318,
    "origem": "CURITIBA, PR",
    "destino": "PATO BRANCO, PR",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 319,
    "origem": "CURITIBA, PR",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 132,
    "fatorEmissao": 0.06,
    "valor": 7.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.9
  },
  {
    "key": 320,
    "origem": "CURITIBA, PR",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 321,
    "origem": "CURITIBA, PR",
    "destino": "RECIFE, PE",
    "co2Emitido": 376,
    "fatorEmissao": 0.06,
    "valor": 22.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.2
  },
  {
    "key": 322,
    "origem": "CURITIBA, PR",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 96,
    "fatorEmissao": 0.06,
    "valor": 5.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.2
  },
  {
    "key": 323,
    "origem": "CURITIBA, PR",
    "destino": "SALVADOR, BA",
    "co2Emitido": 302,
    "fatorEmissao": 0.06,
    "valor": 18.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.65
  },
  {
    "key": 324,
    "origem": "CURITIBA, PR",
    "destino": "SANTIAGO, CHI",
    "co2Emitido": 354,
    "fatorEmissao": 0.06,
    "valor": 21.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.55
  },
  {
    "key": 325,
    "origem": "CURITIBA, PR",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 326,
    "origem": "CURITIBA, PR",
    "destino": "TELEMACO, PR",
    "co2Emitido": 41,
    "fatorEmissao": 0.06,
    "valor": 2.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.075
  },
  {
    "key": 327,
    "origem": "CURITIBA, PR",
    "destino": "UMUARAMA, PR",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 328,
    "origem": "CURITIBA, PR",
    "destino": "UNIÃO DA VITORIA, PR",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 329,
    "origem": "EIRUNEPE, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 190,
    "fatorEmissao": 0.06,
    "valor": 11.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.25
  },
  {
    "key": 330,
    "origem": "FERNANDO DE NORONHA, PE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 112,
    "fatorEmissao": 0.06,
    "valor": 6.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.4
  },
  {
    "key": 331,
    "origem": "FERNANDO DE NORONHA, PE",
    "destino": "NATAL, RN",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 332,
    "origem": "FERNANDO DE NORONHA, PE",
    "destino": "RECIFE, DF",
    "co2Emitido": 94,
    "fatorEmissao": 0.06,
    "valor": 5.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.05
  },
  {
    "key": 333,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "ASSUNÇÃO,",
    "co2Emitido": 173,
    "fatorEmissao": 0.06,
    "valor": 10.38,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.975
  },
  {
    "key": 334,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 335,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "BRASILIA, DF",
    "co2Emitido": 236,
    "fatorEmissao": 0.06,
    "valor": 14.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.7
  },
  {
    "key": 336,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 236,
    "fatorEmissao": 0.06,
    "valor": 14.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.7
  },
  {
    "key": 337,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 338,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "CHAPECO, SC",
    "co2Emitido": 130,
    "fatorEmissao": 0.06,
    "valor": 7.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.75
  },
  {
    "key": 339,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "CORDOBA, ARG",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 340,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "CURITIBA, PR",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 341,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 122,
    "fatorEmissao": 0.06,
    "valor": 7.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.15
  },
  {
    "key": 342,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "MONTEVIDEO, URU",
    "co2Emitido": 192,
    "fatorEmissao": 0.06,
    "valor": 11.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.4
  },
  {
    "key": 343,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "PASSO FUNDO, RS",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 344,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 128,
    "fatorEmissao": 0.06,
    "valor": 7.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.6
  },
  {
    "key": 345,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 346,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "SANTIAGO, CHI",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 347,
    "origem": "FLORIANOPOLIS, SC",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 348,
    "origem": "FORTALEZA, CE",
    "destino": "ARACATI, CE",
    "co2Emitido": 24,
    "fatorEmissao": 0.06,
    "valor": 1.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.8
  },
  {
    "key": 349,
    "origem": "FORTALEZA, CE",
    "destino": "BELEM, PA",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 350,
    "origem": "FORTALEZA, CE",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 351,
    "origem": "FORTALEZA, CE",
    "destino": "BRASILIA, DF",
    "co2Emitido": 274,
    "fatorEmissao": 0.06,
    "valor": 16.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.55
  },
  {
    "key": 352,
    "origem": "FORTALEZA, CE",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 390,
    "fatorEmissao": 0.06,
    "valor": 23.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 29.25
  },
  {
    "key": 353,
    "origem": "FORTALEZA, CE",
    "destino": "CAMPINA GRANDE, PB",
    "co2Emitido": 84,
    "fatorEmissao": 0.06,
    "valor": 5.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.3
  },
  {
    "key": 354,
    "origem": "FORTALEZA, CE",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 355,
    "origem": "FORTALEZA, CE",
    "destino": "CRATEUS, CE",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 356,
    "origem": "FORTALEZA, CE",
    "destino": "FERNANDO DE NORONHA, PE",
    "co2Emitido": 112,
    "fatorEmissao": 0.06,
    "valor": 6.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.4
  },
  {
    "key": 357,
    "origem": "FORTALEZA, CE",
    "destino": "IGUATU, CE",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 358,
    "origem": "FORTALEZA, CE",
    "destino": "JERICOACOARA, CE",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 359,
    "origem": "FORTALEZA, CE",
    "destino": "JUAZEIRO DO NORTE, CE",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 360,
    "origem": "FORTALEZA, CE",
    "destino": "LISBOA, PTR",
    "co2Emitido": 536,
    "fatorEmissao": 0.06,
    "valor": 32.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 40.2
  },
  {
    "key": 361,
    "origem": "FORTALEZA, CE",
    "destino": "MACEIO, AL",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 362,
    "origem": "FORTALEZA, CE",
    "destino": "MANAUS, AM",
    "co2Emitido": 354,
    "fatorEmissao": 0.06,
    "valor": 21.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.55
  },
  {
    "key": 363,
    "origem": "FORTALEZA, CE",
    "destino": "MIAMI, USA",
    "co2Emitido": 502,
    "fatorEmissao": 0.06,
    "valor": 30.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 37.65
  },
  {
    "key": 364,
    "origem": "FORTALEZA, CE",
    "destino": "NATAL, RN",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 365,
    "origem": "FORTALEZA, CE",
    "destino": "PARIS, FRA",
    "co2Emitido": 706,
    "fatorEmissao": 0.06,
    "valor": 42.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 52.95
  },
  {
    "key": 366,
    "origem": "FORTALEZA, CE",
    "destino": "RECIFE, PE",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 367,
    "origem": "FORTALEZA, CE",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 368,
    "origem": "FORTALEZA, CE",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 326,
    "fatorEmissao": 0.06,
    "valor": 19.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.45
  },
  {
    "key": 369,
    "origem": "FORTALEZA, CE",
    "destino": "SALVADOR, BA",
    "co2Emitido": 200,
    "fatorEmissao": 0.06,
    "valor": 12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15
  },
  {
    "key": 370,
    "origem": "FORTALEZA, CE",
    "destino": "SÃO BENEDITO, CE",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 371,
    "origem": "FORTALEZA, CE",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 372,
    "origem": "FORTALEZA, CE",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 340,
    "fatorEmissao": 0.06,
    "valor": 20.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.5
  },
  {
    "key": 373,
    "origem": "FORTALEZA, CE",
    "destino": "TERESINA, PI",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 374,
    "origem": "FORTALEZA, CE",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 320,
    "fatorEmissao": 0.06,
    "valor": 19.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24
  },
  {
    "key": 375,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 150,
    "fatorEmissao": 0.06,
    "valor": 9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.3
  },
  {
    "key": 376,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 103,
    "fatorEmissao": 0.06,
    "valor": 6.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.7
  },
  {
    "key": 377,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 122,
    "fatorEmissao": 0.06,
    "valor": 7.3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.2
  },
  {
    "key": 378,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "LIMA, PER",
    "co2Emitido": 311,
    "fatorEmissao": 0.06,
    "valor": 18.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.3
  },
  {
    "key": 379,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "MACEIO, AL",
    "co2Emitido": 401,
    "fatorEmissao": 0.06,
    "valor": 24.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 30.075
  },
  {
    "key": 380,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.3
  },
  {
    "key": 381,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "RECIFE, PE",
    "co2Emitido": 314,
    "fatorEmissao": 0.06,
    "valor": 18.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.6
  },
  {
    "key": 382,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 216,
    "fatorEmissao": 0.06,
    "valor": 13,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.2
  },
  {
    "key": 383,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "SANTIAGO, CHI",
    "co2Emitido": 288,
    "fatorEmissao": 0.06,
    "valor": 17.3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.6
  },
  {
    "key": 384,
    "origem": "FOZ DO IGUAÇU, PR",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 159,
    "fatorEmissao": 0.06,
    "valor": 9.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.9
  },
  {
    "key": 385,
    "origem": "GOIANIA, GO",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 386,
    "origem": "GOIANIA, GO",
    "destino": "BRASILIA, DF",
    "co2Emitido": 58,
    "fatorEmissao": 0.06,
    "valor": 3.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.35
  },
  {
    "key": 387,
    "origem": "GOIANIA, GO",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 388,
    "origem": "GOIANIA, GO",
    "destino": "CUIABA, MT",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 389,
    "origem": "GOIANIA, GO",
    "destino": "MACEIO, AL",
    "co2Emitido": 280,
    "fatorEmissao": 0.06,
    "valor": 16.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21
  },
  {
    "key": 390,
    "origem": "GOIANIA, GO",
    "destino": "PALMAS, TO",
    "co2Emitido": 122,
    "fatorEmissao": 0.06,
    "valor": 7.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.15
  },
  {
    "key": 391,
    "origem": "GOIANIA, GO",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 184,
    "fatorEmissao": 0.06,
    "valor": 11.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.8
  },
  {
    "key": 392,
    "origem": "GOIANIA, GO",
    "destino": "RECIFE, PE",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 393,
    "origem": "GOIANIA, GO",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 394,
    "origem": "GOIANIA, GO",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 153,
    "fatorEmissao": 0.06,
    "valor": 9.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.475
  },
  {
    "key": 395,
    "origem": "GOIANIA, GO",
    "destino": "SALVADOR, BA",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 396,
    "origem": "GOIANIA, GO",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 164,
    "fatorEmissao": 0.06,
    "valor": 9.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.3
  },
  {
    "key": 397,
    "origem": "GUAIRA, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 398,
    "origem": "GUANAMBI, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 399,
    "origem": "GUANAMBI, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 88,
    "fatorEmissao": 0.06,
    "valor": 5.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.6
  },
  {
    "key": 400,
    "origem": "GUARAPUAVA, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 88,
    "fatorEmissao": 0.06,
    "valor": 5.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.6
  },
  {
    "key": 401,
    "origem": "IGUATU, CE",
    "destino": "CRATEUS, CE",
    "co2Emitido": 33,
    "fatorEmissao": 0.06,
    "valor": 1.98,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.475
  },
  {
    "key": 402,
    "origem": "ILHEUS, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 142,
    "fatorEmissao": 0.06,
    "valor": 8.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.65
  },
  {
    "key": 403,
    "origem": "ILHEUS, BA",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 235,
    "fatorEmissao": 0.06,
    "valor": 14.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.625
  },
  {
    "key": 404,
    "origem": "ILHEUS, BA",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 187,
    "fatorEmissao": 0.06,
    "valor": 11.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.025
  },
  {
    "key": 405,
    "origem": "ILHEUS, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 57,
    "fatorEmissao": 0.06,
    "valor": 3.42,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.275
  },
  {
    "key": 406,
    "origem": "ILHEUS, BA",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 242,
    "fatorEmissao": 0.06,
    "valor": 14.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.15
  },
  {
    "key": 407,
    "origem": "IMPERATRIZ, MA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 408,
    "origem": "IMPERATRIZ, MA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 409,
    "origem": "IMPERATRIZ, MA",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 79,
    "fatorEmissao": 0.06,
    "valor": 4.74,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.925
  },
  {
    "key": 410,
    "origem": "IMPERATRIZ, MA",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 411,
    "origem": "IPATINGA, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 36,
    "fatorEmissao": 0.06,
    "valor": 2.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.7
  },
  {
    "key": 412,
    "origem": "IPATINGA, MG",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 413,
    "origem": "ITAITUBA, AM",
    "destino": "JURUTI, AM",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 414,
    "origem": "ITAITUBA, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 82,
    "fatorEmissao": 0.06,
    "valor": 4.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.15
  },
  {
    "key": 415,
    "origem": "ITAITUBA, AM",
    "destino": "SANTAREM, PA",
    "co2Emitido": 40,
    "fatorEmissao": 0.06,
    "valor": 2.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3
  },
  {
    "key": 416,
    "origem": "JAQUARUNA, SC",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 417,
    "origem": "JAQUARUNA, SC",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 418,
    "origem": "JERICOACOARA, CE",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 282,
    "fatorEmissao": 0.06,
    "valor": 16.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.15
  },
  {
    "key": 419,
    "origem": "JERICOACOARA, CE",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 356,
    "fatorEmissao": 0.06,
    "valor": 21.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.7
  },
  {
    "key": 420,
    "origem": "JERICOACOARA, CE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 421,
    "origem": "JERICOACOARA, CE",
    "destino": "PARNAIBA, PI",
    "co2Emitido": 30,
    "fatorEmissao": 0.06,
    "valor": 1.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.25
  },
  {
    "key": 422,
    "origem": "JERICOACOARA, CE",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 360,
    "fatorEmissao": 0.06,
    "valor": 21.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27
  },
  {
    "key": 423,
    "origem": "JOAO PESSOA, PB",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 252,
    "fatorEmissao": 0.06,
    "valor": 15.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.9
  },
  {
    "key": 424,
    "origem": "JOAO PESSOA, PB",
    "destino": "BRASILIA, DF",
    "co2Emitido": 278,
    "fatorEmissao": 0.06,
    "valor": 16.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.85
  },
  {
    "key": 425,
    "origem": "JOAO PESSOA, PB",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 382,
    "fatorEmissao": 0.06,
    "valor": 22.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.65
  },
  {
    "key": 426,
    "origem": "JOAO PESSOA, PB",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 318,
    "fatorEmissao": 0.06,
    "valor": 19.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.85
  },
  {
    "key": 427,
    "origem": "JOAO PESSOA, PB",
    "destino": "NATAL, RN",
    "co2Emitido": 44,
    "fatorEmissao": 0.06,
    "valor": 2.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.3
  },
  {
    "key": 428,
    "origem": "JOAO PESSOA, PB",
    "destino": "RECIFE, PE",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 429,
    "origem": "JOAO PESSOA, PB",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 332,
    "fatorEmissao": 0.06,
    "valor": 19.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.9
  },
  {
    "key": 430,
    "origem": "JOAO PESSOA, PB",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 294,
    "fatorEmissao": 0.06,
    "valor": 17.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.05
  },
  {
    "key": 431,
    "origem": "JOAO PESSOA, PB",
    "destino": "SALVADOR, BA",
    "co2Emitido": 150,
    "fatorEmissao": 0.06,
    "valor": 9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.25
  },
  {
    "key": 432,
    "origem": "JOAO PESSOA, PB",
    "destino": "SÃO JOSE DO RIO PRETO, SP",
    "co2Emitido": 330,
    "fatorEmissao": 0.06,
    "valor": 19.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.75
  },
  {
    "key": 433,
    "origem": "JOAO PESSOA, PB",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 332,
    "fatorEmissao": 0.06,
    "valor": 19.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.9
  },
  {
    "key": 434,
    "origem": "JOAO PESSOA, PB",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 302,
    "fatorEmissao": 0.06,
    "valor": 18.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.65
  },
  {
    "key": 435,
    "origem": "JOINVILE, SC",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 436,
    "origem": "JOINVILE, SC",
    "destino": "PORTO ALEGRE, SP",
    "co2Emitido": 82,
    "fatorEmissao": 0.06,
    "valor": 4.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.15
  },
  {
    "key": 437,
    "origem": "JOINVILE, SC",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 257,
    "fatorEmissao": 0.06,
    "valor": 15.42,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.275
  },
  {
    "key": 438,
    "origem": "JOINVILE, SC",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 74,
    "fatorEmissao": 0.06,
    "valor": 4.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.55
  },
  {
    "key": 439,
    "origem": "JUAZEIRO DO NORTE, CE",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 296,
    "fatorEmissao": 0.06,
    "valor": 17.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.2
  },
  {
    "key": 440,
    "origem": "JUAZEIRO DO NORTE, CE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 441,
    "origem": "JUAZEIRO DO NORTE, CE",
    "destino": "RECIFE, PE",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 442,
    "origem": "JUAZEIRO DO NORTE, CE",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 443,
    "origem": "JUINA, MT",
    "destino": "CUIABA, MT",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 444,
    "origem": "JUIZ DE FORA, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 445,
    "origem": "JUIZ DE FORA, MG",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 446,
    "origem": "JUIZ DE FORA, MG",
    "destino": "SÃO JOAO DEL REI, MG",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 447,
    "origem": "JUIZ DE FORA, MG",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 448,
    "origem": "JURUTI, AM",
    "destino": "ITAITUBA, AM",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 449,
    "origem": "LABREA, AM",
    "destino": "COARI, AM",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 450,
    "origem": "LABREA, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 124,
    "fatorEmissao": 0.06,
    "valor": 7.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.3
  },
  {
    "key": 451,
    "origem": "LENÇOIS, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 160,
    "fatorEmissao": 0.06,
    "valor": 9.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12
  },
  {
    "key": 452,
    "origem": "LENÇOIS, BA",
    "destino": "SALVADOR, MG",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 453,
    "origem": "LONDRINA, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 454,
    "origem": "LONDRINA, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 64,
    "fatorEmissao": 0.06,
    "valor": 3.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.8
  },
  {
    "key": 455,
    "origem": "LONDRINA, PR",
    "destino": "MACEIO, AL",
    "fatorEmissao": 0.06,
    "valor": 0.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 0.075
  },
  {
    "key": 456,
    "origem": "LONDRINA, PR",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 457,
    "origem": "LONDRINA, PR",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 93,
    "fatorEmissao": 0.06,
    "valor": 5.58,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.975
  },
  {
    "key": 458,
    "origem": "MACEIO, AL",
    "destino": "ARACATUBA, SP",
    "co2Emitido": 362,
    "fatorEmissao": 0.06,
    "valor": 21.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.15
  },
  {
    "key": 459,
    "origem": "MACEIO, AL",
    "destino": "BAURU, SP",
    "co2Emitido": 320,
    "fatorEmissao": 0.06,
    "valor": 19.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24
  },
  {
    "key": 460,
    "origem": "MACEIO, AL",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 248,
    "fatorEmissao": 0.06,
    "valor": 14.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.6
  },
  {
    "key": 461,
    "origem": "MACEIO, AL",
    "destino": "BRASILIA, DF",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 462,
    "origem": "MACEIO, AL",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 560,
    "fatorEmissao": 0.06,
    "valor": 33.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 42
  },
  {
    "key": 463,
    "origem": "MACEIO, AL",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 310,
    "fatorEmissao": 0.06,
    "valor": 18.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.25
  },
  {
    "key": 464,
    "origem": "MACEIO, AL",
    "destino": "CASCAVEL, PR",
    "co2Emitido": 386,
    "fatorEmissao": 0.06,
    "valor": 23.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.95
  },
  {
    "key": 465,
    "origem": "MACEIO, AL",
    "destino": "CUIABA, MT",
    "co2Emitido": 360,
    "fatorEmissao": 0.06,
    "valor": 21.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27
  },
  {
    "key": 466,
    "origem": "MACEIO, AL",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 467,
    "origem": "MACEIO, AL",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 401,
    "fatorEmissao": 0.06,
    "valor": 24.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 30.075
  },
  {
    "key": 468,
    "origem": "MACEIO, AL",
    "destino": "GOIANIA, GO",
    "co2Emitido": 280,
    "fatorEmissao": 0.06,
    "valor": 16.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21
  },
  {
    "key": 469,
    "origem": "MACEIO, AL",
    "destino": "LONDRINA, PR",
    "co2Emitido": 350,
    "fatorEmissao": 0.06,
    "valor": 21,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.25
  },
  {
    "key": 470,
    "origem": "MACEIO, AL",
    "destino": "NATAL, RN",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 471,
    "origem": "MACEIO, AL",
    "destino": "PRESIDENTE PRUDENTE, SP",
    "co2Emitido": 344,
    "fatorEmissao": 0.06,
    "valor": 20.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.8
  },
  {
    "key": 472,
    "origem": "MACEIO, AL",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 450,
    "fatorEmissao": 0.06,
    "valor": 27,
    "fatorFloresta": 0.8,
    "florestaProtegida": 33.75
  },
  {
    "key": 473,
    "origem": "MACEIO, AL",
    "destino": "RECIFE, PE",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 474,
    "origem": "MACEIO, AL",
    "destino": "RIBEIRÃO PRETO, SP",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 475,
    "origem": "MACEIO, AL",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 268,
    "fatorEmissao": 0.06,
    "valor": 16.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.1
  },
  {
    "key": 476,
    "origem": "MACEIO, AL",
    "destino": "SALVADOR, BA",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 477,
    "origem": "MACEIO, AL",
    "destino": "SÃO JOSE DO RIO PRETO, SP",
    "co2Emitido": 312,
    "fatorEmissao": 0.06,
    "valor": 18.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.4
  },
  {
    "key": 478,
    "origem": "MACEIO, AL",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 303,
    "fatorEmissao": 0.06,
    "valor": 18.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.725
  },
  {
    "key": 479,
    "origem": "MACEIO, AL",
    "destino": "UBERABA, MG",
    "co2Emitido": 288,
    "fatorEmissao": 0.06,
    "valor": 17.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.6
  },
  {
    "key": 480,
    "origem": "MACEIO, AL",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 272,
    "fatorEmissao": 0.06,
    "valor": 16.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.4
  },
  {
    "key": 481,
    "origem": "MANAUS, AM",
    "destino": "APUI, AM",
    "co2Emitido": 71,
    "fatorEmissao": 0.06,
    "valor": 4.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.325
  },
  {
    "key": 482,
    "origem": "MANAUS, AM",
    "destino": "BARCELOS, AM",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 483,
    "origem": "MANAUS, AM",
    "destino": "BELEM, PA",
    "co2Emitido": 236,
    "fatorEmissao": 0.06,
    "valor": 14.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.7
  },
  {
    "key": 484,
    "origem": "MANAUS, AM",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 392,
    "fatorEmissao": 0.06,
    "valor": 23.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 29.4
  },
  {
    "key": 485,
    "origem": "MANAUS, AM",
    "destino": "BOA VISTA, RR",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 486,
    "origem": "MANAUS, AM",
    "destino": "BOGOTA, COL",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 487,
    "origem": "MANAUS, AM",
    "destino": "BORBA, AM",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 488,
    "origem": "MANAUS, AM",
    "destino": "BRASILIA, DF",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 489,
    "origem": "MANAUS, AM",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 352,
    "fatorEmissao": 0.06,
    "valor": 21.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.4
  },
  {
    "key": 490,
    "origem": "MANAUS, AM",
    "destino": "CARAUARI, AM",
    "co2Emitido": 126,
    "fatorEmissao": 0.06,
    "valor": 7.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.45
  },
  {
    "key": 491,
    "origem": "MANAUS, AM",
    "destino": "COARI, AM",
    "co2Emitido": 58,
    "fatorEmissao": 0.06,
    "valor": 3.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.35
  },
  {
    "key": 492,
    "origem": "MANAUS, AM",
    "destino": "EIRUNEPE, AM",
    "co2Emitido": 190,
    "fatorEmissao": 0.06,
    "valor": 11.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.25
  },
  {
    "key": 493,
    "origem": "MANAUS, AM",
    "destino": "FORT LAUDERDALE, USA",
    "co2Emitido": 476,
    "fatorEmissao": 0.06,
    "valor": 28.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 35.7
  },
  {
    "key": 494,
    "origem": "MANAUS, AM",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 354,
    "fatorEmissao": 0.06,
    "valor": 21.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.55
  },
  {
    "key": 495,
    "origem": "MANAUS, AM",
    "destino": "FRANKFURT, ALE",
    "co2Emitido": 752,
    "fatorEmissao": 0.06,
    "valor": 45.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 56.4
  },
  {
    "key": 496,
    "origem": "MANAUS, AM",
    "destino": "ITAITUBA, AM",
    "co2Emitido": 82,
    "fatorEmissao": 0.06,
    "valor": 4.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.15
  },
  {
    "key": 497,
    "origem": "MANAUS, AM",
    "destino": "LABREA, AM",
    "co2Emitido": 124,
    "fatorEmissao": 0.06,
    "valor": 7.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.3
  },
  {
    "key": 498,
    "origem": "MANAUS, AM",
    "destino": "MANICORÉ, AM",
    "co2Emitido": 56,
    "fatorEmissao": 0.06,
    "valor": 3.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.2
  },
  {
    "key": 499,
    "origem": "MANAUS, AM",
    "destino": "MAUES, AM",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 500,
    "origem": "MANAUS, AM",
    "destino": "MIAMI, USA",
    "co2Emitido": 332,
    "fatorEmissao": 0.06,
    "valor": 19.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.9
  },
  {
    "key": 501,
    "origem": "MANAUS, AM",
    "destino": "CIDADE DO PANAMÁ, PAN",
    "co2Emitido": 384,
    "fatorEmissao": 0.06,
    "valor": 23.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.8
  },
  {
    "key": 502,
    "origem": "MANAUS, AM",
    "destino": "PARINTINS, AM",
    "co2Emitido": 61,
    "fatorEmissao": 0.06,
    "valor": 3.66,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.575
  },
  {
    "key": 503,
    "origem": "MANAUS, AM",
    "destino": "PORTO VELHO, RO",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 504,
    "origem": "MANAUS, AM",
    "destino": "PUERTO ORDAZ, VEM",
    "co2Emitido": 235,
    "fatorEmissao": 0.06,
    "valor": 14.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.625
  },
  {
    "key": 505,
    "origem": "MANAUS, AM",
    "destino": "RECIFE, PE",
    "co2Emitido": 313,
    "fatorEmissao": 0.06,
    "valor": 18.78,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.475
  },
  {
    "key": 506,
    "origem": "MANAUS, AM",
    "destino": "RIO BRANCO, AC",
    "co2Emitido": 202,
    "fatorEmissao": 0.06,
    "valor": 12.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.15
  },
  {
    "key": 507,
    "origem": "MANAUS, AM",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 396,
    "fatorEmissao": 0.06,
    "valor": 23.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 29.7
  },
  {
    "key": 508,
    "origem": "MANAUS, AM",
    "destino": "SANTA ISABEL DO RIO NEGRO, AM",
    "co2Emitido": 84,
    "fatorEmissao": 0.06,
    "valor": 5.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.3
  },
  {
    "key": 509,
    "origem": "MANAUS, AM",
    "destino": "SANTAREM, PA",
    "co2Emitido": 130,
    "fatorEmissao": 0.06,
    "valor": 7.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.75
  },
  {
    "key": 510,
    "origem": "MANAUS, AM",
    "destino": "SAO GABRIEL, AM",
    "co2Emitido": 103,
    "fatorEmissao": 0.06,
    "valor": 6.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.725
  },
  {
    "key": 511,
    "origem": "MANAUS, AM",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 382,
    "fatorEmissao": 0.06,
    "valor": 22.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.65
  },
  {
    "key": 512,
    "origem": "MANAUS, AM",
    "destino": "SAO PAULO DE OLIVENÇA, AM",
    "co2Emitido": 148,
    "fatorEmissao": 0.06,
    "valor": 8.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.1
  },
  {
    "key": 513,
    "origem": "MANAUS, AM",
    "destino": "TABATINGA, AM",
    "co2Emitido": 240,
    "fatorEmissao": 0.06,
    "valor": 14.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18
  },
  {
    "key": 514,
    "origem": "MANAUS, AM",
    "destino": "TEFE, AM",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 515,
    "origem": "MANAUS, AM",
    "destino": "TROMBETAS, AM",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 516,
    "origem": "MANICORÉ, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 56,
    "fatorEmissao": 0.06,
    "valor": 3.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.2
  },
  {
    "key": 517,
    "origem": "MARABA, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 63,
    "fatorEmissao": 0.06,
    "valor": 3.78,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.725
  },
  {
    "key": 518,
    "origem": "MARABA, PA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 268,
    "fatorEmissao": 0.06,
    "valor": 16.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.1
  },
  {
    "key": 519,
    "origem": "MARABA, PA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 230,
    "fatorEmissao": 0.06,
    "valor": 13.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.25
  },
  {
    "key": 520,
    "origem": "MARILIA, SP",
    "destino": "BAURU, SP",
    "co2Emitido": 23,
    "fatorEmissao": 0.06,
    "valor": 1.38,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.725
  },
  {
    "key": 521,
    "origem": "MARILIA, SP",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 62,
    "fatorEmissao": 0.06,
    "valor": 3.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.65
  },
  {
    "key": 522,
    "origem": "MARINGA, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 138,
    "fatorEmissao": 0.06,
    "valor": 8.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.35
  },
  {
    "key": 523,
    "origem": "MARINGA, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 524,
    "origem": "MARINGA, PR",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 525,
    "origem": "MAUES, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 526,
    "origem": "MONTE ALEGRE, AM",
    "destino": "SANTAREM, AM",
    "co2Emitido": 20,
    "fatorEmissao": 0.06,
    "valor": 1.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.5
  },
  {
    "key": 527,
    "origem": "MONTE DOURADO, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 68,
    "fatorEmissao": 0.06,
    "valor": 4.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.1
  },
  {
    "key": 528,
    "origem": "MONTES CLAROS, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 529,
    "origem": "MONTES CLAROS, MG",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 530,
    "origem": "MONTES CLAROS, MG",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 112,
    "fatorEmissao": 0.06,
    "valor": 6.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.4
  },
  {
    "key": 531,
    "origem": "MONTES CLAROS, MG",
    "destino": "SALVADOR, BA",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 532,
    "origem": "MONTES CLAROS, MG",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 176,
    "fatorEmissao": 0.06,
    "valor": 10.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.2
  },
  {
    "key": 533,
    "origem": "MOSSORO, RN",
    "destino": "RECIFE, PE",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 534,
    "origem": "NATAL, RN",
    "destino": "BAURU, SP",
    "co2Emitido": 362,
    "fatorEmissao": 0.06,
    "valor": 21.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.15
  },
  {
    "key": 535,
    "origem": "NATAL, RN",
    "destino": "BELEM, PA",
    "co2Emitido": 264,
    "fatorEmissao": 0.06,
    "valor": 15.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.8
  },
  {
    "key": 536,
    "origem": "NATAL, RN",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 276,
    "fatorEmissao": 0.06,
    "valor": 16.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.7
  },
  {
    "key": 537,
    "origem": "NATAL, RN",
    "destino": "BRASILIA, DF",
    "co2Emitido": 278,
    "fatorEmissao": 0.06,
    "valor": 16.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.85
  },
  {
    "key": 538,
    "origem": "NATAL, RN",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 360,
    "fatorEmissao": 0.06,
    "valor": 21.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27
  },
  {
    "key": 539,
    "origem": "NATAL, RN",
    "destino": "CASCAVEL,PR",
    "co2Emitido": 427,
    "fatorEmissao": 0.06,
    "valor": 25.62,
    "fatorFloresta": 0.8,
    "florestaProtegida": 32.025
  },
  {
    "key": 540,
    "origem": "NATAL, RN",
    "destino": "FERNANDO DE NORONHA, PE",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 541,
    "origem": "NATAL, RN",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 542,
    "origem": "NATAL, RN",
    "destino": "JOÃO PESSOA, PB",
    "co2Emitido": 44,
    "fatorEmissao": 0.06,
    "valor": 2.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.3
  },
  {
    "key": 543,
    "origem": "NATAL, RN",
    "destino": "LISBOA, PTR",
    "co2Emitido": 486,
    "fatorEmissao": 0.06,
    "valor": 29.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 36.45
  },
  {
    "key": 544,
    "origem": "NATAL, RN",
    "destino": "MACEIO, AL",
    "co2Emitido": 102,
    "fatorEmissao": 0.06,
    "valor": 6.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.65
  },
  {
    "key": 545,
    "origem": "NATAL, RN",
    "destino": "MOSSORO, RN",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 546,
    "origem": "NATAL, RN",
    "destino": "PRESIDENTE PRUDENTE, SP",
    "co2Emitido": 382,
    "fatorEmissao": 0.06,
    "valor": 22.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.65
  },
  {
    "key": 547,
    "origem": "NATAL, RN",
    "destino": "RECIFE, PE",
    "co2Emitido": 64,
    "fatorEmissao": 0.06,
    "valor": 3.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.8
  },
  {
    "key": 548,
    "origem": "NATAL, RN",
    "destino": "RIBEIRÃO PRETO, SP",
    "co2Emitido": 340,
    "fatorEmissao": 0.06,
    "valor": 20.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.5
  },
  {
    "key": 549,
    "origem": "NATAL, RN",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 306,
    "fatorEmissao": 0.06,
    "valor": 18.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.95
  },
  {
    "key": 550,
    "origem": "NATAL, RN",
    "destino": "SALVADOR, BA",
    "co2Emitido": 160,
    "fatorEmissao": 0.06,
    "valor": 9.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12
  },
  {
    "key": 551,
    "origem": "NATAL, RN",
    "destino": "SAO JOSE DO RIO PRETO, SP",
    "co2Emitido": 352,
    "fatorEmissao": 0.06,
    "valor": 21.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.4
  },
  {
    "key": 552,
    "origem": "NATAL, RN",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 338,
    "fatorEmissao": 0.06,
    "valor": 20.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.35
  },
  {
    "key": 553,
    "origem": "NATAL, RN",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 554,
    "origem": "NAVEGANTES, SC",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 210,
    "fatorEmissao": 0.06,
    "valor": 12.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.75
  },
  {
    "key": 555,
    "origem": "NAVEGANTES, SC",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 237,
    "fatorEmissao": 0.06,
    "valor": 14.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.775
  },
  {
    "key": 556,
    "origem": "NAVEGANTES, SC",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 100,
    "fatorEmissao": 0.06,
    "valor": 6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.5
  },
  {
    "key": 557,
    "origem": "NAVEGANTES, SC",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 558,
    "origem": "NAVEGANTES, SC",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 94,
    "fatorEmissao": 0.06,
    "valor": 5.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.05
  },
  {
    "key": 559,
    "origem": "NAVEGANTES, SC",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 112,
    "fatorEmissao": 0.06,
    "valor": 6.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.4
  },
  {
    "key": 560,
    "origem": "PALMAS, TO",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 230,
    "fatorEmissao": 0.06,
    "valor": 13.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.25
  },
  {
    "key": 561,
    "origem": "PALMAS, TO",
    "destino": "BRASILIA, DF",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 562,
    "origem": "PALMAS, TO",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 245,
    "fatorEmissao": 0.06,
    "valor": 14.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.375
  },
  {
    "key": 563,
    "origem": "PALMAS, TO",
    "destino": "GOIANIA, GO",
    "co2Emitido": 122,
    "fatorEmissao": 0.06,
    "valor": 7.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.15
  },
  {
    "key": 564,
    "origem": "PALMAS, TO",
    "destino": "SÃO PAULO, PE",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 565,
    "origem": "PARACATU, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 62,
    "fatorEmissao": 0.06,
    "valor": 3.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.65
  },
  {
    "key": 566,
    "origem": "PARAGOMINAS, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 36,
    "fatorEmissao": 0.06,
    "valor": 2.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.7
  },
  {
    "key": 567,
    "origem": "PARNAIBA, PI",
    "destino": "JERICOACOARA, CE",
    "co2Emitido": 30,
    "fatorEmissao": 0.06,
    "valor": 1.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.25
  },
  {
    "key": 568,
    "origem": "PASSO FUNDO, RS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 171,
    "fatorEmissao": 0.06,
    "valor": 10.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.825
  },
  {
    "key": 569,
    "origem": "PASSO FUNDO, RS",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 570,
    "origem": "PASSO FUNDO, RS",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 174,
    "fatorEmissao": 0.06,
    "valor": 10.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.05
  },
  {
    "key": 571,
    "origem": "PATO BRANCO, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 70,
    "fatorEmissao": 0.06,
    "valor": 4.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.25
  },
  {
    "key": 572,
    "origem": "PATOS DE MINAS, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 573,
    "origem": "PATOS, PB",
    "destino": "RECIFE, PE",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 574,
    "origem": "PAULO AFONSO, BA",
    "destino": "RECIFE, PE",
    "co2Emitido": 74,
    "fatorEmissao": 0.06,
    "valor": 4.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.55
  },
  {
    "key": 575,
    "origem": "PAULO AFONSO, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 576,
    "origem": "PELOTAS, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 577,
    "origem": "PELOTAS, RS",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 226,
    "fatorEmissao": 0.06,
    "valor": 13.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.95
  },
  {
    "key": 578,
    "origem": "PETROLINA, PE",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 296,
    "fatorEmissao": 0.06,
    "valor": 17.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.2
  },
  {
    "key": 579,
    "origem": "PETROLINA, PE",
    "destino": "RECIFE, PE",
    "co2Emitido": 116,
    "fatorEmissao": 0.06,
    "valor": 6.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.7
  },
  {
    "key": 580,
    "origem": "PETROLINA, PE",
    "destino": "SÃO RAIMUNDO NONATO, PI",
    "co2Emitido": 50,
    "fatorEmissao": 0.06,
    "valor": 3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.75
  },
  {
    "key": 581,
    "origem": "PETROLINA, PE",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 278,
    "fatorEmissao": 0.06,
    "valor": 16.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.85
  },
  {
    "key": 582,
    "origem": "PONTA GROSSA, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 583,
    "origem": "PONTA PORÃ, MS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 584,
    "origem": "PORTO ALEGRE, RS",
    "destino": "ALEGRETE, RS",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 585,
    "origem": "PORTO ALEGRE, RS",
    "destino": "BAGE, RS",
    "co2Emitido": 50,
    "fatorEmissao": 0.06,
    "valor": 3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.75
  },
  {
    "key": 586,
    "origem": "PORTO ALEGRE, RS",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 587,
    "origem": "PORTO ALEGRE, RS",
    "destino": "BRASILIA, DF",
    "co2Emitido": 266,
    "fatorEmissao": 0.06,
    "valor": 15.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.95
  },
  {
    "key": 588,
    "origem": "PORTO ALEGRE, RS",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 232,
    "fatorEmissao": 0.06,
    "valor": 13.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.4
  },
  {
    "key": 589,
    "origem": "PORTO ALEGRE, RS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 156,
    "fatorEmissao": 0.06,
    "valor": 9.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.7
  },
  {
    "key": 590,
    "origem": "PORTO ALEGRE, RS",
    "destino": "CURITIBA, PR",
    "co2Emitido": 132,
    "fatorEmissao": 0.06,
    "valor": 7.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.9
  },
  {
    "key": 591,
    "origem": "PORTO ALEGRE, RS",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 128,
    "fatorEmissao": 0.06,
    "valor": 7.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.6
  },
  {
    "key": 592,
    "origem": "PORTO ALEGRE, RS",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 593,
    "origem": "PORTO ALEGRE, RS",
    "destino": "JOINVILE, SC",
    "co2Emitido": 82,
    "fatorEmissao": 0.06,
    "valor": 4.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.15
  },
  {
    "key": 594,
    "origem": "PORTO ALEGRE, RS",
    "destino": "LIMA, PER",
    "co2Emitido": 524,
    "fatorEmissao": 0.06,
    "valor": 31.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 39.3
  },
  {
    "key": 595,
    "origem": "PORTO ALEGRE, RS",
    "destino": "LISBOA, PTR",
    "co2Emitido": 752,
    "fatorEmissao": 0.06,
    "valor": 45.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 56.4
  },
  {
    "key": 596,
    "origem": "PORTO ALEGRE, RS",
    "destino": "MACEIO, AL",
    "co2Emitido": 450,
    "fatorEmissao": 0.06,
    "valor": 27,
    "fatorFloresta": 0.8,
    "florestaProtegida": 33.75
  },
  {
    "key": 597,
    "origem": "PORTO ALEGRE, RS",
    "destino": "MONTEVIDEO, URY",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 598,
    "origem": "PORTO ALEGRE, RS",
    "destino": "NAVEGANTES, SC",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 599,
    "origem": "PORTO ALEGRE, RS",
    "destino": "PANAMA CITY, PAN",
    "co2Emitido": 688,
    "fatorEmissao": 0.06,
    "valor": 41.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 51.6
  },
  {
    "key": 600,
    "origem": "PORTO ALEGRE, RS",
    "destino": "PELOTAS, RS",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 601,
    "origem": "PORTO ALEGRE, RS",
    "destino": "PUNTA DEL LESTE, URG",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 602,
    "origem": "PORTO ALEGRE, RS",
    "destino": "RECIFE, PE",
    "co2Emitido": 440,
    "fatorEmissao": 0.06,
    "valor": 26.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 33
  },
  {
    "key": 603,
    "origem": "PORTO ALEGRE, RS",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 212,
    "fatorEmissao": 0.06,
    "valor": 12.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.9
  },
  {
    "key": 604,
    "origem": "PORTO ALEGRE, RS",
    "destino": "SANTA CRUZ DO SUL, RS",
    "co2Emitido": 22,
    "fatorEmissao": 0.06,
    "valor": 1.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.65
  },
  {
    "key": 605,
    "origem": "PORTO ALEGRE, RS",
    "destino": "SANTA MARIA, RS",
    "co2Emitido": 52,
    "fatorEmissao": 0.06,
    "valor": 3.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.9
  },
  {
    "key": 606,
    "origem": "PORTO ALEGRE, RS",
    "destino": "SANTA ROSA DO SUL, RS",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 607,
    "origem": "PORTO ALEGRE, RS",
    "destino": "SANTIAGO, CHL",
    "co2Emitido": 308,
    "fatorEmissao": 0.06,
    "valor": 18.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.1
  },
  {
    "key": 608,
    "origem": "PORTO ALEGRE, RS",
    "destino": "SANTO ANGELO, RS",
    "co2Emitido": 68,
    "fatorEmissao": 0.06,
    "valor": 4.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.1
  },
  {
    "key": 609,
    "origem": "PORTO ALEGRE, RS",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 172,
    "fatorEmissao": 0.06,
    "valor": 10.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.9
  },
  {
    "key": 610,
    "origem": "PORTO ALEGRE, RS",
    "destino": "URUGUAIANA, RS",
    "co2Emitido": 100,
    "fatorEmissao": 0.06,
    "valor": 6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.5
  },
  {
    "key": 611,
    "origem": "PORTO DE MOZ, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 62,
    "fatorEmissao": 0.06,
    "valor": 3.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.65
  },
  {
    "key": 612,
    "origem": "PORTO DE MOZ, PA",
    "destino": "BREVES, PA",
    "co2Emitido": 34,
    "fatorEmissao": 0.06,
    "valor": 2.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.55
  },
  {
    "key": 613,
    "origem": "PORTO SEGURO, BA",
    "destino": "ARACATUBA, SP",
    "co2Emitido": 237,
    "fatorEmissao": 0.06,
    "valor": 14.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.775
  },
  {
    "key": 614,
    "origem": "PORTO SEGURO, BA",
    "destino": "BAURU, SP",
    "co2Emitido": 248,
    "fatorEmissao": 0.06,
    "valor": 14.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.6
  },
  {
    "key": 615,
    "origem": "PORTO SEGURO, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 616,
    "origem": "PORTO SEGURO, BA",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 284,
    "fatorEmissao": 0.06,
    "valor": 17.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.3
  },
  {
    "key": 617,
    "origem": "PORTO SEGURO, BA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 188,
    "fatorEmissao": 0.06,
    "valor": 11.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.1
  },
  {
    "key": 618,
    "origem": "PORTO SEGURO, BA",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 196,
    "fatorEmissao": 0.06,
    "valor": 11.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.7
  },
  {
    "key": 619,
    "origem": "PORTO SEGURO, BA",
    "destino": "CURITIBA, PR",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 620,
    "origem": "PORTO SEGURO, BA",
    "destino": "GOIANIA, GO",
    "co2Emitido": 184,
    "fatorEmissao": 0.06,
    "valor": 11.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.8
  },
  {
    "key": 621,
    "origem": "PORTO SEGURO, BA",
    "destino": "JOINVILE, SC",
    "co2Emitido": 257,
    "fatorEmissao": 0.06,
    "valor": 15.42,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.275
  },
  {
    "key": 622,
    "origem": "PORTO SEGURO, BA",
    "destino": "LONDRINA, PR",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 623,
    "origem": "PORTO SEGURO, BA",
    "destino": "MONTES CLAROS, MG",
    "co2Emitido": 85,
    "fatorEmissao": 0.06,
    "valor": 5.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.375
  },
  {
    "key": 624,
    "origem": "PORTO SEGURO, BA",
    "destino": "PRESIDENTE PRUDENTE, SP",
    "co2Emitido": 292,
    "fatorEmissao": 0.06,
    "valor": 17.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.9
  },
  {
    "key": 625,
    "origem": "PORTO SEGURO, BA",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 202,
    "fatorEmissao": 0.06,
    "valor": 12.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.15
  },
  {
    "key": 626,
    "origem": "PORTO SEGURO, BA",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 192,
    "fatorEmissao": 0.06,
    "valor": 11.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.4
  },
  {
    "key": 627,
    "origem": "PORTO SEGURO, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 628,
    "origem": "PORTO SEGURO, BA",
    "destino": "SÃO JOSE DO RIO PRETO, SP",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 629,
    "origem": "PORTO SEGURO, BA",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 204,
    "fatorEmissao": 0.06,
    "valor": 12.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.3
  },
  {
    "key": 630,
    "origem": "PORTO SEGURO, BA",
    "destino": "SINOP, MT",
    "co2Emitido": 321,
    "fatorEmissao": 0.06,
    "valor": 19.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.075
  },
  {
    "key": 631,
    "origem": "PORTO SEGURO, BA",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 202,
    "fatorEmissao": 0.06,
    "valor": 12.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.15
  },
  {
    "key": 632,
    "origem": "PORTO SEGURO, BA",
    "destino": "VITORIA, ES",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 633,
    "origem": "PORTO VELHO, RO",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 376,
    "fatorEmissao": 0.06,
    "valor": 22.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.2
  },
  {
    "key": 634,
    "origem": "PORTO VELHO, RO",
    "destino": "BRASILIA, DF",
    "co2Emitido": 306,
    "fatorEmissao": 0.06,
    "valor": 18.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.95
  },
  {
    "key": 635,
    "origem": "PORTO VELHO, RO",
    "destino": "CUIABA, MT",
    "co2Emitido": 218,
    "fatorEmissao": 0.06,
    "valor": 13.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.35
  },
  {
    "key": 636,
    "origem": "PORTO VELHO, RO",
    "destino": "JI-PARANA, RO",
    "co2Emitido": 52,
    "fatorEmissao": 0.06,
    "valor": 3.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.9
  },
  {
    "key": 637,
    "origem": "PORTO VELHO, RO",
    "destino": "MANAUS, AM",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 638,
    "origem": "PORTO VELHO, RO",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 380,
    "fatorEmissao": 0.06,
    "valor": 22.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.5
  },
  {
    "key": 639,
    "origem": "PRESIDENTE PRUDENTE, SP",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 640,
    "origem": "PRESIDENTE PRUDENTE, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 344,
    "fatorEmissao": 0.06,
    "valor": 20.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.8
  },
  {
    "key": 641,
    "origem": "PRESIDENTE PRUDENTE, SP",
    "destino": "NATAL, RN",
    "co2Emitido": 382,
    "fatorEmissao": 0.06,
    "valor": 22.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.65
  },
  {
    "key": 642,
    "origem": "PRESIDENTE PRUDENTE, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 292,
    "fatorEmissao": 0.06,
    "valor": 17.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.9
  },
  {
    "key": 643,
    "origem": "PRESIDENTE PRUDENTE, SP",
    "destino": "RECIFE, PE",
    "co2Emitido": 364,
    "fatorEmissao": 0.06,
    "valor": 21.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.3
  },
  {
    "key": 644,
    "origem": "PRESIDENTE PRUDENTE, SP",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 138,
    "fatorEmissao": 0.06,
    "valor": 8.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.35
  },
  {
    "key": 645,
    "origem": "RECIFE, PE",
    "destino": "ARACAJU, SE",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 646,
    "origem": "RECIFE, PE",
    "destino": "ARARIPINA, PE",
    "co2Emitido": 84,
    "fatorEmissao": 0.06,
    "valor": 5.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.3
  },
  {
    "key": 647,
    "origem": "RECIFE, PE",
    "destino": "BAURU, SP",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 648,
    "origem": "RECIFE, PE",
    "destino": "BELEM, PA",
    "co2Emitido": 282,
    "fatorEmissao": 0.06,
    "valor": 16.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.15
  },
  {
    "key": 649,
    "origem": "RECIFE, PE",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 270,
    "fatorEmissao": 0.06,
    "valor": 16.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.25
  },
  {
    "key": 650,
    "origem": "RECIFE, PE",
    "destino": "BRASILIA, DF",
    "co2Emitido": 272,
    "fatorEmissao": 0.06,
    "valor": 16.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.4
  },
  {
    "key": 651,
    "origem": "RECIFE, PE",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 376,
    "fatorEmissao": 0.06,
    "valor": 22.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.2
  },
  {
    "key": 652,
    "origem": "RECIFE, PE",
    "destino": "CAJAZEIRAS, PB",
    "co2Emitido": 64,
    "fatorEmissao": 0.06,
    "valor": 3.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.8
  },
  {
    "key": 653,
    "origem": "RECIFE, PE",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 291,
    "fatorEmissao": 0.06,
    "valor": 17.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.825
  },
  {
    "key": 654,
    "origem": "RECIFE, PE",
    "destino": "CAMPINA GRANDE, PB",
    "co2Emitido": 32,
    "fatorEmissao": 0.06,
    "valor": 1.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.4
  },
  {
    "key": 655,
    "origem": "RECIFE, PE",
    "destino": "CURITIBA, PR",
    "co2Emitido": 376,
    "fatorEmissao": 0.06,
    "valor": 22.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.2
  },
  {
    "key": 656,
    "origem": "RECIFE, PE",
    "destino": "CARUARU, PE",
    "co2Emitido": 22,
    "fatorEmissao": 0.06,
    "valor": 1.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.65
  },
  {
    "key": 657,
    "origem": "RECIFE, PE",
    "destino": "FEIRA DE SANTANA, BA",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 658,
    "origem": "RECIFE, PE",
    "destino": "FERNANDO DE NORONHA, PE",
    "co2Emitido": 94,
    "fatorEmissao": 0.06,
    "valor": 5.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.05
  },
  {
    "key": 659,
    "origem": "RECIFE, PE",
    "destino": "FORT LAUDERDALE, USA",
    "co2Emitido": 560,
    "fatorEmissao": 0.06,
    "valor": 33.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 42
  },
  {
    "key": 660,
    "origem": "RECIFE, PE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 661,
    "origem": "RECIFE, PE",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 314,
    "fatorEmissao": 0.06,
    "valor": 18.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.55
  },
  {
    "key": 662,
    "origem": "RECIFE, PE",
    "destino": "GARANHUS, PE",
    "co2Emitido": 35,
    "fatorEmissao": 0.06,
    "valor": 2.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.625
  },
  {
    "key": 663,
    "origem": "RECIFE, PE",
    "destino": "GOIANIA, GO",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 664,
    "origem": "RECIFE, PE",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 665,
    "origem": "RECIFE, PE",
    "destino": "JUAZEIRO DO NORTE, CE",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 666,
    "origem": "RECIFE, PE",
    "destino": "LISBOA, PRT",
    "co2Emitido": 546,
    "fatorEmissao": 0.06,
    "valor": 32.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 40.95
  },
  {
    "key": 667,
    "origem": "RECIFE, PE",
    "destino": "MACEIO, AL",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 668,
    "origem": "RECIFE, PE",
    "destino": "MANAUS, AM",
    "co2Emitido": 313,
    "fatorEmissao": 0.06,
    "valor": 18.78,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.475
  },
  {
    "key": 669,
    "origem": "RECIFE, PE",
    "destino": "MONTEVIDEO, URG",
    "co2Emitido": 518,
    "fatorEmissao": 0.06,
    "valor": 31.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 38.85
  },
  {
    "key": 670,
    "origem": "RECIFE, PE",
    "destino": "MOSSORO, RN",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 671,
    "origem": "RECIFE, PE",
    "destino": "NATAL, RN",
    "co2Emitido": 64,
    "fatorEmissao": 0.06,
    "valor": 3.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.8
  },
  {
    "key": 672,
    "origem": "RECIFE, PE",
    "destino": "ORLANDO, USA",
    "co2Emitido": 576,
    "fatorEmissao": 0.06,
    "valor": 34.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 43.2
  },
  {
    "key": 673,
    "origem": "RECIFE, PE",
    "destino": "PATOS, PB",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 674,
    "origem": "RECIFE, PE",
    "destino": "PAULO AFONSO, BA",
    "co2Emitido": 74,
    "fatorEmissao": 0.06,
    "valor": 4.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.55
  },
  {
    "key": 675,
    "origem": "RECIFE, PE",
    "destino": "PETROLINA, PE",
    "co2Emitido": 116,
    "fatorEmissao": 0.06,
    "valor": 6.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.7
  },
  {
    "key": 676,
    "origem": "RECIFE, PE",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 440,
    "fatorEmissao": 0.06,
    "valor": 26.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 33
  },
  {
    "key": 677,
    "origem": "RECIFE, PE",
    "destino": "PRESIDENTE PRUDENTE, SP",
    "co2Emitido": 364,
    "fatorEmissao": 0.06,
    "valor": 21.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.3
  },
  {
    "key": 678,
    "origem": "RECIFE, PE",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 679,
    "origem": "RECIFE, PE",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 292,
    "fatorEmissao": 0.06,
    "valor": 17.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.9
  },
  {
    "key": 680,
    "origem": "RECIFE, PE",
    "destino": "SALVADOR, BA",
    "co2Emitido": 150,
    "fatorEmissao": 0.06,
    "valor": 9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.25
  },
  {
    "key": 681,
    "origem": "RECIFE, PE",
    "destino": "SAO JOSE DO RIO PRETO, SP",
    "co2Emitido": 325,
    "fatorEmissao": 0.06,
    "valor": 19.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.375
  },
  {
    "key": 682,
    "origem": "RECIFE, PE",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 221,
    "fatorEmissao": 0.06,
    "valor": 13.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.575
  },
  {
    "key": 683,
    "origem": "RECIFE, PE",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 306,
    "fatorEmissao": 0.06,
    "valor": 18.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.95
  },
  {
    "key": 684,
    "origem": "RECIFE, PE",
    "destino": "SÃO RAIMUNDO NONATO, PI",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 685,
    "origem": "RECIFE, PE",
    "destino": "SERRA TALHADA, PE",
    "co2Emitido": 56,
    "fatorEmissao": 0.06,
    "valor": 3.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.2
  },
  {
    "key": 686,
    "origem": "RECIFE, PE",
    "destino": "TERESINA, PI",
    "co2Emitido": 186,
    "fatorEmissao": 0.06,
    "valor": 11.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.95
  },
  {
    "key": 687,
    "origem": "RECIFE, PE",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 293,
    "fatorEmissao": 0.06,
    "valor": 17.58,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.975
  },
  {
    "key": 688,
    "origem": "RECIFE, PE",
    "destino": "VITORIA, ES",
    "co2Emitido": 270,
    "fatorEmissao": 0.06,
    "valor": 16.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.25
  },
  {
    "key": 689,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "BRASILIA, DF",
    "co2Emitido": 123,
    "fatorEmissao": 0.06,
    "valor": 7.38,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.225
  },
  {
    "key": 690,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 46,
    "fatorEmissao": 0.06,
    "valor": 2.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.45
  },
  {
    "key": 691,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 342,
    "fatorEmissao": 0.06,
    "valor": 20.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.65
  },
  {
    "key": 692,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "GOIANIA, GO",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 693,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 332,
    "fatorEmissao": 0.06,
    "valor": 19.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.9
  },
  {
    "key": 694,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 695,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "NATAL, RN",
    "co2Emitido": 340,
    "fatorEmissao": 0.06,
    "valor": 20.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.5
  },
  {
    "key": 696,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 202,
    "fatorEmissao": 0.06,
    "valor": 12.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.15
  },
  {
    "key": 697,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "RECIFE, PE",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 698,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 699,
    "origem": "RIBEIRAO PRETO, SP",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 700,
    "origem": "RIO BRANCO, AC",
    "destino": "BRASILIA, DF",
    "co2Emitido": 344,
    "fatorEmissao": 0.06,
    "valor": 20.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.8
  },
  {
    "key": 701,
    "origem": "RIO BRANCO, AC",
    "destino": "CRUZEIRO DO SUL, AC",
    "co2Emitido": 112,
    "fatorEmissao": 0.06,
    "valor": 6.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.4
  },
  {
    "key": 702,
    "origem": "RIO BRANCO, AC",
    "destino": "MANAUS, AM",
    "co2Emitido": 212,
    "fatorEmissao": 0.06,
    "valor": 12.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.9
  },
  {
    "key": 703,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "AMSTERDAM, NLD",
    "co2Emitido": 980,
    "fatorEmissao": 0.06,
    "valor": 58.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 73.5
  },
  {
    "key": 704,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "ARACAJU, SE",
    "co2Emitido": 240,
    "fatorEmissao": 0.06,
    "valor": 14.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18
  },
  {
    "key": 705,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "ASSUNÇÃO, PAR",
    "co2Emitido": 281,
    "fatorEmissao": 0.06,
    "valor": 16.86,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.075
  },
  {
    "key": 706,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "ATLANTA, USA",
    "co2Emitido": 836,
    "fatorEmissao": 0.06,
    "valor": 50.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 62.7
  },
  {
    "key": 707,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "BELEM, PA",
    "co2Emitido": 350,
    "fatorEmissao": 0.06,
    "valor": 21,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.25
  },
  {
    "key": 708,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 709,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "BOGOTA, COL",
    "co2Emitido": 530,
    "fatorEmissao": 0.06,
    "valor": 31.8,
    "fatorFloresta": 0.9,
    "florestaProtegida": 35.33333333
  },
  {
    "key": 710,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "BRASILIA, DF",
    "co2Emitido": 178,
    "fatorEmissao": 0.06,
    "valor": 10.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.35
  },
  {
    "key": 711,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 316,
    "fatorEmissao": 0.06,
    "valor": 18.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.7
  },
  {
    "key": 712,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 92,
    "fatorEmissao": 0.06,
    "valor": 5.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.9
  },
  {
    "key": 713,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "CAMPOS, RJ",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 714,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "CAXIAS DO SUL, RS",
    "co2Emitido": 196,
    "fatorEmissao": 0.06,
    "valor": 11.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.7
  },
  {
    "key": 715,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "CORDOBA, ARG",
    "co2Emitido": 372,
    "fatorEmissao": 0.06,
    "valor": 22.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27.9
  },
  {
    "key": 716,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "CURITIBA, PR",
    "co2Emitido": 96,
    "fatorEmissao": 0.06,
    "valor": 5.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.2
  },
  {
    "key": 717,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "DUBAI, ARE",
    "co2Emitido": 1868,
    "fatorEmissao": 0.06,
    "valor": 112.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 140.1
  },
  {
    "key": 718,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 719,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 326,
    "fatorEmissao": 0.06,
    "valor": 19.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.45
  },
  {
    "key": 720,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 216,
    "fatorEmissao": 0.06,
    "valor": 12.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.2
  },
  {
    "key": 721,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "GOIANIA, GO",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 722,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "HOUSTTON, USA",
    "co2Emitido": 864,
    "fatorEmissao": 0.06,
    "valor": 51.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 64.8
  },
  {
    "key": 723,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "ILHEUS, BA",
    "co2Emitido": 187,
    "fatorEmissao": 0.06,
    "valor": 11.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.025
  },
  {
    "key": 724,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 294,
    "fatorEmissao": 0.06,
    "valor": 17.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.05
  },
  {
    "key": 725,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "LIMA, PER",
    "co2Emitido": 536,
    "fatorEmissao": 0.06,
    "valor": 32.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 40.2
  },
  {
    "key": 726,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "LISBOA, PRT",
    "co2Emitido": 662,
    "fatorEmissao": 0.06,
    "valor": 39.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 49.65
  },
  {
    "key": 727,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "LONDRES, GRB",
    "co2Emitido": 964,
    "fatorEmissao": 0.06,
    "valor": 57.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 72.3
  },
  {
    "key": 728,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MACEIO, AL",
    "co2Emitido": 268,
    "fatorEmissao": 0.06,
    "valor": 16.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.1
  },
  {
    "key": 729,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MADRID, ESP",
    "co2Emitido": 800,
    "fatorEmissao": 0.06,
    "valor": 48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 60
  },
  {
    "key": 730,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MANAUS, AM",
    "co2Emitido": 396,
    "fatorEmissao": 0.06,
    "valor": 23.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 29.7
  },
  {
    "key": 731,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MENDOZA, ARG",
    "co2Emitido": 398,
    "fatorEmissao": 0.06,
    "valor": 23.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 29.85
  },
  {
    "key": 732,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MIAMI, USA",
    "co2Emitido": 706,
    "fatorEmissao": 0.06,
    "valor": 42.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 52.95
  },
  {
    "key": 733,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MONTEVIDEO, URY",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 734,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "MUNICHE, DEU",
    "co2Emitido": 920,
    "fatorEmissao": 0.06,
    "valor": 55.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 69
  },
  {
    "key": 735,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "NATAL, RN",
    "co2Emitido": 306,
    "fatorEmissao": 0.06,
    "valor": 18.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.95
  },
  {
    "key": 736,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "NAVEGANTES, SC",
    "co2Emitido": 94,
    "fatorEmissao": 0.06,
    "valor": 5.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.05
  },
  {
    "key": 737,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "NEW YORK, USA",
    "co2Emitido": 868,
    "fatorEmissao": 0.06,
    "valor": 52.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 65.1
  },
  {
    "key": 738,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "PANAMA CITY, PAN",
    "co2Emitido": 664,
    "fatorEmissao": 0.06,
    "valor": 39.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 49.8
  },
  {
    "key": 739,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "PARIS, FRA",
    "co2Emitido": 916,
    "fatorEmissao": 0.06,
    "valor": 54.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 68.7
  },
  {
    "key": 740,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 212,
    "fatorEmissao": 0.06,
    "valor": 12.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.9
  },
  {
    "key": 741,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 192,
    "fatorEmissao": 0.06,
    "valor": 11.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.4
  },
  {
    "key": 742,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "PORTO, PRT",
    "co2Emitido": 682,
    "fatorEmissao": 0.06,
    "valor": 40.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 51.15
  },
  {
    "key": 743,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "RECIFE, PE",
    "co2Emitido": 292,
    "fatorEmissao": 0.06,
    "valor": 17.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.9
  },
  {
    "key": 744,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "BIBEIRAO PRETO, SP",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 745,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "ROMA, ITA",
    "co2Emitido": 830,
    "fatorEmissao": 0.06,
    "valor": 49.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 62.25
  },
  {
    "key": 746,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "ROSARIO, ARG",
    "co2Emitido": 318,
    "fatorEmissao": 0.06,
    "valor": 19.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.85
  },
  {
    "key": 747,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "SALVADOR, BA",
    "co2Emitido": 230,
    "fatorEmissao": 0.06,
    "valor": 13.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.25
  },
  {
    "key": 748,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "SANTIAGO, CHL",
    "co2Emitido": 427,
    "fatorEmissao": 0.06,
    "valor": 25.62,
    "fatorFloresta": 0.8,
    "florestaProtegida": 32.025
  },
  {
    "key": 749,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 750,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 751,
    "origem": "RIO DE JANEIRO, RJ",
    "destino": "VITORIA, ES",
    "co2Emitido": 87,
    "fatorEmissao": 0.06,
    "valor": 5.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.525
  },
  {
    "key": 752,
    "origem": "RIO VERDE, GO",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 116,
    "fatorEmissao": 0.06,
    "valor": 6.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.7
  },
  {
    "key": 753,
    "origem": "RONDONOPOLIS, MT",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 187,
    "fatorEmissao": 0.06,
    "valor": 11.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.025
  },
  {
    "key": 754,
    "origem": "SALINOPOLIS, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 26,
    "fatorEmissao": 0.06,
    "valor": 1.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.95
  },
  {
    "key": 755,
    "origem": "SALVADOR, BA",
    "destino": "ARACAJU, SE",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 756,
    "origem": "SALVADOR, BA",
    "destino": "BARREIRAS, BA",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 757,
    "origem": "SALVADOR, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 190,
    "fatorEmissao": 0.06,
    "valor": 11.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.25
  },
  {
    "key": 758,
    "origem": "SALVADOR, BA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 198,
    "fatorEmissao": 0.06,
    "valor": 11.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.85
  },
  {
    "key": 759,
    "origem": "SALVADOR, BA",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 483,
    "fatorEmissao": 0.06,
    "valor": 28.98,
    "fatorFloresta": 0.8,
    "florestaProtegida": 36.225
  },
  {
    "key": 760,
    "origem": "SALVADOR, BA",
    "destino": "CAMPINA GRANDE, PB",
    "co2Emitido": 130,
    "fatorEmissao": 0.06,
    "valor": 7.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.75
  },
  {
    "key": 761,
    "origem": "SALVADOR, BA",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 258,
    "fatorEmissao": 0.06,
    "valor": 15.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.35
  },
  {
    "key": 762,
    "origem": "SALVADOR, BA",
    "destino": "CURITIBA, PR",
    "co2Emitido": 302,
    "fatorEmissao": 0.06,
    "valor": 18.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.65
  },
  {
    "key": 763,
    "origem": "SALVADOR, BA",
    "destino": "FEIRA DE SANTANA, BA",
    "co2Emitido": 26,
    "fatorEmissao": 0.06,
    "valor": 1.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.95
  },
  {
    "key": 764,
    "origem": "SALVADOR, BA",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 200,
    "fatorEmissao": 0.06,
    "valor": 12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15
  },
  {
    "key": 765,
    "origem": "SALVADOR, BA",
    "destino": "GUANAMBI, BA",
    "co2Emitido": 86,
    "fatorEmissao": 0.06,
    "valor": 5.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.45
  },
  {
    "key": 766,
    "origem": "SALVADOR, BA",
    "destino": "GOIANIA, GO",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 767,
    "origem": "SALVADOR, BA",
    "destino": "ILHEUS, BA",
    "co2Emitido": 57,
    "fatorEmissao": 0.06,
    "valor": 3.42,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.275
  },
  {
    "key": 768,
    "origem": "SALVADOR, BA",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 150,
    "fatorEmissao": 0.06,
    "valor": 9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.25
  },
  {
    "key": 769,
    "origem": "SALVADOR, BA",
    "destino": "LENÇOIS, BA",
    "co2Emitido": 66,
    "fatorEmissao": 0.06,
    "valor": 3.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.95
  },
  {
    "key": 770,
    "origem": "SALVADOR, BA",
    "destino": "LISBOA, PRT",
    "co2Emitido": 650,
    "fatorEmissao": 0.06,
    "valor": 39,
    "fatorFloresta": 0.8,
    "florestaProtegida": 48.75
  },
  {
    "key": 771,
    "origem": "SALVADOR, BA",
    "destino": "MACEIO, AL",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 772,
    "origem": "SALVADOR, BA",
    "destino": "MADRID, ESP",
    "co2Emitido": 693,
    "fatorEmissao": 0.06,
    "valor": 41.58,
    "fatorFloresta": 0.8,
    "florestaProtegida": 51.975
  },
  {
    "key": 773,
    "origem": "SALVADOR, BA",
    "destino": "MONTES CLAROS, MG",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 774,
    "origem": "SALVADOR, BA",
    "destino": "MOORRO DE SAO PAULO, BA",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 775,
    "origem": "SALVADOR, BA",
    "destino": "NATAL, RN",
    "co2Emitido": 160,
    "fatorEmissao": 0.06,
    "valor": 9.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12
  },
  {
    "key": 776,
    "origem": "SALVADOR, BA",
    "destino": "PAULO AFONSO, BA",
    "co2Emitido": 72,
    "fatorEmissao": 0.06,
    "valor": 4.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.4
  },
  {
    "key": 777,
    "origem": "SALVADOR, BA",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 778,
    "origem": "SALVADOR, BA",
    "destino": "RECIFE, PE",
    "co2Emitido": 150,
    "fatorEmissao": 0.06,
    "valor": 9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.25
  },
  {
    "key": 779,
    "origem": "SALVADOR, BA",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 230,
    "fatorEmissao": 0.06,
    "valor": 13.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.25
  },
  {
    "key": 780,
    "origem": "SALVADOR, BA",
    "destino": "SÃO LUIZ, MA",
    "co2Emitido": 237,
    "fatorEmissao": 0.06,
    "valor": 14.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.775
  },
  {
    "key": 781,
    "origem": "SALVADOR, BA",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 244,
    "fatorEmissao": 0.06,
    "valor": 14.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.3
  },
  {
    "key": 782,
    "origem": "SALVADOR, BA",
    "destino": "TEIXEIRA DE FREITAS, BA",
    "co2Emitido": 119,
    "fatorEmissao": 0.06,
    "valor": 7.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.925
  },
  {
    "key": 783,
    "origem": "SALVADOR, BA",
    "destino": "VALENÇA, BA",
    "co2Emitido": 24,
    "fatorEmissao": 0.06,
    "valor": 1.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.8
  },
  {
    "key": 784,
    "origem": "SALVADOR, BA",
    "destino": "VITORIA, ES",
    "co2Emitido": 166,
    "fatorEmissao": 0.06,
    "valor": 9.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.45
  },
  {
    "key": 785,
    "origem": "SALVADOR, BA",
    "destino": "VITORIA DA CONQUISTA, BA",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 786,
    "origem": "SANTA ISABEL DO RIO NEGRO, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 84,
    "fatorEmissao": 0.06,
    "valor": 5.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.3
  },
  {
    "key": 787,
    "origem": "SANTA ISABEL DO RIO NEGRO, AM",
    "destino": "TEFE, AM",
    "co2Emitido": 52,
    "fatorEmissao": 0.06,
    "valor": 3.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.9
  },
  {
    "key": 788,
    "origem": "SANTA MARIA, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 52,
    "fatorEmissao": 0.06,
    "valor": 3.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.9
  },
  {
    "key": 789,
    "origem": "SANTA ROSA DO SUL, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 790,
    "origem": "SANTAREM, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 154,
    "fatorEmissao": 0.06,
    "valor": 9.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.55
  },
  {
    "key": 791,
    "origem": "SANTAREM, PA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 256,
    "fatorEmissao": 0.06,
    "valor": 15.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.2
  },
  {
    "key": 792,
    "origem": "SANTAREM, PA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 294,
    "fatorEmissao": 0.06,
    "valor": 17.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.05
  },
  {
    "key": 793,
    "origem": "SANTAREM, PA",
    "destino": "ITAITUBA, PA",
    "co2Emitido": 40,
    "fatorEmissao": 0.06,
    "valor": 2.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3
  },
  {
    "key": 794,
    "origem": "SANTAREM, PA",
    "destino": "MANAUS, AM",
    "co2Emitido": 130,
    "fatorEmissao": 0.06,
    "valor": 7.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.75
  },
  {
    "key": 795,
    "origem": "SANTAREM, PA",
    "destino": "MONTE ALEGRE, AM",
    "co2Emitido": 20,
    "fatorEmissao": 0.06,
    "valor": 1.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.5
  },
  {
    "key": 796,
    "origem": "SANTAREM, PA",
    "destino": "TROMBETAS, AM",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 797,
    "origem": "SANTO ANGELO, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 68,
    "fatorEmissao": 0.06,
    "valor": 4.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.1
  },
  {
    "key": 798,
    "origem": "SANTO ANGELO, RS",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 206,
    "fatorEmissao": 0.06,
    "valor": 12.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.45
  },
  {
    "key": 799,
    "origem": "SAO BENEDITO, CE",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 800,
    "origem": "SAO GABRIEL, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 103,
    "fatorEmissao": 0.06,
    "valor": 6.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.725
  },
  {
    "key": 801,
    "origem": "SAO JOAO DEL REI, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 38,
    "fatorEmissao": 0.06,
    "valor": 2.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.85
  },
  {
    "key": 802,
    "origem": "SAO JOAO DEL REI, MG",
    "destino": "JUIZ DE FORA, MG",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 803,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "BRASILIA, DF",
    "co2Emitido": 100,
    "fatorEmissao": 0.06,
    "valor": 6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.5
  },
  {
    "key": 804,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 68,
    "fatorEmissao": 0.06,
    "valor": 4.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.1
  },
  {
    "key": 805,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "CUIABA, MT",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 806,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 330,
    "fatorEmissao": 0.06,
    "valor": 19.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.75
  },
  {
    "key": 807,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 312,
    "fatorEmissao": 0.06,
    "valor": 18.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.4
  },
  {
    "key": 808,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "NATAL, RN",
    "co2Emitido": 352,
    "fatorEmissao": 0.06,
    "valor": 21.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.4
  },
  {
    "key": 809,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 810,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "RECIFE, PE",
    "co2Emitido": 325,
    "fatorEmissao": 0.06,
    "valor": 19.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.375
  },
  {
    "key": 811,
    "origem": "SÃO J. RIO PRETO, SP",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 812,
    "origem": "SÃO LUIZ, MA",
    "destino": "BARREIRINHAS, MA",
    "co2Emitido": 28,
    "fatorEmissao": 0.06,
    "valor": 1.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.1
  },
  {
    "key": 813,
    "origem": "SÃO LUIZ, MA",
    "destino": "BELEM, PA",
    "co2Emitido": 80,
    "fatorEmissao": 0.06,
    "valor": 4.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6
  },
  {
    "key": 814,
    "origem": "SÃO LUIZ, MA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 310,
    "fatorEmissao": 0.06,
    "valor": 18.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 23.25
  },
  {
    "key": 815,
    "origem": "SÃO LUIZ, MA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 250,
    "fatorEmissao": 0.06,
    "valor": 15,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.75
  },
  {
    "key": 816,
    "origem": "SÃO LUIZ, MA",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 356,
    "fatorEmissao": 0.06,
    "valor": 21.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.7
  },
  {
    "key": 817,
    "origem": "SÃO LUIZ, MA",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 818,
    "origem": "SÃO LUIZ, MA",
    "destino": "IMPERATRIZ, MA",
    "co2Emitido": 79,
    "fatorEmissao": 0.06,
    "valor": 4.74,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.925
  },
  {
    "key": 819,
    "origem": "SÃO LUIZ, MA",
    "destino": "RECIFE, PE",
    "co2Emitido": 221,
    "fatorEmissao": 0.06,
    "valor": 13.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.575
  },
  {
    "key": 820,
    "origem": "SÃO LUIZ, MA",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 300,
    "fatorEmissao": 0.06,
    "valor": 18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.5
  },
  {
    "key": 821,
    "origem": "SÃO LUIZ, MA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 237,
    "fatorEmissao": 0.06,
    "valor": 14.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.775
  },
  {
    "key": 822,
    "origem": "SÃO LUIZ, MA",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 344,
    "fatorEmissao": 0.06,
    "valor": 20.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.8
  },
  {
    "key": 823,
    "origem": "SÃO LUIZ, MA",
    "destino": "TERESINA, PI",
    "co2Emitido": 94,
    "fatorEmissao": 0.06,
    "valor": 5.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.05
  },
  {
    "key": 824,
    "origem": "SAO PAULO, SP",
    "destino": "ADISS ABABA, ETH",
    "co2Emitido": 996,
    "fatorEmissao": 0.06,
    "valor": 59.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 74.7
  },
  {
    "key": 825,
    "origem": "SAO PAULO, SP",
    "destino": "AMSTERDAM, NLD",
    "co2Emitido": 970,
    "fatorEmissao": 0.06,
    "valor": 58.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 72.75
  },
  {
    "key": 826,
    "origem": "SAO PAULO, SP",
    "destino": "ARACAJU, SE",
    "co2Emitido": 274,
    "fatorEmissao": 0.06,
    "valor": 16.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.55
  },
  {
    "key": 827,
    "origem": "SAO PAULO, SP",
    "destino": "ARAÇATUBA, SP",
    "co2Emitido": 81,
    "fatorEmissao": 0.06,
    "valor": 4.86,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.075
  },
  {
    "key": 828,
    "origem": "SAO PAULO, SP",
    "destino": "ASUNCION, PRY",
    "co2Emitido": 210,
    "fatorEmissao": 0.06,
    "valor": 12.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.75
  },
  {
    "key": 829,
    "origem": "SAO PAULO, SP",
    "destino": "ATLANTA, USA",
    "co2Emitido": 753,
    "fatorEmissao": 0.06,
    "valor": 45.18,
    "fatorFloresta": 0.8,
    "florestaProtegida": 56.475
  },
  {
    "key": 830,
    "origem": "SAO PAULO, SP",
    "destino": "BARCELONA, ESP",
    "co2Emitido": 860,
    "fatorEmissao": 0.06,
    "valor": 51.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 64.5
  },
  {
    "key": 831,
    "origem": "SAO PAULO, SP",
    "destino": "BELEM, PA",
    "co2Emitido": 358,
    "fatorEmissao": 0.06,
    "valor": 21.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.85
  },
  {
    "key": 832,
    "origem": "SAO PAULO, SP",
    "destino": "BELO HORIZONTE, BH",
    "co2Emitido": 92,
    "fatorEmissao": 0.06,
    "valor": 5.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.9
  },
  {
    "key": 833,
    "origem": "SAO PAULO, SP",
    "destino": "BLUMENAU, SC",
    "co2Emitido": 81,
    "fatorEmissao": 0.06,
    "valor": 4.86,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.075
  },
  {
    "key": 834,
    "origem": "SAO PAULO, SP",
    "destino": "BOGOTA, COL",
    "co2Emitido": 522,
    "fatorEmissao": 0.06,
    "valor": 31.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 39.15
  },
  {
    "key": 835,
    "origem": "SAO PAULO, SP",
    "destino": "BONITO, MS",
    "co2Emitido": 194,
    "fatorEmissao": 0.06,
    "valor": 11.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.55
  },
  {
    "key": 836,
    "origem": "SAO PAULO, SP",
    "destino": "BOSTON, USA",
    "co2Emitido": 776,
    "fatorEmissao": 0.06,
    "valor": 46.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 58.2
  },
  {
    "key": 837,
    "origem": "SAO PAULO, SP",
    "destino": "BRASILIA, DF",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 838,
    "origem": "SAO PAULO, SP",
    "destino": "BUENOS AIRES, ARG",
    "co2Emitido": 272,
    "fatorEmissao": 0.06,
    "valor": 16.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.4
  },
  {
    "key": 839,
    "origem": "SAO PAULO, SP",
    "destino": "CAIRO, EGY",
    "co2Emitido": 1025,
    "fatorEmissao": 0.06,
    "valor": 61.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 76.875
  },
  {
    "key": 840,
    "origem": "SAO PAULO, SP",
    "destino": "CALDAS NOVAS, GO",
    "co2Emitido": 170,
    "fatorEmissao": 0.06,
    "valor": 10.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.75
  },
  {
    "key": 841,
    "origem": "SAO PAULO, SP",
    "destino": "CAMPO GRANDE, MS",
    "co2Emitido": 178,
    "fatorEmissao": 0.06,
    "valor": 10.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.35
  },
  {
    "key": 842,
    "origem": "SAO PAULO, SP",
    "destino": "CAPE TOWN, AFR SUL",
    "co2Emitido": 637,
    "fatorEmissao": 0.06,
    "valor": 38.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 47.775
  },
  {
    "key": 843,
    "origem": "SAO PAULO, SP",
    "destino": "CASCAVEL, PR",
    "co2Emitido": 160,
    "fatorEmissao": 0.06,
    "valor": 9.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12
  },
  {
    "key": 844,
    "origem": "SAO PAULO, SP",
    "destino": "CAXIAS DO SUL, RS",
    "co2Emitido": 169,
    "fatorEmissao": 0.06,
    "valor": 10.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.675
  },
  {
    "key": 845,
    "origem": "SAO PAULO, SP",
    "destino": "CHAPECO, SC",
    "co2Emitido": 158,
    "fatorEmissao": 0.06,
    "valor": 9.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.85
  },
  {
    "key": 846,
    "origem": "SAO PAULO, SP",
    "destino": "CHICAGO, USA",
    "co2Emitido": 845,
    "fatorEmissao": 0.06,
    "valor": 50.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 63.375
  },
  {
    "key": 847,
    "origem": "SAO PAULO, SP",
    "destino": "CORDOBA, ARG",
    "co2Emitido": 320,
    "fatorEmissao": 0.06,
    "valor": 19.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24
  },
  {
    "key": 848,
    "origem": "SAO PAULO, SP",
    "destino": "CUIABA, MT",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 849,
    "origem": "SAO PAULO, SP",
    "destino": "CURITIBA, PR",
    "co2Emitido": 106,
    "fatorEmissao": 0.06,
    "valor": 6.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.95
  },
  {
    "key": 850,
    "origem": "SAO PAULO, SP",
    "destino": "DALLAS/FORT WORTH, USA",
    "co2Emitido": 825,
    "fatorEmissao": 0.06,
    "valor": 49.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 61.875
  },
  {
    "key": 851,
    "origem": "SAO PAULO, SP",
    "destino": "DOHA, QAT",
    "co2Emitido": 1187,
    "fatorEmissao": 0.06,
    "valor": 71.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 89.025
  },
  {
    "key": 852,
    "origem": "SAO PAULO, SP",
    "destino": "DUBAI, ARE",
    "co2Emitido": 1222,
    "fatorEmissao": 0.06,
    "valor": 73.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 91.65
  },
  {
    "key": 853,
    "origem": "SAO PAULO, SP",
    "destino": "FLORIANOPOLIS, SC",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 854,
    "origem": "SAO PAULO, SP",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 340,
    "fatorEmissao": 0.06,
    "valor": 20.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.5
  },
  {
    "key": 855,
    "origem": "SAO PAULO, SP",
    "destino": "FRANKFURT, DEU",
    "co2Emitido": 980,
    "fatorEmissao": 0.06,
    "valor": 58.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 73.5
  },
  {
    "key": 856,
    "origem": "SAO PAULO, SP",
    "destino": "GOIANIA, GO",
    "co2Emitido": 164,
    "fatorEmissao": 0.06,
    "valor": 9.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.3
  },
  {
    "key": 857,
    "origem": "SAO PAULO, SP",
    "destino": "HOUSTON, USA",
    "co2Emitido": 791,
    "fatorEmissao": 0.06,
    "valor": 47.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 59.325
  },
  {
    "key": 858,
    "origem": "SAO PAULO, SP",
    "destino": "FOZ DO IGUAÇU, PR",
    "co2Emitido": 159,
    "fatorEmissao": 0.06,
    "valor": 9.54,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.925
  },
  {
    "key": 859,
    "origem": "SAO PAULO, SP",
    "destino": "ILHEUS, BA",
    "co2Emitido": 242,
    "fatorEmissao": 0.06,
    "valor": 14.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.15
  },
  {
    "key": 860,
    "origem": "SAO PAULO, SP",
    "destino": "IMPERATRIZ, MA",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 861,
    "origem": "SAO PAULO, SP",
    "destino": "IPATINGA, MG",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 862,
    "origem": "SAO PAULO, SP",
    "destino": "ISTANBUL, TUR",
    "co2Emitido": 1010,
    "fatorEmissao": 0.06,
    "valor": 60.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 75.75
  },
  {
    "key": 863,
    "origem": "SAO PAULO, SP",
    "destino": "JAGUARUNA, SC",
    "co2Emitido": 146,
    "fatorEmissao": 0.06,
    "valor": 8.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.95
  },
  {
    "key": 864,
    "origem": "SAO PAULO, SP",
    "destino": "JERICOACOARA, CE",
    "co2Emitido": 360,
    "fatorEmissao": 0.06,
    "valor": 21.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 27
  },
  {
    "key": 865,
    "origem": "SAO PAULO, SP",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 332,
    "fatorEmissao": 0.06,
    "valor": 19.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.9
  },
  {
    "key": 866,
    "origem": "SAO PAULO, SP",
    "destino": "JOHANNESBURG, ZAF",
    "co2Emitido": 746,
    "fatorEmissao": 0.06,
    "valor": 44.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 55.95
  },
  {
    "key": 867,
    "origem": "SAO PAULO, SP",
    "destino": "JOINVILLE, SC",
    "co2Emitido": 74,
    "fatorEmissao": 0.06,
    "valor": 4.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.55
  },
  {
    "key": 868,
    "origem": "SAO PAULO, SP",
    "destino": "JUAZEIRO DO NORTE, CE",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 869,
    "origem": "SAO PAULO, SP",
    "destino": "JUIZ DE FORA, MG",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 870,
    "origem": "SAO PAULO, SP",
    "destino": "LIMA, PER",
    "co2Emitido": 492,
    "fatorEmissao": 0.06,
    "valor": 29.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 36.9
  },
  {
    "key": 871,
    "origem": "SAO PAULO, SP",
    "destino": "LISBOA, PRT",
    "co2Emitido": 688,
    "fatorEmissao": 0.06,
    "valor": 41.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 51.6
  },
  {
    "key": 872,
    "origem": "SAO PAULO, SP",
    "destino": "LONDRES, GBR",
    "co2Emitido": 930,
    "fatorEmissao": 0.06,
    "valor": 55.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 69.75
  },
  {
    "key": 873,
    "origem": "SAO PAULO, SP",
    "destino": "LONDRINA, PR",
    "co2Emitido": 93,
    "fatorEmissao": 0.06,
    "valor": 5.58,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.975
  },
  {
    "key": 874,
    "origem": "SAO PAULO, SP",
    "destino": "LOS ANGELES, USA",
    "co2Emitido": 992,
    "fatorEmissao": 0.06,
    "valor": 59.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 74.4
  },
  {
    "key": 875,
    "origem": "SAO PAULO, SP",
    "destino": "LUANDA, AGO",
    "co2Emitido": 567,
    "fatorEmissao": 0.06,
    "valor": 34.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 42.525
  },
  {
    "key": 876,
    "origem": "SAO PAULO, SP",
    "destino": "MACEIO, AL",
    "co2Emitido": 298,
    "fatorEmissao": 0.06,
    "valor": 17.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.35
  },
  {
    "key": 877,
    "origem": "SAO PAULO, SP",
    "destino": "MADRID, ESP",
    "co2Emitido": 762,
    "fatorEmissao": 0.06,
    "valor": 45.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 57.15
  },
  {
    "key": 878,
    "origem": "SAO PAULO, SP",
    "destino": "MANAUS, AM",
    "co2Emitido": 382,
    "fatorEmissao": 0.06,
    "valor": 22.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.65
  },
  {
    "key": 879,
    "origem": "SAO PAULO, SP",
    "destino": "MARINGA, PR",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 880,
    "origem": "SAO PAULO, SP",
    "destino": "MENDOZA, ARG",
    "co2Emitido": 352,
    "fatorEmissao": 0.06,
    "valor": 21.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 26.4
  },
  {
    "key": 881,
    "origem": "SAO PAULO, SP",
    "destino": "MEXICO CITY, MEX",
    "co2Emitido": 645,
    "fatorEmissao": 0.06,
    "valor": 38.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 48.375
  },
  {
    "key": 882,
    "origem": "SAO PAULO, SP",
    "destino": "MIAMI, USA",
    "co2Emitido": 572,
    "fatorEmissao": 0.06,
    "valor": 34.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 42.9
  },
  {
    "key": 883,
    "origem": "SAO PAULO, SP",
    "destino": "MILAO, ITA",
    "co2Emitido": 914,
    "fatorEmissao": 0.06,
    "valor": 54.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 68.55
  },
  {
    "key": 884,
    "origem": "SAO PAULO, SP",
    "destino": "MONTES CLAROS, MG",
    "co2Emitido": 178,
    "fatorEmissao": 0.06,
    "valor": 10.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.35
  },
  {
    "key": 885,
    "origem": "SAO PAULO, SP",
    "destino": "MONTEVIDEO, URY",
    "co2Emitido": 220,
    "fatorEmissao": 0.06,
    "valor": 13.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.5
  },
  {
    "key": 886,
    "origem": "SAO PAULO, SP",
    "destino": "MONTREAL, CAN",
    "co2Emitido": 801,
    "fatorEmissao": 0.06,
    "valor": 48.06,
    "fatorFloresta": 0.8,
    "florestaProtegida": 60.075
  },
  {
    "key": 887,
    "origem": "SAO PAULO, SP",
    "destino": "NATAL, RN",
    "co2Emitido": 338,
    "fatorEmissao": 0.06,
    "valor": 20.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.35
  },
  {
    "key": 888,
    "origem": "SAO PAULO, SP",
    "destino": "NAVEGANTES, SC",
    "co2Emitido": 112,
    "fatorEmissao": 0.06,
    "valor": 6.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.4
  },
  {
    "key": 889,
    "origem": "SAO PAULO, SP",
    "destino": "NEW YORK, USA",
    "co2Emitido": 846,
    "fatorEmissao": 0.06,
    "valor": 50.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 63.45
  },
  {
    "key": 890,
    "origem": "SAO PAULO, SP",
    "destino": "ORLANDO, USA",
    "co2Emitido": 632,
    "fatorEmissao": 0.06,
    "valor": 37.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 47.4
  },
  {
    "key": 891,
    "origem": "SAO PAULO, SP",
    "destino": "PALMAS, TO",
    "co2Emitido": 254,
    "fatorEmissao": 0.06,
    "valor": 15.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.05
  },
  {
    "key": 892,
    "origem": "SAO PAULO, SP",
    "destino": "PANAMA CITY, PAN",
    "co2Emitido": 512,
    "fatorEmissao": 0.06,
    "valor": 30.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 38.4
  },
  {
    "key": 893,
    "origem": "SAO PAULO, SP",
    "destino": "PARIS, FRA",
    "co2Emitido": 924,
    "fatorEmissao": 0.06,
    "valor": 55.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 69.3
  },
  {
    "key": 894,
    "origem": "SAO PAULO, SP",
    "destino": "PASSO FUNDO, RS",
    "co2Emitido": 174,
    "fatorEmissao": 0.06,
    "valor": 10.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.05
  },
  {
    "key": 895,
    "origem": "SAO PAULO, SP",
    "destino": "PELOTAS, RS",
    "co2Emitido": 226,
    "fatorEmissao": 0.06,
    "valor": 13.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.95
  },
  {
    "key": 896,
    "origem": "SAO PAULO, SP",
    "destino": "PETROLINA, PE",
    "co2Emitido": 278,
    "fatorEmissao": 0.06,
    "valor": 16.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.85
  },
  {
    "key": 897,
    "origem": "SAO PAULO, SP",
    "destino": "PORTO, PRT",
    "co2Emitido": 702,
    "fatorEmissao": 0.06,
    "valor": 42.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 52.65
  },
  {
    "key": 898,
    "origem": "SAO PAULO, SP",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 172,
    "fatorEmissao": 0.06,
    "valor": 10.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.9
  },
  {
    "key": 899,
    "origem": "SAO PAULO, SP",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 204,
    "fatorEmissao": 0.06,
    "valor": 12.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.3
  },
  {
    "key": 900,
    "origem": "SAO PAULO, SP",
    "destino": "PORTO VELHO, RO",
    "co2Emitido": 380,
    "fatorEmissao": 0.06,
    "valor": 22.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.5
  },
  {
    "key": 901,
    "origem": "SAO PAULO, SP",
    "destino": "PRESIDENTE PRUDENTE, SP",
    "co2Emitido": 138,
    "fatorEmissao": 0.06,
    "valor": 8.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.35
  },
  {
    "key": 902,
    "origem": "SAO PAULO, SP",
    "destino": "PUNTA CANA, DOM",
    "co2Emitido": 524,
    "fatorEmissao": 0.06,
    "valor": 31.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 39.3
  },
  {
    "key": 903,
    "origem": "SAO PAULO, SP",
    "destino": "PUNTA DEL ESTE, URU",
    "co2Emitido": 282,
    "fatorEmissao": 0.06,
    "valor": 16.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.15
  },
  {
    "key": 904,
    "origem": "SAO PAULO, SP",
    "destino": "RECIFE, PE",
    "co2Emitido": 306,
    "fatorEmissao": 0.06,
    "valor": 18.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.95
  },
  {
    "key": 905,
    "origem": "SAO PAULO, SP",
    "destino": "RIBEIRAO PRETO, SP",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 906,
    "origem": "SAO PAULO, SP",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 907,
    "origem": "SAO PAULO, SP",
    "destino": "ROMA, ITA",
    "co2Emitido": 927,
    "fatorEmissao": 0.06,
    "valor": 55.62,
    "fatorFloresta": 0.8,
    "florestaProtegida": 69.525
  },
  {
    "key": 908,
    "origem": "SAO PAULO, SP",
    "destino": "ROSARIO, ARG",
    "co2Emitido": 250,
    "fatorEmissao": 0.06,
    "valor": 15,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.75
  },
  {
    "key": 909,
    "origem": "SAO PAULO, SP",
    "destino": "SALTA, ARG",
    "co2Emitido": 285,
    "fatorEmissao": 0.06,
    "valor": 17.1,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.375
  },
  {
    "key": 910,
    "origem": "SAO PAULO, SP",
    "destino": "SALVADOR, BA",
    "co2Emitido": 244,
    "fatorEmissao": 0.06,
    "valor": 14.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18.3
  },
  {
    "key": 911,
    "origem": "SAO PAULO, SP",
    "destino": "SAN CARLOS DE BARILOCHE, ARG",
    "co2Emitido": 432,
    "fatorEmissao": 0.06,
    "valor": 25.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 32.4
  },
  {
    "key": 912,
    "origem": "SAO PAULO, SP",
    "destino": "SANTA CRUZ, BOL",
    "co2Emitido": 286,
    "fatorEmissao": 0.06,
    "valor": 17.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.45
  },
  {
    "key": 913,
    "origem": "SAO PAULO, SP",
    "destino": "SANTIAGO, CHI",
    "co2Emitido": 374,
    "fatorEmissao": 0.06,
    "valor": 22.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 28.05
  },
  {
    "key": 914,
    "origem": "SAO PAULO, SP",
    "destino": "SANTO ANGELO, RS",
    "co2Emitido": 206,
    "fatorEmissao": 0.06,
    "valor": 12.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.45
  },
  {
    "key": 915,
    "origem": "SAO PAULO, SP",
    "destino": "SANTO DOMINGO, DOM",
    "co2Emitido": 530,
    "fatorEmissao": 0.06,
    "valor": 31.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 39.75
  },
  {
    "key": 916,
    "origem": "SAO PAULO, SP",
    "destino": "SAO JOSE DO RIO PRETO, SP",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 917,
    "origem": "SAO PAULO, SP",
    "destino": "SAO LUIZ, MA",
    "co2Emitido": 344,
    "fatorEmissao": 0.06,
    "valor": 20.64,
    "fatorFloresta": 0.8,
    "florestaProtegida": 25.8
  },
  {
    "key": 918,
    "origem": "SAO PAULO, SP",
    "destino": "SINOP, MT",
    "co2Emitido": 280,
    "fatorEmissao": 0.06,
    "valor": 16.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21
  },
  {
    "key": 919,
    "origem": "SAO PAULO, SP",
    "destino": "TERESINA, PI",
    "co2Emitido": 324,
    "fatorEmissao": 0.06,
    "valor": 19.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.3
  },
  {
    "key": 920,
    "origem": "SAO PAULO, SP",
    "destino": "TORONTO, CAN",
    "co2Emitido": 805,
    "fatorEmissao": 0.06,
    "valor": 48.3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 60.375
  },
  {
    "key": 921,
    "origem": "SAO PAULO, SP",
    "destino": "UBERABA, MG",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 922,
    "origem": "SAO PAULO, SP",
    "destino": "UBERLANDIA, MG",
    "co2Emitido": 124,
    "fatorEmissao": 0.06,
    "valor": 7.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.3
  },
  {
    "key": 923,
    "origem": "SAO PAULO, SP",
    "destino": "UNA, BA",
    "co2Emitido": 228,
    "fatorEmissao": 0.06,
    "valor": 13.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.1
  },
  {
    "key": 924,
    "origem": "SAO PAULO, SP",
    "destino": "VITORIA, ES",
    "co2Emitido": 154,
    "fatorEmissao": 0.06,
    "valor": 9.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.55
  },
  {
    "key": 925,
    "origem": "SAO PAULO, SP",
    "destino": "VITORIA DA CONQUISTA, BA",
    "co2Emitido": 204,
    "fatorEmissao": 0.06,
    "valor": 12.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.3
  },
  {
    "key": 926,
    "origem": "SAO PAULO, SP",
    "destino": "WASHINGTON, USA",
    "co2Emitido": 756,
    "fatorEmissao": 0.06,
    "valor": 45.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 56.7
  },
  {
    "key": 927,
    "origem": "SAO PAULO, SP",
    "destino": "ZURICH, CHE",
    "co2Emitido": 956,
    "fatorEmissao": 0.06,
    "valor": 57.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 71.7
  },
  {
    "key": 928,
    "origem": "SAO PAULO DE OLIVEIRA, AM",
    "destino": "TEFE, AM",
    "co2Emitido": 82,
    "fatorEmissao": 0.06,
    "valor": 4.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.15
  },
  {
    "key": 929,
    "origem": "SÃO RAIMUNDO NONATO, PI",
    "destino": "RECIFE, PE",
    "co2Emitido": 140,
    "fatorEmissao": 0.06,
    "valor": 8.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.5
  },
  {
    "key": 930,
    "origem": "SERRA TALHADA, PE",
    "destino": "RECIFE, PE",
    "co2Emitido": 56,
    "fatorEmissao": 0.06,
    "valor": 3.36,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.2
  },
  {
    "key": 931,
    "origem": "SINOP, MT",
    "destino": "BRASILIA, DF",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 932,
    "origem": "SINOP, MT",
    "destino": "CAMPINAS, MG",
    "co2Emitido": 264,
    "fatorEmissao": 0.06,
    "valor": 15.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 19.8
  },
  {
    "key": 933,
    "origem": "SINOP, MT",
    "destino": "CUIABA, MT",
    "co2Emitido": 104,
    "fatorEmissao": 0.06,
    "valor": 6.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.8
  },
  {
    "key": 934,
    "origem": "SINOP, MT",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 321,
    "fatorEmissao": 0.06,
    "valor": 19.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.075
  },
  {
    "key": 935,
    "origem": "SINOP, MT",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 280,
    "fatorEmissao": 0.06,
    "valor": 16.8,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21
  },
  {
    "key": 936,
    "origem": "SORRISO, MT",
    "destino": "CUIABA, MT",
    "co2Emitido": 71,
    "fatorEmissao": 0.06,
    "valor": 4.26,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.325
  },
  {
    "key": 937,
    "origem": "TABATINGA, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 240,
    "fatorEmissao": 0.06,
    "valor": 14.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 18
  },
  {
    "key": 938,
    "origem": "TEFE, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 110,
    "fatorEmissao": 0.06,
    "valor": 6.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.25
  },
  {
    "key": 939,
    "origem": "TEFE, AM",
    "destino": "SAO PAULO DE OLIVEIRA, AM",
    "co2Emitido": 82,
    "fatorEmissao": 0.06,
    "valor": 4.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.15
  },
  {
    "key": 940,
    "origem": "TEIXEIRA DE FREITAS, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 119,
    "fatorEmissao": 0.06,
    "valor": 7.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.925
  },
  {
    "key": 941,
    "origem": "TELEMACO, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 41,
    "fatorEmissao": 0.06,
    "valor": 2.46,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.075
  },
  {
    "key": 942,
    "origem": "TEOFILO OTONI, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 75,
    "fatorEmissao": 0.06,
    "valor": 4.5,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.625
  },
  {
    "key": 943,
    "origem": "TERESINA, PI",
    "destino": "BELEM, PA",
    "co2Emitido": 162,
    "fatorEmissao": 0.06,
    "valor": 9.72,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.15
  },
  {
    "key": 944,
    "origem": "TERESINA, PI",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 273,
    "fatorEmissao": 1.06,
    "valor": 289.38,
    "fatorFloresta": 1.8,
    "florestaProtegida": 160.7666667
  },
  {
    "key": 945,
    "origem": "TERESINA, PI",
    "destino": "BRASILIA, DF",
    "co2Emitido": 234,
    "fatorEmissao": 0.06,
    "valor": 14.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.55
  },
  {
    "key": 946,
    "origem": "TERESINA, PI",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 328,
    "fatorEmissao": 0.06,
    "valor": 19.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.6
  },
  {
    "key": 947,
    "origem": "TERESINA, PI",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 948,
    "origem": "TERESINA, PI",
    "destino": "RECIFE, PE",
    "co2Emitido": 186,
    "fatorEmissao": 0.06,
    "valor": 11.16,
    "fatorFloresta": 0.8,
    "florestaProtegida": 13.95
  },
  {
    "key": 949,
    "origem": "TERESINA, PI",
    "destino": "SÃO LUIZ, MA",
    "co2Emitido": 94,
    "fatorEmissao": 0.04,
    "valor": 3.76,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.7
  },
  {
    "key": 950,
    "origem": "TERESINA, PI",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 324,
    "fatorEmissao": 0.06,
    "valor": 19.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.3
  },
  {
    "key": 951,
    "origem": "TOLEDO, PR",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 114,
    "fatorEmissao": 0.06,
    "valor": 6.84,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.55
  },
  {
    "key": 952,
    "origem": "TRES LAGOAS, MS",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 90,
    "fatorEmissao": 0.06,
    "valor": 5.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.75
  },
  {
    "key": 953,
    "origem": "TROMBETAS, AM",
    "destino": "MANAUS, AM",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 954,
    "origem": "TROMBETAS, AM",
    "destino": "SANTAREM, PA",
    "co2Emitido": 60,
    "fatorEmissao": 0.06,
    "valor": 3.6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 4.5
  },
  {
    "key": 955,
    "origem": "TUCURUI, PA",
    "destino": "BELEM, PA",
    "co2Emitido": 48,
    "fatorEmissao": 0.06,
    "valor": 2.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.6
  },
  {
    "key": 956,
    "origem": "UBERABA, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 119,
    "fatorEmissao": 0.06,
    "valor": 7.14,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.925
  },
  {
    "key": 957,
    "origem": "UBERABA, MG",
    "destino": "MACEIO, AL",
    "co2Emitido": 288,
    "fatorEmissao": 0.06,
    "valor": 17.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.6
  },
  {
    "key": 958,
    "origem": "UBERABA, MG",
    "destino": "SÃO PAULO, SP",
    "co2Emitido": 118,
    "fatorEmissao": 0.06,
    "valor": 7.08,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.85
  },
  {
    "key": 959,
    "origem": "UBERLANDIA, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 105,
    "fatorEmissao": 0.06,
    "valor": 6.3,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.875
  },
  {
    "key": 960,
    "origem": "UBERLANDIA, MG",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 115,
    "fatorEmissao": 0.06,
    "valor": 6.9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.625
  },
  {
    "key": 961,
    "origem": "UBERLANDIA, MG",
    "destino": "FORTALEZA, CE",
    "co2Emitido": 320,
    "fatorEmissao": 0.06,
    "valor": 19.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24
  },
  {
    "key": 962,
    "origem": "UBERLANDIA, MG",
    "destino": "JOAO PESSOA, PB",
    "co2Emitido": 302,
    "fatorEmissao": 0.06,
    "valor": 18.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 22.65
  },
  {
    "key": 963,
    "origem": "UBERLANDIA, MG",
    "destino": "MACEIO, AL",
    "co2Emitido": 272,
    "fatorEmissao": 0.06,
    "valor": 16.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.4
  },
  {
    "key": 964,
    "origem": "UBERLANDIA, MG",
    "destino": "NATAL, RN",
    "co2Emitido": 322,
    "fatorEmissao": 0.06,
    "valor": 19.32,
    "fatorFloresta": 0.8,
    "florestaProtegida": 24.15
  },
  {
    "key": 965,
    "origem": "UBERLANDIA, MG",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 202,
    "fatorEmissao": 0.06,
    "valor": 12.12,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.15
  },
  {
    "key": 966,
    "origem": "UBERLANDIA, MG",
    "destino": "RECIFE, PE",
    "co2Emitido": 293,
    "fatorEmissao": 0.06,
    "valor": 17.58,
    "fatorFloresta": 0.8,
    "florestaProtegida": 21.975
  },
  {
    "key": 967,
    "origem": "UBERLANDIA, MG",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 124,
    "fatorEmissao": 0.06,
    "valor": 7.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9.3
  },
  {
    "key": 968,
    "origem": "UMUARAMA, PR",
    "destino": "CURITIBA, PR",
    "co2Emitido": 120,
    "fatorEmissao": 0.06,
    "valor": 7.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 9
  },
  {
    "key": 969,
    "origem": "UNA, BA",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 134,
    "fatorEmissao": 0.06,
    "valor": 8.04,
    "fatorFloresta": 0.8,
    "florestaProtegida": 10.05
  },
  {
    "key": 970,
    "origem": "UNA, BA",
    "destino": "BRASILIA, DF",
    "co2Emitido": 190,
    "fatorEmissao": 0.06,
    "valor": 11.4,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.25
  },
  {
    "key": 971,
    "origem": "UNA, BA",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 226,
    "fatorEmissao": 0.06,
    "valor": 13.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 16.95
  },
  {
    "key": 972,
    "origem": "UNA, BA",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 228,
    "fatorEmissao": 0.06,
    "valor": 13.68,
    "fatorFloresta": 0.8,
    "florestaProtegida": 17.1
  },
  {
    "key": 973,
    "origem": "URUGUAIANA, RS",
    "destino": "PORTO ALEGRE, RS",
    "co2Emitido": 100,
    "fatorEmissao": 0.06,
    "valor": 6,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.5
  },
  {
    "key": 974,
    "origem": "VALENÇA, BA",
    "destino": "SALVADOR, BA",
    "co2Emitido": 24,
    "fatorEmissao": 0.06,
    "valor": 1.44,
    "fatorFloresta": 0.8,
    "florestaProtegida": 1.8
  },
  {
    "key": 975,
    "origem": "VILHENA, RO",
    "destino": "CUIABA, MT",
    "co2Emitido": 98,
    "fatorEmissao": 0.06,
    "valor": 5.88,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.35
  },
  {
    "key": 976,
    "origem": "VARGINHA, MG",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 42,
    "fatorEmissao": 0.06,
    "valor": 2.52,
    "fatorFloresta": 0.8,
    "florestaProtegida": 3.15
  },
  {
    "key": 977,
    "origem": "VITORIA, ES",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 95,
    "fatorEmissao": 0.06,
    "valor": 5.7,
    "fatorFloresta": 0.8,
    "florestaProtegida": 7.125
  },
  {
    "key": 978,
    "origem": "VITORIA, ES",
    "destino": "BRASILIA, DF",
    "co2Emitido": 188,
    "fatorEmissao": 0.06,
    "valor": 11.28,
    "fatorFloresta": 0.8,
    "florestaProtegida": 14.1
  },
  {
    "key": 979,
    "origem": "VITORIA, ES",
    "destino": "CAMPINAS, SP",
    "co2Emitido": 115,
    "fatorEmissao": 0.06,
    "valor": 6.9,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.625
  },
  {
    "key": 980,
    "origem": "VITORIA, ES",
    "destino": "CAMPOS, RJ",
    "co2Emitido": 32,
    "fatorEmissao": 0.06,
    "valor": 1.92,
    "fatorFloresta": 0.8,
    "florestaProtegida": 2.4
  },
  {
    "key": 981,
    "origem": "VITORIA, ES",
    "destino": "PORTO SEGURO, BA",
    "co2Emitido": 108,
    "fatorEmissao": 0.06,
    "valor": 6.48,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.1
  },
  {
    "key": 982,
    "origem": "VITORIA, ES",
    "destino": "RECIFE, PE",
    "co2Emitido": 270,
    "fatorEmissao": 0.06,
    "valor": 16.2,
    "fatorFloresta": 0.8,
    "florestaProtegida": 20.25
  },
  {
    "key": 983,
    "origem": "VITORIA, ES",
    "destino": "RIO DE JANEIRO, RJ",
    "co2Emitido": 87,
    "fatorEmissao": 0.06,
    "valor": 5.22,
    "fatorFloresta": 0.8,
    "florestaProtegida": 6.525
  },
  {
    "key": 984,
    "origem": "VITORIA, ES",
    "destino": "SALVADOR, BA",
    "co2Emitido": 166,
    "fatorEmissao": 0.06,
    "valor": 9.96,
    "fatorFloresta": 0.8,
    "florestaProtegida": 12.45
  },
  {
    "key": 985,
    "origem": "VITORIA, ES",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 154,
    "fatorEmissao": 0.06,
    "valor": 9.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 11.55
  },
  {
    "key": 986,
    "origem": "VITORIA DA CONQUISTA, ES",
    "destino": "BELO HORIZONTE, MG",
    "co2Emitido": 117,
    "fatorEmissao": 0.06,
    "valor": 7.02,
    "fatorFloresta": 0.8,
    "florestaProtegida": 8.775
  },
  {
    "key": 987,
    "origem": "VITORIA DA CONQUISTA, ES",
    "destino": "SALVADOR, BA",
    "co2Emitido": 76,
    "fatorEmissao": 0.06,
    "valor": 4.56,
    "fatorFloresta": 0.8,
    "florestaProtegida": 5.7
  },
  {
    "key": 988,
    "origem": "VITORIA DA CONQUISTA, ES",
    "destino": "SAO PAULO, SP",
    "co2Emitido": 204,
    "fatorEmissao": 0.06,
    "valor": 12.24,
    "fatorFloresta": 0.8,
    "florestaProtegida": 15.3
  }
]
export default data;