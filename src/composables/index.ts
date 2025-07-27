import type { YtxxGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
  //获取猜你喜欢组件实列
  const guessRef = ref<YtxxGuessInstance>()

  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  //返回ref和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
