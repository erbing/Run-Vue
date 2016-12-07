<template>
    <div class="home">
        <ui-head></ui-head>
    </div>
</template>

<script>
import Head from './Head'

export default {
    name: 'home',
    components: {
        'ui-head': Head
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js SPA'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home{
    color: #fff;
    background: #41464B;
}
</style>