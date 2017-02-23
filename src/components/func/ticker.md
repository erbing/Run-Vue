

#services 
> 功能性组件

## ticker 组件


###API
|   Props  |    Type                       |  说明                |
|-------   |-------                        |-------               |
|   auto   | Boolean, <br>默认为true       | 自动倒计时           |
|   ticks  | Number, <br>默认为10          | 倒计时时长           |
|   tick   | Function                      | 启动倒计时的方法     |
|   stop   | Function                      | 停止倒计时的方法     |

###SLOTS
 
|   slot   | 非具名插槽 |
|   -------|-------     |


### 使用

``` javascript
import ticker from './service/ticker'

new Vue({
    el:'#app',
    components:{
        ticker
    },
    data(){
        return{
            tickLabel:'倒计时',
            ticks:60,
            currentValue:0
        }
    },
    watch:{
        currentValue(value){
             //do someting while ticking
             
        }
    }
})

```
``` html
    自动倒计时
    
    <ticker 
        :ticks="ticks" 
        v-model="currentValue"
    />

    手动触发倒计时
    <ticker 
        :ticks="ticks"
        :auto="false"
        v-model="currentValue"
    />

``
----- 