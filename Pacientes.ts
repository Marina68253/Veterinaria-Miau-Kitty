class Pacientes {
    private idPaciente:number;
    private idDuenio:number;
    private nombre: string;
    private especies:string;

    constructor(idPaciente:number , nombre:string ,especies:string,idDuenio:number) {
        this.idPaciente = idPaciente;
        this.idDuenio=idDuenio;
        this.nombre = nombre;
        this.especies = especies;
    }
    public getIdPaciente():number {
        return this.idPaciente;
    }
    public getIdDuenio():number{
        return this.idDuenio;
    }
    public getNombre():string {
        return this.nombre;
    }
    public getEspecies():string {
        return this.especies;
    }
    public setIdPaciente(idPaciente:number):void {
        this.idPaciente = idPaciente;
    }
    public setIdDuenio(idDuenio:number):void{
        this.idDuenio=idDuenio;
    }
    public setNombre(nombre:string):void {
        this.nombre = nombre;
    }
    public setEspecies(especies:string):void {
        this.especies = especies;
    }
    
    
}