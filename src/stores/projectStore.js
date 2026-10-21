import { defineStore } from 'pinia'
const defaultProjects = [
  {
    id:1,
    name:"个人Vue主页",
    desc:"基于Vue3组合式API开发个人介绍页面，实现组件拆分、主题切换",
    tech:"Vue3、CSS变量",
    date:"2026‑09",
    finished:true
  },
  {
    id:2,
    name:"简易待办清单",
    desc:"前端练习项目，实现增加删除待办",
    tech:"HTML、CSS、JavaScript",
    date:"2026‑08",
    finished:false
  }
]
export const useProjectStore = defineStore('project', {
  state: () => ({
    projectList: (()=>{
      try {
        const str = localStorage.getItem('projectData')
        return str ? JSON.parse(str) : defaultProjects
      }catch(err){
        return defaultProjects
      }
    })()
  }),
  getters: {
    getProjectById: (state) => (id) => {
      return state.projectList.find(p => p.id === id)
    }
  },
  actions: {
    addProject(projObj) {
      const maxId = this.projectList.length>0 ? Math.max(...this.projectList.map(p=>p.id)) : 0
      const newItem = { id: maxId+1, ...projObj }
      this.projectList.push(newItem)
      localStorage.setItem('projectData', JSON.stringify(this.projectList))
    },
    deleteProject(id) {
      const idx = this.projectList.findIndex(p=>p.id===id)
      if(idx !==-1){
        this.projectList.splice(idx,1)
        localStorage.setItem('projectData', JSON.stringify(this.projectList))
      }
    },
    // 新增：编辑项目
    editProject(id, payload){
      const index = this.projectList.findIndex(p=>p.id===id)
      if(index > -1){
        this.projectList[index] = {...this.projectList[index], ...payload}
        localStorage.setItem('projectData', JSON.stringify(this.projectList))
      }
    }
  }
})
