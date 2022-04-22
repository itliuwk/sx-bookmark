import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 接入了Leancloud
import AV from 'leancloud-storage'
// 请注册leancloud,新建应用，然后替换这个
AV.init({ appId: 'HFMWA4O9x5NnnLz809VPr8u6-gzGzoHsz', appKey: 'p6y7Y9fahCmI7nOc1wCJE2BG', serverURL: 'https://hfmwa4o9.lc-cn-n1-shared.com' })

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
