import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Veterinaria } from "./Veterinaria";



// Crear instancias de clientes
const cliente1 = new Cliente("Juan Perez", 123456789, false);
console.log(`Cliente 1 creado con ID: ${cliente1.getId()}`);
const cliente2 = new Cliente("Maria Gonzalez", 987654321,false );
const cliente3 = new Cliente("tomas delta", 19356345,false );

// Crear instancias de pacientes relacionados con clientes
const paciente1 = new Paciente(cliente1, "Firulais", "Perro",5);
const paciente2 = new Paciente(cliente1, "Michi", "Gato",3);
const paciente3 = new Paciente(cliente2, "Luna", "Conejo",7);

//muestra la informacion de paciente
paciente1.mostrarInformacionPaciente();

// Crear instancia de veterinaria
const veterinaria = new Veterinaria(1, "Veterinaria Centro", "Calle Falsa 123");

//muestra informacion de veterinaria
veterinaria.mostrarInformacionVeterinaria();
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

//cliente vip
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.registrarVisitas(); 
cliente1.mostrarInformacionCliente();

cliente3.registrarVisitas();
cliente3.registrarVisitas();
cliente3.registrarVisitas();
cliente3.mostrarInformacionCliente();

cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.registrarVisitas(); 
cliente2.mostrarInformacionCliente();

//Muestra un menu de entradarda pera interuatuar con el usuario
