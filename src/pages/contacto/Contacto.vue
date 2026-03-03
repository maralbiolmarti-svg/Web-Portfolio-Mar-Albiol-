<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <section class="mx-auto w-full max-w-6xl px-6 py-8 md:py-12 text-slate-900">
    <p class="text-xs tracking-[0.2em] uppercase text-slate-500">Contacto</p>

    <div class="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-stretch">
      <div class="max-w-2xl rounded-xl border border-slate-200 p-5 md:p-7 lg:h-full">
        <h1 class="text-2xl font-bold md:text-4xl">Hablemos de tu proyecto</h1>
        <p class="contacto-baskerville mt-2 text-sm text-slate-600">
          ¡Empecemos a trabajar juntos!
        </p>

        <form class="mt-6 space-y-5">
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-2">
              <Label for="nombre">Nombre</Label>
              <Input id="nombre" name="nombre" class="baskerville-placeholder form-value-color" placeholder="tu nombre" required />
            </div>
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input id="email" name="email" type="email" class="baskerville-placeholder form-value-color" placeholder="un correo de contacto" required />
            </div>
          </div>

          <div class="space-y-2">
            <Label for="servicios">Servicios que te interesan</Label>
            <Input id="servicios" name="servicios" class="baskerville-placeholder form-value-color" placeholder="en qué te puedo ayudar" required />
          </div>

          <div class="space-y-2">
            <Label for="idea">Tu idea de proyecto</Label>
            <textarea
              id="idea"
              name="idea"
              rows="5"
              required
              class="baskerville-placeholder form-value-color border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px]"
              placeholder="cuéntame y nos ponemos manos a la obra"
            ></textarea>
          </div>

          <Button type="submit" class="bg-[#710310] text-white hover:bg-black/85">Enviar mensaje</Button>
        </form>
      </div>

      <div class="hidden lg:block lg:h-full">
        <img
          src="/imagenes/mar.portada2.jpeg"
          alt="Imagen de contacto"
          class="h-full w-full rounded-lg object-cover"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

.contacto-baskerville {
  font-family: 'Libre Baskerville', serif;
}

.form-value-color {
  color: #710310;
}

 :deep(.baskerville-placeholder::placeholder) {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.82rem;
  color: rgb(100 116 139) !important;
}
</style>





