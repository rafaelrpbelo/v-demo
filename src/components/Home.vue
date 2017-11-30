<template>
  <div>
    <div class='row'>
      <div class='col'>
        <jumbotron>
          <h1 class='display-3'>V-Demo</h1>
          <p class='lead'>A set of examples written in Vue.js.</p>
        </jumbotron>
      </div>
    </div>

    <div class='container'>
      <div class='row'>
        <div class='col-lg-3 col-md-4 col-sm-6 card'>
          <div class='card-body'>
            <h4 class='card-title'>User Registration Form</h4>
            <p class='card-text'>A simple user registration that persists data at Firebase.io</p>
            <router-link to='/users/new' class='btn btn-primary'>Go to example</router-link>
          </div>
        </div>

        <div class='col-lg-3 col-md-4 col-sm-6 card'>
          <div class='card-body'>
            <h4 class='card-title'>Products CRUD</h4>
            <p class='card-text'>A complete CRUD of products</p>
            <router-link to='/products' class='btn btn-primary'>Go to example</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Jumbotron from './common/Jumbotron.vue'

  export default {
    components: { Jumbotron }
  }
</script>
