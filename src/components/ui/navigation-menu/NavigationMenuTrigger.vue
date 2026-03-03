<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { NavigationMenuTrigger as NavigationMenuTriggerPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { navigationMenuTriggerStyle } from '.'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _class, ...rest } = props
  return rest
})
</script>

<template>
  <NavigationMenuTriggerPrimitive
    v-bind="delegatedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <ChevronDown class="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
  </NavigationMenuTriggerPrimitive>
</template>

