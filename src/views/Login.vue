<template>
  <div class="login-wrap">
    <div class="login-card">
      <h2>🔐 后台登录</h2>
      <p class="tip-text">请输入管理员账号密码进入后台管理</p>

      <div class="form-item">
        <label>账号</label>
        <input v-model="form.username" type="text" placeholder="请输入账号" class="input-box" />
      </div>

      <div class="form-item">
        <label>密码</label>
        <input v-model="form.password" type="password" placeholder="请输入密码" class="input-box" />
      </div>

      <p v-if="errorMsg" class="error-text">{{ errorMsg }}</p>

      <button class="login-btn" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const form = ref({
  username: '',
  password: ''
})
const errorMsg = ref('')
const handleLogin = () => {
  errorMsg.value = ''
  if (!form.value.username.trim() || !form.value.password.trim()) {
    errorMsg.value = '账号和密码不能为空！'
    return
  }
  if (form.value.username === 'admin' && form.value.password === '123456') {
    //调用pinia的action，不再直接操作localStorage
    userStore.login()
    const redirectPath = route.query.redirect || '/admin/profile'
    router.replace(redirectPath)
  } else {
    errorMsg.value = '账号或者密码错误，请重新输入'
  }
}
</script>


<style scoped>
.login-wrap{
  display:flex;
  justify-content:center;
  padding-top:60px;
}
.login-card{
  width:420px;
  background:var(--card-bg);
  padding:36px 28px;
  border-radius:12px;
  box-shadow:var(--card-shadow);
  text-align:center;
  color:var(--text-main);
}
.login-card h2{
  margin-bottom:14px;
}
.tip-text{
  color:var(--text-secondary);
  margin-bottom:24px;
}
.form-item{
  text-align:left;
  margin-bottom:16px;
}
.form-item label{
  display:block;
  margin-bottom:6px;
  font-size:15px;
}
.input-box{
  width:100%;
  padding:10px 12px;
  border:1px solid var(--input-border);
  border-radius:8px;
  background:var(--input-bg);
  color:var(--text-main);
  font-size:15px;
}
.error-text{
  color:#f56c6c;
  margin:8px 0 14px;
}
.login-btn{
  width:100%;
  padding:10px 24px;
  border:none;
  border-radius:8px;
  background:var(--btn-bg);
  color:white;
  font-size:16px;
  cursor:pointer;
  transition:0.2s;
}
.login-btn:hover{
  opacity:0.85;
}
</style>
