<template>
    <div>
    <div class="banenr">
        <div class="banner-height"></div>
        <div class="banner-logo">
            R/V
            <!--<img src="../assets/images/logo.png" />-->
        </div>
        <!--<div class="banner-height"></div>-->
        <div class="banner-text">
            基于 Vue 2.x 和 “不面向小白” 的 UI 组件库
        </div>

        <div class="banner-btn">
            <div class="btn-text" @click="start">
                <span>START</span>
            </div>
        </div>

        <div class="banner-height"></div>
    </div>

    <div class="index-desc">
        <h3>新特性</h3>
        <div class="desc-items">
            <div class="desc-item">
                <h4>组件丰富</h4>
                <div class="desc-item-text">
                    Run-Vue UI 期望是 实现大家都能用且具有一定规范的组件，
                    另外还准备开发许多的功能性的组件。
                </div>
            </div>
            <div class="desc-item">
                <h4>源代码可查看</h4>
                <div class="desc-item-text">
                    源代码可以查看，知道该组件的内部构成，
                    那么就会让更多的用户来学习其中的精髓。一贯坚持 授人以鱼不如授人以渔。
                    所以，我们不想面对小白用户。
                </div>
            </div>
            <div class="desc-item">
                <h4>基于 Vue 2.1.0</h4>
                <div class="desc-item-text">
                    在 github 上看到 package.json 的时候你会惊奇的发现。
                    我们用上了最新了 VueJs、Vuex、Vue-router 等等。皆为目前
                    Vue 的最新版本。
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        methods: {
            start () {
                this.$router.push('/use/start')
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/less/import.less";
    h3{
        padding-bottom: .3em;
        font-size: 1.4em;
        line-height: 1.334;
        padding-left: 16px;
    }
    h4 {
        margin: 0;
        margin-bottom: 10px;
        font-size: 1.2em;
    }
    .banenr{
        color: #fff;
        background-color: @primaryColor;
        margin-right: auto;
        margin-left: auto;
        padding-left: 24px;
        padding-right: 24px;
    }
    .banner-height{
        height: 30px;
    } 
    .banner-logo{
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background-color: #fff;
        margin: 0 auto;
        color: #03a9f4;
        font-size: 50px;
        border-radius: 50%;
        margin-bottom: 16px;
        text-align: center;
        img {
            width: 80px;
            height: 80px;
            margin-top: 20px;
        }
    }
    .banner-text{
        width: 100%;
        text-align: center;
        font-size: 26px;
        padding-bottom: 20px;
    }
    .banner-btn{
        border-radius: 2px;
        position: relative;
        text-align: center;
        width: 100%;
        height: 30px;
        .btn-text{
            width: 100px;
            height: 30px;
            line-height: 30px;
            position: absolute;
            left: 50%;
            margin-left: -50px;
            background: #fff;
            color: @primaryColor;
            overflow: hidden;
            span{
                vertical-align: middle;
                padding-right: 16px;
                padding-left: 16px;
                height: 30px;
            }
        }
    }

    .index-desc{
        padding: 24px 24px 48px;
        max-width: 800px;
        margin: auto;
        .desc-items{
            display: flex;
            .desc-item{
                width: 33.3%;
                padding-left: 16px;
                padding-right: 16px;
            }
            .desc-item-text{
                font-size: 16px;
            }
        }
    }
</style>
