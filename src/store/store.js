import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    let arr = [];
    const data = JSON.parse(localStorage.getItem('diaryData'));
    if (data) {
      arr = data;
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    listItems: storage.fetch(),
  },
  mutations: {
    saveItem(state, item) {
      let list = JSON.parse(localStorage.getItem('diaryData')) || [];
      list.push(item);
      localStorage.setItem('diaryData', JSON.stringify(list));
      state.listItems = storage.fetch();
    },
  },
  getters: {

  },
});