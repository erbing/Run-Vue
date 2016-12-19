<template>
    <div class="list">
        <ul>
            <li v-for="item in texts"> 
                {{item}}
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
                background: #ddd;
                line-height: 48px;
                color: #888;
            }
        }
    }
</style>