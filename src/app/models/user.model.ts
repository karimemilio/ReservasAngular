export class User {

    public id: number;
    public mail: string;
    public nombre: string;
    public password: string;

    constructor (id: number, mail: string, nombre: string,password: string){
        this.id = id;
        this.mail = mail;
        this.nombre = nombre;
        this.password = password;
    }

}