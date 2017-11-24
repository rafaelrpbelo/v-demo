<template>
  <div id='app' class='container'>
    <user-registration-form @submitted='handleUserRegistrationFormSubmit'></user-registration-form>
    <hr />
    <user-list :users='users' key='user'></user-list>
  </div>
</template>

<script>
  import UserRegistrationForm from './components/UserRegistrationForm.vue'
  import UserList from './components/UserList.vue'

  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.fetchUsers()
    },
    methods: {
      handleUserRegistrationFormSubmit(data) {
        if (data == true) {
          alert('Form was submitted successfully =)')
          this.fetchUsers()
        } else {
          alert('Something went wrong! =(')
        }
      },
      fetchUsers() {
        this.$http.get('data.json').
          then(response => response.json()).
          then(data => this.users = data).
          catch(e => {
            alert('Occurred an error while fetching users')
            console.log(e)
          })
      }
    },
    components: {
      userRegistrationForm: UserRegistrationForm,
      userList: UserList
    }
  }
</script>
