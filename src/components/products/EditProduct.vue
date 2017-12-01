<template>
  <div>
    <h3>Edit Product - {{ product.name }}</h3>

    <form v-if='productLoaded'>
      <div class='form-group'>
        <label for='name'>Name</label>
        <input type='text' class='form-control' placeholder='Enter name' v-model='product.name'>
      </div>

      <div class='form-group'>
        <label for='tags'>Tags</label>
        <input type='text'
          id='tags'
          class='form-control'
          aria-describedby='tagsHelp'
          placeholder='Enter tags'
          v-model='product.tags'>

        <small id='tagsHelp' class='form-text text-muted'>
          Separate tags by commas. Eg: computer, music, movie...
        </small>
      </div>

      <div class='form-group'>
        <label for='quantity'>Quantity</label>
        <input type='number' min='0' class='form-control' placeholder='Enter quantity' v-model='product.quantity'>
      </div>

      <div class='form-check'>
        <label class='form-check-label'>
          <input type='checkbox' class='form-check-input' v-model='product.isAvailable'> Available?
        </label>
      </div>

      <div class='form-group'>
        <label for='exampleFormControlTextarea1'>Description</label>
        <textarea
          class='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
          v-model='product.description'></textarea>
      </div>

      <button type='submit' class='btn btn-primary' @click.prevent='submitForm'>Update product</button>
      <button type='reset' class='btn btn-outline-primary'>Clear</button>
    </form>

    <p v-else>Loading product...</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        productLoaded: false,
        product: {
          name: '',
          tags: '',
          quantity: '',
          isAvailable: false,
          description: ''
        },
      }
    },
    created() {
      this.resource = this.$resource('products{/id}.json')
    },
    mounted() {
      this.fetchProduct()
    },
    watch: {
      '$route'(to, from) {
        this.id = this.$route.params.id
      }
    },
    methods: {
      fetchProduct() {
        this.resource.get({id: this.id})
          .then(response => response.json())
          .then(data => this.product = data)
          .then(this.productLoaded = true)
          .catch(error => {
            console.log(error)
            alert('An error has occurred!')
            this.$router.push('/products')
          })
      },
      submitForm() {
        this.resource.update({id: this.id}, this.product).then(response => {
          alert('Product updated successfully!')
          this.$router.push('/products')
        }, error => {
          console.log(error)
          alert('An error has occurred!')
        })
      }
    }
  }
</script>
