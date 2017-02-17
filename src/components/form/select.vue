<!--
    author: tony
    title: 选择器
    params:
        items: 外部传入数据
        value: 选择器选择的值
        placeholder：选择器中的默认文字
        icon：选择器可添加的图标名称
        title：选择器选择的标题
        confirm：选择器确定按钮的文案
        cancel：选择器取消按钮的文案
        disabled：选择器禁用状态
    event:
        change: 选择器选择后触发，带返回值
-->
<template>
    <div class="ui-select-wrap" :class="{'ui-select-disabled': disabled}">
        <uiInput v-model="model" class="selectInput" :placeholder="placeholder" :disabled="disabled" :readonly="true" :icon="icon" @click.native="handleClick"></uiInput>
        <transition name="fade">
            <div class="ui-select-bg" v-show="show" @click="submit(false)" @touchmove="_stopDef"  @mousewheel="_stopDef"></div>
        </transition>
        <transition name="expand-select">
            <div class="ui-select-box" v-show="show" @mousewheel="_stopDef">
                <div class="ui-select-header">
                    <div class="ui-select-cancel" @click="submit(false)">{{cancel}}</div>
                    {{title}}
                    <div class="ui-select-confirm" @click="submit(true)">{{confirm}}</div>
                </div>
                <div class="ui-select-content">
                    <div class="ui-select-content-list">
                        <ul 
                            :class="{'province_dragging': listState.dragging}"
                            @touchstart="_onTouchStart('list', $event)"
                            @mousedown="_onTouchStart('list', $event)"
                            :style="{'transform' : 'translate3d(0,' + listState.translateY + 'px, 0)'}">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li v-for="(item, index) in listState.data"
                                :data-name="item.name"
                                :data-id="item.code"
                                :data-parentid="item.parentid"
                                :class="{
                                            'current': item.code === listState.selectedId,
                                            'node1':  Math.abs(index - listState.index) == 1,
                                            'node2':  Math.abs(index - listState.index) == 2,
                                            'node3':  Math.abs(index - listState.index) >= 3
                                        }"
                            >{{item.name}}</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <hr class="ui-select-line-top">
                <hr class="ui-select-line-bottom">
            </div>
        </transition>
    </div>
