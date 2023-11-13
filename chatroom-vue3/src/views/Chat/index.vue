<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useAllHistoryStore } from '../../stores/allhistory'
const allHistoryStore = useAllHistoryStore()
const { allHistoryList } = storeToRefs(allHistoryStore)
const { getAllHistoryList } = allHistoryStore
const userId = localStorage.getItem('userId')
const userName = ref([])
const selectedUser = ref()
const contactList = ref()
const input = ref()
const selectUser = (userId) => {
  selectedUser.value = userId
}

onMounted(async () => {
  getAllHistoryList()
})

watch(allHistoryList, (allhistory) => {
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

watch([selectedUser, allHistoryList], ([selectedUser, allHistoryList]) => {
  const newContactList = []
  allHistoryList.forEach((item) => {
    if (
      (item.sender_username === userId &&
        item.receiver_username === selectedUser) ||
      (item.sender_username === selectedUser &&
        item.receiver_username === userId)
    ) {
      newContactList.push(item)
    }
  })
  contactList.value = newContactList.reverse()
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
            :class="{ userCard: true, active: selectedUser === item }"
            shadow="never"
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
          <el-main class="contactList">
            <el-scrollbar max-height="400px">
              <div class="contactListReverse">
                <el-card
                  shadow="never"
                  :key="item._id"
                  v-for="item in contactList"
                  :class="{
                    userMessage: true,
                    userMessageActive:
                      item.sender_username === userId &&
                      item.receiver_username === item.receiver_username
                  }"
                >
                  {{ item.content }}
                </el-card>
              </div>
            </el-scrollbar>
          </el-main>
          <el-footer>
            <el-input
              resize="none"
              class="input"
              type="textarea"
              size="large"
              v-model="input"
              :rows="7"
            />
          </el-footer>
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

.el-footer {
  --el-footer-padding: 0px;
}

.userCard {
  width: 100%;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid rgb(100, 100, 100, 0.5);
}

.active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.avatar {
  float: left;
  margin-right: 20px;
}
.user p:nth-child(1) {
  font-size: 16px;
}
.contactList {
  height: 400px;
  border-bottom: 1px solid black;
}

.userMessage {
  width: 500px;
  word-wrap: break-word;
  margin-bottom: 10px;
}

.userMessageActive {
  float: right;
}

.contactListReverse {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.input {
  margin-top: 10px;
  width: 100%;
  word-wrap: break-word;
  scroll-behavior: auto;
  resize: unset !important;
}
</style>
