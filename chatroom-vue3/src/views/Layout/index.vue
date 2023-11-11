<script setup>
import Bar from '../Bar/index.vue'
</script>
<template>
  <div class="layout">
    <el-container class="container">
      <el-header class="header"><Bar /></el-header>
      <el-main class="main"><router-view /></el-main>
      <el-footer class="footer">Chat Room ©2023 Created by JY</el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.layout {
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  background-image: url('../../assets/05.png');
  background-size: 110%;
  background-position: center;
}
.container {
  height: 100%;
}
.header {
  width: 100%;
  --el-header-padding: 0;
}
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
}
</style>
