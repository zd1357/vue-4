<template>
  <div class="detail-container">
    <div v-if="currProject" class="detail-card">
      <h2 class="proj-name">{{ currProject.name }}</h2>
      <div class="meta-row">
        <span class="status-tag" v-if="currProject.finished">✅ 已完成</span>
        <span class="status-tag dev" v-else>⏳ 开发中</span>
        <span class="time-text">📅 {{ currProject.date }}</span>
      </div>
      <div class="desc-block">
        <h4>项目简介</h4>
        <p>{{ currProject.desc }}</p>
      </div>
      <div class="tech-block">
        <h4>使用技术栈</h4>
        <span class="tech-item">{{ currProject.tech }}</span>
      </div>
      <div class="btn-group">
        <button class="btn-back" @click="goBack">← 返回上一页(go(-1))</button>
        <button class="btn-list" @click="goList">返回项目列表(replace)</button>
      </div>
    </div>
    <div v-else class="error-block">
      <h3>😕 无效项目ID</h3>
      <p>该项目不存在，请检查访问地址</p>
      <button class="btn-error" @click="goList">回到项目列表</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore'

const route = useRoute()
const router = useRouter()
const projStore = useProjectStore()

const currProject = computed(()=>{
  const id = Number(route.params.id)
  return projStore.getProjectById(id)
})

const goBack = ()=>{
  router.go(-1)
}
const goList = ()=>{
  router.replace({name:'ProjectList'})
}
</script>



<style scoped>
.detail-container{
  max-width:720px;
  margin:0 auto;
  color:var(--text-main);
}
.detail-card{
  background:var(--card-bg);
  padding:28px;
  border-radius:12px;
  box-shadow:var(--card-shadow);
}
.proj-name{
  font-size:26px;
  margin-bottom:12px;
}
.meta-row{
  display:flex;
  gap:14px;
  align-items:center;
  margin-bottom:24px;
}
.status-tag{
  padding:4px 12px;
  border-radius:14px;
  background:#e8f7ef;
  color:#279e59;
  font-size:14px;
}
.status-tag.dev{
  background:#fff3e0;
  color:#e67c22;
}
.time-text{
  color:var(--text-secondary);
  font-size:14px;
}
.desc-block, .tech-block{
  margin-bottom:22px;
}
.desc-block h4,.tech-block h4{
  margin-bottom:8px;
  font-size:17px;
}
.tech-item{
  display:inline-block;
  background:var(--skill-bg);
  color:var(--skill-text);
  padding:6px 14px;
  border-radius:20px;
}
.btn-group{
  display:flex;
  gap:12px;
  margin-top:28px;
}
.btn-back,.btn-list{
  padding:8px 16px;
  border-radius:8px;
  border:none;
  cursor:pointer;
  transition:0.2s;
}
.btn-back{
  background:#cccccc;
  color:#222;
}
.btn-list{
  background:var(--btn-bg);
  color:white;
}
.btn-back:hover,.btn-list:hover{
  opacity:0.85;
}
.error-block{
  text-align:center;
  padding:40px 20px;
  background:var(--card-bg);
  border-radius:12px;
  box-shadow:var(--card-shadow);
}
.error-block h3{
  margin-bottom:12px;
}
.error-block p{
  color:var(--text-secondary);
  margin-bottom:20px;
}
.btn-error{
  padding:8px 18px;
  border:none;
  border-radius:8px;
  background:var(--btn-bg);
  color:white;
  cursor:pointer;
}
</style>
