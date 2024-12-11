import { Cliente } from "./Cliente";

export class Paciente {
    private idCliente: number;
    private nombre: string;
    private especie: string;
    private edad: number;
    private cliente: Cliente;

    constructor( idCliente:number, nombre: string, especie: string, edad: number, cliente:Cliente,) {
        this.idCliente=idCliente;
        this.cliente = cliente;
        this.nombre = nombre;
        this.especie = especie= (especie.toLowerCase()== "gato" || especie.toLowerCase()== "perro")? especie: "exotica"
        this.edad = edad;
    }

    // Getters y Setters
   
     getIdCliente(): number {
         return this.cliente.getIdCliente();
     }

    getNombre(): string {
        return this.nombre;
    }

    getEspecie(): string {
        return this.especie;
    }
    getEdad(): number {
        return this.edad;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setEspecie(especie: string): void {
        this.especie = especie;
    }
    setEdad(edad: number): void {
        this.edad = edad;
    }

    mostrarInformacionPaciente(): void {
        console.log(`El ID del Paciente es: ${this.idCliente}\n
                         El Paciente se llama: ${this.nombre}\n 
                       Su dueño es: ${this.cliente.getNombre()}\n
                       El tipo de especies: ${this.especie}\n
                       Edad de Mascota:${this.edad} años`);
    }
    

}