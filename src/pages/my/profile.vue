<script setup lang="ts">
import { toRef, ref } from 'vue'
import { storeToRefs } from 'pinia'
import useAppStore from '@/store'
import { useMemberStore } from '@/store/member'
import { getMemberProfile, putMemberProfile } from '@/services/profile'
import { onLoad } from '@dcloudio/uni-app'
import { getMemberProfileItem } from '@/types/profile'
import { postLoginWxMinSimple } from '@/services/login'
const Member = useMemberStore()
const appStore = useAppStore()
const safeArea = toRef(appStore, 'safeArea')

const goBack = () => {
  uni.navigateBack({})
}

// 获取用户信息资料
const ProfileData = ref<getMemberProfileItem>({} as getMemberProfileItem)
const lodeProfile = async () => {
  const { result } = await getMemberProfile()
  ProfileData.value = result
}
// 头像处理
const defultImg =
  'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/avatar_3.jpg'

onLoad(() => {
  lodeProfile()
})
// 更换头像
const chooseImage = () => {
  uni.chooseImage({
    count: 1, //默认9
    success: function (res) {
      const filePath = (ProfileData.value.avatar = res.tempFilePaths[0])
      uni.uploadFile({
        url: '/member/profile/avatar',
        filePath,
        name: 'file',
        success: (success) => {
          console.log(JSON.parse(success.data))
          if (success.statusCode === 200) {
            const newAvatar = JSON.parse(success.data).result.avatar
            ProfileData.value.avatar = newAvatar
            Member.profile.avatar = newAvatar
            uni.showToast({ title: '头像上传成功' })
          } else {
            uni.showToast({ icon: 'error', title: '上传失败请重试' })
          }
        },
        fail: (fail) => {
          uni.showToast({ icon: 'error', title: '上传失败请重试' })
        },
      })
    },
  })
}
// 更换地区
let areaCode: string[] = []
const bindPickerChange = (e: WechatMiniprogram.PickerChange) => {
  ProfileData.value.fullLocation = (
    e.detail.value as [string, string, string]
  ).join('')
  areaCode = e.detail.code
}

// 更换出生日期
const bindDateChange = (e: any) => {
  ProfileData.value.birthday = e.detail.value
}
//性别
const radioChange = (e: any) => {
  ProfileData.value.gender = e.detail.value
}
// name
const userName = (e: any) => {
  ProfileData.value.nickname = e.detail.value
}
// 职业
const occupation = (e: any) => {
  ProfileData.value.profession = e.detail.value
}

// 提交表单
const submitForm = async () => {
  const [provinceCode, cityCode, countyCode] = areaCode


  uni.showLoading({ title: '提交中' })
   await putMemberProfile({
    ...ProfileData.value,
    provinceCode,
    cityCode,
    countyCode,
  })
  // 重新拉取数据并跳转
  const { result } = await postLoginWxMinSimple({ phoneNumber: '13714004215' })
  Member.setMemberProfile(result)
  uni.showToast({ icon: 'success', title: '提交成功' })
  setTimeout(() => {
    uni.redirectTo({
      url: '/pages/my/index',
    })
  }, 1500)
}
</script>

<template>
  <view class="viewport">
    <view class="navbar" :style="{ paddingTop: safeArea?.top + 'px' }">
      <view class="back icon-left" @tap="goBack"></view>
      <view class="title">个人信息</view>
    </view>
    <scroll-view scroll-y>
      <!-- 头像 -->
      <view class="avatar">
        <image
          @tap="chooseImage"
          :src="ProfileData.avatar ? ProfileData.avatar : defultImg"
        />
        <text>点击修改头像</text>
      </view>
      <!-- 用户信息 -->
      <view class="form">
        <view class="form-item">
          <text class="label">账号</text>
          <input :disabled="true" :value="ProfileData.account" />
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            adjust-position
            type="text"
            maxlength="15"
            @blur="userName"
            :value="ProfileData.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="radioChange">
            <label class="radio">
              <radio
                value="男"
                color="#27ba9b"
                :checked="ProfileData.gender === '男'"
              />
              男
            </label>
            <label class="radio">
              <radio
                value="女"
                :checked="ProfileData.gender === '女'"
                color="#27ba9b"
              />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">出生日期</text>
          <picker
            @change="bindDateChange"
            mode="date"
            start="1980-01-01"
            end="2002-09-06"
            :value="ProfileData.birthday"
          >
            <view>{{ ProfileData.birthday || '请选择出生日期' }}</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            mode="region"
            :value="ProfileData.fullLocation"
            @change="bindPickerChange"
          >
            <view>{{
              ProfileData.fullLocation ? ProfileData.fullLocation : '请选择城市'
            }}</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input
            adjust-position
            type="text"
            @blur="occupation"
            maxlength="10"
            :value="ProfileData.profession"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <view class="button" @tap="submitForm">保 存</view>
    </scroll-view>
  </view>
</template>

<style>
page {
  height: 100%;
  overflow: hidden;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 392rpx;
  background-repeat: no-repeat;
}

.navbar .title {
  height: 40px;
  line-height: 32px;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
}

.navbar .back {
  position: absolute;
  left: 20rpx;
  top: 22px;
  font-size: 23px;
  z-index: 9;
  color: #fff;
}

.avatar {
  text-align: center;
  padding: 20rpx 0 40rpx;
}

.avatar image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
}

.avatar text {
  display: block;
  padding-top: 20rpx;
  line-height: 1;
  font-size: 26rpx;
  color: #fff;
}

.form {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
}

.form .form-item {
  display: flex;
  height: 96rpx;
  line-height: 46rpx;
  padding: 25rpx 10rpx;
  background-color: #fff;
  font-size: 28rpx;
  border-bottom: 1rpx solid #ddd;
}

.form .form-item:last-child {
  border: none;
}

.form .form-item .label {
  width: 180rpx;
  color: #333;
}

.form .form-item input {
  flex: 1;
  display: block;
  height: 46rpx;
}

.form .form-item .radio {
  display: inline-block;
  height: 46rpx;
  margin-right: 20rpx;
  vertical-align: middle;
}

.form .form-item radio {
  transform: scale(0.7) translateY(-2px);
}

.form .form-item picker {
  flex: 1;
}

.button {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
