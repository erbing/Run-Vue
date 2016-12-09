<template>
  <div class="main">
    <!--<ui-head>
      
    </ui-head>-->
    <ui-slide>
        <ui-head>
            <a href="#/index" class="exmaples-appbar-title" 
            style="display: inline-block;">Run-UI</a>
        </ui-head>
    </ui-slide>
  </div>
</template>

<script>
import head from '../head/head'
import slide from '../slide/slide'
export default {
    name: 'main',
    components: {
        'ui-head': head,
        'ui-slide': slide
    }
}
</script>

<style lang="less">
@import "../assets/less/import.less";

</style>
