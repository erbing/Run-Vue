<template>
    <span>{{labelText}}</span>
</template>
<script>
    /**
     *  author : fitz/秋水
     *  email  : wenjingbiao@outlook.com
     *
     * @props l   abel              初始化計時標簽，如：發送驗證碼
     * @props     'ticking-label'   倒計時標簽，    如：重新發送驗證碼(2)
     * @props     ticks             倒計時秒數      如：60
     * @methods   ticking()         啓動倒計時
     * @methods   stop()            清除倒計時
     * @v-model                     在組件使用時綁定一個v-model 可以獲取倒計時的秒數，觀察這個v-model 可以做其他事情
     *
     * 例子
     *     1、注冊 ticker 組件
     *     2、輸出標簽
     *          <ticker ref='ticker' label="發送驗證碼" ticking-label="重新發送驗證碼' :ticks="60" v-model="ticker'>
     *     3、調用 ticking()
     *         this.$refs.ticker.ticking()
     *     4、調用stop()
     *         this.$refs.ticker.調用stop()
     * **/
    export default{
        name: 'ticker',
        props: {
            label: { //計時標簽
                type: String,
                default: '開始計時'
            },
            'ticking-label': {
                //倒計時標簽
                type: String,
                default: '剩餘'
            },
            //倒計時事件
            ticks: {

                type: Number,
                default: 10
            }
        },
        data(){
            return {
                value: 0,
                labelText: this.label,
            }
        },
        watch: {
            value(val){
                if (val > 0) {
                    this.labelText = this.tickingLabel + '(' + val + ')'
                } else {
                    this.labelText = this.label
                }
                this.$emit('input', val);
            },
        },
        methods: {
            stop(){
                clearInterval(this.ticker);
                this.$emit('input', this.value = 0)
            },
            ticking(){
                let val = this.ticks
                this.ticker = setInterval(()=> {
                    if (val <= 0) {
                        clearInterval(this.ticker);
                        val = 0
                    } else {
                        --val;
                    }
                    this.value = val
                }, 1000);
            }
        }``
    }
</script>

