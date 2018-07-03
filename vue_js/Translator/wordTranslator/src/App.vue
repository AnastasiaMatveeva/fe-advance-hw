<template>
  <div id="app">
    <h1>World Translator</h1>
    <h5>Povered By Vue.js</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
export default {
  name: 'App',
  components:{
    TranslateForm
  },
  methods: {
    translateText: function(text){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170329T180255Z.3c18d2dc7b65d525.f23ed9a9efa992bded4ef96334e3c154f61d2dea&lang='+text)
      .then((response) =>{
        console.log(response.body.text[0]);
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style>
#app {

}
</style>
