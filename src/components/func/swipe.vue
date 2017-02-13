<template>
<div :class="{'m-banner__auto': !isShowDots , 'm-banner': isShowDots}">
    <div
        class="m-banner__bd"
        ref="list"
        @touchstart='onStart($event)'
        :style='boxStyle'
    >
        <a 
            v-for='(item, index) in items'
            class="m-banner__item" 
            :href="item.url"
            :style='curStyles[index - oldactive + 1]||{}'
        >
            <img :src="item.imgUrl">
        </a>
    </div>
    <div v-if='isShowDots' class="m-banner__mask"></div>
    <div class="m-banner__dots" v-if='items.length > 1 && isShowDots'>
        <i 
            class='m-banner__dot'
            v-for='(item, index) in items' 
            :class='index==active?"z-on":""'
            @click='change(index)'
        ></i>
    </div>
    <!-- 已看人数 -->
    <div class="m-banner__number" v-if='lookNumber'><i class="icon-see"></i>{{lookNumber}}</div>
</div>
</template>

<script>
module.exports = {
    props: {
        // 数据
        items: {
            type: Array,
            default: () => {
                return []
            }
        },
        //  是否有观看 人数
        lookNumber: {
            default: 0
        },
        // 是否显示下方banner__dots
        isShowDots: {
            default: true
        },
        isHeight: {
            default: 0
        },
        // 当前页码
        // active: {
        //     default: 0
        //     // 转换成非负整数
        //     // coerce: function (val) {
        //     //     val = parseInt(val)
        //     //     return val > 0 ? val : 0
        //     // }
        // },
        // 最小移动距离
        baseDistance: {
            default: 100,
            // 大于100的数
            coerce: function (val) {
                val = parseFloat(val)
                return val > 100 ? val : 100
            }
        },
        // 动画延时
        delay: {
            default: 300,
            // 大于100的数
            coerce: function (val) {
                val = parseFloat(val)
                return val > 300 ? val : 300
            }
        },
        speed: {
            default: 5000
        }
    },

    data: function () {
        return {
            active: 0,
            timer: null, // 自动播放的定时器
            coordinateX: 0,
            oldactive: 0,
            _isLast: true,
            _isFirst: true,
            boxStyle: {
                'transition-duration': 0,
                'transform': 'translate(0, 0) translateZ(0)'
            },
            curStyles: [{
                'left': '-100%'
            }, {
                'left': 0
            }, {
                'left': '100%'
            }]
        }
    },

    methods: {
        _setCss: function (distance, delay) {
            this.boxStyle = {
                'transition-duration': delay + 'ms',
                'transform': 'translate(' + distance + ', 0) translateZ(0)'
            }
        },
        _init: function () {
            if (!this.items || !this.items.length) return

            const active = this.active
            const children = this.$refs.list.children

            this.oldactive = active
            this._isFirst = !children[active - 1]
            this._isLast = !children[active + 1]

            this._setCss(0, 0)
        },
        _page: function (distance) {
            var delay = this.delay
            if (distance >= this.baseDistance && !this._isFirst) {
                this._setCss('100%', delay)
                this.active--
            } else if (distance <= -this.baseDistance && !this._isLast) {
                this._setCss('-100%', delay)
                this.active++
            } else {
                this._setCss(0, delay)
            }
        },
        change: function (index) {
            if (index > this.items.length - 1) {
                index = 0
            }
            this.active = this.oldactive = index
        },
        onStart: function (e) {
            this.coordinateX = e.changedTouches[0].clientX
            this._init()
            this.stopPlay()
            document.body.addEventListener('touchmove', this._onMove)
            document.body.addEventListener('touchend', this._onEnd)
        },

        _onMove: () => {},
        _onEnd: () => {},

        autoPlay: function () {
            var that = this
            this.timer = setTimeout(function () {
                that.change(that.active + 1)
                that.autoPlay()
            }, this.speed)
        },
        stopPlay: function () {
            if (this.timer) {
                window.clearTimeout(this.timer)
                this.timer = null
            }
        }
    },

    mounted: function () {
        var that = this
        this._onMove = function (e) {
            e.preventDefault() // 解决 微信以及部分安卓浏览器无法点击的问题
            var distance = e.changedTouches[0].clientX - that.coordinateX

            // 如果向两端翻页，增加阻力
            if ((!that._isFirst && distance > 0) || (!that._isLast && distance < 0)) {
                distance = distance / 2
            }
            that._setCss(distance + 'px', 0)
        }

        this._onEnd = function (e) {
            that._page(e.changedTouches[0].clientX - that.coordinateX)
            that.autoPlay()
            document.body.removeEventListener('touchmove', that._onMove)
            document.body.removeEventListener('touchend', that._onEnd)
        }

        this._init()
        this.autoPlay()
    }

}
</script>

<style lang="less">
@import "../../assets/less/variable";
@import "../../assets/less/mixin";
.m-banner {
    position: relative;
    .px2rem(height, 280);
    overflow: hidden;
}
.m-banner__auto {
    position: relative;
    .px2rem(height, 500);
    overflow: hidden;
}

.m-banner__mask {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    .px2rem(height, 60);
    background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.m-banner__dots {
    position: absolute;
    width: 100%;
    left: 0;
    .px2rem(bottom, 20);
    text-align: center;
    font-size: 0;
}

.m-banner__dot {
    display: inline-block;
    .px2rem(margin, 0, 8);
    .px2rem(width, 12);
    .px2rem(height, 12);
    background-color: #FFF;
    border-radius: 50%;
    &.z-on {
        background-color: @color-primary;
    }
}

.m-banner__number {
    position: absolute;
    color: @color-white;
    .px2rem(right, 20);
    .px2rem(bottom, 12);
    .icon-see {
        .px2rem(margin-right, 20);
    }
}

.m-banner__bd {
    height: 100%;
}

.m-banner__item {
    position: absolute;
    top: 0;
    left: -1000%;
    height: 100%;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
}


.checkbigPic {
    display: flex;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    .mengImg {
        transition-duration: 300ms;
        text-align:center;
        width: 100%;
        img {
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            height: auto;
        }
    }
}
</style>