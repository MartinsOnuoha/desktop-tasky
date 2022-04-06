<template>
  <div class="appTasks">
    <div class="appTasks__header">
      <h1 class="appTasks__title">{{ $t('page.tasks.title') }}</h1>
      <app-button>{{ $t('page.tasks.addTask') }}</app-button>
    </div>
    <app-spacer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppButton from '@/components/App/AppButton/AppButton.vue';
import AppSpacer from '@/components/App/AppSpacer/AppSpacer.vue';

export default Vue.extend({
  components: { AppButton, AppSpacer },
  name: 'Tasks',
});
</script>

<style lang="scss" src="./_appTasks.scss"></style>
