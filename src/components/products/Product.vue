<template>
  <h1>Product #{{ id }}</h1>
</template>

<script>
  export default {
    data() {
      return { id: this.$route.params.id }
    }
  }
</script>
