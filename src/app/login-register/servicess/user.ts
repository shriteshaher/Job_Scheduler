export class User{
    constructor(private email:string,private token1:string,private  tokenExpirtionDate:Date){
         
          
    }

    set setEmail(email:string){
        this.email=email
    }

    get getEmail(){
        return this.email
    }

    set token(token:string){
        this.token=token
    }


    get getToken(){
        if(!this.token1 || new Date()>this.tokenExpirtionDate){
            return ""
        }
        return this.token1
    }
}