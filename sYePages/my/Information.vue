<template>
  <view>
    <view class="information" @click="updateImg">
      <view class="information-word must" >头像</view>
      <view class="information-right">
        <view class="input-w">
          <image  src="../../static/my/default_avatar.png"></image>
      </view>
        <image  src="../../static/my/arrow.png"></image>
    </view>
      </view>
  <view class="information">
     <view class="information-word ">姓名</view>
     <view class="information-right">
       <view class="input-w"
       ><input
           placeholder="请输入姓名"
       /></view>
       <image src="../../static/my/arrow.png"></image>
     </view>
  </view>
    <view class="information">
      <view class="information-word must">昵称 </view>
      <view class="information-right">
        <view class="input-w"
        ><input
            placeholder="请输入昵称"
        /></view>
        <image src="../../static/my/arrow.png"></image>
      </view>
    </view>
    <view class="information">
      <view class="information-word must">性别 </view>
      <view class="information-right">
        <view class="input-w">
          <radio-group class="radio-w">
            <label v-for="i in sexList" :key="i.key">
              <radio
                  :value="i.value"
                  :checked="i.value === form.sex"
                  color="rgba(0, 126, 255, 1)"
              />
              <view>{{ i.value }}</view>
            </label>
          </radio-group>
        </view>
      </view>
    </view>
    <view class="save" >保存</view>
  </view>
</template>
<script>
export default {
  data(){
    return {
      form: {
        sex:'男'
      },
      sexList: [
        { value: "男", key: 1 },
        { value: "女", key: 2 },
      ],

    }
  },
   methods: {
     updateImg(){
       uni.chooseImage({
         count: 6, //默认9
         sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
         sourceType: ["album", "camera"], //从相册选择
         success: function (res) {
           console.log(JSON.stringify(res.tempFilePaths));
           const tempFilePaths = res.tempFilePaths;
           //TODO 带接口完善
         },
       })
     }
   }
}
</script>
<style lang="less" scoped>
.information {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20upx 30upx;
  padding-bottom: 20upx;
  border-bottom: 1upx solid #e7e7e7;
  .information-right {
    display: flex;
    align-items: center;
     .input-w{
        text-align: right;
       >image {
         width: 90upx;
         height: 90upx;
         border-radius: 4px;
       }
     }
    >image {
      width: 40upx;
      height: 40upx;
    }
  }
}
.must {
  position: relative;
}
.must::before {
  content: "*";
  position: absolute;
  left: -18upx;
  color: red;
  top: 0;
  bottom: 0;
  margin: auto;
}

.save {
  width: 80%;
  height: 68upx;
  text-align: center;
  border-radius: 10upx;
  font-size: 26upx;
  line-height: 68upx;
  background: rgba(0, 126, 255, 1);
  color: #fff;
  position: fixed;
  bottom: 100upx;
  left: 0;
  right: 0;
  margin: auto;
}
.radio-w {
  display: flex;
  >label {
    display: flex;
    &:nth-child(1){
      margin-right: 20upx;
    }
  }
}
</style>