<script setup lang="ts">
const introCv = {
  sectionLabel: 'Sobre mi',
  TitleLines: ['Hola, soy Mar.', 'diseñadora creativa', 'con enfoque digital.'],
  imageSrc: '/imagenes/mar.portada3.jpeg',
  focusAreas: ['Graphic Design', 'Visual Identity', 'Branding strategy', 'Web Design'],
}
</script>

<template>
  <section class="cy-font mx-auto w-full max-w-6xl px-6 py-8 md:py-12 text-slate-900">
    <p class="text-xs tracking-[0.2em] uppercase text-slate-500">{{ introCv.sectionLabel }}</p>

    <div class="mt-4 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <div class="order-2 lg:order-1">
        <h1 class="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
          <span class="block">{{ introCv.TitleLines[0] }}</span>
          <span class="about-alt-font mt-4 block whitespace-nowrap text-[0.5em] leading-[1.02] font-normal">
            {{ introCv.TitleLines[1] }} {{ introCv.TitleLines[2] }}
          </span>
        </h1>
      </div>

      <div class="order-1 justify-self-center lg:order-2 lg:justify-self-end">
        <div class="relative h-64 w-64 overflow-hidden rounded-full border border-slate-200 bg-slate-50 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <img
            :src="introCv.imageSrc"
            class="h-full w-full object-cover"
          >
        </div>
      </div>
    </div>

    <div class="mt-10 overflow-hidden border-y border-slate-200 py-3">
      <div class="flex w-full flex-wrap items-center justify-center gap-y-3 gap-x-8 text-center text-xs uppercase tracking-[0.18em] text-slate-700 sm:text-sm md:justify-between md:gap-x-12">
        <span v-for="item in introCv.focusAreas" :key="`ticker-${item}`" class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-[#710310]" />
          <span>{{ item }}</span>
        </span>
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
</style>

