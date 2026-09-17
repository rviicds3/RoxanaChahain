const ACADEMIA = {
  nombre: "Roxana Chahaín",
  marca: "Academia Profesional de Belleza",
  whatsapp: "595986881299",
  whatsappVisible: "+595 986 881299",
  instagram: "https://www.instagram.com/p/DdOws8sEclJ/?stkn=MXZicWZoZjVic2Nkcw==",
  facebook: "https://www.facebook.com/share/1PxUQTxkrU/",
  ubicacionTexto: "Edificio 771",
  ubicacionMapa: "https://www.google.com/maps/search/?api=1&query=-25.331500,-57.504167",
  atencion: [
    { dias: "Lunes, martes y jueves", horas: "13:00 a 16:00 hs" },
    { dias: "Miércoles", horas: "14:00 a 17:00 hs" },
    { dias: "Viernes", horas: "Cerrado" },
    { dias: "Sábado", horas: "09:00 a 19:00 hs" },
    { dias: "Domingo", horas: "09:00 a 12:00 hs" }
  ]
};

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "cabello", nombre: "Cabello" },
  { id: "color", nombre: "Color" },
  { id: "unas", nombre: "Uñas" },
  { id: "mirada", nombre: "Pestañas y Cejas" }
];

const HORARIOS_SALON = [
  "Lunes 09:00 a 12:00 hs",
  "Lunes, martes o jueves 13:00 a 16:00",
  "Sábado 09:00 a 12:00 o 16:00 a 19:00",
  "Domingo 09:00 a 12:00"
];

const HORARIOS_UNAS = [
  "Lunes o sábados 13:00 a 16:00 hs",
  "Miércoles 14:00 a 17:00 hs",
  "Sábados 09:00 a 12:00 hs",
  "Domingo 09:00 a 12:00 hs"
];

