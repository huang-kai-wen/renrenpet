<!-- 头部左侧不变只有内容区改变 这样的需求可以用嵌套路由来做 -->
<template>
<div class="search">
  <div class="recommend-item" v-if="showrecomend">
    <a v-for="(item, index) in recommenditation" :key = "index">{{item.label}}</a>
  </div>
  <div class="inputBox">
    <div class="search-div" contenteditable="true" ref="inputPc" @focus="getContent" @input="getContent" @blur="losefocus" v-bind:class="{input: isInput}">
  </div>
    <el-button  icon="el-icon-search" @click="search"></el-button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    recommenditation: {
      type: Array,
      default: () => [
        {
          label: '英语',
          id: 'en-1235'
        },
        {
          label: '语文',
          id: 'zh-1235'
        },
      ]
    },
  },
  data() {
    return {
      isInput: false,
      showrecomend: true,
      text: ''
    }
  },
  watch: {
  },
  methods: {
    getContent (val) {
      this.showrecomend = false
      this.isInput = true
      this.text = this.$refs.inputPc.innerHTML
      console.log(this.text)
    },
    losefocus () {
      this.isInput = false
    },
    search () {
      this.$emit('search', this.text)
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
[contenteditable]:focus{outline: none}
.search{
  position: relative;
  .input{
    border: 0px;
    border-bottom: 2px solid red;
    box-shadow: darkgrey 10px 10px 30px 5px ;//边框阴影
  }
  padding: 10px;
  .recommend-item{
    position: absolute;
    top: 0.3rem;
    left: 4rem;
    a{
      background: #aaaaaa;
      border-radius: 5px;
      margin: 10px;
      cursor: pointer;
    }
  } 
 .inputBox{
    display: flex;
    justify-content: center;
    background: #aaaaaa;
    width: 10rem;
    height: 1.2rem;
    border-radius: 85px;
    .search-div{
      margin-left: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: calc(100% - 19px);
    }
  }
}
</style>
