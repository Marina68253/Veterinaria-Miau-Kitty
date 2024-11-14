class Proveedores{
        private idProveedores:number;
        private nombre: string;
        private telefono: number;
        constructor(idProveedores:number , nombre:string , telefono:number) {
            this.idProveedores = idProveedores;
            this.nombre = nombre;
            this.telefono = telefono;

}
public getIdProveedores():number {
    return this.idProveedores;
}
public getNombre():string {
    return this.nombre;
}
public getTelefono():number{
    return this.telefono;
}
public setIdProveedores(idProveedores:number):void {
    this.idProveedores = idProveedores;
}
public setNombre(nombre:string):void {
    this.nombre = nombre;
}
public setTelefono(telefono:number):void {
    this.telefono = this.telefono;
}




}