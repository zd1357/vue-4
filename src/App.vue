<template>
  <div class="page-wrap">
    <AppHeader :is-dark="isDark" @update:theme="isDark = $event" />
    <nav class="nav-bar">
      <RouterLink to="/home" class="nav-item" active-class="active">个人主页</RouterLink>
      <RouterLink :to="{name:'Project'}" class="nav-item" active-class="active">项目中心</RouterLink>
      <RouterLink :to="{name:'Admin'}" class="nav-item" active-class="active">后台管理</RouterLink>
      <RouterLink :to="{name:'Login'}" class="nav-item" active-class="active">登录</RouterLink>
      <RouterLink to="/article" class="nav-item" active-class="active">文章列表</RouterLink>
    </nav>
    <main class="main">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watch(isDark, (val) => {
  document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
  localStorage.setItem('theme', val ? 'dark' : 'light')
})

onMounted(() => {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ==========全局CSS变量 ========== */
:root {
  --page-bg: #ffffff;
  --card-bg: #ffffff;
  --text-main: #303133;
  --text-secondary: #606266;
  --card-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  --input-bg: #ffffff;
  --input-border: #dcdfe6;
  --btn-bg: #409eff;
  --skill-bg: #ecf5ff;
  --skill-text: #409eff;
  --honor-bg: #e6fbff;
  --honor-accent: #00ffea;
}

[data-theme="dark"] {
  --page-bg: #000000;
  --card-bg: #171717;
  --text-main: #e5e5e5;
  --text-secondary: #aaaaaa;
  --card-shadow: 0 2px 12px rgba(255, 255, 255, 0.07);
  --input-bg: #272727;
  --input-border: #444444;
  --btn-bg: #4da3ff;
  --skill-bg: #1e2f47;
  --skill-text: #79bbff;
  --honor-bg: #1e2e33;
  --honor-accent: #00e5d5;
}

body {
  min-height: 100vh;
  background-color: var(--page-bg);
  color: var(--text-main);
}

.page-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--page-bg);
}

.nav-bar {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 12px;
  background: var(--card-bg);
  border-bottom: 1px solid var(--input-border);
}

.nav-item {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 16px;
}

.nav-item.active {
  color: var(--btn-bg);
  font-weight: bold;
}

.main {
  flex: 1;
  padding: 20px;
  background-color: var(--page-bg);
}
</style>
