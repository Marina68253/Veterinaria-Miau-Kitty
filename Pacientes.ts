class Pacientes {
<<<<<<< HEAD
    //Atributos
    private id: number;
=======
    private idPaciente:number;
    private idDuenio:number;
>>>>>>> bace0468a8f0b3416a161ebda5ae493b36ddb4e9
    private nombre: string;
    private especies: string;

<<<<<<< HEAD
    constructor(id: number, nombre: string, especies: string) {
        this.id = id;
        this.nombre = nombre;
        this.especies = especies;
    }
    //GET Y SET
    public getId(): number {
        return this.id;
=======
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
>>>>>>> bace0468a8f0b3416a161ebda5ae493b36ddb4e9
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getEspecies(): string {
        return this.especies;
    }
<<<<<<< HEAD
    public setId(id: number): void {
        this.id = id;
=======
    public setIdPaciente(idPaciente:number):void {
        this.idPaciente = idPaciente;
    }
    public setIdDuenio(idDuenio:number):void{
        this.idDuenio=idDuenio;
>>>>>>> bace0468a8f0b3416a161ebda5ae493b36ddb4e9
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setEspecies(especies: string): void {
        this.especies = especies;
    }


}