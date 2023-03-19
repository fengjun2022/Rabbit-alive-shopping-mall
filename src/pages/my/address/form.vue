<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import {
  getMemberAddress,
  postMemberAddress,
  modificationAddress,
  
} from '@/services/address'
import { useAddress } from '@/store/address'
import { validate } from '@/utils/validate'
import type {
  getMemberAddressItem,
  addTheShippingAddressParameter,
} from '@/types/addrees'
import { toNumber } from '@vue/shared'
const address = useAddress()

let addressList = ref<getMemberAddressItem>({} as getMemberAddressItem)

let addressId: string
/**
 *修改地址
 */
const screenOut = (type: number | undefined) => {
  if (type || type === 0) {
    addressList.value = address.addressList[type]
    addressId = addressList.value.id
    areaCode.push(
      addressList.value.cityCode,
      addressList.value.countyCode,
      addressList.value.provinceCode
    )
  } else {
    addressList.value = {
      address: '',

      cityCode: '',

      contact: '',

      countyCode: '',

      fullLocation: '',

      id: '',

      isDefault: 0,

      provinceCode: '',

      receiver: '',
    }
  }
}

/**
 *表单值
 */
let addressForm = ref<addTheShippingAddressParameter>(
  {} as addTheShippingAddressParameter
)

//更换地区
let areaCode: string[] = []
const bindPickerChange = (e: WechatMiniprogram.PickerChange) => {
  addressList.value.fullLocation = (
    e.detail.value as [string, string, string]
  ).join('')
  areaCode = e.detail.code
}

/**
 *添加地址/修改地址
 */

//
const submitData = async (e: any) => {
  const [provinceCode, cityCode, countyCode] = areaCode
  addressForm.value = { ...e.detail.value, provinceCode, cityCode, countyCode }
  addressForm.value.isDefault = addressForm.value.isDefault ? 1 : 0
  const res = validate(addressForm.value)
  if (res) {
    if (addressId) {
      await modificationAddress(res, addressId)
      uni.showToast({ icon: 'success', title: '保存成功' })
    } else {
      await postMemberAddress(res)
      uni.showToast({ icon: 'success', title: '保存成功' })
    }
    const { result } = await getMemberAddress()
    address.setAddressList(result)
    setTimeout(() => {
      uni.redirectTo({ url: '/pages/my/address/index' })
    }, 1500)
  }
}

onLoad(({ id, type }) => {
  uni.setNavigationBarTitle({
    title: id ? '修改地址' : '新建地址',
  })
  screenOut(toNumber(type))
})
</script>

<template>
  <view class="viewport">
    <!-- 地址信息 -->
    <form @submit="submitData" @reset="">
      <view class="form">
        <view class="form-item">
          <text class="label">姓名</text>
          <input
            v-model.trim="addressList.receiver"
            placeholder-style="color: #888"
            placeholder="请填写收货人姓名"
            name="receiver"
          />
        </view>
        <view class="form-item">
          <text class="label">手机号码</text>
          <input
            placeholder-style="color: #888"
            placeholder="请填写收货人手机号码"
            v-model.trim="addressList.contact"
            name="contact"
          />
        </view>
        <view class="form-item">
          <text class="label">省/市/县 (区)</text>
          <picker
            mode="region"
            :value="addressList.fullLocation"
            @change="bindPickerChange"
          >
            <!-- <view class="region"></view> -->
            <view class="placeholder">{{
              addressList.fullLocation || '请填写收货人所在城市'
            }}</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">详细地址</text>
          <input
            name="address"
            v-model.trim="addressList.address"
            placeholder-style="color: #888"
            placeholder="街道、楼牌号信息"
          />
        </view>
        <view class="form-item">
          <text class="label">设置默认地址</text>
          <switch
            :checked="addressList.isDefault"
            name="isDefault"
            color="#27ba9b"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="button" form-type="submit">保 存</button>
    </form>
  </view>
</template>

<style>
page {
  background-color: #f4f4f4;
}

.form {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
}

.form .form-item {
  display: flex;
  min-height: 96rpx;
  line-height: 46rpx;
  padding: 25rpx 10rpx;
  background-color: #fff;
  font-size: 28rpx;
  border-bottom: 1rpx solid #ddd;
  position: relative;
}

.form .form-item:last-child {
  border: none;
}

.form .form-item .label {
  width: 200rpx;
  color: #333;
}

.form .form-item input {
  flex: 1;
  display: block;
  height: 46rpx;
}

.form .form-item switch {
  position: absolute;
  right: -10rpx;
  transform: scale(0.7) translateY(-8px);
}

.form .form-item picker {
  flex: 1;
}

.form .form-item .region {
  color: #333;
}

.form .form-item .placeholder {
  color: #888;
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