</template>
<script>
    import uiInput from '../../components/form/input.vue'
    export default {
        name: 'select',
        data () {
            return {
                target: '',
                listState: {
                    data: null,
                    selectedId: null,
                    index: 0,
                    startPos: null,
                    translateY: 0,
                    startTranslateY: 0,
                    dragging: false
                },
                delta: 0,
                slideEls: null,
                inputValue: '',
                show: false,
                result: {
                    id: '',
                    name: '',
                    code: ''
                }
            }
        },
        components: {
            uiInput
        },
        props: {
            items: Array,
            value: String,
            placeholder: {
                type: String,
                default: '请选择'
            },
            icon: String,
            title: {
                type: String,
                default: '请选择'
            },
            confirm: {
                type: String,
                default: '确定'
            },
            cancel: {
                type: String,
                default: '取消'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            model: {
                get: function () {
                    return this.value
                },
                set: function (newValue) {
                    this.$emit('input', newValue)
                }
            }
        },
        mounted () {
            this.init()
            this._onTouchMove = this._onTouchMove.bind(this)
            this._onTouchEnd = this._onTouchEnd.bind(this)
        },
        methods: {
            handleClick () {
                if (this.disabled) return false
                this.show = true
            },
            init () {
                this.listState.data = this.items
                this.listState.selectedId = this.items[0].code
                this.inputValue = this.items[0].name
                this.result.id = this.items[0].parentId
                this.result.name = this.items[0].name
                this.result.code = this.items[0].code
            },
            submit (val) {
                this.show = false
                if (val) {
                    this.result.id = this.items[this.listState.index].parentId
                    this.result.name = this.items[this.listState.index].name
                    this.result.code = this.items[this.listState.index].code

                    this.$emit('input', this.inputValue)
                    if (this.value !== this.inputValue) {
                        this.$emit('change', this.result)
                    }
                }
            },
            getSelectedData (index) {
                let target = this.target
                let thisData = this[target + 'State']
                thisData.selectedId = thisData.data[index].code
                this.inputValue = thisData.data[index].name
            },
            setPage () {
                let target = this.target
                let thisData = this[target + 'State']
                let clientHeight = this.slideEls[0]['clientHeight']
                let total = thisData.data.length
                let goPage = Math.round((thisData.translateY / clientHeight).toFixed(1))
                if (goPage > 0) {
                    goPage = 0
                }
                goPage = total - 1 >= Math.abs(goPage) ? goPage : -(total - 1)
                let index = Math.abs(goPage)
                thisData.index = index
                this.getSelectedData(index)
                thisData.translateY = goPage * clientHeight
            },
            _getTouchPos (e) {
                return e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY']
            },
            _getElem (e) {
                return Array.from(e.currentTarget.children).slice(3, -3)
            },
            _onTouchStart (target, e) {
                let thisData = this[target + 'State']
                this.target = target
                this.slideEls = this._getElem(e)
                this.delta = 0
                thisData.startPos = this._getTouchPos(e)
                thisData.startTranslateY = thisData.translateY
                thisData.dragging = true
                document.addEventListener('touchmove', this._onTouchMove, false)
                document.addEventListener('touchend', this._onTouchEnd, false)
                document.addEventListener('mousemove', this._onTouchMove, false)
                document.addEventListener('mouseup', this._onTouchEnd, false)
            },
            _onTouchMove (e) {
                let target = this.target
                let thisData = this[target + 'State']
                this.delta = this._getTouchPos(e) - thisData.startPos
                thisData.translateY = thisData.startTranslateY + this.delta
                if (Math.abs(this.delta) > 0) {
                    e.preventDefault()
                }
            },
            _onTouchEnd (e) {
                let target = this.target
                let thisData = this[target + 'State']
                thisData.dragging = false
                this.setPage()
                document.removeEventListener('touchmove', this._onTouchMove)
                document.removeEventListener('touchend', this._onTouchEnd)
                document.removeEventListener('mousemove', this._onTouchMove)
                document.removeEventListener('mouseup', this._onTouchEnd)
            },
            _stopDef (e) {
                e.preventDefault()
            }
        }
    }

</script>
<style lang="less">
@import '../../assets/less/normalize.less';
@import '../../assets/less/base.less';
.ui-select-bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.ui-select-box{
    position: fixed;
    z-index: 300;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
}

.ui-select-header{
    background-color: #eee;
    height: 44px;
    line-height: 44px;overflow: hidden;
    text-align: center;
    font-size: 16px!important;
}
.selectInput input{
    cursor: pointer;
}
.selectInput .ui-icon:before{
    font-size: 12px;
}

.ui-select-cancel{
    float: left;padding: 0 20px;
    color: #1AAD19;
    font-size: 16px!important;
}

.ui-select-confirm{
    float: right;padding: 0 20px;
    color: #1AAD19;
    font-size: 16px!important;
}

.ui-select-content{
    width: 100%;
    margin: 0 auto;background: #fff;
    overflow: hidden;height: 245px;
    overflow: hidden;
}

.ui-select-content-list{
    width: 100%;
    text-align: center;
}

.ui-select-content-list ul{
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    padding-left: 0 ;
    margin: 0;
}

.ui-select-content-list ul.province_dragging,
.ui-select-content-list ul.city_dragging,
.ui-select-content-list ul.area_dragging{-webkit-transition: none;transition: none;}

.ui-select-content-list li{
    line-height: 35px;
    height: 35px;
    white-space: nowrap;
    overflow: hidden;text-overflow: ellipsis;
    font-size: 14px!important;
}

.ui-select-content-list li.current{font-size: 16px!important;font-weight: bold;}
.ui-select-content-list li.node1{font-size: 15px!important;opacity: .7;}
.ui-select-content-list li.node2{font-size: 14px!important;opacity: .5;}
.ui-select-content-list li.node3{font-size: 12px!important;opacity: .3;}

.ui-select-line-top{
    width: 100%;
    border: none;
    border-top: 1px solid #eee;
    position: absolute;
    top: 149px;
    margin: 0;
    height: 0;
}

.ui-select-line-bottom{
    width: 100%;border: none;
    border-top: 1px solid #eee;
    position: absolute;
    top: 184px;
    margin: 0;height: 0;
}
.ui-select-disabled {
    background-color: #f3f3f3;
    cursor: not-allowed;
    color: #ccc
}

.fade-enter-active, .fade-leave-active {transition: opacity .35s}
.fade-enter, .fade-leave-active {opacity: 0}
.expand-select-enter-active, .expand-select-leave-active {transition: all .4s ease;bottom: 0px;}

.expand-select-enter, .expand-select-leave-active {transform: translate(0, 289px);}

</style>
