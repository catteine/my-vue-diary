<template>
  <header>
    <h1><font-awesome-icon icon="fa-solid fa-book" /> My Note</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  color: #fff;
  background-color: $key-color;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
  z-index: $zIndex4;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 6px;
    height: $header-height;
  }
}
</style>