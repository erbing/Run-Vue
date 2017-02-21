<template>
    <i :class='"icon-"+name'></i>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            name: ''
        }
    }
</script>

<style lang="less">
    @import "../../assets/icons/icons";
</style>
