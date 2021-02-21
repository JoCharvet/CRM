import { User ,Db } from './Models/Db.js';

const MyApp = {
    data(){
        return {
           db: new Db(),
           users: null, 
           username: '',
           password: '',
           message: '',
        }          
    },

    mounted() {
        this.users = this.db.getAll();
       
    },
    methods: {  
        onLogin(event)
        {
            console.log(this.username+ ': '+this.password);
            if(this.db.login(this.username,this.password)) {
                this.message='Connexion réussie';
            }
            else{
                this.message='Identifiants incorrects';
            }
            /*let myForm =document.getElementById('myForm');
            let formData = new FormData(myForm);
            let username = formData.get('username');
            console.log(username);*/
        }
    }
}

Vue.createApp(MyApp).mount("#myApp");

/*Element.addEventListener('click', () =>{
    event.
});*/