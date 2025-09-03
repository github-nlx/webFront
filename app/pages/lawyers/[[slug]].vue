<template>
  <div>
    <webHeader />
    <div ref="contentContainer" v-if="pageHtml">
      <!-- 为SEO优化，先显示加载状态文本 -->
      <div v-if="isLoading" class="loading-content">
        <h1 class="page-title">Loading attorney information...</h1>
        <p>Please wait while we load the attorney's profile.</p>
      </div>
      <div v-html="pageHtml"></div>
    </div>
    <otherApp />
    <webFooter />
  </div>

</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'
import { createError } from 'h3'
import { navigateTo } from 'nuxt/app'
import { useHead } from '@unhead/vue'

const route = useRoute()
const slug = ref(route.params.slug)
const pageHtml = ref('')
const isLoading = ref(true)
const contentContainer = ref(null)

// 动态设置页面标题和meta标签
const setPageMeta = (pageContent) => {
  if (!pageContent) return
  
  // 从内容中提取标题
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = pageContent
  
  let title = "Attorney Profile - Levin Law Firm"
  let description = "Experienced attorney at Levin Law Firm specializing in various legal practice areas."
  let keywords = "attorney, lawyer, legal services, Levin Law Firm"
  
  // 尝试从内容中提取标题
  const h1Element = tempDiv.querySelector('h1')
  if (h1Element) {
    title = h1Element.textContent.trim() + " - Levin Law Firm"
  }
  
  // 尝试从内容中提取元描述
  const metaDescription = tempDiv.querySelector('meta[name="description"]')
  if (metaDescription) {
    description = metaDescription.content
  } else {
    // 如果没有meta描述，尝试从第一个p标签获取
    const pElement = tempDiv.querySelector('p')
    if (pElement) {
      description = pElement.textContent.trim().substring(0, 160) + '...'
    }
  }
  
  // 设置页面meta信息
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: `https://levinlaw.com/lawyers/${slug.value}` },
      { rel: 'canonical', href: `https://levinlaw.com/lawyers/${slug.value}` }
    ]
  })
}

// 获取页面内容
const fetchPageContent = async () => {
  try {
    isLoading.value = true
    const res = await $fetch(`https://levin-law-backend.vercel.app/api/html/${slug.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    pageHtml.value = res.slice(1, res.length - 1)
    setPageMeta(pageHtml.value)
    
    // 添加结构化数据标记
    addStructuredData()
    
  } catch (err) {
    navigateTo('/404')
    throw createError({
      statusCode: 404,
      statusMessage: 'NOT FOUND'
    })
  } finally {
    isLoading.value = false
  }
}

// 添加JSON-LD结构化数据
const addStructuredData = () => {
  if (!contentContainer.value) return
  
  // 创建结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Levin Law Firm Attorney",
    "description": "Experienced legal professional providing representation in various practice areas.",
    "url": `https://levinlaw.com/lawyers/${slug.value}`,
    "legalService": {
      "@type": "LegalService",
      "name": "Levin Law Firm",
      "description": "Full-service law firm specializing in personal injury, drug injuries, and class action lawsuits.",
      "telephone": "(800) 226-6581",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "920 N. Federal Highway",
        "addressLocality": "Pompano Beach",
        "addressRegion": "FL",
        "postalCode": "33062",
        "addressCountry": "US"
      }
    }
  }
  
  // 检查是否已经存在结构化数据脚本
  let script = document.querySelector('script[type="application/ld+json"]')
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    document.head.appendChild(script)
  }
  
  script.textContent = JSON.stringify(structuredData)
}

// 监听路由变化
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    slug.value = newSlug
    fetchPageContent()
  }
})

// 组件挂载时获取内容
onMounted(() => {
  fetchPageContent()
})

</script>

<style lang="scss">
  .page-title {
    padding: 70px 0 30px;
    text-align: center;
  }
  
  .loading-content {
    padding: 40px 20px;
    text-align: center;
    background-color: #f8f9fa;
    margin: 20px 0;
    border-radius: 8px;
  }
  
  // 优化图片加载
  img {
    loading: 'lazy';
    max-width: 100%;
    height: auto;
  }
</style>