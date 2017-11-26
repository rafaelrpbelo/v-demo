<template>
  <ul class='list-group'>
    <item-editable v-for='(user, index) in users' key='index'>
      <template slot='toDisplay' slot-scope='pr'>
        {{ user.username }} - {{ user.email }}
      </template>

      <template slot='toEdit' slot-scope='itemProps'>
        <user-item-form
          :user='user'
          :id='index'
          @userEdited='editUser(user, $event)'>

          <div class='col-auto'>
            <button
              class='btn btn-sm btn-default'
              @click.prevent='itemProps.toggleEditable'>{{ itemProps.editableButtonText }}</button>
          </div>
        </user-item-form>
      </template>

      <button
        class='btn btn-sm btn-danger float-right'
        @click.prevent='removeUser(index)'
        >Remove</button>
    </item-editable>
  </ul>
</template>

<script>
  import ItemEditable from './ItemEditable.vue'
  import UserItemForm from './UserItemForm.vue'

  export default {
    props: ['users'],
    methods: {
      removeUser(key, event) {
        this.$emit('removeUser', key)
      },
      editUser(user, data) {
        const id = data['id']
        const userEdited = data['userEdited']

        this.users[id] = userEdited
      }
    },
    components: {
      itemEditable: ItemEditable,
      userItemForm: UserItemForm
    }
  }
</script>

<style scoped>
  i { cursor: pointer; }
</style>
