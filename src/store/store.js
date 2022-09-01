import Vue from 'vue';
import Vuex from 'vuex';

import Diary from './modules/Diary';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {
    Diary
  },

});