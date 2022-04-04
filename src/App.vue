<template>
  <div id="app">
    <app-logo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppLogo from '@/components/AppLogo.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppLogo,
  },
});
</script>
