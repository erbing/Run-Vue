<template>
    <div class="paper run-slider" :class="showSlider ? '' : 'hide-slider' ">
        <div class="mu-appbar leftbar">
            <div class="left">
              <img src="../assets/images/logo2.png" class="logo"/>
              <span class="logo-text">Run-vue</span>
              <em class="beta">Beta</em>
            </div>
            <div class="mu-appbar-title"></div>
            <div class="right"></div>
        </div>

        <div class="version slider-content">
          <span class="slider-title">Version:</span>
          <div class="select-down select-content">
              <span class="text-color">Vue : </span>2.1.0
          </div>
        </div>

        <cp-select :title=" '如何使用' " :to=" '/start' "></cp-select>
        <hr class="divider">
        <cp-select :title=" '个性定制' "></cp-select>
        <hr class="divider">
        <cp-select :title=" '基础组件' "></cp-select>
        <hr class="divider">
        <cp-select :title=" '功能组件' "></cp-select>
        <hr class="divider">
        <cp-select :title=" '更多信息' "></cp-select>
        <hr class="divider">
        <cp-select :title=" '关于我们' " :to=" '/about' "></cp-select>

        <hr class="divider">
    </div>

</template>

<script>
import cpselect from '../cp-select/cp-select'
export default {
    vuex: {
        getters: {
            showSlider: state => state.showSlider
        }
    },
    name: 'mu-paper',
    components: {
        'cp-select': cpselect
    },
    computed: {
        showSlider () {
            return this.$store.state.showSlider
        },
        paperClass () {
            var arr = []
            if (this.circle) arr.push('mu-paper-circle')
            if (this.rounded) arr.push('mu-paper-round')
            arr.push('mu-paper-' + this.zDepth)
            return arr
        }
    }
}
</script>

<style lang="less">
@import "../assets/less/import.less";
.paper {
  transition: all .45s @easeOutFunction;
  color: @textColor;
  background-color: @dialogBackgroundColor;
  .depth(2);
}

i{
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
} 

.run-slider {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  border-radius: 0;
  left: 0;
  /*visibility: hidden;*/
  z-index: 200;
}

.hide-slider {
  display: none;
}

.divider{
    margin: 0;
    height: 1px;
    border: none;
    background-color: rgba(0,0,0,.12);
    width: 100%;
}

.logo{
  width: 50px;
  height: 50px;
}

.logo-text{
  font-size: 24px;
  margin-left: 24px;
  text-align: center;
  display: inline-block;
}

.text-color{
  color: #03a9f4;
}

.slider-content{
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
  align-items: center;
  display: flex;
  width: 100%;
  .slider-title{
    font-size: 16px;
    margin-top: 8px;
  }
}

.select-down{
    display: inline-block;
    font-size: 15px;
    height: 48px;
    position: relative;
    transition: all .45s cubic-bezier(.23,1,.32,1);
    cursor: pointer;
    overflow: hidden;
}
.select-content{
    margin-left: 16px;
    margin-right: 16px;
    line-height: 56px;
    font-size: 16px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.12);
    color: rgba(0,0,0,.87);
    padding-left: 8px;
}

.version{
  height: 48px;
}
.beta{
  margin-left: 28px;
  font-size: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: #bdbdbd;
  color: #03a9f4;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
}

.mu-paper-round {
  border-radius: 2px;
}

.mu-paper-circle {
  border-radius: 50%;
}

.mu-paper-1 {
  .depth(1);
}

.mu-paper-2 {
  .depth(2);
}

.mu-paper-3 {
  .depth(4);
}

.mu-paper-4 {
  .depth(4);
}

.mu-paper-5 {
  .depth(5);
}
</style>
