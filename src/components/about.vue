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
                    <td>Zigzag</td>
                    <td>发起、协调、杂务</td>
                </tr>

                <tr>
                    <td><h4>组件开发</h4></td>
                    <td>Run —— UED</td>
                    <td>组件的开发以及维护</td>
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
        padding: 48px 72px;
    }
    .table{
        border: 1px solid #ddd;
        tr{
            padding:0;
            margin: 0;
            td {
                padding:0;
                margin: 0;
                border: 1px solid #ddd;
                text-align: center;
            }    
        }
    }
</style>