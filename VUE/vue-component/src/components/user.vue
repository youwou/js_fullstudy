<template>
  <div class="user">
      <p>{{name}}</p>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return{
            name:'安抚',
            tittle:'我是子组件的tittle'
        }
    },
    methods: {
        handle() {
            // console.log('ok')
            this.$emit('tittleChange',this.tittle)
        }
    }
}
</script>

<style>

</style>