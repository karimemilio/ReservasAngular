export class User {

    public id: number;
    public mail: string;
    public nombre: string;

    constructor (id: number, mail: string, nombre: string){
        this.id = id;
        this.mail = mail;
        this.nombre = nombre;
    }
}