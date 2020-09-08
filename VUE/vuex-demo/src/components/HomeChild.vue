<template>
  <div class="home-child">
      <p>首页的子组件</p>
      <hr/>
      <h3>{{count}}</h3>
      <div class="btn">
          <button @click="add">+</button>
          <button @click="reduce">-</button>

      </div>
  </div>
</template>

<script>
import store from "@/vuex/store.js";
import {mapState,mapMutations} from "vuex";
export default {
    data() {
        return {
            msg:'Holle world'
        }
    },
    store,
    // computed: {
    //     count() {
    //         return this.$store.state.count
    //         }
    // },


    // computed: mapState({
    //     count: state => state.count
    // }),

    computed: mapState(['count']),
    methods: {
        add() {
            this.$store.commit("add",10)
            // this.$store.state.count ++
        },
        reduce() {
            this.$store.commit("reduce")
            // this.$store.state.count --
        }
    },
    mpthods: { 
        ...mapMutations (['add','reduce'])
    }
}
</script>

<style>

</style>