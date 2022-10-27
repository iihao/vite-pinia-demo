import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import Element from 'element-plus'
import { createPinia } from 'pinia'
//创建pinia实例
const pinia = createPinia()
//挂载到Vue根实例
createApp(App).use(pinia).use(Element).mount('#app')
