import { postLoginWxMinItem, postLoginWxMinRequestBody } from '@/types/login'
import { http } from '@/utils/http'

export const postLoginWxMin = (data: postLoginWxMinRequestBody) => {
  return http<postLoginWxMinItem[]>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 内测版
export interface EmptyObject {
  /**
   * 不传加密信息时，模拟的手机号必传
   */
  phoneNumber: string
}

export const postLoginWxMinSimple = (data: EmptyObject) => {
  return http<postLoginWxMinItem>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data,
  })
}
