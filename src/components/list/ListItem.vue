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
      let result = dateObj.date.split('.');
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
  position: relative;
  display: flex;
  // line-height: 4em;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 1em;
  padding: 1em;
  .date {
    flex-shrink: 0;
    font-size: 0.875em;
    font-weight: 700;
  }
  .text {
    width: calc(100%  - 80px);
    opacity: 0.8;
    @include text-ellipsis;
  }
  button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom :0;
    text-align: right;
    opacity: 0;
  }
}
</style>