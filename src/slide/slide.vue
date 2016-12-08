<template>

    <div class="mu-paper mu-drawer">
        <div class="mu-appbar exmaples-nav-appbar">
            <div class="left"></div> 
            <div class="mu-appbar-title"><a href="#/index" class="exmaples-appbar-title" style="display: inline-block;">Muse-UI</a> 
              <div class="mu-badge-container exmaples-version"> 
                <em class="mu-badge mu-badge-secondary">alpha</em>
              </div>
            </div>
            <div class="right"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'mu-paper',
    props: {
        circle: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: true
        },
        zDepth: {
            type: Number,
            default: 1
        }
    },
    computed: {
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
.mu-paper {
  transition: all .45s @easeOutFunction;
  color: @textColor;
  background-color: @dialogBackgroundColor;
  .depth(1);
}

.mu-drawer {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  .scrollable();
  .no-scrollbar();
  transition-property: transform, visibility;
  transition-duration: 0.45s;
  transform: translate3d(-100%, 0, 0);
  border-radius: 0;
  left: 0;
  visibility: hidden;
  z-index: 200;
  &.right {
    right: 0;
    left: auto;
    transform: translate3d(100%, 0, 0);
  }
  &.open {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
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
