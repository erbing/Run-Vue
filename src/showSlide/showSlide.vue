<template>
    <div id="slide-tree">
        <ul>
            <slide-tree
                class="item"
                :model="slideData">
            </slide-tree>
        </ul>
    </div>
</template>

<script>
    import SlideTree from '../slide-tree/slide-tree'
    export default {
        name: 'slide-tree',
        components: {
            'slide-tree': SlideTree
        },
        data () {
            return {
                slideData: {

                }
            }
        }
    }
</script>