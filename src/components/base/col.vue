<template>
    <div class="g-col" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'col',
        data () {
            return {
                gutter: 0
            }
        },
        props: {
            span: {
                type: String,
                required: true
            },
            offset: {
                type: String,
                default: '0'
            },
            push: {
                type: String,
                default: '0'
            },
            pull: {
                type: String,
                default: '0'
            },
            className: String
        },
        computed: {
            classes () {
                var cn = ''
                cn += this.span ? ' g-col-span-' + this.span : ''
                cn += this.offset ? ' g-col-offset-' + this.offset : ''
                cn += this.push ? ' g-col-push-' + this.push : ''
                cn += this.pull ? ' g-col-pull-' + this.pull : ''
                cn += this.className ? ' ' + this.className : ''
                return cn
            },
            styles () {
                let style = {}
                if (this.gutter !== 0) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    }
                }
                return style
            }
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    @import '../../assets/less/layout.less';
</style>
