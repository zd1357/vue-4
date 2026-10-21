<template>
  <header class="header">
    <h1 class="header-title">个人信息主页</h1>
    <el-button @click="toggleTheme" class="theme-btn">
      {{ isDark ? '切换到亮色' : '切换到暗色' }}
    </el-button>
  </header>
</template>

<script setup>
const props = defineProps(['isDark'])
const emit = defineEmits(['update:theme'])

const toggleTheme = () => {
  emit('update:theme', !props.isDark)
}
</script>

<style scoped>
.header {
  position: relative;
  padding: 16px 20px;
  background: var(--card-bg);
  border-bottom: 1px solid var(--input-border);
}
.header-title {
  margin: 0;
  font-size: 28px;
  color: var(--text-main);
  text-align: center;
}
.theme-btn {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
