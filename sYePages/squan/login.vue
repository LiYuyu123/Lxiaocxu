<template>
  <view>
    <view>
       <view class='headView'>
         <view class='headImageView'>
          <image class='headImage' src='/pages/imageSource/IMG_3456.png' mode='scaleToFill'></image>
       </view>
        <view class='titleText'>申请获取以下权限</view>
     <view class='contentText'>获得你的公开信息(昵称,头像,手机等)</view>
          <button class='authBtn' type='primary' open-type='getUserInfo' @click="appLoginWx">授权登录</button>
     </view>
    </view>
  </view>
</template>

<script>
export default {
  methods:{
    appLoginWx() {
      uni.getUserProfile({
        desc:'获取用户基本资料',
        success: (res)=>{
          console.log(res)
        },
        fail: ()=>{
          uni.showModal({
            title:'授权用户信息失败！',
            // 是否显示取消按钮，默认为 true
            showCancel:false
          })
        }
      })
      uni.login({
        provider:'weixin',
        success: (res)=> {
          console.log(res)
        },
      })
    }
  }
}
</script>

<style lang="less" scoped>
.headView {
  margin: 90rpx 50rpx 90rpx 50rpx; /*上右下左*/
}

.headImageView {
  display: block;
  margin-left: 25px;
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 0px;
  height: 50px;

}

.headImage{
  display: flex;
  width: 50px;
  height: 50px;

}

.titleText {
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #020e0f;
  text-align: center;

}
.contentText {
  margin-left: 25px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  color: #666;
  text-align: center;

}
.authBtn {
  margin-top: 35px;
  margin-left: 25px;
  margin-right: 25px;
  height: 45px;
  font-size: 17.5px;

}

</style>