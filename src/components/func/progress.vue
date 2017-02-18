<template>
    <div class="progress">
        <div class="progress-outer">
            <div class="progress-inner">
                <div class="progress-bg" :style="bgStyle"></div>
            </div>
        </div>
        <span v-if="!hideInfo" class="progress-text">
            <slot>
                <span v-if="isStatus" class="progress-text-inner">
                    <i class="icon-success" style="color: #0c6" v-if="status == 'success' "></i>
                    <i class="icon-close2" style="color: #f50" v-else></i>
                </span>
                <span v-else class="progress-text-inner">
                    {{ percent }}%
                </span>
            </slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'progress',
        props: {
            percent: {
                type: Number,
                default: 0
            },
            status: {
                // validator (value) {
                //     return oneOf(value, ['normal', 'active', 'wrong', 'success'])
                // },
                default: 'normal'
            },
            hideInfo: {
                type: Boolean,
                default: false
            },
            strokeWidth: {
                type: Number,
                default: 10
            }
        },
        computed: {
            isStatus () {
                return this.status === 'wrong' || this.status === 'success'
            },
            bgStyle () {
                return {
                    width: `${this.percent}%`,
                    height: `${this.strokeWidth}px`
                }
            }
        },
        methods: {
            handleStatus (isDown) {
                if (isDown) {
                    this.status = 'normal'
                } else {
                    if (parseInt(this.percent, 10) === 100) {
                        this.status = 'success'
                    }
                }
            }
        },
        watch: {
            percent (val, oldVal) {
                if (val < oldVal) {
                    this.handleStatus(true)
                } else {
                    this.handleStatus()
                }
            }
        }
    }

</script>

<style lang="less">
.progress{
    display: inline-block;
    width: 100%;
    font-size: 12px;
    position: relative;
    .progress-outer{
        display: inline-block;
        width: 100%;
        padding-right: 55px;
        margin-right: -55px;
    }
    .progress-inner{
        display: inline-block;
        width: 100%;
        background-color: #f3f3f3;
        border-radius: 100px;
        vertical-align: middle;
    }
    .progress-bg{
        border-radius: 100px;
        background-color: #2db7f5;
        transition: all .2s linear;
        position: relative;
        &:before{
            content: '';
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            border-radius: 10px;
            animation: progress-active 2s ease-in-out infinite;
        }
    }
    .progress-text{
        display: inline-block;
        margin-left: 5px;
        text-align: left;
        font-size: 1em;
        vertical-align: middle;
        .progress-text-inner{

        }
    }
}

@keyframes progress-active {
    0% {
        opacity: .3;
        width: 0;
    }
    100% {
        opacity: 0;
        width: 100%;
    }
}
</style>