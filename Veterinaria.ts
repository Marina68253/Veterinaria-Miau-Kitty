<<<<<<< HEAD:SurcusalesVeterinaria.ts
class SurcusalesVeterinaria {
    //Atributos
    private id: number;
    private nombre: string;
    private direccion: string;
=======
class Veterinaria {
private id: number;
private nombre:string;
private direccion: string;
>>>>>>> bace0468a8f0b3416a161ebda5ae493b36ddb4e9:Veterinaria.ts

    constructor(nombre: string, direccion: string) {
        // Estoy generando un ID único basado en la fecha y un valor aleatorio
        this.id = Date.now() + Math.floor(Math.random() * 500);;
        this.nombre = nombre;
        this.direccion = direccion;
    }
    //Get y Set
    getId(): number {
        return this.id;
    }
    getNombre(): string {
        return this.nombre;
    }
     getDireccion(): string {
        return this.direccion;
    }
    //Leo la informacion guardada de mis instancias
    getDatos(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Dirección: ${this.direccion}`;
    }
    setId(id: number): void {
        this.id = id;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    //Metodo para modificar 




}