<script setup lang="ts">
import { reactive, ref } from 'vue'
import type {
  hotRecommendationItem,
  SubType,
  GoodsItem,
} from '@/types/Hotrecommendation'
import { onLoad } from '@dcloudio/uni-app'
import { getHotCommon } from '@/services/Hotservice'
interface metaType {
  title: string
  coverPath: string
  tabs: string[]
}
const hotRecommendData = ref<hotRecommendationItem>({} as hotRecommendationItem)
const goodItems = ref<SubType[]>([])
const urlMap = [
  {
    type: '1',
    url: '/hot/preference',
  },
  {
    type: '2',
    url: '/hot/inVogue',
  },
  {
    type: '3',
    url: '/hot/oneStop',
  },
  {
    type: '4',
    url: '/hot/new',
  },
]

let types: string
onLoad(({ type }) => {
  if (type) {
    type && getList(type)
    types = type
  }
})

async function getList(type: string, page: number = 1, id?: string) {
  const currentUrl = urlMap.find((item) => item.type === type)
  const { result } = await getHotCommon(currentUrl!.url, {
    page,
    pageSize: 10,
  })
  hotRecommendData.value = result

  if (id) {
    goodItems.value.forEach((item) => {
      const ids = hotRecommendData.value.subTypes.find((item) => item.id === id)

      if (item.id === ids?.id) {
        item.goodsItems.items = [
          ...item.goodsItems.items,
          ...ids.goodsItems.items,
        ]
      }
    })
  } else {
    goodItems.value = hotRecommendData.value.subTypes
  }

  uni.setNavigationBarTitle({ title: result.title })
}
let activeIndex = ref(0)
const onSubTap = (index: number) => {
  activeIndex.value = index
}
// 加载数据
let page = 1
const 加载数据 = async (id: string, length: number, count: string) => {
  uni.showLoading({ title: '加载中' })
  if (+count <= length) return
  page++
  await getList(types, page, id)
  uni.hideLoading()
}

// 动态更新导航栏标题
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="hotRecommendData.bannerPicture"></image>
    </view>
    <view class="tabs">
      <text
        class="text"
        v-for="(item, index) in hotRecommendData.subTypes"
        :key="item.id"
        :class="{ active: index === activeIndex }"
        @tap="onSubTap(index)"
        >{{ item.title }}</text
      >
    </view>
    <scroll-view
      scroll-y
      enhanced
      :show-scrollbar="false"
      @scrolltolower="
        加载数据(sub.id, sub.goodsItems.items.length, sub.goodsItems.counts)
      "
      class="scroll-view"
      v-for="(sub, ind) in goodItems"
      :key="ind"
      v-show="ind === activeIndex"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          url="/pages/goods/index"
          class="navigator"
          v-for="item in sub.goodsItems?.items"
          :key="item.id"
        >
          <image class="thumb" :src="item.picture"></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading">{{
        +sub.goodsItems.counts >= sub.goodsItems.items.length + 5
          ? '正在加载...'
          : '到底啦!'
      }}</view>
    </scroll-view>
  </view>
</template>

<style>
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
}

.tabs .text {
  margin: 0 20rpx;
  position: relative;
}

.tabs .active::after {
  content: '';
  width: 40rpx;
  height: 4rpx;
  transform: translate(-50%);
  background-color: #27ba9b;
  position: absolute;
  left: 50%;
  bottom: 24rpx;
}

.scroll-view {
  flex: 1;
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
}

.goods .navigator {
  width: 345rpx;
  padding: 20rpx;
  margin-top: 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
}

.goods .thumb {
  width: 305rpx;
  height: 305rpx;
}

.goods .name {
  height: 88rpx;
  font-size: 26rpx;
}

.goods .price {
  line-height: 1;
  color: #cf4444;
  font-size: 30rpx;
}

.goods .symbol,
.goods .decimal {
  font-size: 70%;
}
</style>
