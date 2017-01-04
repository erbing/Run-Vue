<template>
    <button class='btn'>{{text}}</button>
</template>

<script>
    export default {
        name: 'button',
        props: {
            text: String
        }
    }
</script>

<style lang="less">
    .btn {
        display: inline-block;
        padding: 8px 20px;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        outline: none;
        font-size: 16px;
        color: #fff;
        border: 1px solid #6fb92c;
        border-radius: 5px;
        background-color: #6fb92c;
        cursor: pointer;
        outline: 0;
        user-select: none;
        word-wrap: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>