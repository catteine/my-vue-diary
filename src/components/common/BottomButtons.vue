<template>
  <div class="bottom-buttons">
    <div class="inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomButtons',
}
</script>

<style lang="scss" scoped>
@use '@/styles/themes/btns' as btns;

.bottom-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  // background-color: #fff;
  background-image: linear-gradient(to top, #fff 70%, rgba(255,255,255,0) 100%);
  padding: 1em;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
  box-sizing: border-box;
  z-index: $zIndex4;
  .inner {
    display: flex;
    justify-content: center;
    button {
      @include btns.btn-style;
    }
  }
}
</style>