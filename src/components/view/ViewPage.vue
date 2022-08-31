<template>
  <div class="view-wrapper">
    <div class="view-body">
      <TopDateInfo :date="viewItem.time" />
      <article>
        <div class="inner" v-html="replaceStringWithHTML(viewItem.text)"></div>
      </article>
    </div>
    <BottomButtons>
      <button type="button" class="btn-delete" @click="removeAction(viewItem)">삭제</button>
      <button type="button" class="btn-write" @click="backToList">목록으로</button>
      <button type="button" class="btn-modify" @click="diaryModify(viewItem)">수정</button>
    </BottomButtons>
  </div>
</template>

<script>
import TopDateInfo from '../common/TopDateInfo.vue';
import BottomButtons from '../common/BottomButtons.vue';

import { mapActions } from 'vuex';

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
    ...mapActions(['removeItem']),
    replaceStringWithHTML(dText) {
        var str = dText.split(' ').join('&nbsp;');
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        return str;
    },
    backToList() {
      this.$router.push('/list');
    },
    diaryModify(el) {
      this.$router.push({
        name: 'modify',
        params: el,
      });
    },
    async removeAction(el) {
      if (confirm("삭제하시겠습니까?")) {
        await this.removeItem(el);
        this.backToList();
      }
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