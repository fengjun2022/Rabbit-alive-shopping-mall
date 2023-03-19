import { http } from '@/utils/http'
import { getMemberProfileItem, putMemberProfileItem } from '@/types/profile'
export const getMemberProfile = () => {
  return http<getMemberProfileItem>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfile = (data: putMemberProfileItem) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}

export const postmemberProfileAvatar = () => {
  return http({
    method: 'POST',
    url: '/member/profile/avatar',
  })
}
