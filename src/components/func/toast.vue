<template>
    <div class="m-toast" v-show="visible">
        <uiIcon :name="iconName"></uiIcon>
        <div class="m-toast__text">{{content}}</div>
    </div>
</template>

<script>
    import uiIcon from '../../components/base/icon'
    export default {
        name: 'toast',
        components: {
            uiIcon
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            content: {
                type: String,
                default: ''
            }
        },
        computed: {
            iconName () {
                if (this.type === 'loading') {
                    return 'loading'
                }
                if (this.type === 'warn') {
                    return 'warn'
                }
                if (this.type === 'success') {
                    return 'success'
                }
                return ''
            }
        },
        watch: {
            visible (val) {
                const that = this
                if (val) {
                    setTimeout(function () {
                        that.$emit('hideToast')
                    }, 2000)
                }
            }
        }
    }
</script>

<style lang="less">
@import "../../assets/less/variable";
@import "../../assets/less/mixin";
.m-toast {
    width: 100px;
    height: 100px;
    border-radius: 5px; 
    padding: 20px 0;
    opacity: 0.8;
    z-index: @z-index-modal;
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 200px;
    padding: @spacing-small @spacing-base;
    text-align: center;
    word-wrap: break-word;
    color: white;
    border-radius: @radius-large;
    background: #464646;
    transform: translate(-50%, -50%);
    [class^="icon-"], [class*=" icon-"] {
        display: inline-block;
        margin-top: @spacing-small;
        margin-bottom: @spacing-small;
        font-size: 32px;
        line-height: 1;
    }
    .icon-success {
        color: @color-success;
    }
    .icon-warn {
        color: #f76260;
    }
    .loading {
        margin-top: @spacing-small;
        margin-bottom: @spacing-small;
    }
    .m-toast__text {
        padding: 5px 0;
    }
}
</style>