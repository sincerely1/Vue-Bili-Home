<template>
  <div class="w-[84vw] m-[0_7vw] min-w-[1170px] h-[17vw] min-h-[220px]">
    <div class="carousel-grid carousel">
      <!-- 轮播图 arrow="never" -->
      <el-carousel trigger="click" :autoplay="false">
        <el-carousel-item v-for="item in swiperList" :key="item.id">
          <div @click="jumpPath(item.title)" class="relative overflow-hidden w-full h-full">
            <img class=" object-cover inline-block w-full h-full" :src="item.pic" />
            <div
              class="z-10 inline-block w-1/2 absolute left-[15px] bottom-[10px] text-white text-base font-normal"
            >
              {{ item.title }}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

      <!-- 轮播图右边内容 -->
      <div class="r-data">
        <div
          v-for="item in swiperList_r"
          :key="item.id"
          @click="jumpPath(item.title)"
          class="relative rounded-md w-full h-full"
        >
          <img class=" object-cover w-full h-full block" :src="item.pic" />
          <div class="z-10 absolute left-0 bottom-0 w-full text-sm text-white p-1">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lunbo1 from '@/assets/image/lunbo1.avif'
import lunbo2 from '@/assets/image/lunbo2.avif'
import lunbo3 from '@/assets/image/lunbo3.avif'
import lunbo4 from '@/assets/image/lunbo4.avif'

import lunbo_r1 from '@/assets/image/lunbo_r1.avif'
import lunbo_r2 from '@/assets/image/lunbo_r2.avif'
import lunbo_r3 from '@/assets/image/lunbo_r3.avif'
import lunbo_r4 from '@/assets/image/lunbo_r4.avif'
import lunbo_r5 from '@/assets/image/lunbo_r5.avif'
import lunbo_r6 from '@/assets/image/lunbo_r6.avif'
import lunbo_r7 from '@/assets/image/lunbo_r7.avif'
import lunbo_r8 from '@/assets/image/lunbo_r8.avif'
const swiperList = [
  {
    id: 1,
    title: '凹凸世界特别篇',
    pic: lunbo1
  },
  {
    id: 2,
    title: '速来围观！',
    pic: lunbo2
  },
  {
    id: 3,
    title: '少年歌行，海外仙山篇',
    pic: lunbo3
  },
  {
    id: 4,
    title: '我的臀部可以翘到...',
    pic: lunbo4
  }
]
// 轮播图右边数据
const swiperList_r = [
  {
    id: 1,
    title: '凹凸世界特别篇',
    pic: lunbo_r1
  },
  {
    id: 2,
    title: '速来围观！',
    pic: lunbo_r2
  },
  {
    id: 3,
    title: '少年歌行，海外仙山篇',
    pic: lunbo_r3
  },
  {
    id: 4,
    title: '我的臀部可以翘到...',
    pic: lunbo_r4
  },
  {
    id: 5,
    title: '凹凸世界特别篇',
    pic: lunbo_r5
  },
  {
    id: 6,
    title: '速来围观！',
    pic: lunbo_r6
  },
  {
    id: 7,
    title: '少年歌行，海外仙山篇',
    pic: lunbo_r7
  },
  {
    id: 8,
    title: '我的臀部可以翘到...',
    pic: lunbo_r8
  }
]
const jumpPath = (title: string) => {
  console.log(title)
}
</script>

<style scoped>
.carousel {
  :deep(.el-carousel) {
    width: 550px;
    height: 241px;
    border-radius: 2px;
  }
  :deep(.el-carousel__container) {
    height: 241px;

  }
  :deep(.el-carousel__item) {
    /* position: relative; */
    height: 241px;
    width: 550px;
  }
}
.carousel-grid {
  display: grid;
  grid-template-columns: 550px 834px;
  grid-template-rows:241px 241px;
  justify-content: space-between;
  column-gap: 10px;
}
.r-data {
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-template-rows: 48% 48%;
  justify-content: space-between;
  align-content:space-between;
  grid-gap: 10px;
}
</style>
