import axios from 'axios'

const userId = localStorage.getItem('userId')

export const getAllhistory = () => {
  axios
    .get(`http://localhost:4000/api/chatHistory/${userId}`)
    .then((res) => {
      return res
    })
    .catch((error) => {
      console.log('Axios请求失败：', error)
    })
}
