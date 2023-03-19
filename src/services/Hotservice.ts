import type { hotRecommendationItem } from '@/types/Hotrecommendation'
import { http } from '@/utils/http'
import type { Pages } from '@/types/common'

type hotData = Pages & { subType?: string }

export const getHotCommon = (url:string,data: hotData) => {
  return http<hotRecommendationItem>({
    method: 'GET',
    url,
    data: {
      ...data,
    },
  })
}

