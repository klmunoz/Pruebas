
<template>
  <main class="content">
    <input v-model="texto" v-on:keyup="checkSpelling()" type="text">
    <h1>{{texto}}</h1>
  </main>
</template>

<script>
export default {
  name: 'app-prueba1',
  data() {
    return {
      words: {
        'Alcol': 'alcohol',
        'canbio': 'Cambio',
        'corason': 'corazón'
      },
      texto: "",
    };
  },
  mounted() {
  },
  methods: {
    checkSpelling(){
      let arrayText = this.texto.split(' ')
      Object.keys(this.words).some((word) => {
        arrayText.some((wordText) => {
          console.log(word.toLowerCase(), wordText.toLowerCase()) 
          if (word.toLowerCase() == (wordText.toLowerCase())) {
            console.log(wordText.toLowerCase())
            this.texto = this.texto.replace(word.toLowerCase(), this.words[word])
          }
        })
      })
    }
  },
};
</script>

<style>
  .content{
    margin-top: 30px;
  }
</style>