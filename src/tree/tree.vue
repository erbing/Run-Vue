<template>
    <div id="tree">
        <ul>
            <item
                class="item"
                :model="treeData">
            </item>
        </ul>
    </div>
</template>

<script>
    import cpTree from '../cp-tree/cp-tree'
    export default {
        name: 'tree',
        components: {
            'item': cpTree
        },
        data () {
            return {
                treeData: {
                    name: 'This is My Tree',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                            name: 'child folder',
                            children: [
                                {
                                    name: 'child folder',
                                    children: [
                                        { name: 'hello' },
                                        { name: 'wat' }
                                    ]
                                },
                                { name: 'hello' },
                                { name: 'wat' },
                                {
                                    name: 'child folder',
                                    children: [
                                        { name: 'hello' },
                                        { name: 'wat' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="less"></style>
