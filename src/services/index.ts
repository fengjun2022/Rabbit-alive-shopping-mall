import type {
  getHomeBannerItem,
  getHomeCategoryMutliItem,
  getHomehotMutliItem,
  getHomeNewItem,
  getHomeGoodsGuessLikeItem,
} from '@/types/home'
import { http } from '@/utils/http'
import type { Pages } from '@/types/common'

// 广告轮播图
export const getHomeBanner = (distributionSite: number = 1) => {
  return http<getHomeBannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    // 传递参数
    data: {
      distributionSite,
    },
  })
}
// 前台分类
export const getHomeCategoryMutli = () => {
  return http<getHomeCategoryMutliItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
// 热门推荐
export const getHomehotMutli = () => {
  return http<getHomehotMutliItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
// 新鲜好物
export const getHomeNew = (limit: number = 4) => {
  return http<getHomeNewItem[]>({
    method: 'GET',
    url: '/home/new',
    data: {
      limit,
    },
  })
}
// 猜你喜欢

export const getHomeGoodsGuessLike = (pages: Pages) => {
  return http<getHomeGoodsGuessLikeItem>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: {
      ...pages,
    },
  })
}
