<template>
  <div id="app">

    <Header />

    <main>

      <WritePage v-if="pageMode === 'write'" @setModeList="setPageMode" />

      <ListPage v-if="pageMode === 'list'" @setModeView="setPageMode" @setModeWrite="setPageMode" />

      <ViewPage v-if="pageMode === 'view'" :viewItem="selectedItem" @setModeList="setPageMode" />

    </main>

  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import WritePage from '@/components/write/WritePage.vue';
import ListPage from "@/components/list/ListPage.vue";
import ViewPage from '@/components/view/ViewPage.vue';

export default {
  name: 'App',
  components: {
    Header,
    WritePage,
    ListPage,
    ViewPage,
  },
  data() {
    return {
      pageMode: "list",
      selectedItem: {},
    }
  },
  methods: {
    setPageMode(mode) {
      if (typeof mode !== 'string') {
        this.pageMode = 'view';
        this.selectedItem = mode;
      } else {
        this.pageMode = mode;
      }
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss">
#app {
  font-size: 16px;
  line-height: 1.5;

  main {
    padding-top: $headerHeight;
  }
}
</style>
