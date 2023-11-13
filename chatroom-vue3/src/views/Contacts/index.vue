<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useContactListStore } from '../../stores/allcontacts'
import { useRouter } from 'vue-router'

const router = useRouter()
const contactsListStore = useContactListStore()
const { allContactsList } = storeToRefs(contactsListStore)
const { getContactsList } = contactsListStore
const selectedUser = ref()
const selectUser = (userId) => {
  selectedUser.value = userId
}
const buttonClick = () => {
  router.push({ path: '/layout/contacts/searchuserpage' })
}
watch(allContactsList, (allContactsList) => {
  console.log(allContactsList)
})
onMounted(() => {
  getContactsList()
})
</script>
<template>
  <div class="contacts">
    <el-container>
      <el-aside class="side">
        <el-button class="button" @click="buttonClick" size="large" text>Add Friends</el-button>
        <div class="contactList">
          <el-scrollbar>
            <el-card
              v-for="item in allContactsList"
              :key="item._id"
              :class="{
                userCard: true,
                active: selectedUser === item.username
              }"
              shadow="never"
              @click="selectUser(item.username)"
            >
              <el-avatar class="avatar" :size="40">{{
                item.username[0]
              }}</el-avatar>
              <div class="user">
                {{ item.username }}
              </div>
            </el-card>
          </el-scrollbar>
        </div>
      </el-aside>
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
  border: 1px solid rgb(100, 100, 100);
}

.el-card {
  --el-card-padding: 5px;
  padding-bottom: 5px;
}
.main {
  margin-left: 20px;
  border: 1px solid rgb(100, 100, 100);
}

.button {
  width: 100%;
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
}
.user {
  float: left;
  height: 30px;
  line-height: 40px;
  font-size: 16px;
  margin-left: 10px;
}

.contactList {
  border-top: 1px solid rgb(100, 100, 100, 0.5);
}
</style>
