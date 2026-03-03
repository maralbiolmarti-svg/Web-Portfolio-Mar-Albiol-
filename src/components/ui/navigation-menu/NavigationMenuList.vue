<script setup lang="ts">
import type { NavigationMenuListProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { NavigationMenuList as NavigationMenuListPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _class, ...rest } = props
  return rest
})
</script>

<template>
  <NavigationMenuListPrimitive
    v-bind="delegatedProps"
    :class="cn('flex list-none items-center gap-8 md:gap-12', props.class)"
  >
    <slot />
  </NavigationMenuListPrimitive>
</template>

