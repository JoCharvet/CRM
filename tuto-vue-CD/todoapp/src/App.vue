<template>
 <h1>Veille techno</h1>
 <Form @add="saveTechno" /> <!-- On ajoute une méthode a l'événement add créé dans le composant form -->
 <br />
 
 <TechnoList :technos="technos" />
</template>

<script>

import Form from "@/components/Form"; // on ajoute le form , ce qui permet de le manipuler comme n'importe quel élément html
import { ref } from "vue";
import TechnoList from '@/components/TechnoList.vue';


export default {
  name: 'App',
  components: {
    Form,
    TechnoList
  },
  setup() {
    let technos = ref([]);
    const saveTechno = function(data) {
      console.log("App | saveTechno() | data" , data); // (on précise l'emplacement | la méthode utilisé | la données cible , la donnée); 
      technos.value = [...technos.value, { techno: data, id: Date.now() }]; // ...technos.value toutes les technos 
      console.log("App | saveTechno() | technos.value", technos.value);
    };
    return {
      saveTechno,
      technos 
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
