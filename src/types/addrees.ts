/**
 * 获取收货地址数据结构
 */
export type getMemberAddressItem = {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 省市区(县)
   */
  fullLocation: string;
  /**
   * 收货地址id
   */
  id: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
}

/**
 * empty object，收货地址：请求体参数
 */
export type addTheShippingAddressParameter = {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
}

/** 
*修改
*/

export type modificationAddressItem = {
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 所在城市编码
   */
  cityCode?: string;
  /**
   * 联系方式
   */
  contact?: string;
  /**
   * 所在区/县编码
   */
  countyCode?: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault?: number;
  /**
   * 所在省份编码
   */
  provinceCode?: string;
  /**
   * 收货人姓名
   */
  receiver?: string;
}
