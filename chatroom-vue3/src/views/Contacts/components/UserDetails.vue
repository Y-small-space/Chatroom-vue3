<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <div>UserDetails-{{ route.params.userId }}</div>
</template>
