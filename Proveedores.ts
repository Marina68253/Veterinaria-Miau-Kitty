class Proveedores {
    //Atributos 
    private id: number;
    private nombre: string;
    private telefono: number;
    constructor(id: number, nombre: string, telefono: number) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;

    }
    //GET Y SET 
    getId(): number {
        return this.id;
    }
    getNombre(): string {
        return this.nombre;
    }
    getTelefono(): number{
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