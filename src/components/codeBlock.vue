<template>
<div class="code-block">

    <div class="codeInfoTitle">
        <ul class="codeInfo">
            <li v-for="(item, index) in arrCode" class="item" :class="{ 'active': index === curIndex }" @click="changeIndex(index)">{{item}}</li>
        </ul>
    </div>

    <div style="clear: both"></div>

    <div class="codeInfo">
        <transition name="bounce">
            <markdown :text="html" class="code-block-code-style" v-show="curIndex === 0" />
       </transition>
       <transition name="bounce">     
            <markdown :text="script" class="code-block-code-style" v-show="curIndex === 1"/>
       </transition>
       <transition name="bounce">     
            <markdown :text="less" class="code-block-code-style" v-show="curIndex === 2"/>
       </transition>
    </div>

    <markdown v-if="description" :text="description" class="code-block-description"/>
</div>
</template>

<script>
import markdown from './markdown'
export default {
    props: {
        description: {
            type: String
        },
        code: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            tooltip: '示例代码',
            open: false,
            arrCode: ['HTML', 'JS', 'LESS'],
            curIndex: 0
        }
    },
    computed: {
        html () {
            return `\`\`\`html
${this.code.match(/<template>([\s\S]*?)<\/template>/)[1]}
        \`\`\``
        },
        script () {
            return `\`\`\`javascript
${this.code.match(/<script>([\s\S]*?)<\/script>/)[1]}
        \`\`\``
        },
        less () {
            return `\`\`\`less
${this.code.match(/<style lang="less">([\s\S]*?)<\/style>/)[1]}
        \`\`\``
        }
    },
    methods: {
        toggle () {
            this.open = !this.open
        },
        changeIndex (index) {
            this.curIndex = index
        }
    },
    components: {
        markdown
    },
    created () {
    }
}

</script>

<style lang="less">

.code-toolbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0px 24px;
  cursor: pointer;
}

.code-toolBar-title{
  padding-right: 16px;
  line-height: 56px;
  font-size: 20px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.code-block-code-style {
  overflow: auto;
  max-height: 1400px;
  display: block;
  overflow-x: auto;
  margin: 0;
  &.hide {
    max-height: 0;
  }
}

.code-block-description{
  overflow: auto;
  padding: 10px 20px 0;
  margin: 0;
}

.codeInfoTitle {
    height: 50px;
    margin-bottom: 5px;
}

.codeInfo{
    list-style-type: none; 
    padding: 0;
    margin: 0;
    .item {
        width: 33.3%;
        float: left;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    .active {
        border-bottom: 3px solid #2196f3;
        transition: all 0.15s;
    }
}
</style>
