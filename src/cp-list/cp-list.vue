<template>
    <div class="list">
        <ul>
            <li v-for="item in texts"> 
                <div class="spanborder">
                    {{item}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'list',
        props: {
            texts: {
                type: Array,
                default: ['二级目录', '三级目录']
            }
        },
        methods: {
        }
    }
</script>

<style lang="less">
    .list{
        font-size: 16px;
        > ul{
            margin: 0;
            padding: 0;
           > li{
                height: 48px;
                padding-left: 32px; 
                cursor: pointer;
                background: rgba(0,0,0,.12);
                line-height: 48px;
                color: #888;
                margin-bottom: 1px;
                transition: all 0.45s;
                &:hover{
                    background: #fff;
                }
            }
        }
    }
    .spanborder{
        border-bottom: 1px solid #fff;
    }
</style>