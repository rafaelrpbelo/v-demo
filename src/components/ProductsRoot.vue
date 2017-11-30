<template>
  <div class='container mt-4'>
    <div class='row'>
      <div class='col'>
        <ul class="nav">
          <li class='nav-item'>
            <router-link
              class='nav-link'
              active-class='active'
              to='/products'>List products</router-link>
          </li>

          <li class='nav-item'>
            <router-link
              class='nav-link'
              active-class='active'
              to='/products/new'>New product</router-link>
          </li>
        </ul>

        <hr />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
