<script setup lang="ts">
import { Mail, Instagram, Music2 } from 'lucide-vue-next'
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const route = useRoute()
const router = useRouter()

const isActive = (path: string): boolean => route.path === path
const isProjectsActive = (): boolean => route.path.startsWith('/proyectos')
const goToProjects = (): void => {
  router.push('/proyectos')
}

const projectLinks = [
  { label: 'Lo que nos mueve', to: '/proyectos/lo-que-nos-mueve' },
  { label: 'Cora', to: '/proyectos/cora' },
  { label: 'Huesca', to: '/proyectos/huesca' },
  { label: 'Calendario', to: '/proyectos/calendario' },
]
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 flex flex-col">
    <header class="relative z-[70] border-b border-slate-200 bg-white/90 backdrop-blur">
      <div class="w-full px-3 py-4 md:px-4 md:py-3 lg:px-6 lg:py-3 flex items-center justify-between gap-4">
        <RouterLink to="/" aria-label="Ir a inicio">
          <img
            src="/imagenes/logo.png"
            class="h-8 w-auto object-contain md:h-10 lg:h-12"
            alt="Logo de Mar Albiol"
          >
        </RouterLink>

        <NavigationMenu :viewport="false">
          <NavigationMenuList class="text-sm font-medium md:text-base">
            <NavigationMenuItem>
              <RouterLink
                to="/sobre-mi"
                class="inline-flex h-9 items-center transition-colors hover:text-slate-600"
                :class="{
                  'text-[#710310] underline underline-offset-8 decoration-2': isActive('/sobre-mi')
                }"
              >
                SOBRE MI 
              </RouterLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                class="h-9 px-0 text-sm font-medium md:text-base hover:bg-transparent focus:bg-transparent"
                :class="{
                  'text-[#710310] underline underline-offset-8 decoration-2': isProjectsActive()
                }"
                @click="goToProjects"
              >
                PROYECTOS
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="space-y-1">
                  <li v-for="project in projectLinks" :key="project.to">
                    <NavigationMenuLink as-child>
                      <RouterLink :to="project.to">{{ project.label }}</RouterLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <RouterLink
                to="/contacto"
                class="inline-flex h-9 items-center transition-colors hover:text-slate-600"
                :class="{
                  'text-[#710310] underline underline-offset-8 decoration-2': isActive('/contacto')
                }"
              >
                CONTACTO
              </RouterLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
