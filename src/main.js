import Vue from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GTAG_TRACKING_ID },
}, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
