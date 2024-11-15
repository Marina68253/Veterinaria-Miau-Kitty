import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Veterinaria } from "./Veterinaria";



// Crear instancias de clientes
const cliente1 = new Cliente("Juan Perez", 123456789, true);
console.log(`Cliente 1 creado con ID: ${cliente1.getId()}`);
const cliente2 = new Cliente("Maria Gonzalez", 987654321, false);

// Crear instancias de pacientes relacionados con clientes
const paciente1 = new Paciente(cliente1, "Firulais", "Perro");
const paciente2 = new Paciente(cliente1, "Michi", "Gato");
const paciente3 = new Paciente(cliente2, "Luna", "Conejo");

// Crear instancia de veterinaria
const veterinaria = new Veterinaria(1, "Veterinaria Centro", "Calle Falsa 123");

// Dar de alta a los pacientes
veterinaria.darAltaPaciente(paciente1);
veterinaria.darAltaPaciente(paciente2);
veterinaria.darAltaPaciente(paciente3);

// Mostrar pacientes antes de eliminar
console.log("Pacientes antes de eliminar:", veterinaria["pacientes"].map(p => p.getNombre()));

// Eliminar los pacientes asociados al cliente1 (Juan Perez)
veterinaria.eliminarPaciente(cliente1.getId());

// Mostrar pacientes después de eliminar
console.log("Pacientes después de eliminar:", veterinaria["pacientes"].map(p => p.getNombre()));



