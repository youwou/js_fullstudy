<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe911;</i>
    </v-header>
    <!-- <router-view/> -->

    <!-- mune -->
  <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'

export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052911 */
  src: url('//at.alicdn.com/t/font_2052911_reynkiyg3ym.eot');
  src: url('//at.alicdn.com/t/font_2052911_reynkiyg3ym.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052911_reynkiyg3ym.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052911_reynkiyg3ym.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052911_reynkiyg3ym.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052911_reynkiyg3ym.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>
