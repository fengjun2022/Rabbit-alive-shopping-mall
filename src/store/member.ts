import { defineStore } from 'pinia'
import { postLoginWxMinItem } from '@/types/login'
import { ref, computed } from 'vue'
export const useMemberStore = defineStore(
  'member',
  () => {
    const profile = ref<postLoginWxMinItem>({} as postLoginWxMinItem)
    const isLogin = computed(() => profile.value?.token)

    const setMemberProfile = (data: postLoginWxMinItem) => {
      profile.value = data
    }

// 默认头像
const defultImg =
  'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/avatar_3.jpg'
const showAvatar = computed(() => {
  return profile.value.avatar ? profile.value.avatar : defultImg
})
// 定义名称
const showNickname = computed(() => {
  return profile.value.nickname ? profile.value.nickname : '未登录'
})



    return {
      setMemberProfile,
      profile,
      isLogin,
      showAvatar,
      showNickname
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return wx.getStorageSync(key)
        },
        setItem(key, value) {
          wx.setStorageSync(key, value)
        },
      },
    },
  }
)
