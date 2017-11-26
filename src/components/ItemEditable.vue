<template>
  <li class='list-group-item'>
    <template v-if='editable'>
      <slot name='toDisplay'
      :toggleEditable='toggleEditable'
      :editableButtonText='editableButtonText'
      ></slot>
    </template>

    <template v-else>
      <slot name='toEdit'
      :toggleEditable='toggleEditable'
      :editableButtonText='editableButtonText'></slot>
    </template>

    <button
      class='btn btn-sm btn-default'
      @click='toggleEditable'
      v-if='editable'>{{ editableButtonText }}</button>

    <slot></slot>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        editable: true
      }
    },
    methods: {
      toggleEditable() {
        this.editable = !this.editable
      }
    },
    computed: {
      editableButtonText() {
        return this.editable === true ? 'Edit' : 'Cancel'
      }
    }
  }
</script>
