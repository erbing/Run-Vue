<template>
    <div class="paper run-slider" :class="showSlider ? '' : 'hide-slider' " @click="tests($event)">
        <div class="mu-appbar leftbar">
            <a class="left" href="/">
              <img src="../assets/images/logo2.png" class="logo"/>
              <span class="logo-text">Run-Vue</span>
              <em class="beta">Beta</em>
            </a>
            <div class="mu-appbar-title"></div>
            <div class="right"></div>
        </div>

        <div class="version slider-content">
          <span class="slider-title">Version:</span>
          <div class="select-down select-content">
              <span class="text-color">Vue : </span>2.1.0
          </div>
        </div>

        <div class="version slider-content">
          <span class="slider-title">Q Q 群 : </span>
          <div class="select-down select-content">
              <a class="text-color" href="https://jq.qq.com/?_wv=1027&k=44jw2MJ" target="_blank">  &nbsp;58365308 </a>
          </div>
        </div>

        <div class="slider-content" style="margin-bottom: 20px;">
          <!-- <span class="slider-title">Q Q 群 : </span>
          <div class="select-down select-content">
              <a class="text-color" href="https://jq.qq.com/?_wv=1027&k=44jw2MJ" target="_blank">  &nbsp;58365308 </a>
          </div> -->
          <a href="http://xc.hubwiz.com/course/592ee9b2b343f27b0ae1ba99?affid=vuejs-cn" target="_blank" style="width: 100%;">
            <img src="../assets/images/666.png" style="width: 100%; height: 260px;"/>
          </a>
        </div>

        <!--如何使用-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="startData">
            </slide-tree>
        </ul>
        <!--个性定制-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="customizeData">
            </slide-tree>
        </ul>
        <!--基础组件-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="baseCptData">
            </slide-tree>
        </ul>

        <!--表单组件-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="fromCptData">
            </slide-tree>
        </ul>

        <!--功能组件-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="funcCptData">
            </slide-tree>
        </ul>

        <!--关于我们-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="abouUs">
            </slide-tree>
        </ul>

        <!--更多信息-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="moreInfo">
            </slide-tree>
        </ul>

    </div>

</template>

<script>
import SlideTree from '../slide-tree/slide-tree'

