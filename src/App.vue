<script setup lang="ts">
import { Mail, Instagram, Music2 } from 'lucide-vue-next'
import { RouterView, RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string): boolean => route.path === path
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div class="w-full px-3 py-4 md:px-4 md:py-3 lg:px-6 lg:py-3 flex items-center justify-between gap-4">
        <RouterLink to="/" aria-label="Ir a inicio">
          <img
            src="/imagenes/logo-tagline.png"
            class="h-14 w-auto object-contain md:h-16 lg:h-18"
            alt="Logo de Mar Albiol"
          >
        </RouterLink>

        <nav aria-label="Indice principal">
          <ul class="flex items-center gap-8 md:gap-12 text-sm font-medium md:text-base">
            <li>
              <RouterLink
                to="/sobre-mi"
                class="transition-colors hover:text-slate-600"
                :class="{
                  'text-[#710310] underline underline-offset-8 decoration-2': isActive('/sobre-mi')
                }"
              >
                Sobre mi
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/proyectos"
                class="transition-colors hover:text-slate-600"
                :class="{
                  'text-[#710310] underline underline-offset-8 decoration-2': isActive('/proyectos')
                }"
              >
                Proyectos
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contacto"
                class="transition-colors hover:text-slate-600"
                :class="{
                  'text-[#710310] underline underline-offset-8 decoration-2': isActive('/contacto')
                }"
              >
                Contacto
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class=" border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-5">
        <ul class="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-center md:gap-10">
          <li class="flex items-center gap-2">
            <Mail class="h-4 w-4" />
            <span>maralbiolmarti@gmail.com</span>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mar.albiol/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-[#710310] transition-colors"
            >
              <Instagram class="h-4 w-4" />
              <span>mar.albiol</span>
            </a>
          </li>
          <li>
           <a
              href="https://www.tiktok.com/@mar_albiol"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-[#710310] transition-colors"
            >
            <Music2 class="h-4 w-4" />
            <span>mar_albiol</span>
          </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

