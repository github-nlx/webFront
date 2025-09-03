// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: 'server',
  ssr: true,
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
  },
  // 全局SEO配置
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Levin Law Firm' },
        { name: 'description', content: 'Experienced attorneys providing legal representation in various practice areas including personal injury, drug injuries, and class action lawsuits.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Levin Law Firm' },
        { property: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: 'https://levinlaw.com/' }
      ]
    }
  },
  // 优化性能
  vite: {
    build: {
      minify: true,
      chunkSizeWarningLimit: 1000
    }
  },
  // elementPlus: {
  //   // 可选：主题配置（如暗黑模式）
  //   themes: ['dark'],
  //   // 自动导入图标
  //   importStyle: 'css',
  //   icon: true 
  // }
})