export default {
    name: 'slide',
    data: function () {
        return {
            moreInfoText: [{name: 'Source', eName: 'source'}],
            aboutUsText: [{name: '开发组成员', eName: 'team'}],

            startData: {
                name: '如何使用',
                router: '/use',
                children: [
                    {name: '开始', router: '/use/start'},
                    {name: '使用教程', router: '/use/base'},
                    {name: '如何开发', router: '/use/dev'},
                    {name: '文档资源', router: '/use/resource'}
                ]
            },
            customizeData: {
                name: '个性定制',
                router: '/customize',
                children: [
                    // {name: '一键换肤', router: '/customize/skin'},
                    // {name: '选择主题', router: '/customize/theme'}
                    {name: '一键换肤', router: '/base/color'},
                    {name: '选择主题', router: '/base/typography'}
                ]
            },
            baseCptData: {
                name: '基础组件',
                router: '/base',
                children: [
                    {name: 'Layout 栅格', router: '/base/layout'},
                    {name: 'Color 色彩', router: '/base/color'},
                    {name: 'Typography 字体', router: '/base/typography'},
                    {name: 'Icon - loading', router: '/base/icon'},
                    {name: 'Button', router: '/base/button'},
                    {name: 'Table', router: '/base/table'}
                ]
            },
            fromCptData: {
                name: '表单组件',
                router: '/form',
                children: [
                    {name: 'Checkbox ', router: '/form/checkbox'},
                    {name: 'Radio ', router: '/form/radio'},
                    {name: 'Input ', router: '/form/input'},
                    {name: 'InputNumber', router: '/form/inputnumber'},
                    {name: 'InputSearch ', router: '/form/search'},
                    {name: 'Textarea ', router: '/form/textarea'},
                    {name: 'Switch ', router: '/form/switch'},
                    {name: 'Select ', router: '/form/select'}
                ]
            },
            funcCptData: {
                name: '功能组件',
                router: '/func',
                children: [
                    // {name: 'Table', router: '/func/table'},
                    {name: 'Swipe', router: '/func/swipe'},
                    {name: 'DatePicker', router: '/func/datePicker'},
                    {name: 'Toast', router: '/func/toast'},
                    {name: 'Modal', router: '/func/modal'},
                    {name: 'Progress', router: '/func/progress'},
                    {name: 'BackTop', router: '/func/backTop'},
                    {name: 'Lazy load', router: '/func/lazyLoad'},
                    {name: 'AutoheightTextare', router: '/func/autoheightTextarea'}
                ]
            },
            abouUs: {
                name: '关于我们',
                router: '/about',
                children: [
                    {name: '开发者', router: '/about/dev'},
                    {name: '意见反馈', router: '/about/feedback'}
                ]
            },
            moreInfo: {
                name: '项目进度以及版本',
                router: '/pm',
                children: [
                    {name: '项目版本', router: '/pm/version'},
                    {name: '项目进度', router: '/pm/percent'}
                ]
            }
        }
    },
    components: {
        'slide-tree': SlideTree
    },
    computed: {
        showSlider () {
            return this.$store.state.showSlider
        }
    },
    methods: {
        test () {
            this.$store.dispatch('getShow')
        },
        tests (e) {
            const mq = window.document.body.clientWidth
            if (mq < 560) {
                if (e.target.parentElement.className === 'treeTitle bolds') {
                    this.$store.state.showSlider = true
                } else {
                    this.$store.state.showSlider = false
                }
            }
        }
    },
    mounted () {
        const mq = window.document.body.clientWidth
        if (mq < 560) {
            this.$store.state.showSlider = false
        }
    }
}
</script>

<style lang="less">
@import "../assets/less/mixins.less";
.paper {
  /*transition: all .45s @easeOutFunction;*/
  color: #666;
  background-color: #fff;
  .depth(2);
}

i{
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
} 

.run-slider {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  border-radius: 0;
  left: 0;
  /*visibility: hidden;*/
  z-index: 200;
  overflow: auto;
  overflow-scrolling: touch;
  .no-scrollbar
}

.hide-slider {
  display: none;
}

.divider{
    margin: 0;
    height: 1px;
    border: none;
    background-color: rgba(0,0,0,.12);
    width: 100%;
}

.logo{
  width: 50px;
  height: 50px;
}

.logo-text{
  font-size: 24px;
  margin-left: 24px;
  text-align: center;
  display: inline-block;
}

.text-color{
  color: #03a9f4;
}

.slider-content{
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
  align-items: center;
  display: flex;
  width: 100%;
}

.slider-content  .slider-title{
    font-size: 16px;
    margin-top: 8px;
}

.select-down{
    display: inline-block;
    font-size: 15px;
    height: 48px;
    position: relative;
    transition: all .45s cubic-bezier(.23,1,.32,1);
    cursor: pointer;
    overflow: hidden;
}
.select-content{
    margin-left: 16px;
    margin-right: 16px;
    line-height: 56px;
    font-size: 16px;
    // width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.12);
    color: rgba(0,0,0,.87);
    padding-left: 8px;
}

.version{
  height: 48px;
}
.beta{
  margin-left: 28px;
  font-size: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: #bdbdbd;
  color: #03a9f4;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
}

.mu-paper-round {
  border-radius: 2px;
}

.mu-paper-circle {
  border-radius: 50%;
}

// @media screen and (max-width: 500px) {
//     .run-slider{
//         display: none;
//     }
// }
/*.mu-paper-1 {
  .depth(1);
}

.mu-paper-2 {
  .depth(2);
}

.mu-paper-3 {
  .depth(4);
}

.mu-paper-4 {
  .depth(4);
}

.mu-paper-5 {
  .depth(5);
}*/
</style>
