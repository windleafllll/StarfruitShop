import type YtxxGuess from '@/components/YtxxGuess.vue'
import YtxxSwiper from './YtxxSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    YtxxSwiper: typeof YtxxSwiper
    YtxxGuess: typeof YtxxGuess
  }
}

//组件事列类型
export type YtxxGuessInstance = InstanceType<typeof YtxxGuess>
