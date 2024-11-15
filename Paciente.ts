import { Cliente } from "./Cliente";
export class Paciente {
    private id: number;
    private idCliente: number;
    private nombre: string;
    private especie: string;

    constructor(cliente: Cliente, nombre: string, especie: string) {
        this.id = this.generarIdUnico();
        this.idCliente = cliente.getId(); // Relacionamos el paciente con el ID del cliente
        this.nombre = nombre;
        this.especie = especie;
    }

    // Genera un ID único
    generarIdUnico(): number {
        return Date.now() + Math.floor(Math.random() * 500);
    }

    // Getters y Setters
    getId(): number {
        return this.id;
    }
    getIdCliente(): number {
        return this.idCliente;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEspecie(): string {
        return this.especie;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setEspecie(especie: string): void {
        this.especie = especie;
    }
}