<template>
  <div>
    <h3 class="sub-title">🗂️编辑项目信息</h3>
    <p class="tip">填写表单新增项目，项目会同步展示在项目列表页</p>
    <div class="form-wrap">
      <div class="form-item">
        <label>项目名称</label>
        <input v-model="form.name" class="inp" placeholder="请输入项目名称" />
      </div>
      <div class="form-item">
        <label>项目描述</label>
        <textarea v-model="form.desc" class="inp" rows="3" placeholder="项目描述"></textarea>
      </div>
      <div class="form-item">
        <label>技术栈</label>
        <input v-model="form.tech" class="inp" placeholder="例如 Vue3、HTML" />
      </div>
      <div class="form-item">
        <label>项目时间</label>
        <input v-model="form.date" class="inp" placeholder="2026‑10" />
      </div>
      <div class="form-item">
        <label>
          <input type="checkbox" v-model="form.finished" />
          是否已完成
        </label>
      </div>
      <button class="add-btn" @click="addProject">➕新增项目</button>
    </div>

    <div style="margin-top:30px;">
      <h4>已有项目列表</h4>
      <div v-for="p in projectList" :key="p.id" class="art-row">
        <span>{{p.name}}</span>
        <el-button size="small" type="primary" @click="openEdit(p)">编辑</el-button>
        <el-button size="small" type="danger" @click="projStore.deleteProject(p.id)">删除</el-button>
      </div>
    </div>

    <!-- element dialog弹窗编辑 -->
    <el-dialog v-model="dialogVisible" title="编辑项目">
      <el-form :model="editForm">
        <el-form-item label="项目名称">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="项目描述">
          <el-input v-model="editForm.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="技术栈">
          <el-input v-model="editForm.tech"></el-input>
        </el-form-item>
        <el-form-item label="项目时间">
          <el-input v-model="editForm.date"></el-input>
        </el-form-item>
        <el-form-item label="是否完成">
          <el-checkbox v-model="editForm.finished"></el-checkbox>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="saveEdit">保存修改</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useProjectStore } from '../stores/projectStore'
import { storeToRefs } from 'pinia'
const projStore = useProjectStore()
const { projectList } = storeToRefs(projStore)

const form = ref({
  name:'',
  desc:'',
  tech:'',
  date:'',
  finished:false
})

const dialogVisible = ref(false)
const editForm = ref({
  id:null,
  name:'',
  desc:'',
  tech:'',
  date:'',
  finished:false
})

const addProject = ()=>{
  if(!form.value.name.trim()){
    alert("项目名称不能为空！")
    return
  }
  projStore.addProject({...form.value})
  form.value = {name:'',desc:'',tech:'',date:'',finished:false}
  alert("✅项目新增成功！前往项目列表查看。")
}

const openEdit = (proj)=>{
  editForm.value = {...proj}
  dialogVisible.value = true
}

const saveEdit = ()=>{
  projStore.editProject(editForm.value.id, {
    name:editForm.value.name,
    desc:editForm.value.desc,
    tech:editForm.value.tech,
    date:editForm.value.date,
    finished:editForm.value.finished
  })
  dialogVisible.value = false
  alert("✅项目修改完成")
}
</script>
<style scoped>
.sub-title{
  margin-bottom:8px;
}
.tip{
  color:var(--text-secondary);
  font-size:14px;
  margin-bottom:18px;
}
.form-item{
  margin-bottom:14px;
}
.form-item label{
  display:block;
  margin-bottom:5px;
}
.inp{
  width:100%;
  padding:9px 12px;
  border:1px solid var(--input-border);
  border-radius:6px;
  background:var(--input-bg);
  color:var(--text-main);
}
.add-btn{
  padding:8px 18px;
  border:none;
  border-radius:8px;
  background:var(--btn-bg);
  color:white;
  cursor:pointer;
}
.art-row{
  display:flex;
  gap:12px;
  align-items:center;
  margin:6px 0;padding:6px;background:var(--card-bg);
}
</style>
