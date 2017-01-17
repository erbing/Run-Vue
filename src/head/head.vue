<template>
<div class="mu-appbar example-appbar" :style=" showSlider ? '' : 'position: relative; left: 0' ">
    <div class="title-left">
      <button class="ui-btn btn" @click="hideSlider"> 
        <i class="fa-reorder"></i>
      </button>
    </div>
    <div class="mu-appbar-title">
      <slot>
        <span>{{title}} - VueJs 中文社区</span>
      </slot>
    </div>
    <div class="title-right">
      <button class="ui-btn btn" @click="goGithub">
       <i class="fa-github"></i>
       </button>
    </div>
</div>
</template>

<script>
import { getShow } from '../vuex/actions'
export default {
    name: 'mu-appbar',
    props: {
        titleClass: {
            type: [String, Array, Object]
        },
        zDepth: {
            type: Number,
            default: 1
        }
    },
    computed: {
        showSlider () {
            return this.$store.state.showSlider
        },
        title () {
            return this.$store.state.title
        }
    },
    methods: {
        hideSlider () {
            this.$store.state.showSlider = !this.$store.state.showSlider
        },
        goGithub () {
            window.location.href = '/'
        }
    },
    vuex: {
        actions: {
            getShows: getShow
        }
    }
}
</script>

<style lang="less">
@import  '../assets/less/normalize.less';
@import  '../assets/less/base.less';
.hide-left-bar {
  position: relative
}

.mu-appbar {
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  background-color: #58B7FF;
  height: 64px;
  padding: 0 8px;
  width: 100%;
  z-index: 100;

  .left {
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    box-flex: 0;
  }
  .right {
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    box-flex: 0;
  }

  .title-left{
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    box-flex: 0;
    width:46px;
    float: left;
  }
  .title-right{
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    box-flex: 0;
    width:46px;
    float: right;
  }


  .ui-btn {
    color: inherit;
    height: 100%;
    line-height: 100%;
    min-width: auto;
  }

  .btn{
    position: relative;
    display: inline-block;
    overflow: visible;
    line-height: 1;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 24px;
    padding: 12px;
    border: none;
    appearance: none;
    background: none;
    color: inherit;
    text-decoration: none;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.23,1,.32,1);
    transform: translateZ(0);
    box-flex: 0;
    flex-shrink: 0;
    flex: 0 0 auto;
    flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    outline: 0;
    cursor: pointer;
  }
}

.example-appbar{
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.mu-appbar-title {
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  font-weight: 400;
  line-height: 56px;
}

.head-title{
  width: 80%;
  float: left;
}

@media (min-width: 480px) {
  .mu-appbar-title {
    line-height: 64px;
  }
  .mu-appbar {
    height: 64px;
  }
  .mu-appbar-title {
    font-size: 24px;
  }
}
</style>
