import type { GoodsItem, PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

type hotParams = PageParams & { subTypes?: string }

export const getHotRecpmmendAPI = (url: string, data?: hotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
