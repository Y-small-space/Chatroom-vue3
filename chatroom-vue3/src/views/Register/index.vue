<script setup>
import { User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { register } from '../../api/register/index'

// const isRight = ref(false)

const formModel = ref({
  userId: '',
  password: '',
  repassword: ''
})

const Register = () => {
  register(formModel.value)
  formModel.value = {
    userId: '',
    password: '',
    repassword: ''
  }
}
</script>

<template>
  <div class="register-form">
    <el-form
      size="large"
      label-position="right"
      label-width="100px"
      style="max-width: 460px"
      :model="formModel"
    >
      <el-form-item label="UserId">
        <el-input v-model="formModel.userId" :suffix-icon="User" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="formModel.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="Repassword">
        <el-input
          v-model="formModel.repassword"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button color="transparent" @click="Register">Register</el-button>
      </el-form-item>
      <el-form-item>
        <el-link href="/" target="_blank">link</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.register-form {
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
