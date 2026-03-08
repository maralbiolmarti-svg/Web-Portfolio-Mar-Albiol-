<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="home-page flex h-full min-h-full w-full flex-col bg-white">
    <div class="flex h-full min-h-full w-full flex-1 flex-col border-y border-slate-200 bg-[#f8f8f6]">
      <div class="grid min-h-[60svh] flex-1 grid-cols-1 md:grid-cols-2">
        <div class="min-h-[34svh] overflow-hidden border-b border-slate-200 md:min-h-[62svh] md:border-b-0 md:border-r">
          <img
            src="/imagenes/logo-tagline.png"
            alt="Logo con tagline"
            class="h-full w-full object-contain p-4 md:px-8 md:pt-8 md:pb-0"
          />
        </div>

        <div class="flex min-h-[34svh] flex-col items-start justify-end gap-7 p-6 md:min-h-[62svh] md:px-14 md:pb-10 md:pt-14">
          <h1 class="text-4xl uppercase tracking-[0.08em] text-slate-900 sm:text-5xl lg:text-6xl">
            Portfolio creativo
          </h1>

          <Button
            as-child
            variant="outline"
            class="rounded-full border-slate-900 px-7 py-2 text-base hover:border-[#710310] hover:bg-[#710310] hover:text-white"
          >
            <RouterLink to="/sobre-mi" class="inline-flex items-center gap-2">
              Saber más
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </Button>
        </div>
      </div>

      <div class="ticker-wrap border-t border-slate-200 bg-[#710310] py-3">
        <div class="ticker-track">
          <span class="ticker-item">IDENTIDAD VISUAL</span>
          <span class="ticker-item">BRANDING</span>
          <span class="ticker-item">DIRECCIÓN DE ARTE</span>
          <span class="ticker-item">UX/UI</span>
          <span class="ticker-item">WEB DESIGN</span>
          <span class="ticker-item">IDENTIDAD VISUAL</span>
          <span class="ticker-item">BRANDING</span>
          <span class="ticker-item">DIRECCIÓN DE ARTE</span>
          <span class="ticker-item">UX/UI</span>
          <span class="ticker-item">WEB DESIGN</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-page {
  font-family: 'cy.grotesk-wide', sans-serif;
}

.ticker-wrap {
  overflow: hidden;
  white-space: nowrap;
}

.ticker-track {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  min-width: max-content;
  animation: ticker 24s linear infinite;
}

.ticker-item {
  color: #fff;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.ticker-item::after {
  content: '•';
  margin-left: 1.25rem;
  opacity: 0.9;
}

@keyframes ticker {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
