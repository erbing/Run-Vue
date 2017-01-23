<template>
<label class="u-input-checkbox" :class='{"z-checked":checked}'>
    <i class="iconfont icon-square bgcolor" v-if="!checked"></i>
    <i class="iconfont icon-squarecheckfill bgcolor" v-else></i>
    <input type="checkbox" v-model="model" :value='value'>
    <slot></slot>
</label>
</template>

<script>
export default {
    props: {
        model: {
            default: Boolean
        },
        value: {
            default: String
        }
    },
    computed: {
        checked () {
            if (Object.prototype.toString.call(this.model) === '[object Array]') {
                for (let i = 0, l = this.model.length; i < l; i++) {
                    if (this.model[i] === this.value) {
                        return true
                    }
                }
            } else if (this.model === this.value) {
                return true
            }
            return false
        }
    }
}
</script>

<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    @import '../../assets/fonts/iconfont.css';
    .u-input-checkbox {
        display: inline-block;
        cursor: pointer;
        margin-right: 3px;

        .bgcolor {
            color: @color-primary
        }

        input {
            position: absolute;
            visibility: hidden;
        }
        &.z-checked {
            // &:before {
            //     content: "\e915";
            //     color: @color-primary;
            // }
        }
    }
</style>