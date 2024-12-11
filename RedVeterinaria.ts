import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import * as rls from "readline-sync";
import { log } from "console";

export class RedVeterinaria {
    private veterinarias: Veterinaria[];
    private proveedores: Proveedor[];


    constructor() {
        this.veterinarias = [];
        this.proveedores = [];
      
    }



    //Dar altas y modificar veterinaria
    darAltaVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria)
        console.log(veterinaria);
    
    }

    modificarVeterinaria(idVeterinaria: number, veterinaria: Veterinaria): void {
        const nuevaVeterinaria = this.veterinarias.findIndex(veterinaria => veterinaria.getIdVeterinaria() == idVeterinaria);
        if (nuevaVeterinaria !== -1) this.veterinarias[nuevaVeterinaria] = veterinaria;
    }
    
    eliminarVeterinaria(idVeterinaria: number):void{
        this.veterinarias = this.veterinarias.filter(veterinarias => veterinarias.getIdVeterinaria() !==idVeterinaria);
    }

    darAltaProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
    }

    modificarProveedor(idProveedor:number, proveedores:Proveedor): void{
        const nuevoProveedor = this.proveedores.findIndex(proveedor => proveedor.getIdProveedor() !==idProveedor);
        if (nuevoProveedor !== -1) this.proveedores[nuevoProveedor]= proveedores;
    }

    eliminarProveedor(idProveedor: number): void {
        this.proveedores = this.proveedores.filter(proveedor => proveedor.getIdProveedor() !== idProveedor);
    }

    obtenerVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    obtenerProveedores(): Proveedor[] {
        return this.proveedores;
    }
   

}