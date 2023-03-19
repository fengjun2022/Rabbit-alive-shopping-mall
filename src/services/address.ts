import {
  getMemberAddressItem,
  addTheShippingAddressParameter,
  modificationAddressItem,
} from '@/types/addrees'
import { http } from '@/utils/http'

export const getMemberAddress = () => {
  return http<getMemberAddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 *
 */
export const postMemberAddress = (data: addTheShippingAddressParameter) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const modificationAddress = (
  data: modificationAddressItem,id: string) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

export const delAddress = (id:string)=>{
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`

  })
}