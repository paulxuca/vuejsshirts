import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import store from './store';
import Designer from './pages/Designer/Designer';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/designer',
    component: Designer,
  }],
});


/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App />',
  components: { App },
  el: '#app',
});
