import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const userId = localStorage.getItem('userId')

export const useAllHistoryStore = defineStore('allhistory', () => {
  const allHistoryList = ref()
  const getAllHistoryList = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/chatHistory/${userId}`
    )

    allHistoryList.value = res.data
  }

  return { allHistoryList, getAllHistoryList }
})
