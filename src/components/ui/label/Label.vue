<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  for?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <label
    :for="props.for"
    data-slot="label"
    :class="cn('text-sm font-medium leading-none text-slate-800', props.class)"
  >
    <slot />
  </label>
</template>
