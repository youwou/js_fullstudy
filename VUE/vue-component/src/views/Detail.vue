<template>
  <div class="detail">
      <h1>Computed 计算属性</h1>
      <div class="price">
          {{totalPrice}}元
          </div> 
          <div class="news">
              <ul>
                  <li v-for="(item , index)  in news" :key="index"></li>
              </ul>
          </div>
  </div>
   
</template>

<script>
export default {
    data() {
        return {
            price:100,
            num:4,
            new:[
                {tittle:'刮台风',data:'2020'},
                {tittle:'下大雨',data:'2019'},
                {tittle:'打雷',data:'2018'}, 
            ]
        }
    },
    computed:{
        totalPrice: function() {
            return this.price * this.num
        },
        reverseNews: function() {
            return this.reverse
        }
    }

}
</script>

<style>

</style>