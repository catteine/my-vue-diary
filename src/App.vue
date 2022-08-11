<template>
  <div id="app">

    <Header />

    <main>

      <router-view />

    </main>

  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
#app {
  font-size: 16px;
  line-height: 1.5;

  main {
    padding-top: $header-height;
  }
}
</style>
