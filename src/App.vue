<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <VueQueryDevtools />
  <main
    id="app-main"
    class="relative w-full h-screen overflow-y-auto"
  >
    <RouterView />
  </main>
</template>
