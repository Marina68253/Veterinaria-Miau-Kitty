import { Veterinaria } from "./Veterinaria";

class RedVeterinaria {
    private veterinarias: Veterinaria[];
    private proveedores: Proveedor[];

    constructor() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    //Dar altas y modificar veterinaria
    darAltaVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
    }

    modificarVeterinaria(id: number, veterinaria: Veterinaria): void {
        const nuevaVeterinaria = this.veterinarias.findIndex(veterinaria => veterinaria.getId() == id);
        if (nuevaVeterinaria !== -1) this.veterinarias[nuevaVeterinaria] = veterinaria;
    }

    darAltaProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
    }

    eliminarProveedor(id: number): void {
        this.proveedores = this.proveedores.filter(proveedor => proveedor.getId() !== id);
    }

    obtenerVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    obtenerProveedores(): Proveedor[] {
        return this.proveedores;
    }


}