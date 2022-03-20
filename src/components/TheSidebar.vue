<script setup lang="ts">

const links = [
  { title: 'Счёт', name: 'home' },
  { title: 'История', name: 'history' },
  { title: 'Планирование', name: 'planning' },
  { title: 'Новая запись', name: 'record' },
  { title: 'Категории', name: 'categories' },
]


</script>

<template>
  <aside>
    <ul class="sidenav app-sidenav open">
      <li active-class="active" v-for="link in links" :key="link.title">
        <router-link
          class="waves-effect waves-orange pointer"
          :to="{ name: link.name }"
        >{{ link.title }}</router-link>
      </li>
    </ul>
  </aside>
</template>