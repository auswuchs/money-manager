<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/TheSidebar.vue';



</script>

<template>
  <The-Header></The-Header>

  <The-Sidebar></The-Sidebar>

  <div class="app-main-layout">
    <main class="app-content">
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