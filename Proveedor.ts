class Proveedor {

    private id: number;
    private nombre: string;
    private telefono: number;

    constructor(nombre: string, telefono: number) {
        this.id = Date.now() + Math.floor(Math.random() * 500);
        this.nombre = nombre;
        this.telefono = telefono;
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
    setId(id: number): void {
        this.id = id;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }




}