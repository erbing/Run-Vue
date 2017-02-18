<template>
    <div id="cp-tree">
        <li>
            <div
            :class="{bold: isFolder}"
            @click="toggle"
            @dblclick="changeType">
            {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
            <cp-tree
                class="item"
                v-for="model in model.children"
                :model="model">
            </cp-tree>
            <li class="add" @click="addChild">+</li>
            </ul>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'cp-tree',
        props: {
            model: Object
        },
        data () {
            return {
                open: false
            }
        },
        computed: {
            isFolder () {
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType () {
                if (!this.isFolder) {
                    this.$set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        }
    }
</script>

<style lang="less">
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  line-height: 1.5em;
  list-style-type: dot;
}
</style>