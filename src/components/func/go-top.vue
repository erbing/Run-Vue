<script>
    /**
     * @props direction  Object     =>{  bottom:'10px',right:'20px'}   =>控制返回頂部按鈕的位置，默認右下角
     * @props position   Number     => 150                             =>控制返回按鈕出現的位置，默認window.scrollY 為 100的時候
     *@slot   -          -                                             =>爲了增强通用性，設置返回頂部的按鈕可以塞入非具名插槽
     **/
    export default{
        name: 'go-to-top',
        render (createElement) {
            return createElement('div', {
                style: [{position: 'fixed'}, this.direction, {opacity: this.visibility}],
                'class': 'go-top',
                on: {
                    click: this.goTop
                }
            }, this.$slots.default)
        },
        props: {
            direction: {
                type: Object,
                default: function () {
                    return {
                        bottom: '10px',
                        right: '10px'
                    }
                }
            },
            position: {
                type: Number,
                default: 100
            }
        },
        data () {
            return {
                currentValue: false,
                visibility: 0
            }
        },
        watch: {
            currentValue (value) {
                this.visibility = (value === true ? 1 : 0)
            }
        },
        mounted () {
            this.$nextTick(() => {
                window.addEventListener('scroll',
                        this.onScroll
                )
            })
        },
        destroyed () {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            goTop () {
                for (let i = window.scrollY; i > 0; i--) {
                    setTimeout(() => {
                        window.scroll(0, window.scrollY - 1)
                    }, i / 10)   // 儅i超過1000時，不除以10就悲劇了
                }
            },
            onScroll () {
                let scrollTop = window.scrollY
                if (scrollTop > this.position) {
                    this.currentValue = true
                } else {
                    this.currentValue = false
                }
            }
        }
    }
</script>