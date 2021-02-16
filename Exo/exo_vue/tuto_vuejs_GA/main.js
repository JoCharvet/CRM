const vm = Vue.createApp({
    data(){
        return {
           
            todos:['Sauver le mondre',"Apprendre Vus JS", 'Aller manger']
        }
    },
    methods:{
        inverser(){
            this.todos.reverse();
        },
        ajouterNote(message){
            this.todos.push(message);
            
        }
    }

})
vm.component('note',{
    props: ['content'],
    template: `<p>  {{ content }} </p>`
});
vm.component('ajout', {
    props:[],
    emits: ['nouvellenote'],
    data(){
        return{
            interne:'Nouveau message'
        }

    },
    methods:{
        enregistrementNote(){
            this.$emit('nouvellenote', this.interne);
            this.interne='';
        }
    },
    template: `
            <input type="text" v-model="interne"/>
            <a href="#" @click="enregistrementNote" v-if=" interne !='' ">Ajouter</a>
            {{ interne }}
    `
});

vm.mount("#app");
