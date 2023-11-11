<script setup>
import { User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { login } from '../../api/login/index'
import { useRouter } from 'vue-router'

const router = useRouter()

const userMessage = ref({
  username: '',
  password: ''
})

const Login = () => {
  login(userMessage.value) && router.push('/layout')
  console.log(userMessage.value)
}
</script>

<template>
  <div class="login-form">
    <el-form
      label-position="right"
      label-width="100px"
      style="max-width: 460px"
      :model="userMessage"
    >
      <el-form-item label="UserId">
        <el-input :suffix-icon="User" v-model="userMessage.username" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          type="password"
          show-password
          v-model="userMessage.password"
        />
      </el-form-item>
      <el-form-item>
        <el-link href="/JY/register" target="_blank">link</el-link>
      </el-form-item>
      <el-form-item>
        <el-button @click="Login"> login </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.login-form {
  height: 100vh;
  background-image: url('../../assets/01.png');
  background-size: 110%;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #000;
}
</style>
