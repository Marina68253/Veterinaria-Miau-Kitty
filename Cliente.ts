
export class Cliente {

    private idCliente: number;
    private nombre: string;
    private telefono: number;
    private esVip: boolean;
    private cantVisitas: number;

    constructor(nombre: string, telefono: number, esVip: boolean = false) {
        // Generamos un ID único basado en la fecha y un valor aleatorio
        this.idCliente = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = esVip;
        this.cantVisitas = 0;
    }


    // Getters y Setters
    getIdCliente(): number {
        return this.idCliente;
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

    setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
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

    registrarVisitas(): void {
        this.cantVisitas += 1;

        if (this.cantVisitas >= 5 && !this.esVip) {
            this.esVip = true;
            console.log(`${this.nombre} ahora es un cliente VIP por haber realizado ${this.cantVisitas} visitas.`);
        }
    }

    //Metodo para mostrar informacion sobre cliente y si es vip dependiendo sus visitas..
    mostrarInformacionCliente(): void {
        console.log(`El ID del cliente es: ${this.idCliente}\n
             El nombre del Cliente es: ${this.nombre}\n 
            Teléfono: ${this.telefono}\n 
            ¿Es VIP?: ${this.esVip ? "Sí" : "No"}\n 
            las cantidad de visitas que ha realizado: ${this.cantVisitas}`);
    }
}
