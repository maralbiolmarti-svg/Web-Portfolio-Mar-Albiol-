<script setup lang="ts">
import { ChevronsRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

type ProjectVisual = {
  id: string
  title: string
  image: string
  alt: string
}

const visuals: ProjectVisual[] = [
  {
    id: 'titulo',
    title: 'Título de campaña',
    image: '/imagenes/titulo lqnm.gif',
    alt: 'Animación del título Lo que nos mueve',
  },
  {
    id: 'cartel-a3',
    title: 'Cartel A3',
    image: '/imagenes/cartel a3.gif',
    alt: 'Aplicación de la campaña en cartel A3',
  },
  {
    id: 'mupi',
    title: 'Mupi',
    image: '/imagenes/mupi.gif',
    alt: 'Aplicación en soporte mupi',
  },
  {
    id: 'triptico',
    title: 'Tríptico',
    image: '/imagenes/triptico.gif',
    alt: 'Aplicación editorial en tríptico',
  },
]
</script>

<template>
  <main class="project-page bg-white text-slate-900">
    <section class="mx-auto w-full max-w-6xl px-6 pb-8 pt-8 md:pt-12">
      <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Proyectos</p>
      <h1 class="mt-3 text-3xl leading-tight md:text-5xl">Lo que nos mueve</h1>
      <p class="body-font mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base lg:max-w-none">
        LQNM es una campaña publicitaria que incentiva la unión intergeneracional a través de la creación de espacios y comunidades diversas basadas en aquello que nos apasiona.
        El objetivo de la campaña es ser visible en cualquer punto de la ciudad, por este motivo, las aplicaciones en su mayoria son carteles o trípicos. Para de esta manera cumplir con su labor divulgativa.
      </p>
      <p class="body-font mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base lg:max-w-none">
      Trabajo realizado con Elena Pintado, Irene Vidal, Alba Cardona, Sandra Pérez y Amanda Saltó.
      </p>
    </section>

    <section class="mx-auto w-full max-w-6xl space-y-10 px-0 pb-14 md:space-y-16 md:px-6">
      <article
        v-for="(item, index) in visuals"
        :key="item.id"
        class="project-item relative overflow-hidden border border-slate-200"
        :style="{ animationDelay: `${index * 140}ms` }"
      >
        <img
          :src="item.image"
          :alt="item.alt"
          class="h-[42svh] w-full object-cover sm:h-[52svh] md:h-[64svh] lg:h-[76svh] xl:h-[86svh]"
        />

        <div class="absolute inset-x-0 bottom-0 p-4 md:p-7">
          <Button
            type="button"
            variant="outline"
            class="pointer-events-none h-auto rounded-full border-white/80 bg-white/90 px-4 py-2 text-slate-900 shadow-lg backdrop-blur"
          >
            <ChevronsRight class="mr-2 h-4 w-4 text-black" />
            <h2 class="text-sm uppercase tracking-[0.12em] md:text-base">{{ item.title }}</h2>
          </Button>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.project-page {
  font-family: 'cy.grotesk-wide', sans-serif;
}

.body-font {
  font-family: 'Libre Baskerville', serif;
}

.project-item {
  opacity: 0;
  transform: translateY(22px);
  animation: fadeUp 700ms ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
