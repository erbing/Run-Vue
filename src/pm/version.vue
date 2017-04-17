<template>
    <div class="main-info" id="start">

        <h2>当前UI库 版本 </h2>
        <p class="mark-p">V1.0.1</p>

        <div class="codebox">
            <div class="codetitle">
                <span>如列表</span>
            </div>

            <div class="codecontent">
                <div class="codeabout">
                    <table class="api-table">
                        <thead>
                            <tr>
                                <td>职责</td>
                                <td>人员</td>
                                <td>备注</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>项目管理</td>
                                <td><a href="https://github.com/erbing" target="_blank">@Zigzag</a></td>
                                <td>发起、协调、杂务</td>
                            </tr>
                            <tr>
                                <td>组件开发</td>
                                <td><a>@小方</a>、<a>@宛如大空</a>、
                                    <a>@秋水</a>、<a>@Zigzag</a></td>
                                <td>组件的开发以及维护</td>
                            </tr>
                            <tr>
                                <td>UI以及logo设计</td>
                                <td><a>@秋水</a></td>
                                <td>UI 修改 以及 logo 修改</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>
        </div>

        <h2>鼓励开源</h2>
        <p class="mark-p">我们希望 开发者们能 持续开源，让更多人受益</p>  
    </div>

</template>

<script>
    export default {
        name: 'about',
        mounted () {
            // console.log(this)
        }
    }
</script>

<style lang="less">
    .main-info{
        padding: 48px;
    }
    .api-table{
        a {
            color: #3399ff;
            cursor: pointer;
            &:hover {
                color: #339999;
            }
        }

    }
    .table{
        border: 1px solid #ddd;
        border-spacing: 0;
        border-collapse: collapse;
        tr{
            padding:0;
            margin: 0;
            td {
                padding:0;
                margin: 0;
                border-right: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                text-align: center;
            } 
        }
    }
</style>