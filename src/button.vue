<script lang="ts" setup>
const props = defineProps<{
  type: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'danger'
  size: 'large' | 'middle' | 'small'
  shape: 'default' | 'circle' | 'round'
  disabled: boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

</script>

<template>
  <button :class="['button', props.type, props.size, props.shape, { disabled: props.disabled }]" @click="emit('click', $event)">
    <slot />
  </button>
</template>
