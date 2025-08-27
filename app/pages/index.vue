<template>
  <div v-html="pageHtml" class="pageHtml"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const pageHtml = ref('')
// onMounted(() => {
//   $fetch("https://levin-law-backend.vercel.app/api/html/AlveryBartlett-AegisCapitalCorp-Broker-LevinLaw", {
//     query: { name: "michael 20fallentine" },
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then((res) => {
//     pageHtml.value = res.slice(1,res.length - 1)
//   });
// });
</script>

<style lang="scss" scoped></style>
