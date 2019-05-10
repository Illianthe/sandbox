<template>
  <div>Hello, <span class="name">{{name}}</span></div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Regan'
      };
    },
  };
</script>

<style>
  .name {
    color: #333;
  }
</style>
