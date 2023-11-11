<template>
  <div class="bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item class="margin" index="chat">Chat</el-menu-item>
      <el-menu-item class="margin" index="contacts">Contacts</el-menu-item>
      <el-dropdown class="avator">
        <el-avatar :size="50">{{ userId }}</el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const handleSelect = (key) => {
  router.push(`/layout/${key}`)
}
const userId = localStorage.getItem('userId')
</script>

<style scoped>
.el-menu-demo {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}
.margin {
  margin-left: 50px;
}
.avator {
  margin-left: 1000px;
  display: flex;
  align-items: center;
  float: right;
}
</style>
>
