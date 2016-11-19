import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Designer from './pages/Designer';

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
  template: '<App />',
  components: { App },
  el: '#app',
});
