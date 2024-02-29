<template>
  <div id="home">
    <el-header>
      <div class="absolute my-auto mx-0 z-0 bg-white bg-no-repeat bg-center bg-cover">
        <img class="min-h-[160px]" :src="headerBackground" alt="" />
      </div> 
      <navBar :hot-search="hotData"> </navBar>
    </el-header>
    <div class="home-main">
      <typeTabs /> 
       <carousel />
      <!-- 这里少了推荐部分和直播部分 -->
      <categoryData />
    </div>
  </div>
</template>

<script setup lang="ts">
import typeTabs from '@/components/typeTabs/index.vue'
import carousel from '@/components/carousel/index.vue'
import categoryData from '@/components/categoryData/index.vue'
import navBar from '@/components/navBar/index.vue'
import headerBackground from '@/assets/image/headerBackground.webp'
// 热搜数据
const hotData = [
  {
    pos: 1,
    keyword: '热搜1'
  },
  {
    pos: 2,
    keyword: '热搜2'
  },

  {
    pos: 3,
    keyword: '热搜3'
  },
  {
    pos: 4,
    keyword: '热搜4'
  },
  {
    pos: 5,
    keyword: '热搜5'
  }
]
</script>

<style scoped>
#home {
  :deep(.el-header) {
    position: relative;
    padding: 0px;
    height: 160px;
    min-height: 160px;
    min-width: 1300px;
  }
  
}
.home-main {
  margin-top: 10px;
  min-width: 1300px;
  padding: 0 !important;
}
</style>
