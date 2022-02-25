export class Service {

    public id: number;
    public nombre: string;
    public descripcion: string;
    public rrss: string;
    public telefono: number;
    public url: string;



    constructor (id: number, nombre: string, descripcion: string, rrss: string, telefono: number, url: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.rrss = rrss;
        this.telefono = telefono;
        this.url = url;
    }
    
}