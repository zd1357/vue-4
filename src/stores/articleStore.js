import { defineStore } from 'pinia'
const defaultArticles = [
  {
    id:1,
    title:"Vue3组合式API学习笔记",
    content:"setup语法糖、ref、reactive学习记录",
    createTime:"2026‑10‑01"
  },
  {
    id:2,
    title:"Vue Router4路由学习",
    content:"路由守卫、嵌套路由、动态路由参数",
    createTime:"2026‑10‑05"
  }
]
export const useArticleStore = defineStore('article', {
  state:()=>({
    articleList: (()=>{
      try{
        const s = localStorage.getItem('articleData')
        return s ? JSON.parse(s) : defaultArticles
      }catch{
        return defaultArticles
      }
    })()
  }),
  getters:{},
  actions:{
    addArticle(art){
      const maxId = this.articleList.length>0 ? Math.max(...this.articleList.map(a=>a.id)) :0
      const newArt = { id:maxId+1, ...art }
      this.articleList.push(newArt)
      localStorage.setItem('articleData', JSON.stringify(this.articleList))
    },
    deleteArticle(id){
      const i = this.articleList.findIndex(a=>a.id===id)
      if(i!==-1){
        this.articleList.splice(i,1)
        localStorage.setItem('articleData', JSON.stringify(this.articleList))
      }
    },
    // 新增编辑文章
    editArticle(id,payload){
      const idx = this.articleList.findIndex(a=>a.id===id)
      if(idx>-1){
        this.articleList[idx] = {...this.articleList[idx],...payload}
        localStorage.setItem('articleData',JSON.stringify(this.articleList))
      }
    }
  }
})
