<template>
  <div class="appHeader">
    <app-logo></app-logo>
    <div class="appHeader__nav">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="appHeader__nav-item"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LocaleMessage } from 'vue-i18n';
import AppLogo from '../AppLogo.vue';

interface MenuItem {
  name: LocaleMessage,
  key?: string | LocaleMessage
}

export default Vue.extend({
  components: { AppLogo },
  name: 'AppHeader',
  computed: {
    menuItems(): MenuItem[] {
      return [
        { name: this.$t('header.nav.tasks'), key: this.$t('header.nav.tasks') },
        { name: this.$t('header.nav.projects'), key: this.$t('header.nav.projects') },
        { name: this.$t('header.nav.calendar'), key: this.$t('header.nav.calendar') },
      ];
    },
  },
});
</script>

<style lang="scss">
@import '_appHeader.scss';
</style>
