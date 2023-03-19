import type { RES } from '@/types/index'
// 请求拦截器
import { useMemberStore } from '@/store/member'
import { storeToRefs } from 'pinia'

const { isLogin, profile } = storeToRefs(useMemberStore())

// 公共的请求
const publicRequest = {
  invoke(args: UniApp.RequestOptions) {
    args.url = BaseUrl + args.url
    args.header = {
      ...args.header,
      'source-client': 'miniapp',
    }
    if (isLogin) {
      args.header.Authorization = profile.value.token
    }
  },
}

const BaseUrl = 'https://pcapi-xiaotuxian-front.itheima.net'
uni.addInterceptor('request', publicRequest)
uni.addInterceptor('uploadFile', publicRequest)

/**
 * 二次封装http发送请求
 */
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<RES<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data as RES<T>)
        } else if (res.statusCode === 401) {
          uni.showToast({ icon: 'error', title: '登录失效请重新登录' })
          reject('token过期了')

          setTimeout(() => {
            uni.switchTab({ url: '/pages/my/index' })
          }, 1500)
        }
      },
      fail: (error) => {
        reject(error)
      },

      complete: () => {
        // 在请求完成时，统一的去做一些 something
      },
    })
  })
}
