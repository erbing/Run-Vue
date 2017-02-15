<template>
    <div class="g-row" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'col',
        props: {
            gutter: {
                type: Number,
                default: 0
            },
            type: {
                type: String
            },
            justify: {
                type: String,
                default: 'start'
            },
            align: {
                type: String,
                default: 'top'
            },
            className: String
        },
        computed: {
            classes: function () {
                var cn = ''
                cn += this.type ? ' g-row-' + this.type : ''
                cn += this.justify ? ' g-row-flex-' + this.justify : ''
                cn += this.align ? ' g-row-flex-' + this.align : ''
                cn += this.className ? ' ' + this.className : ''
                return cn
            },
            styles () {
                let style = {}
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    }
                }
                return style
            }
        },
        methods: {
            updateGutter (val) {
                this.$children.forEach((child) => {
                    if (val !== 0) {
                        child.gutter = val
                    }
                })
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val)
            }
        },
        mounted () {
            this.updateGutter(this.gutter)
        }
    }

</script>
<style lang="less">
    @import '../../assets/less/normalize.less';
    @import '../../assets/less/base.less';
    @import '../../assets/less/layout.less';
</style>
