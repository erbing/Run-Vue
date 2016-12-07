<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 引入 基础 less 文件
import './assets/less/base.less'

export default {
    name: 'app',
    methods: {
        test () {
            console.log(11)
        }
    }
}
</script>

<style lang="less">

#app {

}
</style>
