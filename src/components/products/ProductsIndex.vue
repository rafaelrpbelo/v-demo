<template>
  <div>
    <h3>Product List</h3>

    <p class='text-center' v-if='isLoading'>Loading...</p>
    <ul class='list-group' v-else>
      <li class='list-group-item' v-for='(product, index) in products'>
        {{ product.name }}

        <button
          class='btn btn-sm btn-danger float-right'
          @click.prevent='removeProduct(index)'
          >Remove</button>

        <router-link
          :to="`/products/${index}/edit`"
          class='btn btn-sm btn-warning float-right mr-2'
          >Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return { products: [], isLoading: false }
    },
    created() {
      this.resource = this.$resource('products{/id}.json')
    },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      fetchProducts() {
        this.isLoading = true

        this.resource.get()
          .then(response => response.json())
          .then(data => this.products = data)
          .catch(error => {
            console.log(error)
            alert('An error has occurred while fetching products')
          })
          .then(() => this.isLoading = false)
      },
      removeProduct(index) {
        this.resource.remove({id: index}).then(() => this.fetchProducts())
      }
    }
  }
</script>

<style scoped>
  button { cursor: pointer; }
</style>
