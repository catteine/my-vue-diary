<template>
  <div class="list-wrapper">
    <div class="list-body">
      <template v-if="isLoaded">
        <ul v-if="listItems.length > 0">
          <li v-for="item in listItems" :key="item.key">
            <ListItem :thisItem="item" @selectItem="diaryView(item)" />
          </li>
        </ul>
        <div v-else class="list-none">목록 없음</div>
      </template>
      <template v-else>
        <span class="loader"></span>
      </template>
    </div>
    <BottomButtons>
      <button type="button" class="btn-write" @click="diaryWrite"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> 글쓰기</button>
    </BottomButtons>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
import BottomButtons from '../common/BottomButtons.vue';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'ListPage',
  components: {
    ListItem,
    BottomButtons,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    ...mapActions(['fetchList']),
    diaryView(el) {
      this.$router.push({
        name: 'view',
        params: el,
      });
    },
    diaryWrite() {
      this.$router.push('/write');
    },
    sortList(list) {
      return list.reverse();
    },
    async fetchAction() {
      await this.fetchList();
      this.isLoaded = true;
    },
  },
  computed: {
    // ...mapState('Diary', ['listItems']),
    ...mapState({
      listItems: state => state.Diary.listItems
    }),
  },
  mounted() {
    this.fetchAction();
  },
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  padding-bottom: 75px;
  .list-body {
    position: relative;
    padding-top: 1em;
    ul {
      display: flex;
      flex-direction: column-reverse;
      gap: 0.5em 0;
    }
    li {
      width: 100%;
      padding: 0 1em;
      box-sizing: border-box;
    }
  }
  .list-none {
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
  }
}
.loader {
  display: block;
  position: relative;
  width: 25%;
  background-image: conic-gradient($key-color 0, rgba(0,0,0,0) 60%);
  border-radius: 50%;
  aspect-ratio: 1/1;
  margin: 10em auto;
  animation: loader 0.5s linear infinite;
  &::after {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    background-color: #fff;
    content: '';
  }
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>