<template>
    <div class="ds-thread" data-thread-key="1" data-title="vuejs中文社区" data-url="http://vuejs.com.cn/"></div>
</template>

<script>
/* eslint-disable */
    var duoshuoQuery = {short_name: 'vuejscn'}
    (function () {
        var ds = document.createElement('script')
        ds.type = 'text/javascript'
        ds.async = true
        ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js'
        ds.charset = 'UTF-8'
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds)
    })()
/* eslint-enable */
    export default {
        name: 'feedback'
    }
</script>