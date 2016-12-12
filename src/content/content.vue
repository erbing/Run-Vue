<template>
    <div class="mian-content">
        <i class="fa-music"></i>
        123
        <i class="fa-glass"></i>
        <i class="fa-search"></i>
        <i class="fa-envelope-o"></i>
        <i class="fa-heart"></i>
        <i class="fa-star"></i>
        <i class="fa-star-o"></i>
        <i class="fa-user"></i>
        <i class="fa-film"></i>
        <i class="fa-th"></i>
        <i class="fa-th-large"></i>
        <i class="fa-th-list"></i>
        <i class="fa-check"></i>
        <i class="fa-remove"></i>
        <i class="fa-close"></i>
        <i class="fa-times"></i>
        <i class="fa-search-plus"></i>
        <i class="fa-search-minus"></i>
        <i class="fa-power-off"></i>
        <i class="fa-signal"></i>
        <i class="fa-gear"></i>
        <i class="fa-trash-o"></i>
        <i class="fa-home"></i>
        <i class="fa-file-o"></i>
        <i class="fa-clock-o"></i>
        <i class="fa-road"></i>
        <i class="fa-download"></i>
        <i class="fa-arrow-circle-o-down"></i>
        <i class="fa-arrow-circle-o-up"></i>
        <i class="fa-inbox"></i>
        <i class="fa-play-circle-o"></i>
        <i class="fa-rotate-right"></i>
        <i class="fa-refresh"></i>
        <i class="fa-list-alt"></i>
        <i class="fa-lock"></i>
        <i class="fa-flag"></i>
        <i class="fa-headphones"></i>
        <i class="fa-volume-off"></i>
        <i class="fa-volume-down"></i>
        <i class="fa-volume-up"></i>
        <i class="fa-qrcode"></i>
        <i class="fa-barcode"></i>
        <i class="fa-tag"></i>
        <i class="fa-tags"></i>
        <i class="fa-book"></i>
        <i class="fa-bookmark"></i>
        <i class="fa-print"></i>
        <i class="fa-camera"></i>
        <i class="fa-font"></i>
        <i class="fa-bold"></i>
        <i class="fa-italic"></i>
        <i class="fa-text-width"></i>
        <i class="fa-align-left"></i>
        <i class="fa-list"></i>
        <i class="fa-indent"></i>
        <i class="fa-photo"></i>
        <i class="fa-pencil"></i>
        <i class="fa-plus"></i>
        <i class="fa-minus"></i>
        <i class="fa-reorder"></i>
        <i class="fa-github"></i>

        <div v-for="(val, key) in info">
            {{key}} : {{val}}
            <div v-if=" key === Object.keys(info)[Object.keys(info).length -1] ">
                this is the last key {{key}}
            </div>
        </div>

        <div>
            {{arr}}
        </div>

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
