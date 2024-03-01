<template>
  <div class="b-wrap">
    <div class="various-content">
      <cardList :mainData="animationList" :mainName="animationInfo"></cardList>
      <topList :mainData="animationList"></topList>
    </div>
  </div>
</template>

<script setup lang="ts">
import topList from '@/components/topList/index.vue'
import cardList from '@/components/cardList/index.vue'
import animation1 from '@/assets/image/animation1.avif'
import animation2 from '@/assets/image/animation2.avif'
import animation3 from '@/assets/image/animation3.avif'
import animation4 from '@/assets/image/animation4.avif'
import animation5 from '@/assets/image/animation5.avif'
import animation6 from '@/assets/image/animation6.avif'
import animation7 from '@/assets/image/animation7.avif'
import animation8 from '@/assets/image/animation8.avif'
import animation9 from '@/assets/image/animation9.avif'
import animation10 from '@/assets/image/animation10.avif'

const animationList= [
  {
    id: 1,
    title: '宝藏没了!',
    pic: animation1,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主1'
    }
  },
  {
    id: 1,
    title: 'MMD-极乐净土',
    pic:animation2,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主2'
    }
  },
  {
    id: 1,
    title: '我真的很可爱',
    pic: animation3,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主3'
    }
  },
  {
    id: 1,
    title: '王样战队完结',
    pic: animation4,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主4'
    }
  },
  {
    id: 1,
    title: '皮特大战Rock',
    pic: animation5,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主5'
    }
  },
  {
    id: 1,
    title: '美少女小绿变身',
    pic:animation6,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主6'
    }
  },
  {
    id: 1,
    title: '可遇不可求的人',
    pic: animation7,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主7'
    }
  },
  {
    id: 1,
    title: '你在和谁聊天',
    pic:animation8,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主8'
    }
  },
  {
    id: 1,
    title: '铠甲勇士变身',
    pic: animation9,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主1'
    }
  },
  {
    id: 1,
    title: '真的很可爱',
    pic:animation10,
    stat: {
      coin: 200,
      like: 500,
      view: 10000
    },
    duration: 95,
    owner: {
      name: 'up主10'
    }
  },
]
const animationInfo={
  name:'动画',
  icon:'animation'
}
</script>

<style scoped>
.b-wrap {
  width: 84vw;
  margin: 0 7vw;
  min-width: 1170px;
}
.various-content {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1070px 300px;
  grid-template-rows: 404px;
  margin-top: 26px;
}
</style>
