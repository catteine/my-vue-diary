<template>
  <div class="write-wrapper">
    <div class="write-body">
      <TopDateInfo :date="dateInfo" />
      <div class="write-input">
        <textarea v-model="diaryText" placeholder="내용을 입력하세요"></textarea>
      </div>
    </div>
    <BottomButtons>
      <button type="button" class="btn-cancel" @click="backToList">취소</button>
      <button type="button" class="btn-save" @click="saveItem">저장</button>
    </BottomButtons>
  </div>
</template>

<script>
import TopDateInfo from '../common/TopDateInfo.vue';
import BottomButtons from '../common/BottomButtons.vue';

export default {
  name: 'WritePage',
  components: {
    TopDateInfo,
    BottomButtons,
  },
  data() {
    return {
      diaryText: "",
      dateInfo: {},
    }
  },
  methods: {
    getToday() {
      const today = new Date(),
      arrayWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      let info = {
        date : today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate(),
        week : arrayWeek[today.getDay()],
        createTime : today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      };
      return info;
    },
    saveItem() {
      let list = JSON.parse(localStorage.getItem('diaryData')) || [];
      const thisData = {
        'date': this.dateInfo,
        'text': this.diaryText,
      }
      list.push(thisData);
      localStorage.setItem('diaryData', JSON.stringify(list));
      
      this.backToList();
    },
    backToList() {
      this.$emit('setModeList', 'list');
    },
  },
  mounted() {
    this.dateInfo = this.getToday();
  },
}
</script>

<style lang="scss" scoped>
@use '@/styles/theme/btns' as btns;

.write-wrapper {
  .write-body {
    .write-input {
      padding: 1em;
      textarea {
        width: 100%;
        height: 50vh;
        height: calc(100vh - $headerHeight - 77px - 75px - 100px);
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
        @include btns.btnStyle;
      }
    }
  }
}
</style>