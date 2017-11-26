<template>
  <form>
    <div class='form-row align-items-center'>
      <input type='hidden' v-model='id' v-if='id'>

      <div class='col-sm-3'>
        <input type='text' class='form-control' v-model='userEdited.username'>
      </div>

      <div>
        <input type='text' class='form-control' v-model='userEdited.email'>
      </div>

      <div class='col-auto'>
        <button
          type='submit'
          class='btn btn-sm btn-default'
          @click.prevent='editUser'
          :disabled='loading'>Save</button>
      </div>

      <slot></slot>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        userEdited: {
          username: '',
          email: ''
        },
        loading: false
      }
    },
    props: ['id', 'user'],
    methods: {
      editUser(e) {
        this.loading = true

        this.resource.update({id: this.id}, this.userEdited).then(response => {
          this.$emit('userEdited', this.userData())
        }, errorResponse => {
          console.log(errorResponse)
        }).then(() => this.loading = false)
      },
      createUserEdited() {
        this.userEdited.username = this.user.username
        this.userEdited.email = this.user.email
      },
      userData() {
        return {id: this.id, userEdited: this.userEdited}
      }
    },
    created() {
      this.resource = this.$resource('users{/id}.json')
      this.createUserEdited()
    }
  }
</script>
