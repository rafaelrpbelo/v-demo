<template>
  <div>
    <div class='row'>
      <div class='col'>
        <div class='jumbotron jumbotron-fluid'>
          <div class='container'>
            <h1 class='display-3'>V-Demo</h1>
            <p class='lead'>A set of examples written in Vue.js.</p>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>
