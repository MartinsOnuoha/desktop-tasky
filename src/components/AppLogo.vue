<template>
  <img :width="width" src="../assets/logo.svg" alt="" srcset="">
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppLogo',
  props: {
    width: {
      type: String,
      default: '40',
    },
  },
});
</script>
