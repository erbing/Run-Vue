<template>
    <div class="mian-content" :class=" showSlider ? '' : 'hide-left-content' ">
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
            },
            showSlider () {
                return this.$store.state.showSlider
            }
        },
        mounted () {
            // console.log(this)
        }
    }
</script>

<style lang="less">
    @import '../assets/less/normalize.less';
    @import '../assets/less/base.less';
    i{
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
    } 

    .mian-content{
        padding-top: 64px;
        padding-left: 256px;
        background-color: @color-white;
        transition: all .45s cubic-bezier(.23,1,.32,1);
    }

    .hide-left-content {
        padding-top: 0px;
        padding-left: 0;
    }
</style>
