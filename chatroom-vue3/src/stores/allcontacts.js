import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'

const userId = localStorage.getItem('userId')

export const useContactListStore = defineStore('counter', () => {
  const allContactsList = ref()

  const getContactsList = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/friendList?userId=${userId}`
    )
    console.log(res.data)
    allContactsList.value = res.data
  }

  return { allContactsList, getContactsList }
})
