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
    saveItem(state, item) {
      let list = JSON.parse(localStorage.getItem('diaryData')) || [];
      list.push(item);
      localStorage.setItem('diaryData', JSON.stringify(list));
      // state.listItems = storage.fetch();
    },
    setList(state, fetchedData) {
      state.listItems = fetchedData;
    } 
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
    fetchList(context) {
      return axios.get('https://diary-a6651.firebaseio.com/MyDiary/tTVdZHohbLfHqXy4xn1Mp8TRYM22.json')
                  .then(response => {
                    const result = Object.values(response.data).reverse();
                  context.commit('setList', result);
      });
    }
  }
});