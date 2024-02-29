<template>
  <div class="w-[84vw] m-[0_7vw] min-w-[1170px] flex justify-between items-center h-20 px-5">
    <div class="w-50 flex">
      <div
        class="w-[50px] h-[68px] text-center text-[14px]"
        v-for="item in tabsLeftList"
        :key="item.id"
      >
        <a href="#">
          <div class="mt-1 flex flex-col items-center justify-center">
            <div class="inline-block w-9 h-9 leading-9 rounded-3xl">
              <i class="bilifont text-white" :class="item.class" :style="item"></i>
            </div>
            <span>{{ item.name }}</span>
          </div>
        </a>
      </div>
    </div>
    <div class="flex-1 flex flex-wrap text-left border-x-[1px] text-[#212121] px-3 ">
      <span v-for="(item, i) in tabsList" :key="i" class="w-[12.5%] text-[14px] mt-[5px] self-start">
        <a href="#">
          <div class="mr-[2px] inline-block hover:text-[#7dd3fc]">{{ item.text }}</div>
          <div class=" bg-sky-300 text-white w-[36px] text-center inline-block text-[10px]">{{more999(item.count)}}</div>
        </a>
      </span>
      <a href="#">
        <div class="mr-[2px] inline-block text-[14px] hover:text-[#7dd3fc]">更多<i class=" bilifont bili-icon_caozuo_xiangyou-copy"></i></div>
      </a>
    </div>
    <div class="ml-2 w-[216px] flex flex-wrap pl-0 justify-center">
        <div class="text-[14px] mr-[6px] mt-[5px]" v-for="(item, i) in tabsRightList" :key="i">
          <a href="#">
            <svg-icon class="px-1" :name="item.symbol_id" size="24px"></svg-icon>
            <span >{{ item.name }}</span>
          </a>
        </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
const tabsLeftList = reactive([
  { id: 1, name: '首页', background: '#ff5c7c', class: 'bili-icon_fenqudaohang_shouye' },
  {
    id: 2,
    name: '动态',
    background: '#fcba2a',
    class: 'bili-icon_dingdao_dongtai'
  },
  { id: 3, name: '热门', background: '#ff716d', class: 'bili-remen' },
  {
    id: 4,
    name: '频道',
    background: '#6dc781',
    class: 'bili-pindao'
  }
])
const tabsList = [{
  id:1,
  text:'动画',
  count:1000,
},
{
  id:2,
  text:'音乐',
  count:1000,
},
{
  id:3,
  text:'舞蹈',
  count:1000,
},
{
  id:4,
  text:'知识',
  count:1000,
},
{
  id:5,
  text:'生活',
  count:1000,
},
{
  id:6,
  text:'时尚',
  count:1000,
},
{
  id:7,
  text:'娱乐',
  count:1000,
},
{
  id:8,
  text:'放映厅',
  count:1000,
},
{
  id:9,
  text:'番剧',
  count:43,
},
{
  id:10,
  text:'国创',
  count:1000,
},
{
  id:11,
  text:'游戏',
  count:1000,
},
{
  id:12,
  text:'科技',
  count:1000,
},
{
  id:13,
  text:'鬼畜',
  count:428,
},
{
  id:14,
  text:'资讯',
  count:317,
},
{
  id:15,
  text:'影视',
  count:1000,
},
]
const tabsRightList = [
  { name: '专栏', color: '#54e2e2', symbol_id: 'zhuanlan' },
  { name: '活动', color: '#f39800', symbol_id: 'activity' },
  { name: '社区中心', color: '#ffd043', symbol_id: 'shequ' },
  { name: '直播', color: '#23ade5', symbol_id: 'live' },
  { name: '课堂', color: '#ffea85', symbol_id: 'lesson' },
  { name: '新歌热榜', color: '#3da9d3', symbol_id: 'song' }
]
const more999=(num:number):string=>{
  if(num>999){
    return '999+'
  }else{
    return num.toString();
  }
}
</script>

<style scoped>
.bilifont {
  font-family: bilifont !important;
  font-size: 36px;
  font-style: normal;
  border-radius: 36px;
}

</style>
