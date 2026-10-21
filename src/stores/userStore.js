import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin: localStorage.getItem('isLogin') === 'true',
    userIntro: localStorage.getItem('userIntro') || "专业是计算机前端开发，热爱Vue，爱好编程、阅读。平时喜欢研究网页交互效果，正在学习Vue3基础知识。"
  }),
  getters: {
    isAuthenticated: (state) => state.isLogin
  },
  actions: {
    login() {
      this.isLogin = true
      localStorage.setItem('isLogin', 'true')
    },
    logout() {
      this.isLogin = false
      localStorage.removeItem('isLogin')
    },
    updateIntro(text) {
      this.userIntro = text
      // 普通字符串，不需要JSON.stringify
      localStorage.setItem('userIntro', text)
    }
  }
})
