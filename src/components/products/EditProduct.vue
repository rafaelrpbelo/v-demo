<template>
  <div>
    <h1>Edit Product #{{ id }}</h1>
    <hr />
    <router-link to="/products/20/edit" class='btn btn-outline-primary'>Edit Product 20</router-link>
    <router-link to="/products/30/edit" class='btn btn-outline-primary'>Edit Product 30</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return { id: this.$route.params.id }
    },
    watch: {
      '$route'(to, from) {
        this.id = this.$route.params.id
      }
    }
  }
</script>
