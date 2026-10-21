<template>
  <PersonCard>
    <div class="slot-tip">🎉欢迎来到我的个人主页</div>
    <template #header-slot>
      <p class="slot-header-text">24计科2班｜钟丹</p>
    </template>
    <template #footer-slot>
      <div class="slot-footer-tip">✨本页面Vue3+Vue‑Router4实现</div>
    </template>
  </PersonCard>
</template>
<script setup>
import PersonCard from '../components/PersonCard.vue'
</script>
<style scoped>
.slot-tip {
  font-size:17px;
  color:var(--text-main);
  text-align:center;
  margin-bottom:12px;
  padding:8px;
  border:1px dashed var(--input-border);
  border-radius:6px;
}
.slot-header-text {
  color:var(--text-secondary);
  text-align:center;
  margin-bottom:12px;
}
.slot-footer-tip {
  margin-top:20px;
  padding:8px;
  border:1px dashed var(--input-border);
  border-radius:6px;
  color:var(--text-secondary);
}
</style>
