import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCateforyTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
