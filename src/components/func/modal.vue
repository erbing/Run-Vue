<template>
<div class="m-modal" v-show="visible">
    <div class="m-modal__inner">
        <header class="m-modal__hd">{{title}}</header>
        <section class="m-modal__bd" v-if="!modalInput">
            {{content}}
        </section>
        <section class="m-modal__bd" v-if="modalInput">
            <input type="text" class="input" v-model="inputMsg" placeholder="请输入剩余课时提醒" />
        </section>
        <footer class="m-modal__ft">
            <button class="btn m-modal__btn" @click="ok">
                {{okText}}
            </button><button 
                class="btn m-modal__btn"
                @click="cancel"
                v-if="type ==='confirm'">
                {{cancelText}}
            </button>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'alert' // 支持 alert confirm
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        okText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        callback: {
            default: null
        },
        modalInput: {
            default: false
        },
        inputMsg: {
            default: 1
        }
    },
    methods: {
        ok () {
            if (typeof this.callback === 'function') {
                this.callback(true)
            }
            if (this.modalInput) {
                this.$emit('test', this.inputMsg)
            }
        },
        cancel () {
            if (typeof this.callback === 'function') {
                this.callback(false)
            }
        }
    }
}
</script>

<style lang="less">
@import "../../assets/less/variable";
@import "../../assets/less/mixin";
.m-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.m-modal__inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    border-radius: @radius-base;
    background-color: @color-white;
    transform: translate(-50%, -50%);
}

.m-modal__hd {
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: @color-black;
    border-bottom: 1px solid @color-gray-light;
}

.m-modal__bd {
    padding: 30px @spacing-large;
    font-size: 14px;
    word-wrap: break-word;
    word-break: break-all;
    color: @color-black;
    .input {
        width: 100%;
        height: 40px;
    }
}

.m-modal__ft {
    text-align: center;
    border-top: 1px solid @color-gray-light;
}

.m-modal__btn {
    color: @color-primary;
    border: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: @color-white;
    &:first-child {
        width: 50%;
    }
    &:last-child {
        width: 100%;
    }
    &+& {
        width: 50%;
        border-left: 1px solid @color-gray-light;
    }
}
</style>