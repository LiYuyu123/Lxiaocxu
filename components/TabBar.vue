<template>
  <view class="tab-bar-wrapper">
      <view class="tab-bar" v-for="(i,index) in tabData" :key="index" @click="goUrl(i)">
         <image :src="tabIndex === index ? i.active:i.img"/>
         <view>{{ i.name }}</view>
      </view>
  </view>
</template>

<script>
export default  {
  props:{
    tabIndex: {
      type: Number,
      default:0,
    }
  },
  data(){
    return {
      tabData: [
          {
        name:'首页',
        img:'/static/index/home.png',
        active:'/static/index/homeSelect.png'
      },
        {
          name:'活动',
          img:'/static/index/activity.png',
          active:'/static/index/activitySelect.png'
        },
        {
          name:'福利',
          img:'/static/index/welfare.png',
          active:'/static/index/welfareSelect.png'
        },    {
          name:'我的',
          img:'/static/index/my.png',
          active:'/static/index/mySelect.png'
        }
      ]
    }
  },
  methods: {
    goUrl(val) {
       uni.redirectTo({
         url:`${val.path}`
       })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-bar-wrapper {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background: white;
   .tab-bar {
     width: 25%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding: 10upx 0;
     >image {
       width: 48upx;
       height: 48upx;
     }
   }
}
</style>
