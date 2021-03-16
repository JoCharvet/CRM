import { Boulangerie } from './models/boulangerie.js';
import { Commandes} from './models/commandes.js';

const myBaker = {
    data(){
        return {
            baker: new Boulangerie(), 
            date: new DateTime(),
        }
    },
    mounted() {
        
      
    
    },
    methods: {
        ouvrir_Boulangerie(){

            this.baker.open=true;

            if(this.baker.open===true&& this.baker.lost===false){
                
                setInterval(() =>{

                    date=new DateTime();

                    
                    
                    this.baker.fonctionner();


                    if(this.date.getMilliseconds() %2===0){
 
                        creation_Commandes();                                              
                    }

                    
                },1000);
                
            }
           
            
           
        },
        fermer_Boulangerie(){

            this.baker.open=false;
        },
        creation_Commande(){

            this.baker.Commandes.find(commande =>  commande.accepted===false)= new Commandes();
        },
        gestion_Commande(){
            this.baker.commandes.forEach(commande => {

                if(commande.canceled===false){

                    if(commande.accepted===true)
                    {
                        commande.timer_to_finish-=1;
                        if(this.baker.nb_baguettes >=  commande.nb_baguettes){
                            this.baker.ajouter_Or(commande.reward);
                        }
                        if(commande.timer_to_finish===0){
                            commande.canceled=true;
                        }
                    }    
                    else{
                        commande.timer_to_accept-=1;
                        if(commande.timer_to_accept===0){
                            commande.canceled=true;
                        }
                    }
                }
            });
        },
    }




},

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
