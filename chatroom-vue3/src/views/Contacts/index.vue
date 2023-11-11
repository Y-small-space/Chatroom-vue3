<template>
  <div class="contacts">
    <el-container>
      <el-aside class="side">1</el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.contacts {
  height: 600px;
  width: 80%;
  padding: 20px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.side {
  height: 600px;
  padding: 20px;
  border: 1px solid rgb(100, 100, 100);
}

.main {
  margin-left: 20px;
  border: 1px solid rgb(100, 100, 100);
}
</style>
