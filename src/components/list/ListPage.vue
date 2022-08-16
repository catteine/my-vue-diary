<template>
  <div class="list-wrapper">
    <div class="list-body">
      <ul v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index">
          <ListItem :thisItem="item" @selectItem="diaryView(item)" />
        </li>
      </ul>
      <div v-else class="list-none">목록 없음</div>
    </div>
    <BottomButtons>
      <button type="button" class="btn-write" @click="diaryWrite">글쓰기</button>
    </BottomButtons>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
import BottomButtons from '../common/BottomButtons.vue';

export default {
  name: 'ListPage',
  components: {
    ListItem,
    BottomButtons,
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
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
    }
  },
  mounted() {
    // this.list = this.sortList(this.$store.state.listItems);
    this.list = this.$store.state.listItems;
    console.log(this.$store.state.listItems);
    // console.log(this.$store.getters.getListLength);
  },
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  padding-bottom: 75px;
  .list-body {
    position: relative;
    li {
      border: solid #ddd;
      border-width: 0 0 1px;
      padding: 0 1.5em;
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