<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="grey darken-1 empty-layout">
    <slot>
      <router-view></router-view>
    </slot>
  </div>
</template>