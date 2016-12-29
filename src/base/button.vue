<template>
    <div class="main-info" id="start">
        <h2>Button</h2>
        <p class="mark-p">按钮在页面开发的时候是经常会用到的</p>
        <div class="codebox">
            <div class="codetitle">
               <span>简单的使用</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    默认、主色、强调色, 不可用、全宽五种不同状态的按钮示例
                </div>
            </div>
        </div>

        <h2>Code</h2>
        <p class="mark-p">组件实现的代码</p>
        <div class="codebox">
            <div class="codetitle">
               <span>Code</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    默认、主色、强调色, 不可用、全宽五种不同状态的按钮示例
                </div>
            </div>
        </div>

        <h2>API</h2>
        <p class="mark-p">我们提供了基本的API</p>
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
    export default {
        name: 'start'
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
        }
    }
</style>