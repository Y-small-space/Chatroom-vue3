import axios from 'axios'
const userId = localStorage.getItem('userId')

export const getFriendList = () => {
  axios
    .get(`http://localhost:4000/api/friendList?userId=${userId}`)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log('Axios请求失败：', error)
    })
}
