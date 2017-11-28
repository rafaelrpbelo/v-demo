<template>
  <nav class='navbar navbar-expand-lg navbar-light bg-light'>

    <router-link to='/' class='navbar-brand'>V-Demo</router-link>

    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'>

      <span class='navbar-toggler-icon'></span>
    </button>

    <div class='collapse navbar-collapse' id='navbarNav'>
      <ul class='navbar-nav'>
        <li class='nav-item'>
          <router-link to='/' class='nav-link' active-class='active' exatct>Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
