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

    <uiCanvas></uiCanvas>

    <div class="index-desc">
        <h3>新特性</h3>
        <div class="desc-items">
            <div class="desc-item">
                <h4>组件丰富</h4>
                <div class="desc-item-text">
                    Run-Vue UI 期望是 实现大家都能使用且具有一定<b>规范</b>的组件，
                    另外我们 还准备开发更多的 <b>功能性</b> 的组件满足更为复杂的使用场景。
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

    <div class="index-driver">
    </div>


    <div class="index-desc">
        <h3>致谢</h3>
        <div style="padding-left: 16px; margin-bottom: 20px;">
            Run-Vue UI 基于一个非常优秀的前端框架 Vue 开发， 并且参考了 Muse-ui 、 element 
            等众多优秀的UI框架的API和代码， 为了鼓励开发人员使用 Run-Vue UI，我们在MIT开源协议基础上开放 Run-Vue UI的源代码。
            <b>最后说一句，如果生活中没有 VueJs 那该是多么的艰难。</b>
        </div>

        <div style="padding-left: 16px;">
            最后的最后，感谢 组内的开发的小伙伴，以及 github 热衷开源的一群小伙伴。
        </div>
    </div>

    <div class="index-desc">
        <h3>成为开发者</h3>
        <div style="padding-left: 16px; margin-bottom: 20px;">
            Run-Vue UI 是基于一个非常优秀的前端框架 <b>Vue</b> 开发， 所以我们也希望能够开发出非常优秀的 Vue 的组件 以及更多相关的内容。
        </div>

        <div style="padding-left: 16px;">
            <router-link to="/use/dev" tag="a">github / gitlab 地址(欢迎star)</router-link>  &&  
            <router-link to="/use/dev" tag="a">成为开发者</router-link> && 
            <router-link to="/use/dev" tag="a">联系我们</router-link>
        </div>
    </div>

    <div class="index-bottom">
        Run-Vue UI is open source and released under the MIT Licence.<br>
        Copyright (c) 2017 <a href="https://github.com/redwing-team" target="_blank">RedWind</a> and <a>ZJCS</a>
    </div>    
    </div>
</template>

<script>
    import uiCanvas from './canvas/banner'
    export default {
        name: 'index',
        methods: {
            start () {
                this.$router.push('/use/dev')
            }
        },
        components: {
            uiCanvas
        }
    }
</script>

<style lang="less">
    @import  '../assets/less/normalize.less';
    @import  '../assets/less/base.less';
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
        background-color: #58B7FF;
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
            color: #6fb92c;
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
        max-width: 1000px;
        margin: auto;
        background-color: @color-white;
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

    .index-driver{
        margin: 0;
        height: 1px;
        border: none;
        background-color: rgba(0,0,0,.12);
        width: 100%;
    }
    .index-bottom{
        background-color: @color-gray;
        text-align: center;
        color: #fff;
        padding: 50px 40px;
    }
</style>
