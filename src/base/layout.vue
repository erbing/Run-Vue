<template>
    <div class="main-info" id="start">
        <h2>网格布局</h2>
        <p >基础组件，页面布局使用。</p>
        <h3>概述</h3>
        <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
        <p>我们定义了两个概念，行row和列col，具体使用方法如下：</p>
        <ul>
            <li>使用row在水平方向创建一行<li>
            <li>将一组col插入在row中<li>
            <li>在每个col中，键入自己的内容<li>
            <li>通过设置col的span参数，指定跨越的范围，其范围是1到24<li>
            <li>每个row中的col总和应该为24<li>
        </ul>
        <h3>示例</h3>
        <h4>基础用法</h4>
        <div class="demo-layout">
            <uiRow>
                <uiCol span="12">
                    <div class="grid-content bg-blue-dark">span="12"</div>
                </uiCol>
                <uiCol span="12">
                    <div class="grid-content bg-blue">span="12"</div>
                </uiCol>
            </uiRow>
            <uiRow>
                <uiCol span="8">
                    <div class="grid-content bg-blue-dark">span="8"</div>
                </uiCol>
                <uiCol span="6">
                    <div class="grid-content bg-blue">span="6"</div>
                </uiCol>
                <uiCol span="10">
                    <div class="grid-content bg-blue-light">span="10"</div>
                </uiCol>
            </uiRow>
        </div>
        <h4>区块间隔</h4>
        <div class="demo-layout">
            <uiRow :gutter="10">
                <uiCol span="12">
                    <div class="grid-content bg-blue-dark">span="12"</div>
                </uiCol>
                <uiCol span="12">
                    <div class="grid-content bg-blue">span="12"</div>
                </uiCol>
            </uiRow>
            <uiRow :gutter="20">
                <uiCol span="8">
                    <div class="grid-content bg-blue-dark">span="8"</div>
                </uiCol>
                <uiCol span="6">
                    <div class="grid-content bg-blue">span="6"</div>
                </uiCol>
                <uiCol span="10">
                    <div class="grid-content bg-blue-light">span="10"</div>
                </uiCol>
            </uiRow>
        </div>
        <h4>栅格排序 </h4>
        <p>通过设置push和pull来改变栅格的顺序。</p>
        <div class="demo-layout">
            <uiRow>
                <uiCol span="4" push="6">
                    <div class="grid-content bg-blue-dark">span="4" push="6"</div>
                </uiCol>
                <uiCol span="4" pull="4">
                    <div class="grid-content bg-blue">span="4" pull="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <h4>左右偏移 </h4>
        <p>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
        <div class="demo-layout">
            <uiRow>
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4" offset="4">
                    <div class="grid-content bg-blue">span="4" offset="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <h4>Flex布局 </h4>
        <p>通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。</p>
        <p>子元素向左排列</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="start">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>子元素向右排列</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="end">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>子元素居中排列</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="center">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>子元素居中排列</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="center">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>子元素等宽排列</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="space-between">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>子元素分散排列</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="space-around">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <h4>Flex对齐 </h4>
        <p>通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。</p>
        <p>顶部对齐</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="center" align="top">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark" style="height: 60px;">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light" style="height: 80px;">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>底部对齐</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="center" align="bottom">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark" style="height: 60px;">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light" style="height: 80px;">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <p>居中对齐</p>
        <div class="demo-layout">
            <uiRow type="flex" justify="center" align="middle">
                <uiCol span="4">
                    <div class="grid-content bg-blue-dark" style="height: 60px;">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue">span="4"</div>
                </uiCol>
                <uiCol span="4">
                    <div class="grid-content bg-blue-light" style="height: 80px;">span="4"</div>
                </uiCol>
            </uiRow>
        </div>
        <h2>API</h2>
        <p>Row props</p>
        <table class="api-table">
            <thead>
                <tr>
                    <td>属性</td>
                    <td>说明</td>
                    <td>类型</td>
                    <td>可选值</td>
                    <td>默认值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>gutter</td>
                    <td>栅格间距，单位 px，左右平分</td>
                    <td>Number</td>
                    <td>——</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>布局模式，在现代浏览器下有效</td>
                    <td>String</td>
                    <td>flex或不选</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>align</td>
                    <td>flex 布局下的垂直对齐方式</td>
                    <td>String</td>
                    <td>top、middle、bottom</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>justify</td>
                    <td>flex 布局下的水平排列方式</td>
                    <td>String</td>
                    <td>start、end、center、space-around、space-between</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>class-name | class</td>
                    <td>自定义的class名称</td>
                    <td>String</td>
                    <td>——</td>
                    <td>——</td>
                </tr>
            </tbody>
        </table>
        <p>Col props</p>
        <table class="api-table">
            <thead>
                <tr>
                    <td>属性</td>
                    <td>说明</td>
                    <td>类型</td>
                    <td>可选值</td>
                    <td>默认值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>span</td>
                    <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none</td>
                    <td>String</td>
                    <td>0~24</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>offset</td>
                    <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                    <td>String</td>
                    <td>——</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>push</td>
                    <td>栅格向右移动格数</td>
                    <td>String</td>
                    <td>——</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>pull</td>
                    <td>栅格向左移动格数</td>
                    <td>String</td>
                    <td>——</td>
                    <td>——</td>
                </tr>
                <tr>
                    <td>class-name | class</td>
                    <td>自定义的class名称</td>
                    <td>String</td>
                    <td>——</td>
                    <td>——</td>
                </tr>
            </tbody>
        </table> 
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
    .g-row {
        margin-bottom: 20px;
    }
    .grid-content {
        min-height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
    }
    .bg-blue-dark {
        background-color: rgba(0,153,229,.7);
    }
    .bg-blue {
        background-color: rgba(0,153,229,.5);
    }
    .bg-blue-light {
        background-color: rgba(0,153,229,.3);
    }
</style>