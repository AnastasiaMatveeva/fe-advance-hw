
<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
      </nav>
  </div>
</template>
<script>

export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'Films',
          page:'/Films'
        },
        {
          id: 2,
          text: 'Serials',
          page:'/Serials'
        },
        {
          id: 3,
          text: 'Actors',
          page:'/Actors'
        }
      ]
    }
  }
}
</script>
<style>
nav {
  height: 50px;
  background-color: #0b1f2f;
  padding-top: 30px;
}
.spacing {
  margin-right: 30px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
}

</style>
