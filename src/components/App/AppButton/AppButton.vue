<template>
  <button
    :class="`appButton appButton__${variant}`"
  >
    <slot>
      Button
    </slot>
  </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'dark'].includes(value),
    } as PropOptions<string>,
  },
});
</script>

<style lang="scss" src="./_appButton.scss"></style>
