import { Boulangerie } from './models/boulangerie.js';
import { Commandes , } from './models/commandes.js';

const myBaker = {
    data(){
        return {
            baker: new Boulangerie(), 
            date: new Date(),            
            id_Count: 1,
            //commandes: new commande_Tab(),
            log:[]
            
        }
    },
    mounted() {


    },
    methods: {
        ouvrir_Boulangerie(){

            this.baker.open=true;

            if(this.baker.open===true&& this.baker.lost===false){               
                setInterval(() =>{
                    date=new Date();           
                    this.baker.fonctionner();               
                    this.creation_Commandes();
                    this.gestion_Commande()                                                                    
                },1000);              
            } 
        },
        //fonction qui permet de mettre en pause le jeu , de fermer la boulangerie
        fermer_Boulangerie(){

            this.baker.open=false;
        },
        //fonction qui crée une nouvelle commande
        creation_Commande(){
            if(this.date.getMilliseconds() %2===0){
                this.commandes.find(commande =>  (commande.etat==="refusée"|| commande.etat==="annulée..." || commande.etat === "livrée"))= new Commandes(this.baker.level , id_Count);
            }
        },
        //fonction qui parcours le tableau de commandes et gère les opération a faire sur les commandes en fonction des timers et du pain disponible
        gestion_Commande(){
            this.commandes.forEach(commande => {

                switch(commande.etat) {
                        case "En attente...":
                            commande.timer_to_accept-=1;
                            this.annuler_commande(commande);
                            break;               
                        case "acceptée":
                            commande.timer_to_finish-=1;
                            this.livrer_Commande(commande);
                            this.annuler_commande(commande);
                            break;
                        case "livrée":
                        case "refusée":
                        case "annulée":
                            break;                   
                        default:
                }
            });
        },
        //fonction qui change l'état de la commande en annulée
        refuser_Commande(commande){
            commande.etat="refusée";
        },
        //fonction qui change l'état de la commande en acceptée
        accepter_Commande(commande){
            commande.etat="acceptée";
            this.ajouter_Log("La commande "+commande.id+" a été acceptée");
        },
        //fonction qui annule la commande si un des timer est arrivé a 0; 
        annuler_Commande(commande){
            if(commande.timer_to_finish===0||commande.timer_to_accept===0)
            {
                commande.etat="annulée";
            }
        },
        //fonction qui livre la commande si le stock de pain de la boulangerie le permet
        livrer_Commande(commande){
            if(this.baker.baguettes >=  commande.nb_baguettes)
            {
                commande.etat="livrée";
                this.baker.nb_baguettes-=commande.nb_baguettes;
                this.baker.ajouter_Or(commande.reward);
                this.ajouter_Log("La boulangerie a gagné "+commande.reward+" Or");
                this.ajouter_Log("La boulangerie a livré "+commande.nb_baguettes+" baguettes");
            }
        },
        ajouter_Log(str){
            this.log.unshift(date.toLocaleTimeString()+": "+str)
        }
    },
};


const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
