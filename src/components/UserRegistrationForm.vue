<template>
  <form>
    <div class='form-group'>
      <label for='username'>Username</label>
      <input type='text' class='form-control' id='username' placeholder='Username' v-model='user.username'>
    </div>

    <div class='form-group'>
      <label for='email'>Email</label>
      <input type='email' class='form-control' id='email' placeholder='Enter email' v-model='user.email'>
    </div>

    <button type='submit' class='btn btn-primary' @click.prevent='submit' :disabled='loading'>Submit</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        loading: false
      }
    },
    methods: {
      submit() {
        this.loading = true

        this.$http.post('data.json', this.user).
          then(response => this.$emit('submitted', response.ok)).
          catch(e => this.$emit('submitted', false)).
          then(() => this.loading = false)
      }
    }
  }
</script>
