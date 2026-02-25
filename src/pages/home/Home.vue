<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div class="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4">
        <p class="text-sm font-semibold tracking-[0.18em] uppercase">Mar Albiol</p>
        <nav aria-label="Indice principal">
          <ul class="flex items-center gap-5 text-sm font-medium md:text-base">
            <li>
              <RouterLink class="hover:text-slate-600 transition-colors" to="/sobre-mi">Sobre mi</RouterLink>
            </li>
            <li>
              <RouterLink class="hover:text-slate-600 transition-colors" to="/proyectos">Proyectos</RouterLink>
            </li>
            <li>
              <RouterLink class="hover:text-slate-600 transition-colors" to="/contacto">Contacto</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:py-14">
      <h1 class="text-4xl font-bold tracking-tight md:text-6xl">Portfolio creativo</h1>

      <img
        class="mt-2 h-[280px] w-full object-cover md:h-[460px]"
        src="/imagenes/mar.portada3.jpeg"
        alt="Imagen principal del portfolio"
      />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-5">
        <p class="text-sm text-slate-600">2026 - Portfolio personal</p>
      </div>
    </footer>
  </div>
</template>
