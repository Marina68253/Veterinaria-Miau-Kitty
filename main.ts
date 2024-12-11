import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";

// Crear instancias de clientes
const cliente1 = new Cliente("Juan Perez", 123456789, false);
const cliente2 = new Cliente("Maria Gonzalez", 987654321, false);
const cliente3 = new Cliente("Tomas Delta", 19356345, false);

// Crear instancias de pacientes relacionados con clientes
const paciente1 = new Paciente(cliente1, "Firulais", "Perro",5);
const paciente2 = new Paciente(cliente2, "Michi", "Gato",3);
const paciente3 = new Paciente(cliente3, "Luna", "Conejo",7);


const proveedor1 = new Proveedor("Luciano", 2284334467, 3899657);
const proveedor2 = new Proveedor("Rodrigo", 228443467, 3792928);

console.log("\n--- SUCURSAL VETERINARIA 1 ---");
// Crear instancia de veterinaria
const veterinaria = new Veterinaria(1, "Veterinaria Centro", "Alsina 132");

//Muestra informacion de Veterinaria
veterinaria.mostrarInformacionVeterinaria();

//Muestra la informacion de Paciente
paciente1.mostrarInformacionPaciente();

proveedor1.mostrarInformacionProvedores();
// Dar de alta a los clientes
veterinaria.darAltaCliente(cliente1);
veterinaria.darAltaCliente(cliente2);

// Dar de alta a los Pacientes
veterinaria.darAltaPaciente(paciente1);
veterinaria.darAltaPaciente(paciente2);

console.log("\n--- IDs de CLIENTES REGISTRADOS---");
// Mostrar IDs de los clientes para referencia
console.log(`ID Cliente 1: ${cliente1.getIdCliente()}`);
console.log(`ID Cliente 2: ${cliente2.getIdCliente()}`);

console.log("\n--- MODIFICACION POR ID CLIENTE ---");
// Modificar el cliente usando su ID
veterinaria.modificarClientePorId(cliente2.getIdCliente(), 2284567899);
console.log(`Teléfono actualizado del Cliente 2: ${cliente2.getTelefono()}`);

// Eliminar los pacientes asociados al cliente1 (Juan Perez)
veterinaria.eliminarPaciente(cliente1.getIdCliente());
console.log("\n--- LISTA ACTUALIZADA DE PACIENTES  ---");
console.log("Pacientes después de eliminar:", veterinaria["pacientes"].map(paciente => paciente.getNombre()));

console.log("\n--- CLIENTES VIP ---");
//Cliente vip
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.registrarVisitas();
cliente1.mostrarInformacionCliente();

console.log("\n--- CLIENTE VIP ---");
cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.registrarVisitas();
cliente2.mostrarInformacionCliente();

//-----------------------------------------------------------
console.log("\n--- SUCURSAL VETERINARIA 2 ---");
// Crear instancia de veterinaria2
const veterinaria2 = new Veterinaria (2,"Veterinaria Pepe", "Rivadavia 3322");

veterinaria2.mostrarInformacionVeterinaria();
paciente3.mostrarInformacionPaciente();
proveedor2.mostrarInformacionProvedores();
// Dar de alta a los clientes
veterinaria.darAltaCliente(cliente3);

// Dar de alta a los Pacientes
veterinaria.darAltaPaciente(paciente3);

console.log("\n--- IDs de CLIENTES REGISTRADOS---");
console.log(`ID Cliente 3: ${cliente3.getId()} `);

console.log("\n--- MODIFICACION POR ID CLIENTE ---");
// Modificar el cliente usando su ID
veterinaria.modificarClientePorId(cliente3.getIdCliente(), 22976543);
console.log(`Teléfono actualizado del Cliente 3: ${cliente3.getTelefono()}`);

console.log("\n--- CLIENTES VIP---");
//Cliente vip
cliente3.registrarVisitas();
cliente3.registrarVisitas();
cliente3.registrarVisitas();
cliente3.mostrarInformacionCliente();



