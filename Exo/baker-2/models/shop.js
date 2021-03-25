import { Boulangerie } from './boulangerie.js';
import { Commandes } from './commandes.js';

class Shop{
    constructor(){
        this.baker = new Boulangerie();
        this.tab_Orders=[];
        this.tab_Orders_View=[];
    }


}