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
    updateItem(state, itemObj) {
      console.log('up');
      state.listItems = state.listItems.map(el => {
        if (el.key === itemObj.key) {
          const obj = {
            key: el.key,
            ...itemObj.item
          };
          return obj;
        } else {
          return el;
        }
      });
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
        // const result = Object.values(response.data);
        const result = Object.entries(response.data).map(el => {
          const obj  = {
            key: el[0],
            ...el[1]
          };
          return obj;
        });
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
    async modifyItem (context, itemObj) {
      try {
        await axios.patch(`https://diary-a6651.firebaseio.com/MyDiary/data/${itemObj.key}.json`, itemObj.item);
        context.commit('updateItem', itemObj);
      } catch (err) {
        console.log(err);
      }
    },
  }
});