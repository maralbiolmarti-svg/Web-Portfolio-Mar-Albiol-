import Home from '@/pages/home/Home.vue'
import SobreMi from '@/pages/sobre-mi/SobreMi.vue'
import Proyectos from '@/pages/proyectos/Proyectos.vue'
import Contacto from '@/pages/contacto/Contacto.vue'
import LoQueNosMueve from '@/pages/proyectos/LoQueNosMueve.vue'
import Cora from '@/pages/proyectos/Cora.vue'
import Huesca from '@/pages/proyectos/Huesca.vue'
import Calendario from '@/pages/proyectos/Calendario.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: SobreMi,
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Proyectos,
    },
    {
      path: '/proyectos/lo-que-nos-mueve',
      name: 'proyecto-lo-que-nos-mueve',
      component: LoQueNosMueve,
    },
    {
      path: '/proyectos/cora',
      name: 'proyecto-cora',
      component: Cora,
    },
    {
      path: '/proyectos/huesca',
      name: 'proyecto-huesca',
      component: Huesca,
    },
    {
      path: '/proyectos/calendario',
      name: 'proyecto-calendario',
      component: Calendario,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto,
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/',
    },
  ],
})

