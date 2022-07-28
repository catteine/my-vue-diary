<template>
  <div class="date-information">
    <div class="info">
      <span class="date">{{date.day}}</span>
      <span class="week">{{date.week}}</span>
    </div>
    <div class="time" v-if="date.createTime">{{date.createTime}}</div>
  </div>
</template>

<script>
export default {
  name: 'TopDateInfo',
  props: {
    date: Object,
  },
}
</script>

<style lang="scss" scoped>
.date-information {
  text-align: center;
  color: $keyColor;
  font-weight: 700;
  padding: 1em;
  .info {
    display: flex;
    justify-content: center;
    .week {
      margin-left: 0.5em;
    }
  }
  .time {
    font-size: 0.875em;
    font-weight: 400;
  }
}
</style>