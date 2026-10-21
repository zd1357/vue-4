<template>
  <div class="list-container">
    <h3 class="list-title">全部项目</h3>
    <div class="project-list-wrap">
      <ProjectCard v-for="proj in projectList" :key="proj.id" :project-item="proj">
        <template #card-header>
          <h3>{{ proj.name }}</h3>
        </template>
        <p>{{ proj.desc }}</p>
        <p class="tech-line">技术栈：{{ proj.tech }}</p>
        <template #card-action="{ project }">
          <div class="action-row">
            <span class="tag" v-if="project.finished">✅ 已完成</span>
            <span class="tag dev" v-else>⏳ 开发中</span>
            <button class="btn-detail" @click="goDetail(project.id)">查看详情</button>
          </div>
        </template>
        <template #card-footer>
          <div class="footer-time">📅 项目时间：{{ proj.date }}</div>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { useProjectStore } from '../stores/projectStore'
import { storeToRefs } from 'pinia'

const router = useRouter()
const projStore = useProjectStore()
const { projectList } = storeToRefs(projStore)

const goDetail = (id)=>{
  router.push({name:'ProjectDetail', params:{id}})
}
</script>


<style scoped>
.list-container{
  color:var(--text-main);
}
.list-title{
  text-align:center;
  font-size:22px;
  margin-bottom:20px;
}
.project-list-wrap{
  display:flex;
  flex-direction:column;
  gap:14px;
}
.tech-line{
  color:var(--text-secondary);
  margin:6px 0;
}
.action-row{
  display:flex;
  align-items:center;
  gap:12px;
  margin-top:10px;
}
.tag{
  padding:3px 10px;
  border-radius:12px;
  font-size:14px;
  background:#e8f7ef;
  color:#279e59;
}
.tag.dev{
  background:#fff3e0;
  color:#e67c22;
}
.btn-detail{
  padding:5px 14px;
  border:none;
  border-radius:6px;
  background:var(--btn-bg);
  color:white;
  cursor:pointer;
  transition:0.2s;
}
.btn-detail:hover{
  opacity:0.85;
}
.footer-time{
  margin-top:8px;
  color:var(--text-secondary);
  font-size:14px;
}
</style>
