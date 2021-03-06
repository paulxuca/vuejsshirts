import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import Vuex from 'vuex';


import designer from './modules/designer';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    designer,
  },
});
