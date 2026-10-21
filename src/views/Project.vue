<template>
  <div class="project-wrap">
    <div class="sub-nav">
      <!-- 这里删掉项目列表按钮 -->
    </div>
    <div class="sub-router-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<style scoped>
.project-wrap{
  max-width: 900px;
  margin: 0 auto;
  color: var(--text-main);
}
.project-header{
  text-align:center;
  margin-bottom:24px;
  padding-bottom:16px;
  border-bottom:1px solid var(--input-border);
}
.project-header h2{
  font-size:28px;
  margin-bottom:8px;
}
.desc-text{
  color:var(--text-secondary);
  font-size:15px;
}
.sub-nav{
  margin-bottom:20px;
  display:flex;
  gap:12px;
  justify-content:center;
}
.sub-nav-link{
  text-decoration:none;
  padding:8px 20px;
  border-radius:8px;
  background-color:var(--skill-bg);
  color:var(--skill-text);
  transition: all 0.25s ease;
}
.sub-nav-link:hover{
  opacity:0.85;
}
.sub-nav-link.sub-active{
  background-color:var(--btn-bg);
  color:#fff;
}
.sub-router-container{
  padding:8px;
}
</style>
