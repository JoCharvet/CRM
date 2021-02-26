<template>           
  <form @submit.prevent="addTechno">  <!--prevent évite le comportement par défaut , en l'occurence on là, on l'empêche de rafraichir la page -->
      <label for="techno">Techno à ajouter</label>
      <br>
      <input type="text" name="techno" v-model="techTolearn" />
      <br>
      <button type="submit">ajouter</button>
  </form>
</template>

<script>
import { ref } from "vue"; //on importe la valeur ref de vue
export default {
    setup(props, ctx){ /* propriété et context , le context permet d'utiliser la méthode emit qui permet a l'élément enfant d'envoyer une valeur à l'élément parent*/

        let techToLearn = ref(""); //ref permet de bind la valeur en bi-directionnelle ?

        const addTechno = function() {
            console.log("Form | addTechno() | techToLearn.value", techToLearn.value);
            ctx.emit("add", techToLearn.value); // ( création d'un event add , valeur à envoyer)
            techToLearn.value = "";
        };

        return {
            techToLearn,
            addTechno
        }
    }
}
</script>

<style>

</style>