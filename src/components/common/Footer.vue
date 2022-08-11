<template>
  <footer>
    <div class="btns-bottom">
      <button type="button" class="btn-write"
        v-if="(state!=='write')"
        @click="diaryWrite">글쓰기</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    state: String,
  },
  methods: {
    diaryWrite() {
      this.$emit('setModeWrite', 'write');
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/styles/theme/btns' as btns;

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
  z-index: $zIndex4;
  .btns-bottom {
    display: flex;
    justify-content: center;
    button {
      @include btns.btn-style;
    }
  }
}
</style>