<template>
  <div id='app' class='container'>
    <user-registration-form @submitted='handleUserRegistrationFormSubmit'></user-registration-form>
  </div>
</template>

<script>
  import UserRegistrationForm from './components/UserRegistrationForm.vue'

  export default {
    methods: {
      handleUserRegistrationFormSubmit(data) {
        if (data == true) {
          alert('Form was submitted successfully =)')
        } else {
          alert('Something went wrong! =(')
        }
      }
    },
    components: {
      userRegistrationForm: UserRegistrationForm
    }
  }
</script>

<style lang='scss'>
</style>
