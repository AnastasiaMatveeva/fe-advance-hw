<template>
  <div>
    <h1>Films</h1>
    <p>Here is some information. This is the about page</p>
  </div>
</template>
<div id="films">
    <div v-show="loaded" class="loader"></div>
    <ul>
        <li v-for="item in items.results">
            <img :src="imageUrl + item.poster_path" alt="">
            <section>
                <h3>{{ item.original_title }}</h3>
                <p>{{ item.overview }}</p>
            </section>
        </li><!--
    --></ul>
</div>
<script>

export default {
  name: 'Films' //this is the name of the component
}
</script>

<style>
</style>
