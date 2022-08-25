<template>
  <div class="list-wrapper">
    <div class="list-body">
      <ul v-if="listItems.length > 0">
        <li v-for="item in listItems" :key="item.key">
          <ListItem :thisItem="item" @selectItem="diaryView(item)" />
        </li>
      </ul>
      <div v-else class="list-none">목록 없음</div>
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
  },
  computed: {
    ...mapState(['listItems']),
  },
  mounted() {
    this.fetchList();
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
</style>