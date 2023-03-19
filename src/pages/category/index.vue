<script setup lang="ts">
import carousel from '@/components/carousel/index.vue'
import { getHomeBanner } from '@/services'
import { getHomeBannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import { getCategoryTopItem } from '@/types/category'
import { getCategoryTop } from '@/services/category'

// 获取轮播图
const bannerData = ref<getHomeBannerItem[]>([])
const loadBanner = async () => {
  const res = await getHomeBanner()
  bannerData.value = res.result
}

// 获取分类数据
const categoryList = ref<getCategoryTopItem[]>([])
const loadCatgoryList = async () => {
  const res = await getCategoryTop()
  categoryList.value = res.result
  console.log(categoryList.value)
}

onLoad(() => {
  Promise.all([loadBanner(), loadCatgoryList()])
})

// 切换分类
let activeIndex = ref(0)
const secondCate = computed(
  () => categoryList.value[activeIndex.value]?.children
)
const scrollTop = ref(0)
function onClickSwitch(index: number, id: string) {
  activeIndex.value = index
  scrollTop.value = scrollTop.value === 0 ? 1 : 0
}
</script>

<template>
  <view class="viewport">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 主分类（一级类目） -->
      <scroll-view
        class="primary"
        enhanced
        scroll-y="true"
        :show-scrollbar="false"
      >
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          :class="`item ${activeIndex === index ? 'active' : ''}`"
          @tap="onClickSwitch(index, item.id)"
          >{{ item.name }}</view
        >
      </scroll-view>
      <!-- 次分类（二级类目） -->
      <scroll-view
        class="secondary"
        enhanced
        scroll-y
        :show-scrollbar="false"
        :scroll-top="scrollTop"
      >
        <!-- 焦点图 -->
        <carousel class="banner" :source="bannerData"></carousel>
        <!-- 区块 -->
        <view class="panel" v-for="second in secondCate" :key="second.id">
          <view class="title">
            {{ second.name }}
            <navigator
              class="more"
              hover-class="none"
              url="/pages/goods/list/index"
              >全部</navigator
            >
          </view>
          <view class="section">
            <navigator
              hover-class="none"
              :url="`/pages/goods/index${good.id}`"
              v-for="good in second.goods"
              :key="good.id"
            >
              <image :src="good.picture"></image>
              <view class="name ellipsis">{{ good.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ good.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style>
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search {
  padding: 0 30rpx 20rpx;
  background-color: #fff;
}

.search .input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64rpx;
  padding-left: 26rpx;
  color: #8b8b8b;
  font-size: 28rpx;
  border-radius: 32rpx;
  background-color: #f3f4f4;
}

.icon-search::before {
  margin-right: 10rpx;
}

/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}

/* 主分类 */
.primary {
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;
}

.primary .item {
  height: 96rpx;
  text-align: center;
  line-height: 96rpx;
  font-size: 26rpx;
  color: #595c63;
  position: relative;
}

.primary .active::before {
  position: absolute;
  left: 0;
  top: 0;

  content: '';
  width: 8rpx;
  height: 100%;
  background-color: #27ba9b;
}

.primary .item::after {
  position: absolute;
  left: 42rpx;
  bottom: 0;

  content: '';
  width: 96rpx;
  border-top: 1rpx solid #e3e4e7;
}

.primary .active {
  background-color: #fff;
}

.primary .item:last-child::after,
.primary .active::after {
  display: none;
}

/* 次分类 */
.secondary {
  background-color: #fff;
}

.secondary .banner {
  height: 200rpx;
  margin: 30rpx;
  border-radius: 4rpx;
  overflow: hidden;
}

.secondary .panel {
  margin: 0 30rpx 0rpx;
}

.secondary .title {
  height: 60rpx;
  line-height: 60rpx;
  color: #333;
  font-size: 28rpx;
  border-bottom: 1rpx solid #f7f7f8;
}

.secondary .title .more {
  float: right;
  padding-left: 20rpx;
  font-size: 24rpx;
  color: #999;
}

.secondary .more::after {
  font-family: 'erabbit' !important;
  content: '\e6c2';
}

.secondary .section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0;
}

.secondary .section navigator {
  /* flex: 1; */
  width: 150rpx;
  /* text-align: center; */
  margin: 0rpx 30rpx 20rpx 0;
}

.secondary .section navigator:nth-child(3n) {
  margin-right: 0;
}

.secondary navigator image {
  width: 126rpx;
  height: 126rpx;
}

.secondary navigator .name {
  /* display: block; */
  font-size: 26rpx;
  color: #333;
}

.secondary navigator .price {
  font-size: 18rpx;
  color: #cf4444;
}

.secondary navigator .number {
  font-size: 24rpx;
  margin-left: 2rpx;
}
</style>
