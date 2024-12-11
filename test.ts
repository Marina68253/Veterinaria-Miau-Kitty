import * as readline from "readline";
import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
import { RedVeterinaria } from "./RedVeterinaria";
import { Veterinaria } from "./Veterinaria";
import { read } from "fs";
import { log } from "console";



const redVeterinaria = new RedVeterinaria();
// // Función para mostrar el menú

const readlineSync = require('readline-sync');
const mostrarTituloVeterinaria = () => {
  console.clear();
  console.log(`
    ==========================================
                   ▄▄                        
    ▀████▀ ▀███▀  ██   ██    ██             
      ██   ▄█▀         ██    ██             
      ██ ▄█▀    ▀███ ████████████▀██▀   ▀██▀
      █████▄      ██   ██    ██    ██   ▄█  
      ██  ███     ██   ██    ██     ██ ▄█   
      ██   ▀██▄   ██   ██    ██      ███    
    ▄████▄   ███▄████▄ ▀████ ▀████   ▄█     
                                   ▄█       
                                 ██▀        
    
    =========================================
      Red Veterinaria »-»ᅳ  Miau Kitty  -ᅳ-► 
    =========================================
    
    
     `);
}


async function mostrarMenu() {
  mostrarTituloVeterinaria();
  let salir = false;
  while (!salir) {
    console.log(`
      Menú:
      1.- Gestion de Veterinaria
      2.-Gestion de Proveedores
      3.-Gestion de Clientes
      4.-Gestion de Paciente
      5.-Salir
     
              `);
    const opcionMenu = readlineSync.question("Seleccione una opcion: ");
    // console.log("opcionMenu:", opcionMenu.join());
    switch (opcionMenu) {
      case "1":
        submenuVeterinarias();
        break;

      case "2":
        submenuProveedores();
        break;
       case "3":
        subMenuCliente();
        break;

      // // case "4":
      // //   subMenuPaciente();
      // //   break;
      case "5":
        console.log("Saliendo del programa...");
        salir = true;
        break;
      default:
        console.log("Opcion invalida. Intente nuevamente.");



    }


  }
  readlineSync.close();
}
async function submenuVeterinarias() {
  let salir = false;
  while (!salir) {
    console.log(`
      Gestión de Veterinarias:
      1. Crear Veterinaria
      2. Modificar Veterinaria
      3. Eliminar Veterinaria
      4. Listar Veterinarias
      0. Volver al menú principal
    `);

    const opcion = readlineSync.question("Seleccione una opción: ");
    switch (opcion) {
      case "1": // Crear Veterinaria
        const nombreVete = readlineSync.question("Ingrese el nombre de la veterinaria: ");
        const direccionVete = readlineSync.question("Ingrese la direccion de la veterinaria: ");
        const nuevaVeterinaria = new Veterinaria(nombreVete, direccionVete);
        redVeterinaria.darAltaVeterinaria(nuevaVeterinaria);
        console.log("Veterinaria creada con exito.");
        break;
      case "2": // Modificar Veterinaria
        const idModVete = Number(readlineSync.question("Ingrese el ID de la veterinaria a modificar: "));
        const veterinariaEncontrada = redVeterinaria.obtenerVeterinarias().find(v => v.getIdVeterinaria() === idModVete);
        if (veterinariaEncontrada) {
          const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
          const nuevaDireccion = readlineSync.question("Ingrese la nueva direccion: ");
          veterinariaEncontrada.modificarDatos(nuevoNombre, nuevaDireccion);
          console.log("Veterinaria modificada con exito.");
        } else {
          console.log("Veterinaria no encontrada.");
        }
        break;
      case "3": // Eliminar Veterinaria
        const idDelVete = Number(readlineSync.question("Ingrese el ID de la veterinaria a eliminar: "));
        redVeterinaria.eliminarVeterinaria(idDelVete);
        console.log("Veterinaria eliminada con exito.");
        break;
      case "4": // Listar Veterinarias
        const veterinarias = redVeterinaria.obtenerVeterinarias();
        if (veterinarias.length > 0) {
          veterinarias.forEach(v => v.mostrarInformacionVeterinaria());
        } else {
          console.log("No hay veterinarias registradas.");
        }
        break;
      case "0": // Salir
        salir = true;
        break;
      default:
        console.log("Opcion inválida. Intente nuevamente.");
    }
  }
}

