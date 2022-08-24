import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// const storage = {
//   async fetch() {
//     let arr = [],
//         data = [];
//     // const data = JSON.parse(localStorage.getItem('diaryData'));

//     await axios.get('https://diary-a6651.firebaseio.com/MyDiary/tTVdZHohbLfHqXy4xn1Mp8TRYM22.json')
//     .then(function(response) {
//       data = Object.values(response.data);

//       if (data.length > 0) {
//         arr = data;
//       }

//       console.log(arr);
  
//       return arr;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   },
// };

export const store = new Vuex.Store({
  state: {
    listItems: []
  },
  mutations: {
    addItem(state, item) {
      state.listItems.push(item);
    },
    setList(state, fetchedData) {
      state.listItems = fetchedData;
    },
  },
  getters: {
    getListLength(state) {
      return state.listItems.length;
    },
    reverseOrder(state) {
      return state.listItems.reverse();
    }
  },
  actions : {
    async fetchList(context) {
      try {
        const response = await axios.get('https://diary-a6651.firebaseio.com/MyDiary/data.json');
        // const result = Object.values(response.data).reverse();
        const result = Object.values(response.data);
        context.commit('setList', result);
      } catch (err) {
        console.log(err);
      }
    },
    async saveItem(context, item) {
      try {
        await axios.post('https://diary-a6651.firebaseio.com/MyDiary/data.json', item);
        context.commit('addItem', item);
      } catch (err) {
        console.log(err);
      }
    },
  }
});