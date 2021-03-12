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
    }

    // start(){
    //     setInterval(() =>{
    //         this.floor= this.mills*1;
    //         this.flour_Total+= this.mills*1;
    //     } ,1000);
    // }

    ajouter_Mills(){
        
        
        if(this.mills===1 && this.gold>=80){
            this.gold_Spend+=80;
            this.mills++;
        }
        else if(this.gold>=(80*1.5)**this.mills-1){
            this.gold_Spend+= (80*1.5)**this.mills-1;
            this.mills++;
        }
        else{
            return "Vous n'avez pas assez d'argent !"
        }
        
    }
    ajouter_Niveau(){
         
        if(this.level===1 && this.gold>=100 ){
            this.gold_Spend+=100;
            this.level++;
        }
        else if(this.gold>=(100*1.5)**this.level-1){
            this.gold_Spend+= (80*1.5)**this.level-1;
            this.level++;
        }
        else{
            return "Vous n'avez pas assez d'argent !"
        }
    }
    produire(){
        this.flour+= this.mills;
        this.flour+= this.mills;
    }
    
}