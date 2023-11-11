<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
// import { ArrowRight } from '@element-plus/icons-vue'
const userId = localStorage.getItem('userId')

const allhistory = ref()
const userName = ref([])
const selectedUser = ref()
const getAllhistory = () => {
  axios
    .get(`http://localhost:4000/api/chatHistory/${userId}`)
    .then((res) => {
      allhistory.value = res.data
    })
    .catch((error) => {
      console.log('Axios请求失败：', error)
    })
}
const selectUser = (userId) => {
  selectedUser.value = userId
  console.log(selectedUser.value)
}

// const isTure = (item) => {
//   console.log(item == selectedUser.value ? 'true' : 'false')
// }

onMounted(async () => {
  getAllhistory()
})

watch(allhistory, (allhistory) => {
  console.log(allhistory)
  const newUser = []
  allhistory.forEach((item) => {
    if (
      !newUser.includes(item.receiver_username) &&
      item.receiver_username !== undefined &&
      item.receiver_username !== userId
    ) {
      newUser.push(item.receiver_username)
    }
    if (
      item.receiver_username === userId &&
      !newUser.includes(item.sender_username)
    ) {
      newUser.unshift(item.sender_username)
    }
  })
  userName.value = newUser
})
</script>
<template>
  <div class="contacts">
    <el-container>
      <el-aside class="side">
        <el-scrollbar max-height="600px">
          <el-card
            v-for="item in userName"
            :key="item"
            class="userCard"
            shadow="false"
            @click="selectUser(item)"
          >
            <el-avatar class="avatar" :size="40">{{ item[0] }}</el-avatar>
            <div class="user">
              <p>{{ item }}</p>
              <p>message</p>
            </div>
          </el-card>
        </el-scrollbar>
      </el-aside>
      <el-main class="main">
        <el-container>
          <el-main class="contactList">111</el-main>
          <el-footer class="input">111</el-footer>
        </el-container>
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
  border: 1px solid rgb(100, 100, 100, 0.5);
}

.main {
  margin-left: 20px;
  border: 1px solid rgb(100, 100, 100, 0.5);
}

.el-card {
  --el-card-padding: 10px;
}

.userCard {
  width: 100%;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid rgb(100, 100, 100, 0.5);
}
.avatar {
  float: left;
  margin-right: 20px;
}
.user p:nth-child(1) {
  font-size: 16px;
}
.icon {
  float: left;
  color: red;
}

.contactList {
  height: 400px;
  border-bottom: 1px solid black;
}
</style>
