<template>
<!--  <el-input v-model="input" placeholder="请输入内容"></el-input>-->
<!--  <input/>-->
  <div @click="show">abc</div>
</template>

<script>
export default {
  name: "md5",
  data(){
    return {
      input:"ab"
    }
  },
  methods:{
    show(){
      alert("abc")
    }
  }
}
</script>

<style scoped>

</style>
