<template>
	<view class="content">
    <view class="my-content">
    <view class="my-b"></view>
    <view class="my-main">
      <view class="my-header">
         <view class="header-h">
           <image src="/static/my/default_avatar.png"/>
           <view class="h-main">
             <view class="word1">李子杰</view>
             <view class="aihao">
               <view class="word3">爱好</view>
             </view>
           </view>
           <image class="img-right" src="/static/my/arrow.png" @click="goInformation"/>
         </view>
      </view>
      <view class="title-w">我的服务</view>
      <view class="select-main">
        <view class="main-wrapper" v-for="(i,index) in data" :key="index">
          <view class="service">
            <image :src="i.img"/>
            <view class="service-w">{{ i.name }}</view>
          </view>
          <image src="/static/my/arrow.png"/>
        </view>
      </view>
    </view>
    </view>
    <TabBar :tab-index="3"></TabBar>
	</view>
</template>

<script>
import TabBar from  '../../components/TabBar'
	export default {
    components: {
      TabBar
    },
		data() {
			return {
				data: [
          {name:'我的订单',img:'/static/my/mallOrder.png'},
          {name:'我的订单',img:'/static/my/mallOrder.png'},
          {name:'我的订单',img:'/static/my/mallOrder.png'},
          {name:'我的订单',img:'/static/my/mallOrder.png'},
          {name:'我的订单',img:'/static/my/mallOrder.png'},
        ]
			}
		},
		onLoad() {

		},
		methods: {
        goInformation() {
          console.log('1')
          uni.navigateTo({
            url:'/sYePages/my/Information'
          });
        }
		}
	}
</script>

<style lang="less" scoped>
.my-content {
  min-height: 100vh;
  background: rgba(245, 245, 245, 1);
  .my-b {
    background: #007aff;
    height: 300upx;
  }
  .my-main {
    padding: 0 32upx;
    .my-header {
      background: white;
      border-radius: 16upx;
      margin-top: -156upx;
      padding: 32upx;
      box-sizing: border-box;
       .header-h {
         display: flex;
         position: relative;
         >image {
           width: 112upx;
           height: 112upx;
           border-radius: 50%;
           margin-right: 20upx;
         }
         .img-right {
           width: 48upx;
           height: 48upx;
           position: absolute;
           right: -20upx;
           top:40upx;
         }
         .h-main {
           .word1 {}
           .aihao {
             display: flex;
             align-items: center;
             padding-top: 25upx ;
             .word2 {
               padding: 4px 12px;
               display: inline-block;
               margin-right: 10upx;
               text-align: center;
               font-size: 24upx;
               line-height: 32upx;
               background: #fff3eb;
               border-radius: 4upx;
               border: 1upx solid #ffc7a4;
               color: #fe6f16;
             }
             .word3 {
               background: #daeafd;
               padding: 4px 12px;
               font-size: 24upx;
               line-height: 32upx;
               border: 2upx solid #009aff;
               color: #009aff;
             }
           }
         }
       }
    }
    .title-w {
      padding: 30upx 0 ;
      font-size: 36upx;
    }
    .select-main {
      background: white;
      border-radius: 16upx;
      padding: 32upx;
      box-sizing: border-box;
      .main-wrapper {
        display: flex;
        align-items: center;
        padding: 0 0 60upx 0;
        justify-content: space-between;
        .service {
          display: flex;
          align-items: center;
          >image {
            width: 48upx;
            height: 48upx;
            margin-right: 20upx;
          }
          .service-w {

          }
        }
        >image {
          width: 48upx;
          height: 48upx;
        }
        &:last-child {
          padding-bottom: 20upx !important;
        }
      }
    }
  }
}
</style>
