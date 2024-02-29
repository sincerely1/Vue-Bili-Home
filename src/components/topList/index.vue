<template>
  <div class="toplist">
    <header class="t-header">
      <span class="t-h-name">排行榜</span>
      <span class="more">
        <a href="">
          更多
          <i class="bilifont bili-icon_caozuo_xiangyou"></i>
        </a>
      </span>
    </header>
    <div v-for="(item, index) in props.mainData" :key="index" class="toplist-item">
      <span v-if="index>3" class="t-i-number">{{ index + 1 }}</span>
      <span v-else class="t-i-number2 bg-sky-500">{{ index + 1 }}</span>
      <a href="javajcript:;" @click="jumpPath(item.title)">
        <div class="t-i-tilte">
          <span>{{ item.title }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  mainData: {
    type: Array,
    default() {
      return []
    }
  }
})

// 点击跳转
const jumpPath = (keyword: string) => {
  console.log(keyword)
}
</script>

<style scoped>
.toplist {
  width: 100%;
  padding: 0 10px 0 20px;
}
.t-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
}
.t-h-name {
  font-size: 18px;
}
.more {
  padding:5px 4px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 12px;
  line-height: 14px;
}

.toplist-item {
  justify-content: space-around;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 10px;
}

.t-i-number {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5%;
  font-size: 14px;
  color: #999;
  text-align: center;
}
.t-i-number2 {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5%;
  font-size: 14px;
  color: white;
  text-align: center;
  border-radius: 2px;
}

.t-i-tilte {
  display: inline-block;
  width: 85%;
  font-size: 14px;
  /* 垂直对齐  父级要变*/
  vertical-align: middle;
}
.t-i-tilte span {
  /* 两行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #4d4d4d;
}
</style>
