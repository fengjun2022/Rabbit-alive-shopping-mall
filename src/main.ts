import { createSSRApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
// 导入持久化存储 store 的插件
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export function createApp() {
  const app = createSSRApp(App)

  // 对 pinia 进行注册持久化插件
  const pinia = createPinia()
  pinia.use(PiniaPluginPersistedstate)
  app.use(pinia)
  return {
    app,
  }
}

// 任务：拿到模板代码，找一个干净一点的地方，然后在 vscode 里面打开，再编译成 微信端的代码，用开发者工具打开
// 再简单浏览一下已经写好的模板
