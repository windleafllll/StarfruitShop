<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotPanelAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { YtxxGuessInstance } from '@/types/components'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  console.log(res)
  categoryList.value = res.result
}

const hotBannerList = ref<HotItem[]>([])

const getHomeHotBannerData = async () => {
  const res = await getHomeHotPanelAPI()
  hotBannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotBannerData()
})
//获取组件实例
const guessRef = ref<YtxxGuessInstance>()
//滑动触底触发
const onScorlltolower = () => {
  guessRef.value?.getMore()
}

const isTriggered = ref(false)

//自定义下拉刷新被触发
const onrefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotBannerData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onrefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScorlltolower"
    class="scorll-view"
    scroll-y
  >
    <YtxxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotBannerList" />
    <YtxxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scorll-view {
  flex: 1;
}
</style>
