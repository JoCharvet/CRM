import { Boulangerie } from './models/boulangerie.js';
import { Commandes } from './models/commandes.js';

var com = new Commandes(0,0);


com.nb_baguettes_command=0;
com.price_baguette=0;
com.reward=0;
com.timer_to_accept=0;
com.timer_to_finish=0;
com.etat= "En attente..";

var comdep=[];

for(let i =0;i<10;i++){
    comdep.push(com);
}

const myBaker = {
    data(){
        return {
            baker: new Boulangerie(),             
            id_Count: 1,           
            commandes:comdep,
            logs : [] ,
            date : new Date() ,
            inter: 0,      
        }
    },
    mounted() {

        
    },
    methods: {
        ouvrir_Boulangerie(){
            this.baker.open=true;
            if(!this.baker.lost){    

                this.inter =setInterval(() =>{
                     this.date=new Date();           
                     this.baker.fonctionner();
                    if(this.date.getMilliseconds() %2===0){               
                        this.creation_Commande();
                    }
                    this.gestion_Commande();
                                                                              
                },1000);              
            }
            else{
                
                clearInterval(this.inter);
            }
        },

        //fonction qui permet de mettre en pause le jeu , de fermer la boulangerie
        fermer_Boulangerie(){
            clearInterval(this.inter);
            this.baker.open=false;
        },

        //fonction qui crée une nouvelle commande
        creation_Commande(){
                this.commandes.splice(this.commandes.findIndex(commande => 
                     (commande.etat==="Refusée"|| commande.etat==="Annulée" ||
                      commande.etat === "Livrée")||(commande.etat==="En attente.." 
                      && commande.id===0)),1,new Commandes(this.baker.level , this.id_Count));
                this.id_Count++;
            
        },

        //fonction qui parcours le tableau de commandes et gère les opération a faire sur les commandes en fonction des timers et du pain disponible
        gestion_Commande(){
            this.commandes.forEach(commande => {
                if(commande.id !== 0){
                    switch(commande.etat) {
                        case "En attente...":
                            commande.timer_to_accept-=1;
                            this.annuler_Commande(commande);
                            break;               
                        case "Acceptée":
                            commande.timer_to_finish-=1;
                            this.livrer_Commande(commande);      
                            this.annuler_Commande(commande);       
                            break;
                        case "Livrée":
                        case "Refusée":
                        case "Annulée":
                            break;                   
                        default:
                    }
                }
               
            });
        },

        //fonction qui change l'état de la commande en annulée
        refuser_Commande(commande){
            commande.etat="Refusée";
        },

        //fonction qui change l'état de la commande en acceptée
        accepter_Commande(commande){
            commandes.find(com => com.id =commande.id ).etat="Acceptée";
            this.ajouter_Log("La commande "+commande.id+" a été acceptée");
        },

        //fonction qui annule la commande si un des timer est arrivé a 0; 
        annuler_Commande(commande){
            if(commande.timer_to_finish<=0||commande.timer_to_accept<=0)
            {
                commande.etat="Annulée";
            }
        },

        //fonction qui livre la commande si le stock de pain de la boulangerie le permet
        livrer_Commande(commande){
            if(this.baker.baguettes >=  commande.nb_baguettes)
            {
                commande.etat="Livrée";
                this.baker.nb_baguettes-=commande.nb_baguettes;
                this.baker.ajouter_Or(commande.reward);
                this.ajouter_Log("La boulangerie a gagné "+commande.reward+" Or");
                this.ajouter_Log("La boulangerie a livré "+commande.nb_baguettes+" baguettes");
            }
        },

        // fonction qui insere les logs en rajoutant l'heure
        ajouter_Log(str){
        this.log.unshift(date.toLocaleTimeString()+": "+str)
        }
    },
};


const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
