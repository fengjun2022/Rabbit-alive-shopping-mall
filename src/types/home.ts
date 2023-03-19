export type getHomeBannerItem = {
  /**
   * 跳转链接
   */
  hrefUrl: string
  /**
   * id
   */
  id: string
  /**
   * banner链接
   */
  imgUrl: string
  /**
   * 跳转类型1、页面2、H5 3、小程序（小程序使用）
   */
  type: number
}

export type getHomeCategoryMutliItem = {
  id: string
  name: string
  icon: string
}

export type getHomehotMutliItem = {
  /**
   * 推荐说明
   */
  alt: string
  /**
   * id
   */
  id: string
  /**
   * 图片集合
   */
  pictures: string[]
  /**
   * 跳转地址
   */
  target: string
  /**
   * 推荐标题
   */
  title: string
  /**
   * 推荐类型
   */
  type: string
}
export type getHomeNewItem = {
  /**
   * 备注
   */
  desc: string
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品图片链接
   */
  picture: string
  /**
   * 价格
   */
  price: number
}

export type getHomeGoodsGuessLikeItem = {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: getHomeGoodsGuessLikeItemResult[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}

export type getHomeGoodsGuessLikeItemResult = {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品已下单数量
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
