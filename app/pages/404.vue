<template>
  <!-- 简约居中布局 -->
  <div class="not-found-container">
    <!-- 主标题 -->
    <h1 class="title">404</h1>
    <!-- 提示信息 -->
    <p class="message">Oops, the page you're looking for isn't here.</p>
    <!-- 返回首页链接 -->
    <a href="https://levinlaw.com/" class="home-link">Back to Home</a>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑，Nuxt 自动处理 404 跳转
</script>

<style scoped>
/* 简约样式 */
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* 占满整个视口高度 */
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 4rem;
  color: #333;
  margin-bottom: 1rem;
}

.message {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.home-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.home-link:hover {
  background-color: #ccc;
}
</style>