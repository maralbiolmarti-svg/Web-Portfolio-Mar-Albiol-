<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

const showNegative = ref(false)
</script>

<template>
  <section class="relative h-full min-h-full overflow-hidden bg-white">
    <img
      :src="showNegative ? '/imagenes/logoennegativo.jpg' : '/imagenes/logoenpositivo.jpg'"
      alt="Logo principal"
      class="absolute inset-0 block h-full w-full object-cover"
    >

    <div
      class="absolute left-1/2 top-1/2 z-10 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2"
      @mouseenter="showNegative = true"
      @mouseleave="showNegative = false"
    />

    <div class="absolute inset-x-0 bottom-0 z-20  px-6 py-6 backdrop-blur-sm md:py-8">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <p
          class="text-2xl font-semibold uppercase tracking-[0.12em] md:text-2xl lg:text-4xl lg:tracking-[0.08em]"
          :class="showNegative ? 'text-white' : 'text-slate-900'"
        >
          <span class="block sm:inline">Portfolio</span><span class="block sm:inline sm:ml-2">profesional</span>
        </p>

        <Button
          as-child
          variant="outline"
          class="rounded-full px-7 py-2 text-base md:px-10 md:text-lg"
          :class="showNegative
            ? 'border-white bg-transparent text-white hover:bg-white/10 hover:text-white'
            : 'border-black bg-white text-black hover:bg-slate-100'"
        >
          <RouterLink to="/proyectos">Saber más</RouterLink>
        </Button>
      </div>
    </div>
  </section>
</template>

