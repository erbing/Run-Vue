<template>
    <div class="main-info" id="start">
        <h2>Color 色彩</h2>
        <p>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
        <h3>主色</h3>
        <p>主要品牌颜色是明亮清新的绿色。</p>
        <uiRow type="flex" :gutter="20">
            <uiCol span="8">
                <div class="color-content bg-primary">
                    <div>Primary</div>
                    <div>#6fb92c</div>                    
                </div>
            </uiCol>
            <uiCol span="8">
                <div class="color-content bg-primary-dark">
                    <div>Dark Primary</div>
                    <div>#3e6718</div>                    
                </div>
            </uiCol>
            <uiCol span="8">
                <div class="color-content  bg-primary-light">
                    <div>Light Primary</div>
                    <div>#a3dd6ec</div>                    
                </div>
            </uiCol>
        </uiRow>
        <h3>辅助色</h3>
        <p>辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和危险。</p>
        <uiRow type="flex" :gutter="20">
            <uiCol span="6">
                <div class="color-content bg-info">
                    <div>Primary</div>
                    <div>#3399ff</div>                    
                </div>
            </uiCol>
            <uiCol span="6">
                <div class="color-content bg-success">
                    <div>Dark Primary</div>
                    <div>#44bb22</div>                    
                </div>
            </uiCol>
            <uiCol span="6">
                <div class="color-content  bg-warning">
                    <div>Light Primary</div>
                    <div>#ff9900</div>                    
                </div>
            </uiCol>
            <uiCol span="6">
                <div class="color-content  bg-danger">
                    <div>Light Primary</div>
                    <div>#FF5566</div>                    
                </div>
            </uiCol>
        </uiRow>
        <h3>中性色</h3>
        <p>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
        <uiRow type="flex" :gutter="20">
            <uiCol span="6">
                <div class="color-content bg-black">
                    <div>black</div>
                    <div>#333</div>                    
                </div>
                <div class="color-content bg-black-dark">
                    <div>dark black</div>
                    <div>#1a1a1a</div>                    
                </div>
                <div class="color-content bg-black-light">
                    <div>light black</div>
                    <div>#666</div>                    
                </div>
            </uiCol>
            <uiCol span="6">
                <div class="color-content bg-gray">
                    <div>gray</div>
                    <div>#ccc</div>                    
                </div>
                <div class="color-content bg-gray-dark">
                    <div>dark gray</div>
                    <div>#999</div>                    
                </div>
                <div class="color-content bg-gray-light">
                    <div>light gray</div>
                    <div>#d9d9d9</div>                    
                </div>
            </uiCol>
            <uiCol span="6">
                <div class="color-content bg-white">
                    <div>white</div>
                    <div>#fff</div>                    
                </div>
                <div class="color-content bg-white-dark">
                    <div>dark white</div>
                    <div>#f7f7f7</div>                    
                </div>
            </uiCol>
        </uiRow>
    </div>
</template>

<script>
    import uiButton from '../components/base/button'
    import uiRow from '../components/base/row'
    import uiCol from '../components/base/col'
    import codeBlock from '../components/codeBlock'
    import codeButton from '!raw!../components/base/button'

    export default {
        name: 'start',
        components: {
            uiButton,
            codeBlock,
            uiRow,
            uiCol
        },
        data () {
            return {
                codeButton
            }
        }
    }
</script>

<style lang="less">
    @import '../assets/less/normalize.less';
    @import '../assets/less/base.less';
    .color-content {
        padding: 20px;
        color: #fff;
    }
    .bg-primary {
        background-color: @color-primary;
    }
    .bg-primary-dark {
        background-color: @color-primary-dark;
    }
    .bg-primary-light {
        background-color: @color-primary-light;
    }
    .bg-info {
        background-color: @color-info;
    }
    .bg-success {
        background-color: @color-success;
    }
    .bg-warning {
        background-color: @color-warning;
    }
    .bg-danger {
        background-color: @color-danger;
    }
    .bg-black {
        background-color: @color-black;
    }
    .bg-black-dark {
        background-color: @color-black-dark;
    }
    .bg-black-light {
        background-color: @color-black-light;
    }
    .bg-gray {
        background-color: @color-gray;
    }
    .bg-gray-dark {
        background-color: @color-gray-dark;
    }
    .bg-gray-light {
        background-color: @color-gray-light;
    }
    .bg-white {
        color: @color-black-light;
        background-color: @color-white;
    }
    .bg-white-dark {
        color: @color-black-light;
        background-color: @color-white-dark;
    }
</style>