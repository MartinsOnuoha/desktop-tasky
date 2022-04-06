<template>
  <div id="app" class="app">
    <app-header />
    <div class="app__content">
      <app-tasks />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppTasks from '@/components/AppTasks/AppTasks.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppTasks,
  },
});
</script>

<style lang="scss">
#app {
  @apply h-screen;
}
.app {
  &__content {
    @apply pl-24 pr-24 pt-20;
  }
}
</style>
