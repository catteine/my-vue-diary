<template>
  <div class="view-wrapper">
    <div class="view-body">
      <TopDateInfo :date="dateInfo" />
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
  props: {
    viewItem: Object,
  },
  data() {
    return {
      dateInfo: {},
    }
  },
  methods: {
    replaceStringWithHTML(dText) {
        var str = dText.split(' ').join('&nbsp;');
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        return str;
    },
    backToList() {
      this.$emit('setModeList', 'list');
    },
  },
  beforeMount() {
    this.dateInfo = this.viewItem.date;
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