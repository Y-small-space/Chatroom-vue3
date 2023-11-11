import { ElMessage } from 'element-plus'

// const route = useRouter()

export const register = async ({ username, password }) => {
  if (password.length < 8) {
    ElMessage({
      showClose: true,
      message: '密码必须大于八位！',
      type: 'warning'
    })
    return
  }

  try {
    const response = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      // 注册成功，可以进行重定向或显示成功消息
      ElMessage({
        showClose: true,
        message: '注册成功',
        type: 'success'
      })
      localStorage.setItem('userId', username)
    } else {
      const data = await response.json()
      if (data.error.includes('用户名已存在')) {
        ElMessage({
          showClose: true,
          message: '您的用户名已经有人注册！',
          type: 'warning'
        })
        return
      } else if (data.error.includes('密码必须')) {
        ElMessage({
          showClose: true,
          message: '密码必须8位！！！',
          type: 'warning'
        })
        return
      }
      // 注册失败，处理错误情况
      console.error('注册失败！')
    }
  } catch (error) {
    console.error('发生错误：', error)
  }
}
