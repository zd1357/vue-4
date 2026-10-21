<template>
<div class="article-page">
  <h2>📖文章列表</h2>
  <div class="article-container">
    <el-card
      v-for="art in articleList"
      :key="art.id"
      shadow="hover"
      class="article-card"
      @click="openDetail(art)"
    >
      <h3>{{ art.title }}</h3>
      <p class="time">🗓️ {{ art.createTime }}</p>
      <p class="tip">点击卡片查看详情</p>
    </el-card>
  </div>

  <el-dialog v-model="dialogVisible" title="文章详情" width="600px">
    <template v-if="currentArt?.title">
      <h2>{{ currentArt.title }}</h2>
      <p class="time">发布时间：{{ currentArt.createTime }}</p>
      <el-divider />
      <div class="content-text">
        {{ currentArt.content }}
      </div>
    </template>
    <template #footer>
      <el-button @click="dialogVisible=false">关闭</el-button>
    </template>
  </el-dialog>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useArticleStore } from '../stores/articleStore'
import { storeToRefs } from 'pinia'

const artStore = useArticleStore()
const { articleList } = storeToRefs(artStore)

const dialogVisible = ref(false)
const currentArt = ref(null)

const openDetail = (article) => {
  currentArt.value = article
  dialogVisible.value = true
}
</script>

<style scoped>
.article-page{
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
.article-container{
  display: grid;
  gap: 16px;
}
.article-card{
  cursor: pointer;
}
.time{
  color: var(--text-secondary);
  font-size: 14px;
}
.tip{
  color: var(--text-secondary);
  font-size: 13px;
}
.content-text{
  line-height: 1.8;
  font-size: 16px;
  white-space: pre-wrap;
  color: var(--text-main);
}
</style>
