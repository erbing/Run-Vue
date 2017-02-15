<template>
    <div class="main-info" id="start">
        <h2>Font 字体</h2>
        <p>力求在不同平台、浏览器下能显示出其最佳的效果。我们推荐 macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。</p>
        <h3>字体预览</h3>
        <p>中文字体</p>
        <img src="../assets/images/1.png" alt="图片">
        <p>英文字体</p>
        <img src="../assets/images/2.png" alt="图片">
        <table class="api-table">
            <thead>
                <tr>
                    <td>中文字体</td>
                    <td>示例</td>
                    <td>粗细</td>
                    <td>颜色</td>
                    <td>字号</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>主标题</td>
                    <td><span style="font-size:18px;font-weight:bold;color:#1a1a1a">我是标题</span></td>
                    <td>加粗</td>
                    <td>#1a1a1a</td>
                    <td>18px</td>
                </tr>
                <tr>
                    <td>次级标题</td>
                    <td><span style="font-size:16px;font-weight:bold;color:#333">我是标题</span></td>
                    <td>加粗</td>
                    <td>#333</td>
                    <td>16px</td>
                </tr>
                <tr>
                    <td>小标题</td>
                    <td><span style="font-size:14px;font-weight:bold;color:#333">我是标题</span></td>
                    <td>加粗</td>
                    <td>#333</td>
                    <td>14px</td>
                </tr>
                <tr>
                    <td>正文</td>
                    <td><span style="color:#657180">我是正文</span></td>
                    <td>默认</td>
                    <td>#666</td>
                    <td>14px</td>
                </tr>
                <tr>
                    <td>辅助文字</td>
                    <td><span style="color:#999">我是辅助文字</span></td>
                    <td>默认</td>
                    <td>#999</td>
                    <td>14px</td>
                </tr>
                <tr>
                    <td>失效文字</td>
                    <td><span style="color:#ccc">我是失效文字</span></td>
                    <td>默认</td>
                    <td>#ccc</td>
                    <td>14px</td>
                </tr>
                <tr>
                    <td>链接文字</td>
                    <td><a class="u-link" href="#">我是链接文字</a></td>
                    <td>默认</td>
                    <td>#3399ff</td>
                    <td>14px</td>
                </tr>
            </tbody>
        </table>
    </div>
        
</template>
<script>
    export default {
        name: 'start'
    }

</script>
<style lang="less">
    img {
        width: 100%;
    }

</style>
