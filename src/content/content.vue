<template>
    <div class="mian-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'content',
        data () {
            return {
                info: {
                    name: 'zz',
                    agr: '11',
                    sex: 'f'
                }
            }
        },
        computed: {
            arr () {
                let res = Object.keys(this.info)
                return res
            }
        },
        mounted () {}
    }
</script>

<style lang="less">
    @import "../assets/less/import.less";
    i{
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
    } 

    .mian-content{
        padding-top: 64px;
        padding-left: 256px;
        transition: all .45s cubic-bezier(.23,1,.32,1);
    }
</style>
