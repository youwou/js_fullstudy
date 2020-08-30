<template>
  <div class="about">
    <user :userName = "name"></user>
  </div>
</template>

<script>
import user from '@/components/user'
import Animal from '@/components/Animal'

export default {
  data() {
    return{
      name:'三分'
    }
  },
  component:{
    user
  }
}
</script>

<style>

</style>