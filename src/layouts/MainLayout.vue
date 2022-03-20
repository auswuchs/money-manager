<script setup lang="ts">
import { ref } from 'vue'

import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/TheSidebar.vue';


const isAsideOpen = ref<boolean>(true)

const toggleSidebar = () => {
  isAsideOpen.value = !isAsideOpen.value
}

</script>

<template>
  <The-Header @toggleSidebar="toggleSidebar"></The-Header>

  <The-Sidebar v-model="isAsideOpen"></The-Sidebar>

  <div class="app-main-layout">
    <main class="app-content" :class="{ 'full': !isAsideOpen }">
      <div class="app-page">
        <slot></slot>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>