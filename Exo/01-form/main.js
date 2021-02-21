import { User, Db } from './Models/Db.js';

const MyApp = {
    data() {
        return {
            db: new Db(),
            users: null,
            username: '',
            password: '',
            message: '',
            persist:null,
        
         
        }
    },
    created()
    {
        // requêtes réseau (ajax etc...)
    },

    mounted() {
        this.users = this.db.getAll();
       
    },

    computed:{
        isLogged(){
            return (this.db.currentUser instanceof User);
        },
        test(){
            return this.username.substring(0,2).toUpperCase();
        }
    },

    methods: {


        onLogin(event)
        {
            console.log(this.username + ': ' + this.password);
            if(this.db.login(this.username, this.password)) {
                
                this.message = 'Connexion réussie';
                if(this.persist){
                    
                    localStorage.setItem("username",this.db.currentUser) ;
                    alert(localStorage.getItem("username"));
                }
            }
            else {
                this.message = 'Identifiants incorrects';
            }
        }
    }
}

Vue.createApp(MyApp).mount("#myApp");

/*
Element.addEventListener('click', (event) => {
    event.
});
*/
