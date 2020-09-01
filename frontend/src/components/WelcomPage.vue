<template>
  <div>
      <CustomRegister/>
      <div class="appeiring-text">
          <span class="appeir-text1">Welcome</span>
      </div>
      <div class="appeiring-text2">
          <span class="appeir-text2">This is MyBook</span>
      </div>
  </div>
</template>

<script>
    import CustomRegister from './auth/Register';
    export default {
        components: {CustomRegister},
    }
</script>

<style  scoped>

</style>
