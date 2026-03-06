<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

const introCv = {
  sectionLabels: ['Sobre mi', 'Introducción', 'Formación', 'Habilidades'],
  titleLines: ['Hola, soy Mar.', 'diseñadora creativa', 'con perspectiva.'],
  imageSrc: '/imagenes/mar.portada3.jpeg',
  focusAreas: ['Graphic Design', 'Visual Identity', 'Branding strategy', 'Web Design'],
}

const introParagraphs = [
  'Soy Mar, diseñadora gráfica formada en la Universidad Politécnica de Valencia. Desde que empecé en el mundo del diseño me ha interesado especialmente cómo las ideas pueden transformarse en imágenes capaces de comunicar de forma clara y atractiva.',
  'A lo largo de mi formación he trabajado en proyectos muy variados, lo que me ha permitido explorar distintas áreas del diseño y desarrollar una mirada versátil. Me interesa especialmente construir propuestas visuales que tengan coherencia, personalidad y una intención clara detrás.',
  'Disfruto del proceso creativo desde la investigación inicial hasta los últimos detalles del resultado final. Para mí, el diseño es una herramienta para ordenar ideas, contar historias y crear conexiones entre marcas y personas.',
  'Si te interesa conocer más sobre mi trabajo o colaborar en algún proyecto, estaré encantada de escucharte.',
]

const timeline = [
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

const skills = [
  { name: 'Adobe Illustrator', level: 92},
  { name: 'Adobe After Effects', level: 90},
  { name: 'Adobe InDesign', level: 55 },
  { name: 'Adobe Lightroom', level: 84},
  { name: 'Adobe Photoshop', level: 46},
  { name: 'Adobe Premiere', level: 48},
]
</script>

<template>
  <section class="cy-font mx-auto w-full max-w-6xl px-6 py-8 md:py-12 text-slate-900">
    <p class="text-xs tracking-[0.2em] uppercase text-slate-500">{{ introCv.sectionLabels[0] }}</p>

    <div class="mt-4 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <div class="order-2 lg:order-1">
        <h1 class="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
          <span class="block">{{ introCv.titleLines[0] }}</span>
          <span class="about-alt-font mt-4 block whitespace-nowrap text-[0.5em] leading-[1.02] font-normal">
            {{ introCv.titleLines[1] }} {{ introCv.titleLines[2] }}
          </span>
        </h1>
      </div>

      <div class="order-1 justify-self-center lg:order-2 lg:justify-self-end">
        <div class="relative h-64 w-64 overflow-hidden rounded-full border border-slate-200 bg-slate-50 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <img :src="introCv.imageSrc" class="h-full w-full object-cover" alt="Retrato de Mar" >
        </div>
      </div>
    </div>

    <div class="mt-10 overflow-hidden border-y border-slate-200 py-3">
      <div class="flex w-full flex-wrap items-center justify-center gap-y-3 gap-x-8 text-center text-xs uppercase tracking-[0.18em] text-slate-700 sm:text-sm md:justify-between md:gap-x-12">
        <span v-for="item in introCv.focusAreas" :key="`ticker-${item}`" class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-[#710310]" ></span>
          <span>{{ item }}</span>
        </span>
      </div>
    </div>

    <div class="mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-6 md:py-8">
      <div class="mx-auto w-full max-w-6xl px-6">
        <p class="text-xs tracking-[0.2em] uppercase text-slate-500">{{ introCv.sectionLabels[1] }}</p>

        <article class="intro-baskerville mt-5 max-w-4xl space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
          <p v-for="paragraph in introParagraphs" :key="paragraph">{{ paragraph }}</p>
        </article>
      </div>
    </div>

    <div class="mt-16">
      <p class="text-xs tracking-[0.2em] uppercase text-slate-500">{{ introCv.sectionLabels[2] }}</p>

      <div class="mt-6 space-y-4">
        <article
          v-for="item in timeline"
          :key="`${item.year}-${item.title}`"
          class="rounded-xl border border-slate-200 bg-white p-4 md:p-5"
        >
          <p class="text-xs uppercase tracking-[0.18em] text-[#710310]">{{ item.year }}</p>
          <h3 class="mt-2 text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-slate-500">{{ item.place }}</p>
          <p class="timeline-detail mt-2 text-sm text-slate-700">{{ item.detail }}</p>
        </article>
      </div>
    </div>

    <div class="mt-16">
      <p class="text-xs tracking-[0.2em] uppercase text-slate-500">{{ introCv.sectionLabels[3] }}</p>

      <div class="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="skill in skills" :key="skill.name" class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            <p class="text-base font-medium">{{ skill.name }}</p>
          </div>
          <div class="h-3 w-full rounded-full bg-slate-200">
            <div class="h-full rounded-full bg-slate-900" :style="{ width: `${skill.level}%` }" />
          </div>
        </div>
      </div>

      <p class="skills-note mt-10 text-center text-sm text-slate-600">
        Estas herramientas son las que más utilizo para el desarrollo de mis proyectos.
      </p>
    </div>

    <div class="mt-16 rounded-xl border border-slate-200 bg-white p-5 md:p-6">
      <p class="text-sm text-slate-700">¿Tienes un proyecto en mente y no sabes cómo darle forma?</p>
      <div class="mt-4">
        <Button as-child class="bg-[#710310] text-white hover:bg-[#5c020d]">
          <RouterLink to="/contacto">Pongámonos en contacto</RouterLink>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.cy-font {
  font-family: 'cy.grotesk-wide', sans-serif;
}

.about-alt-font {
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
}

.intro-baskerville {
  font-family: 'Libre Baskerville', serif;
}
.timeline-detail {
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
}
.skills-note {
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
}
</style>


