<template>
  <div class="main">
    <ui-head>
      
    </ui-head>
    <ui-slide>
        <ui-head :title=" 'Run-Vue' "></ui-head>
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
