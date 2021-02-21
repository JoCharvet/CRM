class User
{
    constructor(id, username,password)
    {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

class Db
{

    constructor()
    {
        this.user =[];
        this.currentUser=null;
    }

    getAll()
    {
        this.users= [
            new User( 1, 'mdevoldere', 'azerty'),
            new User( 2,'johnny' ,'azer' ),
            new User( 3,'benjamin' ,'1234' ),
            new User( 4,'jean','neymar' )
        ];
        return this.users;
    }

    login(username,password)
    {
       for(let user of this.users) {
            if(username === user.username && password === user.password) 
            {
               return true;
            }
       }

        return false;
    }

}
export { User , Db}