<template>
<div class="code-block">
  <markdown :text="text" class="code-block-code-style"/>
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
            open: false
        }
    },
    computed: {
        text () {
            return `\`\`\`html
        ${this.code}
                    \`\`\``
        }
    },
    methods: {
        toggle () {
            this.open = !this.open
        }
    },
    components: {
        markdown
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
</style>
