<template name="skeleton">
  <view class="sk-container">
    <view class="navbar sk-image" style="padding-top:59px">
      <view class="logo">
        <image class="sk-image"></image>
        <text class="sk-transparent sk-text-3-3333-875 sk-text">新鲜 · 亲民 · 快捷</text>
      </view>
      <view class="search">
        <text class="icon-search sk-transparent sk-text-18-7500-158 sk-text sk-pseudo sk-pseudo-circle">搜索商品</text>
        <text class="icon-scan sk-pseudo sk-pseudo-circle"></text>
      </view>
    </view>
    <scroll-view enable-back-to-top="true" enhanced="true" refresher-enabled="true" scroll-y="true" class="viewport" refresher-background="#f7f7f8">
      <view is="components/carousel/index" style="height:159px">
        <view class="carousel carousel-index--carousel">
          <swiper autoplay="false" circular="true" interval="3000" current="0">
            <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <navigator class="navigator carousel-index--navigator" hover-class="none">
                <image class="image carousel-index--image sk-image"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator carousel-index--indicator">
            <text class="dot carousel-index--dot"></text>
            <text class="dot carousel-index--dot active carousel-index--active"></text>
            <text class="dot carousel-index--dot"></text>
            <text class="dot carousel-index--dot"></text>
            <text class="dot carousel-index--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/entries/index">
        <view class="entries index--entries">
          <scroll-view enhanced="true" class="scroll-view index--scroll-view">
            <view class="navs index--navs" style="scroll-snap-align: none;">
              <view class="navs-item index--navs-item">
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-914 sk-text" style="background-position-x: 50%;">居家</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-717 sk-text" style="background-position-x: 50%;">锦鲤</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-421 sk-text" style="background-position-x: 50%;">服饰</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-646 sk-text" style="background-position-x: 50%;">母婴</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-372 sk-text" style="background-position-x: 50%;">个护</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-394 sk-text" style="background-position-x: 50%;">严选</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-627 sk-text" style="background-position-x: 50%;">数码</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-175 sk-text" style="background-position-x: 50%;">运动</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-737 sk-text" style="background-position-x: 50%;">杂项</text>
                </navigator>
                <navigator class="navigator index--navigator" hover-class="none">
                  <image class="icon index--icon sk-image"></image>
                  <text class="text index--text sk-transparent sk-text-18-7500-553 sk-text" style="background-position-x: 50%;">品牌</text>
                </navigator>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="panel recommend" style="scroll-snap-align: none;">
        <view class="item">
          <view class="title sk-transparent">特惠推荐
            <text class="sk-transparent sk-text-18-7500-133 sk-text">精选全攻略</text>
          </view>
          <navigator class="cards" hover-class="none">
            <image mode="aspectFit" class="sk-image"></image>
            <image mode="aspectFit" class="sk-image"></image>
          </navigator>
        </view>
        <view class="item">
          <view class="title sk-transparent">爆款推荐
            <text class="sk-transparent sk-text-18-7500-466 sk-text">最受欢迎</text>
          </view>
          <navigator class="cards" hover-class="none">
            <image mode="aspectFit" class="sk-image"></image>
            <image mode="aspectFit" class="sk-image"></image>
          </navigator>
        </view>
        <view class="item">
          <view class="title sk-transparent">一站买全
            <text class="sk-transparent sk-text-18-7500-564 sk-text">精心优选</text>
          </view>
          <navigator class="cards" hover-class="none">
            <image mode="aspectFit" class="sk-image"></image>
            <image mode="aspectFit" class="sk-image"></image>
          </navigator>
        </view>
        <view class="item">
          <view class="title sk-transparent">新鲜好物
            <text class="sk-transparent sk-text-18-7500-107 sk-text">生活加分项</text>
          </view>
          <navigator class="cards" hover-class="none">
            <image mode="aspectFit" class="sk-image"></image>
            <image mode="aspectFit" class="sk-image"></image>
          </navigator>
        </view>
      </view>
      <view class="panel fresh" style="scroll-snap-align: none;">
        <view class="title sk-transparent"> 新鲜好物
          <navigator class="more sk-transparent sk-text-18-7500-501 sk-text" hover-class="none">更多</navigator>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup></script>
<style lang="sass"></style>