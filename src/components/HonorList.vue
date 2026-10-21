<template>
  <div>
    <div class="honor-item" v-for="honor in honorList" :key="honor.id">
      <span>{{ honor.title }}</span> — <span>{{ honor.time }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  honorList:{
    type:Array,
    required:true
  }
})
</script>

<style scoped>
.honor-item {
  background: var(--honor-bg);
  padding: 8px 12px;
  border-radius: 6px;
  margin: 6px 0;
  border-left: 4px solid var(--honor-accent);
  font-size:15px;
  transition: background-color .3s ease;
  color:var(--text-main);
}
</style>
