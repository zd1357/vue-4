<template>
  <div>
    <h3>✍️文章管理</h3>
    <p class="tip">新增文章，提交后同步展示文章列表</p>
    <div class="form-wrap">
      <div class="form-item">
        <label>文章标题</label>
        <input v-model="form.title" class="inp" placeholder="输入标题" />
      </div>
      <div class="form-item">
        <label>文章内容</label>
        <textarea v-model="form.content" rows="4" class="inp"></textarea>
      </div>
      <div class="form-item">
        <label>发布时间</label>
        <input v-model="form.createTime" class="inp" placeholder="2026‑10‑10" />
      </div>
      <button class="add-btn" @click="submitArt">➕新增文章</button>
    </div>
    <div style="margin-top:30px">
      <h4>已有的文章</h4>
      <div v-for="a in articleList" :key="a.id" class="art-row">
        <span>{{a.title}}</span>
        <el-button size="small" type="primary" @click="openArtEdit(a)">编辑</el-button>
        <button @click="del(a.id)" class="del-btn">删除</button>
      </div>
    </div>

    <el-dialog v-model="artDialogVisible" title="编辑文章">
      <el-form :model="artEditForm">
        <el-form-item label="标题">
          <el-input v-model="artEditForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="artEditForm.content" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-input v-model="artEditForm.createTime"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="artDialogVisible=false">取消</el-button>
        <el-button type="primary" @click="saveArtEdit">保存</el-button>
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

const form = ref({
  title:'',
  content:'',
  createTime:''
})

const artDialogVisible = ref(false)
const artEditForm = ref({
  id:null,
  title:'',
  content:'',
  createTime:''
})

const submitArt = ()=>{
  if(!form.value.title.trim()){
    alert("标题不能为空")
    return
  }
  artStore.addArticle({...form.value})
  form.value = {title:'',content:'',createTime:''}
  alert("✅文章新增成功！")
}

const del = (id)=>{
  artStore.deleteArticle(id)
}

const openArtEdit = (art)=>{
  artEditForm.value = {...art}
  artDialogVisible.value = true
}
const saveArtEdit = ()=>{
  artStore.editArticle(artEditForm.value.id,{
    title:artEditForm.value.title,
    content:artEditForm.value.content,
    createTime:artEditForm.value.createTime
  })
  artDialogVisible.value = false
  alert("✅文章修改完成")
}
</script>
<style scoped>
.tip{color:var(--text-secondary);margin-bottom:16px;font-size:14px;}
.form-item{margin-bottom:14px;}
.form-item label{display:block;margin-bottom:4px;}
.inp{width:100%;padding:8px;border-radius:6px;border:1px solid var(--input-border);background:var(--input-bg);color:var(--text-main);}
.add-btn{padding:7px 16px;background:var(--btn-bg);color:white;border:none;border-radius:7px;cursor:pointer;}
.art-row{display:flex;gap:12px;align-items:center;margin:6px 0;padding:6px;background:var(--card-bg);}
.del-btn{background:#dd4444;color:white;border:none;border-radius:4px;padding:4px 8px;cursor:pointer;}
</style>
