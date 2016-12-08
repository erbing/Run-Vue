<template>
  <div class="main">
    <ui-head>
      
    </ui-head>
    <ui-slide>
        <ui-drawer></ui-drawer>
    </ui-slide>
  </div>
</template>

<script>
import head from '../head/head'
import slide from '../slide/slide'
import drawer from '../drawer/drawer'
export default {
    name: 'main',
    components: {
        'ui-head': head,
        'ui-slide': slide,
        'ui-drawer': drawer
    }
}
</script>

<style lang="less">
@import "../assets/less/import.less";

</style>
