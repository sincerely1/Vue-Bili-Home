<template>
  <div class="absolute top-0 z-1 w-full min-w-[1300px] h-[56px] flex justify-between">
    <div class="w-[454px] h-full p-4 flex justify-around items-center">
      <div class="cursor-pointer text-[14px] text-white">
        <a href="#/home">
          <i class="bilifont bili-icon_dingdao_zhuzhan"></i>
          主站
        </a>
      </div>
      <div class="cursor-pointer text-[14px] text-white">番剧</div>
      <div class="cursor-pointer text-[14px] text-white">
        <client-only>
          <el-popover
            placement="bottom-start"
            trigger="hover"
            width="450px"
            popper-style="padding-bottom:0px"
          >
            <div class="w-full flex justify-around">
              <div class="w-[60%]">
                <div class="w-full rounded overflow-hidden p-0 relative">
                  <a :href="gameData[0].url" target="_blank">
                    <img :src="gameData[0].picture" alt="" />
                    <span class="relative bottom-1 left-[10%] text-white z-[2]">
                      {{ gameData[0].name }}
                    </span>
                  </a>
                </div>
                <div class="w-full flex">
                  <div
                    v-for="index in 3"
                    :key="index"
                    class="flex-1 mt-[10px] overflow-hidden relative pt-[5px] pl-[5px] pr-[5px] pb-[5px]"
                  >
                    <a :href="gameData[index].url" target="_blank">
                      <img :src="gameData[index].picture" alt="" class="rounded-2xl" />
                      <span class="text-ellipsis">
                        {{ gameData[index].name }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-[35%] shadow-[-1px_0px_0px_#abaaaa] mb-3">
                <div class="pl-5 text-bili-pink font-bold">新游预告</div>
                <div class="pl-5 block decoration-[#555] w-full text-sm hover:bg-[#e5e9ef]">
                  漫威超级战争
                </div>
                <div class="pl-5 block decoration-[#555] w-full text-sm hover:bg-[#e5e9ef]">
                  代号：弥弥尔
                </div>
                <div class="pl-5 block decoration-[#555] w-full text-sm hover:bg-[#e5e9ef]">
                  LOL全球总决赛
                </div>
                <div class="pl-5 block decoration-[#555] w-full text-sm hover:bg-[#e5e9ef]">
                  NBA决赛让3追4
                </div>
                <div class="pl-5 block decoration-[#555] w-full text-sm hover:bg-[#e5e9ef]">
                  数码宝贝：新纪元
                </div>
                <div class="pl-5 block decoration-[#555] w-full text-sm hover:bg-[#e5e9ef]">
                  我的世界66
                </div>
              </div>
            </div>
            <template v-slot:reference>
              <a>游戏中心</a>
            </template>
          </el-popover></client-only
        >
      </div>
      <div class="cursor-pointer text-[14px] text-white">
        <client-only>
          <el-popover placement="bottom-start" trigger="hover" width="500">
            <div class="w-full flex content-center">
              <div class="w-[55%]">
                <div class="text-base font-bold">热门直播：</div>
                <div class="flex flex-wrap content-between">
                  <span v-for="zhubo in zhuboData" :key="zhubo.name" class="n-z-l-item">
                    <a :href="zhubo.url">
                      <img :src="zhubo.picture" />
                      <div>{{ zhubo.name }}</div>
                    </a>
                  </span>
                </div>
              </div>
              <el-divider style="height: 200px" direction="vertical"></el-divider>
              <div class="w-2/5">
                <div class="font-bold text-bili-pink text-base">热门活动：</div>
                <img
                  class="w-full mt-5"
                  v-for="hotActivity in hotActData"
                  :key="hotActivity.name"
                  :src="hotActivity.picture"
                  alt=""
                  :href="hotActivity.url"
                />
              </div>
            </div>
            <template v-slot:reference>
              <a>直播</a>
            </template>
          </el-popover></client-only
        >
      </div>
      <div class="cursor-pointer text-[14px] text-white">会员购</div>
      <div class="cursor-pointer text-[14px] text-white">
        <client-only>
          <el-popover
            placement="bottom-start"
            :show-arrow="False"
            width="450"
            trigger="hover"
            content="漫画"
          >
            <div class="flex w-full">
              <div class="w-3/5 flex flex-col">
                <div class="flex">
                  <div class="p-2 hover:bg-slate-300">
                    <a :href="comicData[0].url">
                      <img :src="comicData[0].picture" alt="" />
                      <div class="text-ellipsis">{{ comicData[0].name }}</div>
                    </a>
                  </div>
                  <div class="p-2 hover:bg-slate-300">
                    <a :href="comicData[1].url">
                      <img :src="comicData[1].picture" alt="" />
                      <div class="text-ellipsis">{{ comicData[1].name }}</div>
                    </a>
                  </div>
                </div>
                <div class="flex">
                  <div class="p-2 hover:bg-slate-300">
                    <a :href="comicData[2].url">
                      <img :src="comicData[2].picture" alt="" />
                      <div class="text-ellipsis">{{ comicData[2].name }}</div>
                    </a>
                  </div>
                  <div class="p-2 hover:bg-slate-300">
                    <a :href="comicData[3].url">
                      <img :src="comicData[3].picture" alt="" />
                      <div class="text-ellipsis">{{ comicData[3].name }}</div>
                    </a>
                  </div>
                </div>
              </div>
              <el-divider style="height: 180px" class="p-2" direction="vertical"></el-divider>
              <div class="n-m-right">
                <div class="text-lg text-zinc-700 pb-2">人气漫画</div>
                <div>
                  <a> 1.碧蓝之海 </a>
                </div>
              </div>
            </div>
            <template v-slot:reference>
              <a>漫画</a>
            </template>
          </el-popover></client-only
        >
      </div>
      <div class="cursor-pointer text-[14px] text-white">赛事</div>
      <div class="cursor-pointer text-[14px] text-white">
        <client-only>
          <el-popover placement="bottom-start" trigger="hover" width="400px">
            <div class="flex w-full">
              <div class="flex flex-col items-center w-1/2">
                <div class="text-black font-bold">
                  <svg-icon name="phone" size="18px"></svg-icon>手机版
                </div>
                <div class="text-xs">扫描下载手机APP</div>
                <img :src="download1" alt="二维码" class="p-2" />
              </div>
              <el-divider style="height: 150px" direction="vertical"></el-divider>
              <div class="flex flex-col items-center w-1/2">
                <div class="text-black font-bold">
                  <svg-icon name="phone" size="18px"></svg-icon>Window端
                </div>
                <div class="text-xs">适合WIN系统设备</div>
                <img :src="winLogo" alt="logo" class="w-1/2 p-2" />
                <el-button type="primary"> 立即下载 </el-button>
              </div>
            </div>
            <div class="text-xs text-center pt-2">
              <a href="">点击查看更多下载内容></a>
            </div>
            <template v-slot:reference>
              <a>
                <svg-icon name="download" size="18px"></svg-icon>
                <span class="pt-1">下载客户端</span>
              </a>
            </template>
          </el-popover>
        </client-only>
      </div>
    </div>

    <div class="m-[0_30px] w-[30%] flex">
      <div v-show="searchVisible" class="flex justify-around items-center w-full">
        <client-only>
          <el-autocomplete
            style="width: 100%"
            v-model="searchData"
            :fetch-suggestions="querySearch"
            :placeholder="searchDefaults"
            @select="handleSelect"
          >
            <template #default="{ item }">
              <div class="hot_search">
                <span class="inline-block w-6 h-6 text-center text-xs text-[#555]">{{
                  item.pos
                }}</span>
                <span class="text-xs inline-block text-[#555] m-[0_8px]">{{ item.keyword }}</span>
                <span class="inline-block"> </span>
              </div>
            </template>
            <template #append>
              <el-button :icon="Search"></el-button>
            </template>
          </el-autocomplete>
        </client-only>
      </div>
    </div>

    <div class="w-[454px] h-full p-4 flex justify-around items-center">
      <div class="cursor-pointer text-sm text-white relative">
        <el-avatar
          src="https://i.postimg.cc/W4HtgfS7/Koume-Keito-Illustrations-Spice-and-Wolf-The-tenth-year-calvados-010.jpg"
        ></el-avatar>
      </div>
      <div class="cursor-pointer text-sm text-white">
        <client-only>
          <el-popover placement="bottom" trigger="hover" width="250px">
            <div class="w-full">
              <div class="text-base font-bold text-black">精彩推荐</div>
              <div class="mt-2 mb-2">
                <img :src="dahuiyuan" alt="" />
              </div>
              <p class="text-xs">大会员可畅享各种专属内容，还有游戏礼包、个性装扮等你来拿~</p>
              <div class="text-center mt-2">
                <el-button type="primary" size="small">开通大会员</el-button>
              </div>
            </div>
            <template v-slot:reference>
              <a>大会员</a>
            </template>
          </el-popover>
        </client-only>
      </div>
      <div class="cursor-pointer text-sm text-white">
        <client-only>
          <el-popover
            placement="bottom"
            trigger="hover"
            width="120px"
            popper-style="padding:12px 0px"
          >
            <div class="w-full text-base text-black">
              <ul>
                <li class="cursor-pointer block mb-2 pl-3 hover:bg-slate-200">
                  <a href=""> <span>回复我的</span></a>
                </li>
                <li class="cursor-pointer block mb-2 pl-3 hover:bg-slate-200">
                  <a href=""> <span>@我的</span></a>
                </li>
                <li class="cursor-pointer block mb-2 pl-3 hover:bg-slate-200">
                  <a href=""> <span>收到的赞</span></a>
                </li>
                <li class="cursor-pointer block mb-2 pl-3 hover:bg-slate-200">
                  <a href=""><span>系统通知</span></a>
                </li>
                <li class="cursor-pointer block mb-2 pl-3 hover:bg-slate-200">
                  <a href=""><span>我的消息</span></a>
                </li>
              </ul>
            </div>
            <template v-slot:reference>
              <a>消息</a>
            </template>
          </el-popover>
        </client-only>
      </div>
      <div class="cursor-pointer text-sm text-white">
        <client-only>
          <el-popover placement="bottom" width="300px" trigger="hover">
            <el-tabs class="dongtai-tabs" @tab-click="handleClickDongTaiTabs">
              <el-tab-pane name="video">
                视频动态
                <template #label>
                  <div class="text-xs">
                    <div
                      v-if="selectDongtai == 'video'"
                      class="text-white bg-sky-400 p-1 rounded-full"
                    >
                      视频动态
                    </div>
                    <div v-else>视频</div>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane name="live">
                直播动态
                <template #label>
                  <div class="text-xs">
                    <div
                      v-if="selectDongtai == 'live'"
                      class="text-white bg-sky-400 p-1 rounded-full"
                    >
                      直播动态
                    </div>
                    <div v-else>直播</div>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane name="text">
                专栏动态
                <template #label>
                  <div class="text-xs">
                    <div
                      v-if="selectDongtai == 'text'"
                      class="text-white bg-sky-400 p-1 rounded-full"
                    >
                      专栏动态
                    </div>
                    <div v-else>专栏</div>
                  </div>
                </template>
              </el-tab-pane>
            </el-tabs>
            <template v-slot:reference>
              <a>动态</a>
            </template>
          </el-popover>
        </client-only>
      </div>
      <div class="cursor-pointer text-sm text-white">
        <client-only>
          <el-popover
            placement="bottom"
            width="400"
            trigger="hover"
            popper-style="padding-left:0px"
          >
            <el-tabs
              tab-position="left"
              class="collection-tabs"
              @tab-click="handleClickSelectColloectionTabs"
            >
              <el-tab-pane name="default">
                <el-card> 默认收藏夹内容 </el-card>
                <template #label>
                  <div class="text-xs w-20">
                    <div v-if="selectCollection == 'default'" class="text-white bg-sky-300 p-2">
                      默认收藏夹
                    </div>

                    <div class="p-2" v-else>默认收藏夹</div>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane name="later">
                <el-card> 稍后观看内容 </el-card>
                <template #label>
                  <div class="text-xs w-20">
                    <div v-if="selectCollection == 'later'" class="text-white bg-sky-300 p-2">
                      稍后观看
                    </div>
                    <div v-else class="p-2">稍后观看</div>
                  </div>
                </template>
              </el-tab-pane>
            </el-tabs>
            <template v-slot:reference>
              <a>收藏</a>
            </template>
          </el-popover>
        </client-only>
      </div>
      <div class="cursor-pointer text-sm text-white">
        <client-only>
          <el-popover placement="bottom" width="350" trigger="hover">
            <el-tabs class="history-tabs" @tab-click="handleClickHistoryTabs">
              <el-tab-pane name="video">
                <el-card> 视频历史 </el-card>
                <template #label>
                  <div class="text-xs">
                    <div
                      v-if="selectHistory == 'video'"
                      class="text-white bg-sky-400 p-1 rounded-full"
                    >
                      视频动态
                    </div>
                    <div v-else>视频</div>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane name="live">
                <el-card> 直播历史 </el-card>
                <template #label>
                  <div class="text-xs">
                    <div
                      v-if="selectHistory == 'live'"
                      class="text-white bg-sky-400 p-1 rounded-full"
                    >
                      直播历史
                    </div>
                    <div v-else>直播</div>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane name="text">
                <el-card> 专栏历史 </el-card>
                <template #label>
                  <div class="text-xs">
                    <div
                      v-if="selectHistory == 'text'"
                      class="text-white bg-sky-400 p-1 rounded-full"
                    >
                      专栏历史
                    </div>
                    <div v-else>专栏</div>
                  </div>
                </template>
              </el-tab-pane>
            </el-tabs>
            <template v-slot:reference>
              <a>历史</a>
            </template>
          </el-popover>
        </client-only>
      </div>
      <div class="cursor-pointer text-sm text-white">创作中心</div>
      <div class="cursor-pointer text-sm text-white upload">
        <el-button color="#ec81a7" style="color=white">投稿</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import ClientOnly from '@duannx/vue-client-only'
import game1 from '@/assets/image/game1.png'
import game2 from '@/assets/image/game2.png'
import game3 from '@/assets/image/game3.png'
import game4 from '@/assets/image/game4.png'

import zhubo1 from '@/assets/image/zhubo1.png'
import zhubo2 from '@/assets/image/zhubo2.png'
import zhubo3 from '@/assets/image/zhubo3.png'
import zhubo4 from '@/assets/image/zhubo4.png'
import zhubo5 from '@/assets/image/zhubo5.png'
import zhubo6 from '@/assets/image/zhubo6.png'

import hotact1 from '@/assets/image/hot1.png'
import hotact2 from '@/assets/image/hot2.png'

import manhua1 from '@/assets/image/manhua1.png'
import manhua2 from '@/assets/image/manhua2.png'
import manhua3 from '@/assets/image/manhua3.png'
import manhua4 from '@/assets/image/manhua4.png'

import download1 from '@/assets/image/2weima.png'
import winLogo from '@/assets/image/winLogo.png'
import dahuiyuan from '@/assets/image/dahuiyuan.webp'
import type { TabsPaneContext } from 'element-plus'
const False = ref(false)
const gameData = reactive([
  {
    name: '命运-冠位指定',
    url: '',
    picture: game1
  },
  {
    name: '命运-冠位指定',
    url: '',
    picture: game2
  },
  {
    name: '公主链接',
    url: '',
    picture: game3
  },
  {
    name: '碧蓝航线',
    url: '',
    picture: game4
  }
])
const zhuboData = reactive([
  {
    name: '主播1',
    url: '',
    picture: zhubo1
  },
  {
    name: '主播2',
    url: '',
    picture: zhubo2
  },
  {
    name: '主播3',
    url: '',
    picture: zhubo3
  },
  {
    name: '主播4',
    url: '',
    picture: zhubo4
  },
  {
    name: '主播5',
    url: '',
    picture: zhubo5
  },
  {
    name: '主播6',
    url: '',
    picture: zhubo6
  }
])
const hotActData = reactive([
  {
    name: '活动1',
    picture: hotact1,
    url: ''
  },
  {
    name: '活动2',
    picture: hotact2,
    url: ''
  }
])
const comicData = reactive([
  {
    name: '刀剑神域',
    url: '',
    picture: manhua1
  },
  {
    name: '一拳超人',
    url: '',
    picture: manhua2
  },
  {
    name: '鬼灭之刃',
    url: '',
    picture: manhua3
  },
  {
    name: '石之还',
    url: '',
    picture: manhua4
  }
])
const prop = defineProps(['hotSearch'])
const searchVisible = ref(true)
const searchData = ref('')
const searchDefaults = ref('请输入内容')
const handleSelect = (item: any) => {
  console.log(item)
}
const querySearch = (queryString: string, cb: Function) => {
  cb(prop.hotSearch)
}

const selectDongtai = ref<string | number | undefined>('video')
const handleClickDongTaiTabs = (pane: TabsPaneContext) => {
  selectDongtai.value = pane.paneName
  console.log(selectDongtai.value)
}
const selectCollection = ref<string | number | undefined>('default')
const handleClickSelectColloectionTabs = (pane: TabsPaneContext) => {
  selectCollection.value = pane.paneName
  console.log(selectCollection.value)
}

const selectHistory = ref<string | number | undefined>('video')
const handleClickHistoryTabs = (pane: TabsPaneContext) => {
  selectHistory.value = pane.paneName
  console.log(selectHistory.value)
}
</script>

<style scoped>
.dongtai-tabs {
  :deep(.el-tabs__active-bar) {
    background-color: transparent;
  }
}
.collection-tabs {
  :deep(.el-tabs__active-bar) {
    background-color: transparent;
  }
  :deep(.el-tabs__item) {
    padding: 0px;
    text-align: left;
  }
}
.history-tabs {
  :deep(.el-tabs__active-bar) {
    background-color: transparent;
  }
}
.upload {
  :deep(.el-button) {
    color: white;
    width: 80px;
  }
}
</style>
