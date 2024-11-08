class Pacientes {
    private id:number;
    private nombre: string;
    private especies:string;

    constructor(id:number , nombre:string ,especies:string) {
        this.id = id;
        this.nombre = nombre;
        this.especies = especies;
    }
    public getId():number {
        return this.id;
    }
    public getNombre():string {
        return this.nombre;
    }
    public getEspecies():string {
        return this.especies;
    }
    public setId(id:number):void {
        this.id = id;
    }
    public setNombre(nombre:string):void {
        this.nombre = nombre;
    }
    public setEspecies(especies:string):void {
        this.especies = especies;
    }
    
    
}