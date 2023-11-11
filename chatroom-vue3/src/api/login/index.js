import { ElMessage } from 'element-plus'

export const login = async ({ username, password }) => {
  try {
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      localStorage.setItem('userId', username)
      ElMessage.success('登录成功！！！')
      return true
    } else {
      ElMessage.error('登录失败！！！')
    }
  } catch (error) {
    console.error('发生错误：', error)
  }
}
