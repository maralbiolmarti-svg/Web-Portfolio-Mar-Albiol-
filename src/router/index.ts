import Home from "@/pages/home/Home.vue";
import SobreMi from "@/pages/sobre-mi/SobreMi.vue";
import Proyectos from "@/pages/proyectos/Proyectos.vue";
import Contacto from "@/pages/contacto/Contacto.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: SobreMi
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Proyectos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})
