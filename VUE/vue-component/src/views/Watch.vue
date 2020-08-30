<template>
  <div class="watch">
      <span style="margin-right:20px">{{temp}}度</span>
      <span>{{suggest}}</span>
  </div>
</template>

<script>
export default {
    adta() {
        return{
            temp:27,
            suggest:'穿短袖'
        }
    },
    methods:{
        add() {
            this.temp += 5
        },
        reduce() {
            this.temp -+ 5
        }
    }
}
</script>

<style>

</style>