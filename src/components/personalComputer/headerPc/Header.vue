<!-- 头部左侧不变只有内容区改变 这样的需求可以用嵌套路由来做 -->
<template>
<div>
  <div class="header">
    <img :src="require('@/assets/img/logo.jpg')" style="height: 52px;"/>
    <a>课程</a>
    <a>老师</a>
    <a>同学</a>
    <a>解答</a>
    <searchPc></searchPc>
    <a>下载app</a>
    <div  class="car">
      <el-button  style="font-size: 18px;" icon="el-icon-shopping-cart-full">购物车</el-button>
    </div>
    <a @click="showLogin">登陆</a>
    <a @click="showLogin">注册</a>
  </div>
  <el-dialog
    :modal="false"
    :visible.sync="loginVisible"
    width="30%">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="角色管理" name="login">
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="register">
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      loginVisible: false,
      activeName: 'login'
    }
  },
  watch: {
  },
  methods: {
    showLogin () {
      this.loginVisible = true
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  display: flex;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
  .car{
    border-radius: 8px;
    border: 4px solid #aaaaaa;
    /deep/.el-button {
      background: none;
    }
    >*:hover{
      color: red;
    }
  }
  .car:hover{
    background: #BBFF66;
  }
}
</style>
