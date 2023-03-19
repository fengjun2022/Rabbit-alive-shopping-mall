import { getCategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTop = () => {
  return http<getCategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
