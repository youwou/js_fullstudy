<template>
  <div class="child1">
      <button @click="sendMsg">传递给老二</button>
  </div>
</template>

<script>
import bus from "@/utils/bus.js"
export default {
    data() {
        return {
            msg: '我是child1里面的数据'
        }
    },
    method:{
        sendMsg() {
            bus.$emit
        }
    }
}
</script>

<style>

</style>