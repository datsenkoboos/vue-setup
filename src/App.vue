<script setup lang="ts">
import { useRouteLayout } from './composables'

const { layout } = useRouteLayout()
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
