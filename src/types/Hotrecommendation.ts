export type hotRecommendationItem = {
  /**
   * 活动图片
   */
  bannerPicture: string
  /**
   * id信息
   */
  id: string
  /**
   * 子类选项集合
   */
  subTypes: SubType[]
  /**
   * 活动标题
   */
  title: string
}

/**
 * 子类选项
 */
export type SubType = {
  goodsItems: GoodsItem
  /**
   * 子类选项id
   */
  id: string
  /**
   * 子类选项名称
   */
  title: string
}

export type GoodsItem = {
  /**
   * 总数量
   */
  counts: string
  /**
   * 商品集合
   */
  items: Item[]
  /**
   * 页码
   */
  page: string
  /**
   * 总页数
   */
  pages: string
  /**
   * 页容量
   */
  pageSize: string
}

/**
 * 商品项
 */
export type Item = {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
