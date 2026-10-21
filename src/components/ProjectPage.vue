<template>
  <div class="project-page">
    <h2 class="page-title">我的项目展示</h2>
    <ProjectCard
      v-for="proj in projectList"
      :key="proj.id"
      :project-item="proj"
    >
      <template #card-header>
        <h3>
          <RouterLink :to="{name:'projectDetail', params:{projectId:proj.id}}">
            {{ proj.name }}
          </RouterLink>
        </h3>
      </template>
      <p>{{ proj.desc }}</p>
      <p>技术栈：{{ proj.tech }}</p>
      <template #card-action="{ project }">
        <div class="action-area">
          <span v-if="project.finished">✅已完成</span>
          <span v-else>⏳开发中</span>
        </div>
      </template>
      <template #card-footer>
        <div class="footer-tip">项目时间：{{ proj.date }}</div>
      </template>
    </ProjectCard>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectCard from './ProjectCard.vue'

const projectList = ref([
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
])
</script>
<style scoped>
.page-title {
  color: var(--text-main);
  text-align: center;
  margin: 20px 0;
}
.project-page h3 {
  color: var(--text-main);
}
.project-page p {
  color: var(--text-secondary);
}
.project-page span {
  color: var(--text-main);
}
</style>
