import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';

import App from './App.vue'
import Desktop from "./layouts/Desktop.vue";
import Mobile from "./layouts/Mobile.vue";

Vue.component("desktop", Desktop);
Vue.component("mobile", Mobile);

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
