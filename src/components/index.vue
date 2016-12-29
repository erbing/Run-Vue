<template>
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
</style>
