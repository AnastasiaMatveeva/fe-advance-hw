<template>
<div>
<button class = "btn btn-primary"
v-on:click = "showH2 = !showH2"
>
{{ btnText }}
</button>
<hr>
<app-progress v-bind:val = "sum"
              v-bind:max ="maxNumbers * 5">
</app-progress>
<hr>
<transition name = "slide">
  <h2 v-show = "showH2" class = "alert alert-success">Your profit: {{ sum }}</h2>
</transition>
<app-progress v-bind:val = "numbers.length"
              v-bind:max ="maxNumbers">
</app-progress>
<hr>
<hr>
<button class = "btn btn-success"
v-on:click = "addNumber"
v-bind:disabled = "done"
>
  Add number
</button>
<hr>
<ul class = "list-group">
  <li class = "list-group-item"
      v-for = 'number in numbers'
  >{{ number }}</li>

</ul>
  <div class = "container">
  {{ a }}
  </div>
</div>
</template>
  <script>
  import progress from './progress.vue';
  export default {
    data() {
      return {
      showH2: true,
      numbers: [],
      maxNumbers: 10
    }
    },
    methods: {
      addNumber() {
        if(!this.done){
        let rnd = Math.floor(Math.random() * 11) - 5;
        this.numbers.push(rnd);
      }
    }
    },
    computed: {
        sum() {
          console.log('1');
          let sum = 0;
          for (let  i = 0; i < this.numbers.length; i++){
            sum += this.numbers[i];
          }
          return sum;
        },
        btnText() {
          return this.showH2 ? "Hide result" : 'Show result';
        },
        done(){
          return this.numbers.length >= this.maxNumbers;
        }
      },
      components: {
        AppProgress: progress
      }
  }
  </script>
<style scoped>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.5s;
}
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-leave-to {
  opacity: 0;
}
</style>
