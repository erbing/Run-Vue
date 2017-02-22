<script>
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
                this.$emit('input',  0)
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
                    this.$emit('input', val);
                }, 1000);
            }
        }
    }
</script>

