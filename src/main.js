import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import i18n from './i18n'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');
