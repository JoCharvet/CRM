class Boulangerie
{
    constructor(){
        this.open=false;

        this.level=1;
        this.mills=1;

        this.gold=0;
        this.gold_Spend=0;
        this.gold_Total=0;

        this.flour=0;
        this.flour_Total=0;

        this.baguettes=0;
        this.baguettes_Total=0;

        this.commandes=[];
    }

    // start(){
    //     setInterval(() =>{
    //         this.floor= this.mills*1;
    //         this.flour_Total+= this.mills*1;
    //     } ,1000);
    // }


    // fonction qui calcule le cout et ajoute un moulin
    ajouter_Mills(){
        
        
        if(this.mills===1 && this.gold>=80){
            this.gold-=80;
            this.gold_Spend+=80;
            this.mills++;
        }
        else if(this.gold>=(80*1.5)**this.mills-1){

            this.gold-=(80*1.5)**this.mills-1;
            this.gold_Spend+= (80*1.5)**this.mills-1;
            this.mills++;
        }
        else{
            return "Vous n'avez pas assez d'argent !";
        }
        
    }

    // fonction qui calcule le cout et ajoute un niveau
    ajouter_Niveau(){
         
        if(this.level===1 && this.gold>=100 ){
            this.gold-=100;
            this.gold_Spend+=100;
            this.level++;
        }
        else if(this.gold>=(100*1.5)**this.level-1){
            this.gold-=(80*1.5)**this.level-1;
            this.gold_Spend+= (80*1.5)**this.level-1;
            this.level++;
        }
        else{
            return "Vous n'avez pas assez d'argent !"
        }
    }

    //fonction qui ouvre la boulangerie , demarre la production de farine , établie le cout de maintenance et la prélève
    // elle sera rappelée une fois par seconde par l'app
    fonctionner(){

        this.flour+= this.mills;
        this.flour_Total+= this.mills;

        if(this.gold >= 0,05 *(this.level* this.mills)){

            this.gold-=0,05 *(this.level* this.mills);
            this.gold_Spend+=0,05 *(this.level* this.mills);
        }
        else{
            return "GAME OVER";
        }
        
        if(this.commandes !== []){
            this.baguettes+= this.level;
        }
    }

    
}