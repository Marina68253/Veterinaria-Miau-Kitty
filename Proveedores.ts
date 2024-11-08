class Proveedores{
        private id:number;
        private nombre: string;
        private telefono: number;
        constructor(id:number , nombre:string , telefono:number) {
            this.id = id;
            this.nombre = nombre;
            this.telefono = telefono;

}
public getId():number {
    return this.id;
}
public getNombre():string {
    return this.nombre;
}
public getTelefono():number{
    return this.telefono;
}
public setId(id:number):void {
    this.id = id;
}
public setNombre(nombre:string):void {
    this.nombre = nombre;
}
public setTelefono(telefono:number):void {
    this.telefono = this.telefono;
}




}