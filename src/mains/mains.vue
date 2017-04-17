<template>
  <div class="main">
 
    <ui-head :title="title" ref="curComponent"></ui-head>
    
    <ui-slide>
    </ui-slide>

    <ui-content>
         <router-view></router-view>
    </ui-content>
  </div>
</template>

<script>
import head from '../head/head'
import slide from '../slide/slide'
import content from '../content/content'
export default {
    name: 'main',
    components: {
        'ui-head': head,
        'ui-slide': slide,
        'ui-content': content
    },
    computed: {
        title () {
            return '首页'
        }
    },
    mounted () {
        // console.log(this.$refs.curComponent)
    }
}
</script>

<style lang="less">
</style>
