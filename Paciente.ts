import { Cliente } from "./Cliente";
export class Paciente {
    private id: number;
    private idCliente: number;
    private nombre: string;
    private especie: string;
    private edad:number;
    private cliente: Cliente

    constructor(cliente: Cliente, nombre: string, especie: string, edad:number) {
        this.id = this.generarIdUnico();
        this.idCliente = cliente.getId(); // Relacionamos el paciente con el ID del cliente..
        this.cliente = cliente;
        this.nombre = nombre;
        this.especie = especie;
        this.edad=edad;
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
        console.log(`el Paciente es: ${this.nombre}\n 
              y su dueño es: ${this.cliente.getNombre()}
            tipo de especies es :${this.especie}
            la edad de la mascota es :${this.edad}`);
            }
        }
