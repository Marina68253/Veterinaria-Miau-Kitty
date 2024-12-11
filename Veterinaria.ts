import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";

export class Veterinaria {
    //Atributos
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];
    private pacientes: Paciente[];

    constructor(idVeterinaria: number, nombre: string, direccion: string) {
        this.idVeterinaria= idVeterinaria;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }

    // Métodos para manejar clientes..
    darAltaCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    darBajaCliente(idCliente: number): void {
        this.clientes = this.clientes.filter(cliente => cliente.getIdCliente() !== idCliente);
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
        this.setNombre(nombre);  // Usa el setter para el nombre
        this.setDireccion(direccion);  // Usa el setter para la dirección
    }

    modificarClientePorId(idCliente: number, telefono: number): void {
        for (let cliente of this.clientes) {
            if (cliente.getIdCliente() === idCliente) {
                cliente.setTelefono(telefono); // Modifica el atributo teléfono
                console.log(`Cliente con ID ${idCliente} modificado exitosamente.`);
                return;
            }
        }
        console.log(`Cliente con ID ${idCliente} no encontrado.`);
    }

    //Get y Set
    getIdVeterinaria(): number {
        return this.idVeterinaria;
    }
    getNombre(): string {
        return this.nombre;
    }
    getDireccion(): string {
        return this.direccion;
    }


    setIdVeterinaria(idVeterinaria: number): void {
        this.idVeterinaria = idVeterinaria; 
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
    mostrarInformacionVeterinaria(): void {
        console.log(` El ID de veterinaria es:${this.idVeterinaria}\n  Veterinaria: ${this.nombre}\n 
        Dirección: ${this.getDireccion()}`);
    }


}