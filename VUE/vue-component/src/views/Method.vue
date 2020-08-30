<template>
  <div class="methods">123
  <p>{{count}}</p>
  <button @click="add(4,Seven)">add</button>
  </div>
</template>

<script>
export default {
    data() {
        return{
            count:0,
        }
    },
    methods:{
        ad(num){
            this.count++
        }
    }
}
</script>

<style>

</style>