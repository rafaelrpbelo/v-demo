<template>
  <div>
    <h3>New Product</h3>

    <form>
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

      <button type='submit' class='btn btn-primary' @click.prevent='submitForm'>Submit</button>
      <button type='reset' class='btn btn-outline-primary'>Clear</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: {
          name: '',
          tags: '',
          quantity: '',
          isAvailable: false,
          description: ''
        }
      }
    },
    methods: {
      submitForm() {
        this.resource.save(this.product).then(response => {
          alert('Product created successfully!')
          this.$router.push('/products')
        }, error => {
          alert('An error has occurred!')
        })
      }
    },
    created() {
      this.resource = this.$resource('products.json')
    }
  }
</script>
