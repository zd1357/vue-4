<template>
  <div>
    <h3 class="sub-title">📝编辑个人简介</h3>
    <p class="tip">修改个人简介，点击保存，修改会同步到首页</p>
    <textarea v-model="introText" class="edit-textarea" rows="6"></textarea>
    <div class="btn-row">
      <button class="save-btn" @click="save">💾保存修改</button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/userStore'
import { ref, watch } from 'vue'
const userStore = useUserStore()
const { userIntro } = storeToRefs(userStore)
// 本地表单副本
const introText = ref(userIntro.value)
// store外部修改时同步表单
watch(userIntro, (val)=>{
  introText.value = val
})
const save = ()=>{
  userStore.updateIntro(introText.value)
  alert("✅保存成功！修改已生效，请回到首页查看效果。")
}
</script>
<style scoped>
.sub-title{
  margin-bottom:8px;
}
.tip{
  color:var(--text-secondary);
  font-size:14px;
  margin-bottom:14px;
}
.edit-textarea{
  width:100%;
  padding:12px;
  border-radius:8px;
  border:1px solid var(--input-border);
  background:var(--input-bg);
  color:var(--text-main);
  font-size:15px;
  resize:vertical;
  margin-bottom:16px;
}
.save-btn{
  padding:8px 20px;
  border:none;
  border-radius:8px;
  background:var(--btn-bg);
  color:white;
  cursor:pointer;
}
</style>
