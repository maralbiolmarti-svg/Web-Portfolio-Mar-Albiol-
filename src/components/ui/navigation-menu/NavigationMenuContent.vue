<script setup lang="ts">
import type { NavigationMenuContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { NavigationMenuContent as NavigationMenuContentPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _class, ...rest } = props
  return rest
})
</script>

<template>
  <NavigationMenuContentPrimitive
    v-bind="delegatedProps"
    :class="cn('absolute top-full left-0 z-[80] mt-2 min-w-[220px] rounded-md border border-slate-200 bg-white p-2 shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in', props.class)"
  >
    <slot />
  </NavigationMenuContentPrimitive>
</template>

