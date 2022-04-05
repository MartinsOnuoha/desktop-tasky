<template>
  <div id="app">
    <app-header />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/components/AppHeader/AppHeader.vue';
// import AppLogo from '@/components/AppLogo.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    // AppLogo,
  },
});
</script>

<style lang="scss">
#app {
  @apply h-screen;
}
</style>
