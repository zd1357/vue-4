<template>
  <div class="container">
    <slot></slot>
    <slot name="header-slot"></slot>

    <el-card shadow="hover">
      <BaseInfo :person="person" />
      <el-collapse :model-value="activeItems" @change="handleCollapseChange" class="mt-4">
        <el-collapse-item title="个人详情" name="detail">
          <h4>个人简介</h4>
          <p>{{ person.intro }}</p>

          <h4 style="margin-top:16px;">获奖与荣誉（时间线）</h4>
          <el-timeline>
            <el-timeline-item
              v-for="honor in honorList"
              :key="honor.id"
              :timestamp="honor.time"
              placement="top"
            >
              <el-tag type="success">{{ honor.title }}</el-tag>
            </el-timeline-item>
          </el-timeline>

          <div style="margin-top:16px;">
            <h4>活动照片展示</h4>
            <PhotoShow
              :is-show-photo="isShowPhoto"
              :photo-list="photoList"
              @change-show-photo="isShowPhoto = $event"
            />
          </div>

          <SkillSearch v-model:search-key="searchKey" :skill-list="skillList" />
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <slot name="footer-slot"></slot>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/userStore'
import BaseInfo from './BaseInfo.vue'
import PhotoShow from './PhotoShow.vue'
import SkillSearch from './SkillSearch.vue'

const userStore = useUserStore()
const { userIntro } = storeToRefs(userStore)

const person = ref({
  avatar: "./444.jpg",
  name: "钟丹",
  majorClass: "24计科2班",
  intro: userIntro.value
})

watch(userIntro, (newVal) => {
  person.value.intro = newVal
})

const activeItems = ref(['detail'])
const handleCollapseChange = (val) => {
  activeItems.value = val
}

const isShowPhoto = ref(false)
const searchKey = ref("")

const skillList = ref([
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Vue3" },
  { id: 5, name: "计算机操作系统" },
  { id: 6, name: "MySQL" }
])

const honorList = ref([
  { id: 1, title: "优秀共青团员", time: "2026-05" },
  { id: 2, title: "优秀学生奖学金二等", time: "2025-11" },
  { id: 3, title: "计算机二级证书", time: "2025-06" }
])

const photoList = ref([
  { id: 1, src: "./111.png" },
  { id: 2, src: "./222.png" }
])

watch(searchKey, (newVal, oldVal) => {
  // console.log(`搜索关键词发生变化：旧值=${oldVal}，新值=${newVal}`)
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.mt-4 {
  margin-top: 16px;
}
h4 {
  font-size: 20px;
  margin-bottom: 8px;
  color: var(--text-primary);
}
p {
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
