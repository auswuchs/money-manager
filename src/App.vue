<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, defineAsyncComponent } from 'vue';

const mainLayout = defineAsyncComponent(() => import("@/layouts/MainLayout.vue"))
const authLayout = defineAsyncComponent(() => import("@/layouts/AuthLayout.vue"))

const route = useRoute()
const layout = computed(() => route.meta.layout === 'main' ? mainLayout : authLayout)

</script>

<template>
  <component :is="layout">
    <RouterView></RouterView>
  </component>
</template>
  


<style lang="scss">
@import "../node_modules/materialize-css/dist/css/materialize.min.css";
@import "@/assets/base.scss";
@import "@/assets/index.scss";
</style>
