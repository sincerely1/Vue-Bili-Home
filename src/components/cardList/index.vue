<template>
  <div class="text-[12px] font-sans text-[#555]">
    <header class="pb-2 flex justify-between">
      <div class="cursor-pointer flex text-[20px] items-center">
        <svg-icon :name="mainName.icon" class="mr-2"></svg-icon>
        <div>{{ mainName.name }}</div>
      </div>
      <div class="flex justify-between items-center text-center w-[15%] text-[12px]">
        <div
          class="hover:bg-white flex-1 mr-1 p-[2px_4px] rounded border-[#ccc] border cursor-pointer"
        >
          <i class="bilifont bili-icon_caozuo_huanyihuan"></i>
          <span @click="changeIt">&nbsp; 换一换</span>
        </div>
        <div class="p-[2px_4px] rounded border-[#ccc] border">
          <a href="#">
            更多
            <i class="bilifont bili-icon_caozuo_xiangyou"></i>
          </a>
        </div>
      </div>
    </header>

    <div class="storey-content">
      <div v-for="(item, i) in mainData" :key="i" @click="jumpPath(item.title)">
        <div class="relative w-full max-h-[116px] rounded overflow-hidden">
          <img class="w-full block" :src="item.pic" alt="" />
          <div class="count">
            <span class="align-middle">
              <i class="bilifont bili-icon_shipin_bofangshu"></i>
              {{ tenThousand(item.stat.view) }}
            </span>
            <span class="ml-2 align-middle">
              <i class="bilifont bili-icon_shipin_dianzanshu"></i>
              {{ tenThousand(item.stat.like) }}
            </span>
            <span class="float-right align-middle">
              {{ timeHandle(item.duration) }}
            </span>
          </div>
        </div>

        <div class="item-title">
          <a href="#">{{ item.title }}</a>
        </div>
        <div class="text-xs text-gray-500">
          <a href="#">
            <i class="bilifont bili-icon_xinxi_UPzhu"></i>
            {{ item.owner.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['mainData','mainName'])

// 计算数量过万就转换
const tenThousand = (count: number) => {
  // 计算属性是一个属性不是一个方法, 使用函数返回
  if (count >= 100000000) {
    return (count / 100000000).toFixed(1) + '亿'
  }
  return count >= 10000 ? (count / 10000).toFixed(1) + '万' : count
}
// 处理时间
const timeHandle = (time: number) => {
  let timeFormat = ''
  function allTime(time: any) {
    if (time < 60) {
      let s = time > 0 ? time : ''
      s = s <= 10 ? '0' + s : s
      timeFormat = timeFormat + s
      return
    } else if (time < 3600) {
      let m:any = Math.floor(time / 60)
      m = m <= 10 ? '0' + m : m
      timeFormat = timeFormat + m + ':'
      allTime(time - m * 60)
    } else {
      let h:any = Math.floor(time / 3600)
      h = h <= 10 ? '0' + h : h
      timeFormat = timeFormat + h + ':'
      allTime(time - h * 3600)
    }
  }
  allTime(time)
  return timeFormat
}

// 点击跳转
const jumpPath = (keyword: string) => {
  console.log(keyword)
}
const changeIt = () => {
  console.log('change')
}
</script>

<style scoped>
.storey-content {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 206px 206px 206px 206px 206px;
  grid-template-rows: 180px 180px;
  grid-gap:10px;
}
.count {
  line-height: 16px;
  position: absolute;
  left: 0;
  bottom: 0px;
  padding: 4px 2px;
  font-size: 12px;
  color: #fff;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(119, 119, 119, 0.1));
  width: 100%;
  /* 一行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.item-title {
  height: 21%;
  margin-top: 5px;
  font-size: 14px;
  /* 两行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #4d4d4d;
}
</style>