// Submenú para gestionar proveedores
async function submenuProveedores() {
  let salir = false;
  while (!salir) {
    console.log(`
      Gestión de Proveedores:
      1. Crear Proveedor
      2. Modificar Proveedor
      3. Eliminar Proveedor
      4. Listar Proveedores
      0. Volver al menú principal
    `);

    const opcion = readlineSync.question("Seleccione una opcion: ");
    switch (opcion) {
      case "1": // Crear Proveedor
        const nombreProv = readlineSync.question("Ingrese el nombre del proveedor: ");
        const telefonoProv = Number(readlineSync.question("Ingrese el teléfono: "));
        const dniProv = Number(readlineSync.question("Ingrese el DNI: "));
        const nuevoProveedor = new Proveedor(nombreProv, telefonoProv, dniProv);
        redVeterinaria.darAltaProveedor(nuevoProveedor);
        console.log("Proveedor creado con éxito.");
        break;
      case "2": // Modificar Proveedor
        const idModProv = Number(readlineSync.question("Ingrese el ID del proveedor a modificar: "));
        const proveedorEncontrado = redVeterinaria.obtenerProveedores().find(p => p.getIdProveedor() === idModProv);
        if (proveedorEncontrado) {
          const nuevoNombreProv = readlineSync.question("Ingrese el nuevo nombre: ");
          const nuevoTelefonoProv = Number(readlineSync.question("Ingrese el nuevo teléfono: "));
          const nuevoProveedorModificado = new Proveedor(nuevoNombreProv, nuevoTelefonoProv, proveedorEncontrado.getIdProveedor());
          redVeterinaria.modificarProveedor(idModProv, nuevoProveedorModificado);
          console.log("Proveedor modificado con éxito.");
        } else {
          console.log("Proveedor no encontrado.");
        }
        break;
      case "3": // Eliminar Proveedor
        const idDelProv = Number(readlineSync.question("Ingrese el ID del proveedor a eliminar: "));
        redVeterinaria.eliminarProveedor(idDelProv);
        console.log("Proveedor eliminado con éxito.");
        break;
      case "4": // Listar Proveedores
        const proveedores = redVeterinaria.obtenerProveedores();
        if (proveedores.length > 0) {
          proveedores.forEach(p => console.log(`ID: ${p.getIdProveedor()} - Nombre: ${p.getNombre()} - Teléfono: ${p.getTelefono()}`));
        } else {
          console.log("No hay proveedores registrados.");
        }
        break;

    }
  }
}
// Submenú para gestionar Clientes
async function submenuClientes(veterinaria: Veterinaria) {
  let salir = false;
  while (!salir) {
    console.log(`
      Gestión de Clientes:
      1. Registrar Cliente
      2. Modificar Cliente
      3. Eliminar Cliente
      4. Listar Clientes
      5. Registrar Visita de Cliente
      0. Volver al menú principal
    `);

    const opcion = readlineSync.question("Seleccione una opción: ");
    switch (opcion) {
      case "1": // Registrar Cliente
        const nombreCliente = readlineSync.question("Ingrese el nombre del cliente: ");
        const telefonoCliente = Number(readlineSync.question("Ingrese el teléfono del cliente: "));
        const nuevoCliente = new Cliente(nombreCliente, telefonoCliente);
        veterinaria.darAltaCliente(nuevoCliente);
        console.log("Cliente registrado con éxito.");
        break;
      case "2": // Modificar Cliente
        const idModCliente = Number(readlineSync.question("Ingrese el ID del cliente a modificar: "));
        const clienteModificar = veterinaria.get().find(c => c.getIdCliente() === idModCliente);
        if (clienteModificar) {
          const nuevoNombreCliente = readlineSync.question("Ingrese el nuevo nombre del cliente: ");
          const nuevoTelefonoCliente = Number(readlineSync.question("Ingrese el nuevo teléfono del cliente: "));
          const nuevoVipStatus = readlineSync.question("¿El cliente será VIP? (Sí/No): ").toLowerCase() === "sí";
          clienteModificar.setNombre(nuevoNombreCliente);
          clienteModificar.setTelefono(nuevoTelefonoCliente);
          clienteModificar.setEsVip(nuevoVipStatus);
          console.log("Cliente modificado con éxito.");
        } else {
          console.log("Cliente no encontrado.");
        }
        break;
      case "3": // Eliminar Cliente
        const idDelCliente = Number(readlineSync.question("Ingrese el ID del cliente a eliminar: "));
        veterinaria.eliminarCliente(idDelCliente);
        console.log("Cliente eliminado con éxito.");
        break;
      case "4": // Listar Clientes
        const clientes = veterinaria.obtenerClientes();
        if (clientes.length > 0) {
          clientes.forEach(c => c.mostrarInformacionCliente());
        } else {
          console.log("No hay clientes registrados.");
        }
        break;
      case "5": // Registrar Visita de Cliente
        const idVisitaCliente = Number(readlineSync.question("Ingrese el ID del cliente que realizó la visita: "));
        const clienteVisita = veterinaria.obtenerClientes().find(c => c.getIdCliente() === idVisitaCliente);
        if (clienteVisita) {
          clienteVisita.registrarVisitas();
        } else {
          console.log("Cliente no encontrado.");
        }
        break;
      case "0": // Salir
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

// Submenú para gestionar Pacientes
async function submenuPacientes(veterinaria: Veterinaria) {
  let salir = false;
  while (!salir) {
    console.log(`
      Gestión de Pacientes:
      1. Registrar Paciente
      2. Modificar Paciente
      3. Eliminar Paciente
      4. Listar Pacientes
      0. Volver al menú principal
    `);

    const opcion = readlineSync.question("Seleccione una opción: ");
    switch (opcion) {
      case "1": // Registrar Paciente
        const nombrePaciente = readlineSync.question("Ingrese el nombre del paciente: ");
        const especiePaciente = readlineSync.question("Ingrese la especie del paciente: ");
        const edadPaciente = Number(readlineSync.question("Ingrese la edad del paciente: "));
        const idClientePaciente = Number(readlineSync.question("Ingrese el ID del cliente asociado: "));
        const nuevoPaciente = new Paciente(nombrePaciente, especiePaciente, edadPaciente, idClientePaciente);
        veterinaria.darAltaPaciente(nuevoPaciente);
        console.log("Paciente registrado con éxito.");
        break;
      case "2": // Modificar Paciente
        const idModPaciente = Number(readlineSync.question("Ingrese el ID del paciente a modificar: "));
        const pacienteModificar = veterinaria.obtenerPaciente().find(p => p.getIdCliente() === idModPaciente);
        if (pacienteModificar) {
          const nuevoNombrePaciente = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
          const nuevaEspeciePaciente = readlineSync.question("Ingrese la nueva especie del paciente: ");
          const nuevaEdadPaciente = Number(readlineSync.question("Ingrese la nueva edad del paciente: "));
          pacienteModificar.setNombre(nuevoNombrePaciente);
          pacienteModificar.setEspecie(nuevaEspeciePaciente);
          pacienteModificar.setEdad(nuevaEdadPaciente);
          console.log("Paciente modificado con éxito.");
        } else {
          console.log("Paciente no encontrado.");
        }
        break;
      case "3": // Eliminar Paciente
        const idDelPaciente = Number(readlineSync.question("Ingrese el ID del paciente a eliminar: "));
        veterinaria.eliminarPaciente(idDelPaciente);
        console.log("Paciente eliminado con éxito.");
        break;
      case "4": // Listar Pacientes
        const pacientes = veterinaria.obtenerPaciente();
        if (pacientes.length > 0) {
          pacientes.forEach(p => console.log(`ID: ${p.getIdCliente()} - Nombre: ${p.getNombre()} - Especie: ${p.getEspecie()} - Edad: ${p.getEdad()}`));
        } else {
          console.log("No hay pacientes registrados.");
        }
        break;
      case "0": // Salir
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
  
}



mostrarMenu().catch((error) => console.error(error));
