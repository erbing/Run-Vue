<template>
  <div id="app">
    <img src="./assets/logo.png" @click="test">
    <test></test>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Hello'
// 引入 基础 less 文件
import './assets/ui/base.less'

export default {
    name: 'app',
    components: {
        Test
    },
    methods: {
        test () {
            console.log(11)
        }
    }
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transition: color 2s;
}
</style>
