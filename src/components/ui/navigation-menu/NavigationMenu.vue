<script setup lang="ts">
import type { NavigationMenuRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { NavigationMenuRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<NavigationMenuRootProps & { class?: HTMLAttributes['class'] }>(), {
  orientation: 'horizontal',
})

const delegatedProps = computed(() => {
  const { class: _class, ...rest } = props
  return rest
})
</script>

<template>
  <NavigationMenuRoot
    v-bind="delegatedProps"
    :class="cn('relative z-10 flex max-w-max items-center justify-center', props.class)"
  >
    <slot />
  </NavigationMenuRoot>
</template>

