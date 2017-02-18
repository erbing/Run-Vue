<template>
<a class="scroll-top" v-show='isShow' @click='toTop'>
    <i class="icon-arraw-up"></i>
    顶部
</a>
</template>

<script>
// 查看位置
const getScrollTop = function () {
    var top = window.scrollY
    if (top > 100) {
        this.isShow = 1
    } else {
        this.isShow = 0
    }
}

module.exports = {
    name: 'backTop',
    mounted: function () {
        var that = this
        this._onscroll = function () {
            getScrollTop.call(that)
        }
        window.addEventListener('scroll', this._onscroll)
        this._onscroll() // 初始化
    },
    destroyed: function () {
        window.removeEventListener('scroll', this._onscroll)
    },
    data: function () {
        return {
            isShow: 0
        }
    },
    methods: {
        toTop: function () {
            for (var i = window.scrollY; i > 0; i--) {
                setTimeout(() => {
                    window.scroll(0, window.scrollY - 1)
                }, i)
            }
            // window.scroll(0, 0)
            this.isShow = 0
        }
    }
}

</script>

<style lang="less">
@import "../../assets/less/variable";
@import "../../assets/less/mixin";
.scroll-top {
    position: fixed;
    bottom: 80px;
    right: 10px;
    .px2px(width, 100);
    .px2px(height, 100);
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    .icon-arraw-up {
        display: block;
        .px2px(margin-top, 8);
    }
    font-size: 14px;
}
</style>