export type TimelineItem = {
  year: string
  title: string
  place: string
  detail: string
}

export type SkillItem = {
  name: string
  level: number
}

export const introCv = {
  sectionLabels: ['Sobre mi', 'Introducción', 'Formación', 'Habilidades'],
  titleLines: ['Hola, soy Mar.', 'diseñadora creativa', 'con perspectiva.'],
  imageSrc: '/imagenes/mar.portada3.jpeg',
  focusAreas: ['Graphic Design', 'Visual Identity', 'Branding strategy', 'Web Design'],
}

export const introParagraphs = [
  'Soy Mar, diseñadora gráfica formada en la Universidad Politécnica de Valencia. Desde que empecé en el mundo del diseño me ha interesado especialmente cómo las ideas pueden transformarse en imágenes capaces de comunicar de forma clara y atractiva.',
  'A lo largo de mi formación he trabajado en proyectos muy variados, lo que me ha permitido explorar distintas áreas del diseño y desarrollar una mirada versátil. Me interesa especialmente construir propuestas visuales que tengan coherencia, personalidad y una intención clara detrás.',
  'Disfruto del proceso creativo desde la investigación inicial hasta los últimos detalles del resultado final. Para mí, el diseño es una herramienta para ordenar ideas, contar historias y crear conexiones entre marcas y personas.',
  'Si te interesa conocer más sobre mi trabajo o colaborar en algún proyecto, estaré encantada de escucharte.',
]

export const introManifesto = 'Diseño para que las ideas se recuerden y se sientan.'

export const timeline: TimelineItem[] = [
  {
    year: '2024 - Actualidad',
    title: 'Grado en Diseño y Tecnologías Creativas',
    place: 'Universidad Politécnica de Valencia',
    detail: 'Formación enfocada en diseño gráfico, narrativa visual, UX/UI y desarrollo digital.',
  },
  {
    year: '2023',
    title: 'Practicas en estudio de diseño',
    place: 'Empresa Eruga comunicación',
    detail: 'Creación de identidades visuales y páginas webs para clientes.',
  },
  {
    year: '2023',
    title: 'Máster en diseño gráfico',
    place: 'Idecrea formaciones',
    detail: 'Formación especializada en diseño gráfico con énfasis en identidad visual y estrategia de marca.',
  },
]

export const skills: SkillItem[] = [
  { name: 'Adobe Illustrator', level: 92 },
  { name: 'Adobe After Effects', level: 90 },
  { name: 'Adobe InDesign', level: 55 },
  { name: 'Adobe Lightroom', level: 84 },
  { name: 'Adobe Photoshop', level: 46 },
  { name: 'Adobe Premiere', level: 48 },
]
