<script setup lang="ts">
import type { NavigationMenuLinkProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { NavigationMenuLink as NavigationMenuLinkPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _class, ...rest } = props
  return rest
})
</script>

<template>
  <NavigationMenuLinkPrimitive
    v-bind="delegatedProps"
    :class="cn('block rounded-sm px-3 py-2 text-sm text-slate-900 transition-colors hover:bg-slate-100 hover:text-[#710310]', props.class)"
  >
    <slot />
  </NavigationMenuLinkPrimitive>
</template>

