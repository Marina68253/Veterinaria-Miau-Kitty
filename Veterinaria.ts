class Veterinaria {
private id: number;
private nombre:string;
private direccion: string;

constructor(id:number , nombre:string ,direccion:string) {
    this.id = id;
    this.nombre = nombre;
    this.direccion =direccion ;
}
public getId():number {
    return this.id;
}
public getNombre():string {
    return this.nombre;
}
public getDireccion():string {
    return this.direccion;
}
public setId(id:number):void {
    this.id = id;
}
public setNombre(nombre:string):void {
    this.nombre = nombre;
}
public setDireccion(direccion:string):void {
    this.direccion = direccion;
}





}