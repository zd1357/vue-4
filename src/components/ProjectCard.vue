<template>
  <div class="project-card">
    <!-- 具名插槽：头部标题区域 -->
    <slot name="card-header"></slot>

    <!-- 默认插槽：项目主体内容 -->
    <slot></slot>

    <!-- 作用域插槽：向外暴露project对象给父组件使用 -->
    <slot name="card-action" :project="projectItem"></slot>

    <!-- 具名插槽：底部区域 -->
    <slot name="card-footer"></slot>
  </div>
</template>

<script setup>
defineProps({
  projectItem: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  border: 1px solid var(--input-border);
  border-radius: 10px;
  padding:16px;
  margin:12px 0;
  background-color: var(--card-bg);
  box-shadow: var(--card-shadow);
}

</style>
