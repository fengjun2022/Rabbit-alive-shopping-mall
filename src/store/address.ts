import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  getMemberAddressItem,
  addTheShippingAddressParameter,
} from '@/types/addrees'

export const useAddress = defineStore('address', () => {
  let addressList = ref<getMemberAddressItem[]>([])

 
const setAddressList = (data: getMemberAddressItem[]) => {
    addressList.value = data
  }

  return {
    addressList,
    setAddressList,
  }
})
