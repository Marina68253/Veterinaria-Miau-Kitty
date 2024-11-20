
export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: number;
    private esVip: boolean;
    private cantVisitas: number;

    constructor(nombre: string, telefono: number, esVip: boolean = false) {
        // Generamos un ID único basado en la fecha y un valor aleatorio
        this.id = Date.now() + Math.floor(Math.random() * 500);
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = esVip;
        this.cantVisitas = 0;
    }


    // Getters y Setters
    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getTelefono(): number {
        return this.telefono;
    }

    getEsVip(): boolean {
        return this.esVip;
    }

    getCantVisitas(): number {
        return this.cantVisitas;
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

    setEsVip(esVip: boolean): void {
        this.esVip = esVip;
    }

    setCantVisitas(cantVisitas: number): void {
        this.cantVisitas = cantVisitas;
    }
    //Metodo para Verificar si es Vip 
    registrarVisitas(): void {
        this.cantVisitas += 1;

        if (this.cantVisitas >= 5 && !this.esVip) {
            this.esVip = true;
            console.log(`${this.nombre} ahora es un cliente VIP por haber realizado ${this.cantVisitas} visitas.`);
        }
    }

    //Metodo para mostrar informacion sobre cliente y si es vip dependiendo sus visitas..
    mostrarInformacionCliente(): void {
        console.log
            (`Nombre del Cliente: ${this.nombre}\n 
        Teléfono: ${this.telefono}\n 
        ¿Es VIP?: ${this.esVip ? "Sí" : "No"}\n 
        las cantidad de visitas que ha realizado: ${this.cantVisitas}`);
    }
}
