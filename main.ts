import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";



// Crear instancias de clientes
const cliente1 = new Cliente("Juan Perez", 123456789, false);
const cliente2 = new Cliente("Maria Gonzalez", 987654321, false);
const cliente3 = new Cliente("Tomas Delta", 19356345, false);


// Crear instancias de pacientes relacionados con clientes..
const paciente1 = new Paciente(cliente1, "Firulais", "Perro", 5);
const paciente2 = new Paciente(cliente3, "Michi", "Gato", 3);
const paciente3 = new Paciente(cliente2, "Luna", "Conejo", 7);

const proveedor1 = new Proveedor("Luciano", 2284334467, 3899657);
const proveedor2 = new Proveedor("Rodrigo", 228443467, 3792928);



// Crear instancia de veterinaria
const veterinaria = new Veterinaria(1, "Veterinaria Centro", "Alsina 132");


//Muestra informacion de Veterinaria
veterinaria.mostrarInformacionVeterinaria();

//Muestra la informacion de Paciente
paciente1.mostrarInformacionPaciente();

proveedor1.mostrarInformacionProvedores();
proveedor2.mostrarInformacionProvedores();

// Dar de alta a los clientes
veterinaria.darAltaCliente(cliente1);
veterinaria.darAltaCliente(cliente2);

// Dar de alta a los Pacientes
veterinaria.darAltaPaciente(paciente1);
veterinaria.darAltaPaciente(paciente2);
veterinaria.darAltaPaciente(paciente3);

// Mostrar IDs de los clientes para referencia
console.log(`ID Cliente 1: ${cliente1.getId()}`);
console.log(`ID Cliente 2: ${cliente2.getId()}`);

// Modificar el cliente usando su ID
veterinaria.modificarClientePorId(cliente2.getId(), 2284567899);
// Verificar el cambio
console.log(`Teléfono actualizado del Cliente 2: ${cliente2.getTelefono()}`);

// Eliminar los pacientes asociados al cliente1 (Juan Perez)
veterinaria.eliminarPaciente(cliente1.getId());

// Mostrar pacientes después de eliminar
console.log("Pacientes después de eliminar:", veterinaria["pacientes"].map(paciente => paciente.getNombre()));

//Cliente vip
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


