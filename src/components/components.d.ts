import YtxxSwiper from './YtxxSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    YtxxSwiper: typeof YtxxSwiper
  }
}
