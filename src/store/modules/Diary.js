import axios from 'axios';

const state = {
  listItems: [],
};

const getters = {
  getList(state) {
    return state.listItems;
  },
  getListLength(state) {
    return state.listItems.length;
  },
};

const mutations = {
  addItem(state, item) {
    state.listItems.push(item);
  },
  updateItem(state, itemObj) {
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
  removeItem(state, itemObj) {
    state.listItems = state.listItems.filter(el => el.key != itemObj.key);
  },
  setList(state, fetchedData) {
    state.listItems = fetchedData;
  },
};

const actions = {
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
  async removeItem (context, itemObj) {
    try {
      await axios.delete(`https://diary-a6651.firebaseio.com/MyDiary/data/${itemObj.key}.json`);
      context.commit('removeItem', itemObj);
    } catch (err) {
      console.log(err);
    }
  },
};

export default { state, mutations, getters, actions };