<template>
  <div>
    <input class="search-input" type="text" v-model="searchKey" placeholder="请输入关键词搜索技能"/>
    <h4>技能列表</h4>
    <div>
      <span class="skill-item" v-for="item in filterSkillList" :key="item.id">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
// defineModel，给默认空字符串，防止undefined
const searchKey = defineModel('searchKey', {
  default: ''
})
const props = defineProps({
  skillList:{
    type:Array,
    required:true
  }
})
// 计算属性过滤技能
const filterSkillList = computed(()=>{
  // 加可选链?.，安全调用trim
  if(!searchKey.value?.trim()){
    return props.skillList
  }
  return props.skillList.filter(s=>
    s.name.toLowerCase().includes(searchKey.value.toLowerCase())
  )
})
</script>
<style scoped>
.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 16px;
  background-color: var(--input-bg);
  color: var(--text-main);
}
h4 {
  font-size: 20px;
  margin-bottom:8px;
  color:var(--text-main);
}
.skill-item {
  display: inline-block;
  background: var(--skill-bg);
  color: var(--skill-text);
  padding: 6px 12px;
  border-radius: 20px;
  margin: 4px;
  font-size:17px;
}
</style>
