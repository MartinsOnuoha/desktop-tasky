import Vue from 'vue';
import AppSpacer from '@/components/App/AppSpacer/AppSpacer.vue';
import AppBtn from '@/components/App/AppButton/AppButton.vue';

import App from './App.vue';
import store from './store';
import '@/styles/tailwind.scss';
import '@/styles/links.scss';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.component('app-spacer', AppSpacer);
Vue.component('app-btn', AppBtn);

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
