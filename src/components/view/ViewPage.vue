<template>
  <div class="view-wrapper">
    <div class="view-body">
      <TopDateInfo :date="viewItem.date" />
      <article>
        <div class="inner" v-html="replaceStringWithHTML(viewItem.text)"></div>
      </article>
    </div>
    <BottomButtons>
      <button type="button" class="btn-write" @click="backToList">목록으로</button>
    </BottomButtons>
  </div>
</template>

<script>
import TopDateInfo from '../common/TopDateInfo.vue';
import BottomButtons from '../common/BottomButtons.vue';

export default {
  name: 'ViewPage',
  components: {
    TopDateInfo,
    BottomButtons,
  },
  data() {
    return {
      viewItem: {},
    }
  },
  methods: {
    replaceStringWithHTML(dText) {
        var str = dText.split(' ').join('&nbsp;');
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        return str;
    },
    backToList() {
      this.$router.push('/list');
    },
  },
  beforeMount() {
    if (this.$route.params.text) {
      this.viewItem = this.$route.params;
    } else {
      this.$router.push('/list');
    }
  },
}
</script>

<style lang="scss" scoped>
.view-wrapper {
  .view-body {
    article {
      .inner {
        overflow: hidden;
        word-break: break-all;
        padding: 1em 2em 2em;
      }
    }
  }
}
</style>