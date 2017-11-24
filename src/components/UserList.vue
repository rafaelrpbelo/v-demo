<template>
  <ul class='list-group'>
    <li class='list-group-item' v-for='user in users'>{{ user.username }} - {{ user.email }}</li>
  </ul>
</template>

<script>
  export default {
    props: ['users']
  }
</script>
