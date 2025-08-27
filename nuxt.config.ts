// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: 'server',
  // ssr: false,
  devServer: {
    port: 9527, // 自定义端口号
    // host: '0.0.0.0' // 允许远程访问
  },
  modules: [],
  css: ['element-plus/dist/index.css','@/styles/index.scss','@/styles/main.min.css'], // 全局样式
  nitro: {
    devProxy: {
      '/test/': {
        target: 'https://levin-law-backend.vercel.app',
        changeOrigin: true,
        autoRewrite: true
      }
    }
  },
  experimental: {
    crossOriginPrefetch: true
  }
  // elementPlus: {
  //   // 可选：主题配置（如暗黑模式）
  //   themes: ['dark'],
  //   // 自动导入图标
  //   importStyle: 'css',
  //   icon: true 
  // }
})