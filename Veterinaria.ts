import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";

export class Veterinaria {
    //Atributos
    private id: number;
    private nombre: string;
    private direccion: string; 
    private clientes: Cliente[];
    private pacientes: Paciente[];

    constructor(id: number, nombre: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }

    // Métodos para manejar clientes..
    darAltaCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    modificarCliente(id: number, cliente: Cliente): void {
        const nuevoCliente = this.clientes.findIndex(cliente => cliente.getId() == id);
        if (nuevoCliente !== -1) this.clientes[nuevoCliente] = cliente;
    }

    darBajaCliente(id: number): void {
        this.clientes = this.clientes.filter(cliente => cliente.getId() !== id);
    }

    // Métodos para manejar pacientes
    darAltaPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
    }

    eliminarPaciente(idCliente: number): void {
        this.pacientes = this.pacientes.filter(paciente => paciente.getIdCliente() !== idCliente);
    }
    
    // Método para modificar los datos de la veterinaria usando setters

    modificarDatos(nombre: string, direccion: string): void {
        this.setNombre (nombre);  // Usa el setter para el nombre
        this.setDireccion (direccion);  // Usa el setter para la dirección
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
   // getDatos(): string {
       // return `ID: ${this.id}, Nombre: ${this.nombre}, Dirección: ${this.direccion}`;}


    setId(id: number): void {
        this.id = id;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
    mostrarInformacionVeterinaria(): void {
        console.log(`Veterinaria: ${this.nombre}\n 
        Dirección: ${this.getDireccion()}`);}


}