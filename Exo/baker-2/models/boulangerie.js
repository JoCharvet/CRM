class Boulangerie
{
    constructor(){
        this.open=false;
        this.lost=false;

        this.level=1;
        this.level_Price=100;

        this.mills=1;
        this.mills_Price=80;

        this.maintenance_Cost=this.maintenance_Cost= 0.5*this.level*this.mills;

        this.gold=100;
        this.gold_Spend=0;
        this.gold_Total=100;


        this.flour=0;
        this.flour_Total=0;

        this.baguettes=0;
        this.baguettes_Total=0;

        
        

    }

    // start(){
    //     setInterval(() =>{
    //         this.floor= this.mills*1;
    //         this.flour_Total+= this.mills*1;
    //     } ,1000);
    // }
    //fonction qui calcule le cout d'ajout d'un moulin
    calculer_Prix_Moulins(){
        this.mills_Price=(80*1.5)**this.mills-1;
    }
    //fonction qui calcule le cout d'ajout d'un niveau
    calculer_Prix_Levels(){
        this.level_Price=(100*1.5)**this.level-1;
    }
    //fonction qui calcule le cout de fonctionnement de la boulangerie par seconde
    calculer_maintenance(){
        this.maintenance_Cost= 0.5*this.level*this.mills; 
    }
    //fonction qui soustrait l'or utilisé et l'ajoute au total d'or dépensé, prend en parametre la quantite d'or
    depenser_Gold(or){
        this.gold-=or;
        this.gold_Spend+=or;  
    }
    
    /*fonction qui vérifie qu'il y'a assez de farine pour effectuer une commande
    verif_Flour(farine_Requise){
        return this.flour>=farine_Requise;
    }*/

    //fonction qui simule la production de farine (sera appelée une fois par seconde)
    produire_Flour(){
        this.flour+=this.mills;
        this.flour_Total+=this.mills;
    }
    //fonction qui simule la production de baguette (sera appelée une fois par seconde)
    produire_baguette(){
        this.baguettes+=this.level;
        this.baguettes_Total+=this.level;
        this.flour-=this.level+1;
    }

    // fonction qui ajoute un moulin utiliser verif_Gold avant
    ajouter_Moulin(){
       
        if(this.mills===1){
            
            this.depenser_Gold(this.mills_Price);
            this.mills++;
        }
        else
        { 
            this.calculer_Prix_Mills();
            this.depenser_Gold(this.mills_Price);
            this.mills++;
        }
        calculer_maintenance(); 
    }

    // fonction qui ajoute un niveau (utiser verif_Gold avant)
    ajouter_Niveau(){
         
        if(this.level===1  ){
            this.depenser_Gold(level_Price);
            this.level++;
        }
        else
        {
            this.calculer_Prix_Levels();
            this.depenser_Gold(level_Price);
            this.level++;
        }
        calculer_maintenance();
    }
    // ajoute de l'or à la boulangerie
    ajouter_Or(or){
        this.gold+=or;
        this.gold_Total+=or;
        //return "la boulangerie a gagné "+this.commandes[0].reward+" Or";
    }


    /*fonction qui ouvre la boulangerie , demarre la production de farine , établie le cout de maintenance et la prélève
     elle sera rappelée une fois par seconde par l'app*/
    fonctionner(){

        this.produire_Flour();
        
        if(this.open===true){
            if(this.flour>0){
                this.produire_baguette();
            }
            
            if(this.gold>this.maintenance_Cost){

                this.depenser_Gold(this.maintenance_Cost);
            }
            else{
                this.open=false;
                this.lost=true;
            } 
        }
    }
    
    //fonction qui permet d'accepter une commande, prend en parametre une Commande
    /*accepter_Commands(command){
        let index =this.commandes.indexOf(command);
        this.commands.unshift(command);
        return "La commande "+index+" a été acceptée.";

    }*/

    //fonction qui vérifie si il y a assez de baguettes pour valider la commandes
    /*valider_Commands(){
        if(this.commands[0].nb_baguettes<=this.baguettes){
            this.commands[0].splice(0,1);
            this.ajouter_Or();
        }
    }*/
} 
export { Boulangerie };
