<template>
  <div>
    <webHeader />
    <div v-html="pageHtml">
    </div>
    <otherApp />
    <webFooter />
  </div>

</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { useRoute } from 'vue-router'
    import { createError } from 'h3'
    import { navigateTo } from 'nuxt/app'

    const route = useRoute()
    const slug = ref(route.params.slug)
    console.log(route.params);
    const pageHtml = ref('')
    $fetch("https://levin-law-backend.vercel.app/api/html/" + slug.value, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        // console.log(res);
        pageHtml.value = res.slice(1,res.length - 1)
      }).catch((err) => {
        navigateTo('/404')
        throw createError({
          statusCode: 404,
          statusMessage: 'NOT FOUND'
        })
      });

</script>

<style lang="scss">
  .page-title {
        padding: 70px 0 30px;
    text-align: center;
  }
</style>