<template>
  <div class="base-info">
    <img class="avatar" :src="person.avatar" alt="头像" />
    <div class="info-text">
      <h2>{{ person.name }}</h2>
      <p>专业班级：{{ person.majorClass }}</p>
    </div>
  </div>
</template>

<script setup>
// 使用defineProps接收父组件传递person数据
const props = defineProps({
  person:{
    type:Object,
    required:true,
    properties:{
      avatar:String,
      name:String,
      majorClass:String
    }
  }
})
</script>

<style scoped>
.base-info {
  display:flex;
  gap:20px;
  align-items:center;
  margin-bottom:20px;
}
.avatar {
  width:100px;
  height:100px;
  border-radius:50%;
  object-fit:cover;
}
.info-text h2 {
  font-size:26px;
  margin-bottom:8px;
  color:var(--text-main);
}
.info-text p {
  color:var(--text-secondary);
}
</style>


