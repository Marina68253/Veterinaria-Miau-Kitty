export class Proveedor {

    private id: number;
    private nombre: string;
    private dni: number;
    private telefono: number;

    constructor(nombre: string, telefono: number, dni: number) {
        this.id = Date.now() + Math.floor(Math.random() * 500);
        this.nombre = nombre;
        this.telefono = telefono;
        this.dni = dni;
    }

    getId(): number {
        return this.id;
    }
    getNombre(): string {
        return this.nombre;
    }
    getTelefono(): number {
        return this.telefono;
    }
    getDni(): number {
        return this.dni;
    }
    setId(id: number): void {
        this.id = id;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
    setDni(dni: number): void {
        this.dni = dni;
    }

    mostrarInformacionProvedores(): void {
        console.log(`Proveedor: ${this.nombre}\n 
            DNI:${this.dni}\n
            Teléfono: ${this.telefono}`);
    }
}


