<template>
    <div class="main-info" id="start">
        <h2>目录 && 路由规则</h2>
        <p class="mark-p">熟悉项目目录，是交接一个项目的开始</p>
        <div class="codebox">
            <div class="codetitle">
               <span>文件目录 　&&　作用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                   <span class="asp"> build  --- webpack 的整个开发框架</span>
                   <span class="asp"> config --- webpack 构建开发、测试、发布环境配置</span>
                   <span class="asp"> dist   --- prod 发布之后的文件</span>
                   <span class="asp"> src   --- 当前所有 项目文件都在其中</span>
                   <span class="asp"> &nbsp; &nbsp; &nbsp; &nbsp; --- assets   
                       --- 当前项目所有静态文件（img 字体 less 等）</span>
                   <span class="asp"> &nbsp; &nbsp; &nbsp; &nbsp; --- use   
                       --- 当前项目路由 /use/  以及其自路由页面的展示</span> 
                   <span class="asp"> &nbsp; &nbsp; &nbsp; &nbsp; --- components 
                       --- 当前项目 所有组件 （基础组件、form组件、功能组件等）</span> 
                    <span class="asp"> &nbsp; &nbsp; &nbsp; &nbsp; --- vuex 
                       --- 当前项目 所有组件 通信相关</span> 
                </div>
            </div>
        </div>

        <h2>Code</h2>
        <p class="mark-p">组件实现的代码 （ 其中包括了 html、less、js ） </p>
        <div class="codebox">
            <div class="codetitle">
               <span>Code</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                   <codeBlock :code="codeButton"></codeBlock>
                </div>
            </div>
        </div>

        <h2>API</h2>
        <p class="mark-p">我们提供了基本的API ( 里面主要包括了 props、 slot、 event ) </p>
        <div class="codebox">
            <div class="codetitle">
               <span>API</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    默认、主色、强调色, 不可用、全宽五种不同状态的按钮示例
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    import uiButton from '../components/base/button'
    import codeBlock from '../components/codeBlock'
    import codeButton from '!raw!../components/base/button'
    export default {
        name: 'start',
        components: {
            uiButton,
            codeBlock
        },
        data () {
            return {
                codeButton
            }
        }
    }
</script>

<style lang="less">
    h2{
        margin: 0;
        padding-bottom: .3em;
        font-size: 1.7em;
        line-height: 1.334;
        border-bottom: 1px solid #eee;
    }
    .mark-p{
        font-size: 1.2em;
        border-left: 6px solid #eee;
        padding-left: 10px;
        margin: 30px auto;
    }
    .codebox{
        margin-top: 12px;
        margin-bottom: 40px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647),0 1px 4px rgba(0,0,0,.117647);
        .codetitle{
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 56px;
            padding: 0 24px;
            background-color: #e8e8e8;
            cursor: pointer;
            span{
                padding-right: 16px;
                line-height: 56px;
                font-size: 20px;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: rgba(0,0,0,.54);
            }
        }
        .codecontent {
            font-size: 1.2em;
        }
        .codeabout {
            overflow: auto;
            padding: 10px 20px 0;
            margin: 0;
            padding-bottom: 20px;
            .asp {
                display: block;
                margin-bottom: 20px;
            }
        }
    }
</style>