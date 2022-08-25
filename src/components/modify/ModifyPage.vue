<template>
  <div class="write-wrapper">
    <div class="write-body">
      <TopDateInfo :date="targetItem.time" />
      <div class="write-input">
        <textarea v-model="targetItem.text" placeholder="내용을 입력하세요"></textarea>
      </div>
    </div>
    <BottomButtons>
      <button type="button" class="btn-cancel" @click="backToList">취소</button>
      <button type="button" class="btn-save" @click="saveAction">저장</button>
    </BottomButtons>
  </div>
</template>

<script>
import TopDateInfo from '../common/TopDateInfo.vue';
import BottomButtons from '../common/BottomButtons.vue';

import { mapActions } from 'vuex';

export default {
  name: 'ModifyPage',
  components: {
    TopDateInfo,
    BottomButtons,
  },
  data() {
    return {
      targetItem: {},
    }
  },
  methods: {
    ...mapActions(['modifyItem']),
    async saveAction() {
      const item = {
        index: this.targetItem.index,
        time: this.targetItem.time,
        text: this.targetItem.text,
      };
      await this.modifyItem({
        key: this.targetItem.key,
        item
      });
      this.backToList();
    },
    backToList() {
      this.$router.push('/list');
    },
  },
  beforeMount() {
    if (this.$route.params.text) {
      this.targetItem = this.$route.params;
    }
  },
  mounted() {
    // this.itemIndex = this.$store.getters.getListLength;
    // this.itemDate = this.getToday();
  },
}
</script>

<style lang="scss" scoped>
@use '@/styles/themes/btns' as btns;

.write-wrapper {
  .write-body {
    .write-input {
      padding: 1em;
      textarea {
        width: 100%;
        height: 50vh;
        height: calc(100vh - $header-height - 77px - 75px - 100px);
        height: 50vh;
        border: 1px solid #ddd;
        padding: 1em calc(1em - 1px);
        resize: none;
        box-sizing: border-box;
        vertical-align: top;
      }
    }
    .module-btns {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      button {
        @include btns.btn-style;
      }
    }
  }
}
</style>