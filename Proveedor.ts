export class Proveedor {

    private idProveedor: number;
    private nombre: string;
    private dni: number;
    private telefono: number;

    constructor(nombre: string, telefono: number, dni: number) {
        this.idProveedor = Math.floor(Math.random() * 500);
        this.nombre = nombre;
        this.telefono = telefono;
        this.dni = dni;
    }
    //Getters y Setters

    getIdProveedor(): number {
        return this.idProveedor;
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
    setIdProveedor(idProveedor: number): void {
        this.idProveedor = idProveedor;
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
    modificarDatosProv(nombre: string, telefono: number): void {
        this.setNombre(nombre);  // Usa el setter para el nombre
        this.setTelefono(telefono);  // Usa el setter para la dirección

    }

    mostrarInformacionProvedores(): void {
        console.log(`El ID del Proveedor es:${this.idProveedor}\n
              Proveedor: ${this.nombre}\n 
            DNI:${this.dni}\n
            Teléfono: ${this.telefono}`);
    }

}