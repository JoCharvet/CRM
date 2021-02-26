<template>
<h3>Toutes les technos à veiller</h3>
{{technos.lenght}} techno {{technos.length > 1 ? 's' : '' }}
  <ul>
   <li v-for="tech in technos" :key="tech.id">{{ tech.techno }}</li> <!-- pour chaque techno dans technos  key: tech.id -->
 </ul>
 
</template>

<script>
export default {
    props : {
        technos: {
            type: Array,
            required : true
        }
    }
}
</script>

<style>

</style>