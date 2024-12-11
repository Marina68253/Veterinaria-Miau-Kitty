import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { RedVeterinaria } from "./RedVeterinaria";
import { Veterinaria } from "./Veterinaria";

const veterinaria = new Veterinaria (123,"Miau","La prida");
const cliente1 = new Cliente ("Ramon",2284593741,false);
const paciente =new Paciente (cliente1, "arturo","sapo",5);
const proveedores=new Proveedor("Fabian",2284252525,42344897);
const red= new RedVeterinaria();




