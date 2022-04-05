<template>
  <div class="appHeader">
    <app-logo></app-logo>
    <div class="appHeader__nav">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="appHeader__nav-item link--io"
          >
            <a class="link link--carme" href="">
              <span>{{ item.name }}</span>
              <svg class="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9"><path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1"/></svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AppMenuItem } from '@/types/menu';
import AppLogo from '../AppLogo.vue';

export default Vue.extend({
  components: { AppLogo },
  name: 'AppHeader',
  computed: {
    menuItems(): AppMenuItem[] {
      return [
        { name: this.$t('header.nav.tasks'), key: this.$t('header.nav.tasks') },
        { name: this.$t('header.nav.projects'), key: this.$t('header.nav.projects') },
        { name: this.$t('header.nav.calendar'), key: this.$t('header.nav.calendar') },
      ];
    },
  },
});
</script>

<style lang="scss" src="./_appHeader.scss"></style>
