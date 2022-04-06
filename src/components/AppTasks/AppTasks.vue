<template>
  <div class="appTasks">
    <div class="appTasks__header">
      <h1 class="appTasks__title">{{ $t('page.tasks.title') }}</h1>
      <app-btn>{{ $t('page.tasks.addTask') }}</app-btn>
    </div>
    <app-spacer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: { },
  name: 'Tasks',
});
</script>

<style lang="scss" src="./_appTasks.scss"></style>
