import { Boulangerie } from './models/boulangerie.js';
import { Commandes} from './models/commandes.js';

const myBaker = {
    data(){
        return {
            baker: new Boulangerie() 

        }
    },
    mounted() {
        
      
    
    },
    methods: {
        ouvrir_Boulangerie(){

            this.baker.open=true;

            if(this.baker.open=true){
                setInterval(() =>{
                    if(this.baker.open=true){
                    this.baker.fonctionner();
                    }
                },1000);
                
            }
            
           
        },
        fermer_Boulangerie(){

            this.baker.open=false;
        },
        creation_Commande(){


        },

    }




},

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
