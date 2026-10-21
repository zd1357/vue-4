<template>
  <div>
    <button class="btn" @click="handleToggle">
      {{ isShowPhoto ? '收起照片' : '展开照片' }}
    </button>
    <div v-show="isShowPhoto" class="photo-wrap">
      <img class="photo-item" v-for="photo in photoList" :key="photo.id" :src="photo.src" alt="照片"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isShowPhoto:{
    type:Boolean,
    required:true
  },
  photoList:{
    type:Array,
    required:true
  }
})
// defineEmits 定义子组件抛出事件
const emit = defineEmits(['change-show-photo'])

const handleToggle = ()=>{
  // 子组件内部不直接修改props，抛出事件，让父组件修改状态，遵守props单向数据流
  emit('change-show-photo', !props.isShowPhoto)
}
</script>

<style scoped>
.btn {
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  background: var(--btn-bg);
  color: white;
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 16px;
}
.photo-wrap {
  margin-top:12px;
}
.photo-item {
  width:180px;
  margin:8px;
  border-radius:8px;
}
</style>
