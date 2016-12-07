<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 引入 基础 less 文件
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
@import 'assets/less/import.less';
#app {

}
</style>
