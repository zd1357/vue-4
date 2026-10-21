<template>
  <div class="admin-wrap">
    <div class="admin-header">
      <h2>⚙️后台管理中心</h2>
      <p class="admin-desc">仅登录用户可以访问，用于编辑个人与项目信息</p>
    </div>
    <div class="admin-nav">
      <RouterLink :to="{name:'AdminProfile'}" class="admin-link" active-class="admin-active">📝编辑个人简介</RouterLink>
      <RouterLink :to="{name:'AdminProject'}" class="admin-link" active-class="admin-active">🗂️编辑项目信息</RouterLink>
      <RouterLink :to="{name:'AdminArticle'}" class="admin-link" active-class="admin-active">📝文章管理</RouterLink>

      <button class="logout-btn" @click="logout">🚪退出登录</button>
    </div>
    <div class="admin-content">
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
const router = useRouter()
const userStore = useUserStore()

const logout = ()=>{
  userStore.logout()
  router.push({name:'Home'})
}
</script>


<style scoped>
.admin-wrap{
  max-width:900px;
  margin:0 auto;
  color:var(--text-main);
}
.admin-header{
  text-align:center;
  padding-bottom:16px;
  border-bottom:1px solid var(--input-border);
  margin-bottom:20px;
}
.admin-header h2{
  font-size:26px;
  margin-bottom:8px;
}
.admin-desc{
  color:var(--text-secondary);
  font-size:15px;
}
.admin-nav{
  display:flex;
  gap:14px;
  align-items:center;
  justify-content:center;
  margin-bottom:24px;
  flex-wrap:wrap;
}
.admin-link{
  text-decoration:none;
  padding:8px 18px;
  border-radius:8px;
  background:var(--skill-bg);
  color:var(--skill-text);
  transition:0.25s;
}
.admin-link:hover{
  opacity:0.85;
}
.admin-link.admin-active{
  background:var(--btn-bg);
  color:#fff;
}
.logout-btn{
  padding:8px 16px;
  border:none;
  border-radius:8px;
  background:#dd4444;
  color:white;
  cursor:pointer;
}
.admin-content{
  background:var(--card-bg);
  padding:24px;
  border-radius:12px;
  box-shadow:var(--card-shadow);
}
</style>