const CURSOS = [
  {
    id: "estilista-profesional",
    nombre: "Curso de Estilista Profesional",
    categoria: "cabello",
    imagen: "images/cursos/estilista-profesional.jpeg",
    galeria: [
      { src: "images/cursos/estilista-profesional.jpeg", titulo: "Curso de Estilista Profesional" },
      { src: "images/cursos/estilista-profesional-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "300.000 Gs.",
    costoNota: "por mes",
    duracion: "5 meses",
    frecuencia: "Una vez por semana",
    horarios: HORARIOS_SALON
  },
  {
    id: "peluqueria",
    nombre: "Curso de Peluquería",
    categoria: "cabello",
    imagen: "images/cursos/peluqueria.jpeg",
    galeria: [
      { src: "images/cursos/peluqueria.jpeg", titulo: "Curso de Peluquería" },
      { src: "images/cursos/peluqueria-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "Desde 180.000 Gs.",
    costoNota: "por mes, según el plan",
    planes: [
      { duracion: "9 meses", costo: "180.000 Gs. por mes", frecuencia: "2 veces por semana" },
      { duracion: "6 meses", costo: "220.000 Gs. por mes", frecuencia: "1 vez por semana" },
      { duracion: "4 meses", costo: "250.000 Gs. por mes", frecuencia: "1 vez por semana" }
    ],
    duracion: "9, 6 o 4 meses",
    frecuencia: "1 o 2 veces por semana",
    horarios: HORARIOS_SALON
  },
  {
    id: "corte-femenino",
    nombre: "Curso de Corte Femenino",
    categoria: "cabello",
    imagen: "images/cursos/corte-femenino.jpeg",
    galeria: [
      { src: "images/cursos/corte-femenino.jpeg", titulo: "Curso de Corte Femenino" },
      { src: "images/cursos/corte-femenino-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "250.000 Gs.",
    costoNota: "por mes",
    duracion: "3 meses",
    frecuencia: "Una vez por semana",
    horarios: HORARIOS_SALON
  },
  {
    id: "peinados",
    nombre: "Curso de Peinados",
    categoria: "cabello",
    imagen: "images/cursos/peinados.jpeg",
    galeria: [
      { src: "images/cursos/peinados.jpeg", titulo: "Curso de Peinados" },
      { src: "images/cursos/peinados-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "250.000 Gs.",
    costoNota: "por mes",
    duracion: "3 meses",
    frecuencia: "Una vez por semana",
    horarios: HORARIOS_SALON
  },
  {
    id: "tratamientos-capilares",
    nombre: "Curso de Tratamientos Capilares",
    categoria: "cabello",
    imagen: "images/cursos/tratamientos-capilares.jpeg",
    galeria: [
      { src: "images/cursos/tratamientos-capilares.jpeg", titulo: "Curso de Tratamientos Capilares" },
      { src: "images/cursos/tratamientos-capilares-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "250.000 Gs.",
    costoNota: "por mes",
    duracion: "2 meses",
    frecuencia: "Una vez por semana",
    horarios: HORARIOS_SALON
  },
  {
    id: "colorimetria",
    nombre: "Curso de Colorimetría",
    categoria: "color",
    imagen: "images/cursos/colorimetria.jpeg",
    galeria: [
      { src: "images/cursos/colorimetria.jpeg", titulo: "Curso de Colorimetría" },
      { src: "images/cursos/colorimetria-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "220.000 Gs.",
    costoNota: "por mes",
    duracion: "4 meses",
    frecuencia: "Una vez por semana",
    horarios: [
      "Lunes 13:00 a 16:00 hs",
      "Martes 13:00 a 16:00",
      "Jueves 13:00 a 16:00",
      "Domingo 09:00 a 12:00"
    ]
  },
  {
    id: "master-en-color",
    nombre: "Curso de Máster en Color",
    categoria: "color",
    imagen: "images/cursos/master-en-color.jpeg",
    galeria: [
      { src: "images/cursos/master-en-color.jpeg", titulo: "Curso de Máster en Color" },
      { src: "images/cursos/master-en-color-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "300.000 Gs.",
    costoNota: "por mes",
    duracion: "4 meses",
    frecuencia: "Una vez por semana",
    horarios: [
      "Lunes 13:00 a 16:00 hs",
      "Martes 09:00 a 12:00",
      "Jueves 13:00 a 16:00"
    ]
  },
  {
    id: "rubio-morena-iluminada",
    nombre: "Rubio soñado y Morena Iluminada",
    categoria: "color",
    imagen: "images/cursos/rubio-morena-iluminada.jpeg",
    galeria: [
      { src: "images/cursos/rubio-morena-iluminada.jpeg", titulo: "Rubio soñado y Morena Iluminada" },
      { src: "images/cursos/rubio-morena-iluminada-contenido.jpeg", titulo: "Contenido" }
    ],
    costo: "250.000 Gs.",
    costoNota: "por mes",
    duracion: "3 meses",
    frecuencia: "Una vez por semana",
    contenido: [
      "Rubio Global",
      "Mechas con Gorro",
      "Técnica de Balayage",
      "Morena Iluminada",
      "Morena Caramelo",
      "Morena Dorada"
    ]
  },
  {
    id: "manicura-pedicura",
    nombre: "Curso de Manicura y Pedicura",
    categoria: "unas",
    imagen: "images/cursos/manicura-pedicura.jpeg",
    galeria: [
      { src: "images/cursos/manicura-pedicura.jpeg", titulo: "Curso de Manicura y Pedicura" },
      { src: "images/cursos/manicura-pedicura-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "250.000 Gs.",
    costoNota: "por mes",
    duracion: "4 meses",
    frecuencia: "Una vez por semana",
    incluye: "Incluye materiales para la práctica",
    horarios: HORARIOS_UNAS
  },
  {
    id: "soft-gel",
    nombre: "Curso de Soft Gel",
    categoria: "unas",
    imagen: "images/cursos/soft-gel.jpeg",
    galeria: [
      { src: "images/cursos/soft-gel.jpeg", titulo: "Curso de Soft Gel" },
      { src: "images/cursos/soft-gel-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "300.000 Gs.",
    costoNota: "por mes",
    duracion: "3 meses",
    frecuencia: "Una vez por semana",
    horarios: HORARIOS_UNAS
  },
  {
    id: "kapping-esculpidas",
    nombre: "Curso de Kapping y Esculpidas",
    categoria: "unas",
    imagen: "images/cursos/kapping-esculpidas.jpeg",
    galeria: [
      { src: "images/cursos/kapping-esculpidas.jpeg", titulo: "Curso de Kapping y Esculpidas" },
      { src: "images/cursos/kapping-esculpidas-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "300.000 Gs.",
    costoNota: "por mes",
    duracion: "5 meses",
    frecuencia: "Una vez por semana",
    horarios: HORARIOS_UNAS
  },
  {
    id: "experta-pestanas-cejas",
    nombre: "Experta en Pestañas y Cejas",
    categoria: "mirada",
    imagen: "images/cursos/experta-pestanas-cejas.jpeg",
    galeria: [
      { src: "images/cursos/experta-pestanas-cejas.jpeg", titulo: "Experta en Pestañas y Cejas" },
      { src: "images/cursos/experta-pestanas-cejas-contenido.jpeg", titulo: "Contenido" },
      { src: "images/cursos/experta-pestanas-cejas-horarios.jpeg", titulo: "Horarios" }
    ],
    costo: "300.000 Gs.",
    duracion: "5 meses",
    frecuencia: "Una vez por semana",
    incluye: "Incluye materiales para la práctica",
    contenido: [
      "Extensiones de Pestañas (efecto clásico, brasileño, tecnológico, foxy, mapeo y más)",
      "Service de Pestañas",
      "Extracción de extensiones",
      "Lifting de pestañas · Lifting efecto rímel (con tinte)",
      "Diseño de cejas · Mapeo",
      "Perfilado de cejas",
      "Depilación hindú"
    ],
    horarios: [
      "Lunes 09:00 a 12:00 hs o 13:00 a 16:00 hs",
      "Martes 09:00 a 12:00 hs o 13:00 a 16:00 hs",
      "Miércoles 14:00 a 17:00 hs",
      "Jueves 13:00 a 16:00 hs",
      "Sábado 09:00 a 12:00 hs"
    ]
  },
  {
    id: "extensiones-pestanas",
    nombre: "Extensiones de Pestañas",
    categoria: "mirada",
    imagen: "images/cursos/extensiones-pestanas.jpeg",
    galeria: [
      { src: "images/cursos/extensiones-pestanas.jpeg", titulo: "Extensiones de Pestañas" },
      { src: "images/cursos/extensiones-pestanas-contenido.jpeg", titulo: "Contenido" }
    ],
    costo: "400.000 Gs.",
    costoNota: "pago mensual",
    duracion: "3 meses",
    frecuencia: "Una vez por semana",
    incluye: "Incluye materiales para la práctica",
    horarioNota: "Horario personalizado",
    contenido: [
      "Fotografía · Video",
      "Preparación pre-Extensiones",
      "Técnica Efecto Clásico",
      "Técnica Efecto Brasileño",
      "Técnica Efecto Tecnológico",
      "Service · Extracción · Mapeo",
      "Efecto Foxy"
    ]
  },
  {
    id: "lifting-pestanas",
    nombre: "Lifting de Pestañas",
    categoria: "mirada",
    imagen: "images/cursos/lifting-pestanas.jpeg",
    galeria: [
      { src: "images/cursos/lifting-pestanas.jpeg", titulo: "Lifting de Pestañas" },
      { src: "images/cursos/lifting-pestanas-contenido.jpeg", titulo: "Contenido" }
    ],
    costo: "350.000 Gs.",
    costoNota: "de un solo pago",
    duracion: "2 clases prácticas",
    frecuencia: "Una vez por semana",
    incluye: "Incluye materiales para la práctica",
    horarioNota: "Horario personalizado",
    contenido: [
      "Fotografía · Video",
      "Técnica de lifting",
      "Tinte de Pestañas",
      "Arqueado perfecto"
    ]
  },
  {
    id: "cejas-henna",
    nombre: "Diseño de Cejas con Henna",
    categoria: "mirada",
    imagen: "images/cursos/cejas-henna.jpeg",
    galeria: [
      { src: "images/cursos/cejas-henna.jpeg", titulo: "Diseño de Cejas con Henna" },
      { src: "images/cursos/cejas-henna-contenido.jpeg", titulo: "Contenido" }
    ],
    costo: "350.000 Gs.",
    costoNota: "pago único",
    duracion: "3 clases prácticas",
    frecuencia: "Una vez por semana",
    incluye: "Incluye materiales para la práctica",
    horarioNota: "Horario personalizado",
    contenido: [
      "Diseño de Cejas",
      "Henna",
      "Depilación con hilo",
      "Depilación con navaja"
    ]
  }
];

const POLITICA_RESERVAS = [
  "Las reservas no son reembolsables ni transferibles a otros cursos y/o personas.",
  "Una vez realizada la seña se da un tiempo máximo de 20 días para iniciar el curso.",
  "Una vez pasado los 20 días la reserva queda sin efecto.",
  "Las clases se pueden recuperar mientras la fecha de pago siga vigente, una vez vencida la cuota o culminado el curso, deberá abonar nuevamente si desea recuperar alguna clase perdida."
];

const CUENTAS_PAGO = {
  titulo: "Cuentas de pago",
  bajada: "Para reservar lugar:",
  cuentas: [
    { banco: "Banco Atlas", titular: "Roxana Chahain", etiqueta: "Alias CI", valor: "6128782" },
    { banco: "Ueno Bank", titular: "Roxana Chahain", etiqueta: "Alias celular", valor: "0986881299" }
  ],
  notas: [
    "Seña no reembolsable.",
    "Es necesario enviar el comprobante de pago para confirmar la reserva."
  ]
};
