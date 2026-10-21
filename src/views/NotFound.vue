<template>
  <div class="notfound-wrap">
    <div class="notfound-card">
      <h2>404</h2>
      <p class="not-text">抱歉，你访问的页面不存在</p>
      <RouterLink to="/home" class="back-home-link">🏠 返回个人主页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.notfound-wrap{
  display:flex;
  justify-content:center;
  padding-top:80px;
}
.notfound-card{
  text-align:center;
  background:var(--card-bg);
  padding:40px 30px;
  width:400px;
  border-radius:12px;
  box-shadow:var(--card-shadow);
  color:var(--text-main);
}
.notfound-card h2{
  font-size:64px;
  color:var(--btn-bg);
  margin-bottom:12px;
}
.not-text{
  color:var(--text-secondary);
  margin-bottom:24px;
}
.back-home-link{
  display:inline-block;
  text-decoration:none;
  padding:10px 22px;
  background:var(--btn-bg);
  color:#fff;
  border-radius:8px;
}
</style>
