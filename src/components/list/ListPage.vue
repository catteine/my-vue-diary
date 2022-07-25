<template>
  <div class="list-wrapper">
    <div class="list-body">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <ListItem :thisItem="item" @selectItem="diaryView(item)" />
        </li>
      </ul>
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
      this.$emit('setModeView', el);
    },
    diaryWrite() {
      this.$emit('setModeWrite', 'write');
    }
  },
  beforeMount() {
    this.list = JSON.parse(localStorage.getItem('diaryData')).reverse();
  },
  mounted() {

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
}
</style>