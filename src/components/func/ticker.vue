<script>
    /**
     *  author : fitz/秋水
     *  email  : wenjingbiao@outlook.com
     * @props     ticks               Number            倒計時秒數      如：60
     * @props     auto                Boolean           自动倒计时，    默认为true,
     * @methods   tick()                                啓動倒計時
     * @methods   stop()                                清除倒計時
     * @v-model                                         在組件使用時綁定一個v-model 可以獲取倒計時的秒數，觀察這個v-model 可以做其他事情
     *
     * 例子
     *     1、注冊 ticker 組件
     *     3、調用 tick()
     *         this.$refs.ticker.tick()
     *     4、調用stop()
     *         this.$refs.ticker.stop()
     * **/
    export default{
        name: 'tick',
        render(createElement) {
            return createElement('span',{},this.$slots.default)
        },
        props: {

            ticks: {
                type: Number,
                default: 10
            },
            auto: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                currentValue: 0,
                text: this.label
            }
        },

        mounted(){
            this.$nextTick(()=> {
                if (this.auto === true) {
                    this.tick()
                }
            })
        },
        methods: {
            stop(){
                clearInterval(this.ticker);
                this.$emit('input', this.currentValue = 0)
            },
            tick(){
                let val = this.ticks;
                this.ticker = setInterval(()=> {
                    if (val <= 0) {
                        clearInterval(this.ticker);
                        val = 0
                    } else {
                        val--;
                    }
                    this.currentValue = val;
                    this.$emit('input', val);
                }, 1000);
            }
        }
    }
</script>

