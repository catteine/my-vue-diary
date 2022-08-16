<template>
  <div class="list-item">
    <span class="date">{{getSimpleDate(item.time)}}</span>
    <div class="text" v-html="item.text"></div>
    <button type="button" @click="itemView">읽기</button>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    thisItem: Object,
  },
  data() {
    return {
      item: this.thisItem,
    }
  },
  methods: {
    getSimpleDate(dateObj) {
      let result = dateObj.date.split('-');
      result = result[1] + "." + result[2] + " " + dateObj.week;
      return result;
    },
    itemView() {
      this.$emit('selectItem');
    }
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  line-height: 3.5em;
  align-items: center;
  .date {
    flex-shrink: 0;
    width: 80px;
    font-size: 0.875em;
    font-weight: 700;
  }
  .text {
    width: calc(100%  - 80px - 50px - 20px);
    opacity: 0.8;
    @include text-ellipsis;
  }
  button {
    flex-shrink: 0;
    width: 50px;
    height: 2.5em;
    color: #fff;
    font-size: 0.875em;
    border-radius: 1em;
    background-color: rgba($key-color, 0.7);
    margin-left: 20px;
  }
}
</style>