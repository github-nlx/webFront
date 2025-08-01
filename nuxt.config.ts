// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 9527, // 自定义端口号
    // host: '0.0.0.0' // 允许远程访问
  },
  modules: ['@element-plus/nuxt'],
  css: ['element-plus/dist/index.css','@/styles/index.scss'], // 全局样式
  // elementPlus: {
  //   // 可选：主题配置（如暗黑模式）
  //   themes: ['dark'],
  //   // 自动导入图标
  //   importStyle: 'css',
  //   icon: true 
  // }
})