<template>
    <button class="btn" :class="className" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'button',
        props: {
            size: {
                type: String
            },
            type: {
                type: String,
                default: 'default'
            },
            hollow: {
                type: Boolean
            },
            disabled: {
                type: Boolean
            },
            icon: {
                type: String
            },
            native_type: {
                type: String
            },
            text: String
        },
        computed: {
            className: function () {
                var cn = ''
                cn += this.size ? ' btn--' + this.size : ''
                cn += this.type ? ' btn--' + this.type : ''
                cn += this.hollow ? ' z-hollow' : ''
                cn += this.disabled ? ' z-disabled' : ''
                cn += this.icon ? ' icon-' + this.icon : ''
                // cn += this.block ? ' btn--block' : '';
                return cn
            },
            style: function () {
                // return this.width ? 'width:' + this.width : '';
            }
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    .btn {
        overflow: hidden;
        padding: 9px 15px;
        .px2px(font-size, @font-size-base);
        color: @color-black;
        text-align: center;
        text-decoration: none;
        text-overflow: ellipsis;
        word-wrap: normal;
        white-space: nowrap;        
        border: 1px solid @color-gray;
        border-radius: 5px;
        outline: none;
        background-color: @color-white;
        cursor: pointer;
        .usn();
        transition: color .2s linear,background-color .2s linear,border .2s linear;
        &.z-disabled {
            cursor: not-allowed;
        }
    }
    .btn--default {
        &:hover {
            color: @color-primary;
            border-color: @color-primary;
        }
        &.z-disabled {
            color: @color-gray;
            border-color: lighten(@color-gray, 10%);
            background-color: @color-white;
        }
    }
    // 文字按钮
    .btn--text {
        padding-left: 0;
        padding-right: 0;
        color: @color-info;
        border-color: transparent;
        background-color: transparent;
        &:active,
        &:focus,
        &:hover {
            color: lighten(@color-info, 10%);
        }

        &.z-disabled {
            color: @color-gray;
            border-color: transparent;
            background-color: transparent;
        }
    }
    // 主要按钮
    .btn--primary {
        color: @color-white;
        border-color: @color-primary;
        background-color: @color-primary;
        &:active,
        &:focus,
        &:hover {
            border-color: lighten(@color-primary, 6%);
            background-color: lighten(@color-primary, 6%);
        }
        // 镂空状态
        &.z-hollow {
            color: @color-primary;
            border-color: @color-primary;
            background-color: @color-white;
            &:active,
            &:focus,
            &:hover {
                border-color: lighten(@color-primary, 10%);
                color: lighten(@color-primary, 10%);
            }
        }
    }
    /*各种颜色*/
    .btn--info {
        color: @color-white;
        border-color: @color-info;
        background-color: @color-info;
        &:active,
        &:focus,
        &:hover {
            border-color: lighten(@color-info, 6%);
            background-color: lighten(@color-info, 6%);
        }
        // 镂空状态
        &.z-hollow {
            color: @color-info;
            border-color: @color-info;
            background-color: @color-white;
            &:active,
            &:focus,
            &:hover {
                color: lighten(@color-info, 10%);
                border-color: lighten(@color-info, 10%);
            }
        }
    }
    .btn--success {
        color: @color-white;
        border-color: @color-success;
        background-color: @color-success;
        &:active,
        &:focus,
        &:hover {
            border-color: lighten(@color-success, 6%);
            background-color: lighten(@color-success, 6%);
        }
        // 镂空状态
        &.z-hollow {
            color: @color-success;
            border-color: @color-success;
            background-color: @color-white;
            &:active,
            &:focus,
            &:hover {
                color: lighten(@color-success, 10%);
                border-color: lighten(@color-success, 10%);
            }
        }
    }
    .btn--warning {
        color: @color-white;
        border-color: @color-warning;
        background-color: @color-warning;
        &:active,
        &:focus,
        &:hover {
            border-color: lighten(@color-warning, 6%);
            background-color: lighten(@color-warning, 6%);
        }
        // 镂空状态
        &.z-hollow {
            color: @color-warning;
            border-color: @color-warning;
            background-color: @color-white;
            &:active,
            &:focus,
            &:hover {
                color: lighten(@color-warning, 10%);
                border-color: lighten(@color-warning, 10%);
            }
        }
    }
    .btn--danger {
        color: @color-white;
        border-color: @color-danger;
        background-color: @color-danger;
        &:active,
        &:focus,
        &:hover {
            border-color: lighten(@color-danger, 6%);
            background-color: lighten(@color-danger, 6%);
        }
        // 镂空状态
        &.z-hollow {
            color: @color-danger;
            border-color: @color-danger;
            background-color: @color-white;
            &:active,
            &:focus,
            &:hover {
                color: lighten(@color-danger, 10%);
                border-color: lighten(@color-danger, 10%);
            }
        }
    }
     
    .btn--primary,
    .btn--info,
    .btn--success,
    .btn--warning,
    .btn--danger {
        // 按钮不可用
        &.z-disabled {
            color: @color-gray;
            border-color: lighten(@color-gray, 10%);
            background-color: @color-white-dark;
        }
        // 镂空状态不可用
        &.z-hollow {
             &.z-disabled {
                color: @color-gray;
                border-color: lighten(@color-gray, 10%);
                background-color: @color-white;
             }
        }
    }
</style>