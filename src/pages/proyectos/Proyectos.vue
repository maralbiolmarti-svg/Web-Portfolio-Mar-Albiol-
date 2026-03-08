<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

type ProjectCard = {
  title: string
  image: string
  to: string
}

const projectCards: ProjectCard[] = [
  {
    title: 'Lo que nos mueve',
    image: '/imagenes/portadalqnm.JPG',
    to: '/proyectos/lo-que-nos-mueve',
  },
    {
    title: 'Calendari',
    image: '/imagenes/pruebaphotoshop.jpg',
    to: '/proyectos/calendario',
  },
  {
    title: 'Cora',
    image: '/imagenes/coraportada.jpg',
    to: '/proyectos/cora',
  },
  {
    title: 'Huesca',
    image: '/imagenes/portadacalendario2.jpg',
    to: '/proyectos/huesca',
  },
]
</script>

<template>
  <section class="cy-font mx-auto w-full max-w-6xl px-6 py-8 text-slate-900 md:py-12">
    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Proyectos</p>

    <div class="mt-6 grid gap-5 md:grid-cols-2">
      <article
        v-for="project in projectCards"
        :key="project.title"
        class="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
      >
        <div class="aspect-4/3 overflow-hidden bg-slate-100">
          <img
            :src="project.image"
            :alt="`Portada del proyecto ${project.title}`"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          >
        </div>

        <div class="flex items-center justify-between gap-4 p-5">
          <h2 class="text-lg uppercase tracking-[0.08em] md:text-xl">{{ project.title }}</h2>

          <Button as-child variant="outline" class="rounded-full border-slate-300 px-4 hover:bg-slate-200">
            <RouterLink :to="project.to" class="inline-flex items-center gap-1.5">
              Ver
              <ArrowUpRight class="h-4 w-4" />
            </RouterLink>
          </Button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cy-font {
  font-family: 'cy.grotesk-wide', sans-serif;
}
</style>
