<template>
  <header>
    <h1>My Diary</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  background-color: $key-color;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
  z-index: $zIndex4;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $header-height;
  }
}
</style>