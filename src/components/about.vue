<template>
    <div class="main-about">
        <table class="table" width="100%">
            <tbody>
                <tr>
                    <td><h4>职责</h4></td>
                    <td><h4>人员</h4></td>
                    <td><h4>备注</h4></td>
                </tr>

                <tr>
                    <td><h4>项目管理</h4></td>
                    <td><a href="https://github.com/erbing" target="_blank">@Zigzag</a></td>
                    <td>发起、协调、杂务</td>
                </tr>

                <tr>
                    <td><h4>组件开发</h4></td>
                    <td> <a>@秋水</a>、<a>@宛如大空</a>
                         <a>@秋水</a>、<a>@宛如大空</a>
                    </td>
                    <td>组件的开发以及维护</td>
                </tr>

                <tr>
                    <td><h4>UI以及logo设计</h4></td>
                    <td><a href="https://github.com/erbing" target="_blank">@秋水</a></td>
                    <td>UI 修改 以及 logo 修改</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style lang="less">
    .main-about{
        padding: 48px;
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