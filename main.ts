import * as readlineSync from "readline-sync";
import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
import { RedVeterinaria } from "./RedVeterinaria";
import { Veterinaria } from "./Veterinaria";


const { solicitarSoloLetras, solicitarSoloNumeros } = require('./validacion');


// Colores personalizados
const pastelPink = "#F7C8D4";  // Rosa Pastel
const pastelWhite = "#FFFFFF"; // Blanco


const redVeterinaria = new RedVeterinaria();
// // Función para mostrar el menú
const chalk = require('chalk');
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
      Red Veterinaria »-»ᅳ  ${chalk.magentaBright(" Miau Kitty ")} -ᅳ-► 
    =========================================
    
    
     `);
}


async function mostrarMenu() {
  mostrarTituloVeterinaria();
  const titulo = chalk.hex(pastelPink).bold.underline;  // Título en rosa pastel
  const opcion = chalk.hex(pastelPink).bold;            // Opciones en rosa pastel
  const advertencia = chalk.hex("#FF6F61").bold;       // Rojo coral para advertencias
  const pregunta = chalk.hex("#A9A9A9");               // Gris suave para preguntas


  const veterinaria = new Veterinaria("Veterinaria Principal", "Cnel Suarez 223");
  let salir = false;
  while (!salir) {

    console.log(titulo("\nMenú Principal:"));
    console.log("---------------------------");
    console.log(`
      ${opcion('1.🔍- Gestión de Veterinaria')}
      ${opcion('2.🔍- Gestión de Proveedores')}
      ${opcion('3.🔍- Gestión de Clientes')}
      ${opcion('4.🔍- Gestión de Pacientes')}
      ${advertencia('5.-⛔ Salir')}
    `);
    const opcionMenu = readlineSync.question(pregunta("Seleccione una opción: "));
    // console.log("opcionMenu:", opcionMenu.join());
    switch (opcionMenu) {
      case "1":

        console.log(opcion("Ingresando a la gestión de veterinarias...\n"));
        console.log("---------------------------");
        submenuVeterinarias();
        break;

      case "2":
        console.log(opcion("Ingresando a la gestión de proveedores...\n"));
        console.log("---------------------------");
        submenuProveedores();
        break;
      case "3":
        console.log(opcion("Ingresando a la gestión de clientes...\n"));
        console.log("---------------------------");
        submenuClientes(veterinaria);
        break;

      case "4":
        console.log(opcion("Ingresando a la gestión de pacientes...\n"));
        console.log("---------------------------");
        submenuPacientes(veterinaria);
        break;
      case "5":
        console.log(advertencia("Saliendo del programa... ¡Hasta luego!🐾🐾"));
        console.log("---------------------------");
        salir = true;
        break;
      default:

        console.log("Opcion invalida. Intente nuevamente.");
        console.log("---------------------------");



    }


  }

}
async function submenuVeterinarias() {
  const titulo = chalk.hex(pastelPink).bold.underline;  // Título en rosa pastel
  const opciones = chalk.hex(pastelPink).bold;            // Opciones en rosa pastel
  const advertencia = chalk.hex("#FF6F61").bold;       // Rojo coral para advertencias
  const pregunta = chalk.hex("#A9A9A9");               // Gris suave para preguntas

  let salir = false;
  while (!salir) {
    console.log("---------------------------");
    console.log(`
      Gestión de Veterinarias:
      1.📋 Crear Veterinaria
      2.❕❗ Modificar Veterinaria
      3.⛔ Eliminar Veterinaria
      4.✅ Listar Veterinarias
      0.⭕ Volver al menú principal
      
    `);

    const opcion = readlineSync.question(titulo("Seleccione una opcion: "));
    switch (opcion) {
      case "1": // Crear Veterinaria
        const nombreVete = solicitarSoloLetras(opciones("Ingrese el nombre de la veterinaria: "));
        const direccionVete = readlineSync.question(opciones("Ingrese la direccion de la veterinaria: "));
        const nuevaVeterinaria = new Veterinaria(nombreVete, direccionVete);
        redVeterinaria.darAltaVeterinaria(nuevaVeterinaria);
        console.log((opciones("Veterinaria creada con exito.")));
        break;
      case "2": // Modificar Veterinaria
        const idModVete = Number(solicitarSoloNumeros(advertencia("Ingrese el ID de la veterinaria a modificar: ")));
        const veterinariaEncontrada = redVeterinaria.obtenerVeterinarias().find(v => v.getIdVeterinaria() === idModVete);
        if (veterinariaEncontrada) {
          const nuevoNombre = solicitarSoloLetras(opciones("Ingrese el nuevo nombre: "));
          console.log("---------------------------");
          const nuevaDireccion = readlineSync.question(opciones("Ingrese la nueva direccion: "));
          console.log("---------------------------");
          veterinariaEncontrada.modificarDatos(nuevoNombre, nuevaDireccion);
          console.log("---------------------------");
          console.log(pregunta("Veterinaria modificada con exito."));
        } else {
          console.log("---------------------------");
          console.log(advertencia("Veterinaria no encontrada."));
        }
        break;
      case "3": // Eliminar Veterinaria
        console.log("---------------------------");
        const idDelVete = Number(solicitarSoloNumeros(opciones("Ingrese el ID de la veterinaria a eliminar: ")));
        console.log("---------------------------");
        redVeterinaria.eliminarVeterinaria(idDelVete);
        console.log(pregunta("Veterinaria eliminada con exito."));
        console.log("---------------------------");
        break;
      case "4": // Listar Veterinarias
        const veterinarias = redVeterinaria.obtenerVeterinarias();
        if (veterinarias.length > 0) {
          veterinarias.forEach(v => v.mostrarInformacionVeterinaria());
        } else {
          console.log("---------------------------");
          console.log(advertencia("No hay veterinarias registradas."));
        }
        break;
      case "0": // Salir
        salir = true;
        break;
      default:
        console.log("---------------------------");
        console.log(advertencia("Opcion inválida. Intente nuevamente."));
    }
  }
}

// Submenú para gestionar proveedores
async function submenuProveedores() {

  const titulo = chalk.hex(pastelPink).bold.underline;  // Título en rosa pastel
  const opciones = chalk.hex(pastelWhite).bold;            // Opciones en rosa pastel
  const advertencia = chalk.hex("#FF6F61").bold;       // Rojo coral para advertencias
  const pregunta = chalk.hex("#A9A9A9");               // Gris suave para preguntas
  let salir = false;
  while (!salir) {
    console.log(`
    
      Gestión de Proveedores:
      1.📋 Crear Proveedor
      2.❕ Modificar Proveedor
      3.⛔ Eliminar Proveedor
      4.✅ Listar Proveedores
      0.⭕ Volver al menú principal
      
    `);

    const opcion = readlineSync.question(titulo("Seleccione una opcion: "));
    console.log("---------------------------");
    switch (opcion) {
      case "1": // Crear Proveedor
        const nombreProv = solicitarSoloLetras(opciones("Ingrese el nombre del proveedor: "));
        const telefonoProv = Number(solicitarSoloNumeros(opciones("Ingrese el teléfono: ")));
        const dniProv = Number(solicitarSoloNumeros(opciones("Ingrese el DNI: ")));
        const nuevoProveedor = new Proveedor(nombreProv, telefonoProv, dniProv);
        redVeterinaria.darAltaProveedor(nuevoProveedor);
        console.log("---------------------------");
        console.log(titulo("Proveedor creado con éxito."));
        break;
      case "2": // Modificar Proveedor
        const idModProv = Number(readlineSync.questionInt(titulo("Ingrese el ID del proveedor a modificar: ")));
        const proveedorEncontrado = redVeterinaria.obtenerProveedores().find(p => p.getIdProveedor() === idModProv);
        if (proveedorEncontrado) {
          const nuevoNombreProv = solicitarSoloLetras(opciones("Ingrese el nuevo nombre: "));
          const nuevoTelefonoProv = Number(solicitarSoloNumeros(opciones("Ingrese el nuevo teléfono: ")));
          proveedorEncontrado.modificarDatosProv(nuevoNombreProv, nuevoTelefonoProv);
          console.log("---------------------------");
          console.log(titulo("Proveedor modificado con éxito."));
        } else {
          console.log(advertencia("Proveedor no encontrado."));
        }
        break;
      case "3": // Eliminar Proveedor
        const idDelProv = Number(solicitarSoloNumeros(titulo("Ingrese el ID del proveedor a eliminar: ")));
        redVeterinaria.eliminarProveedor(idDelProv);
        console.log("---------------------------");
        console.log(titulo("Proveedor eliminado con éxito."));
        console.log("---------------------------");
        break;
      case "4": // Listar Proveedores
        const proveedores = redVeterinaria.obtenerProveedores();
        if (proveedores.length > 0) {
          proveedores.forEach(p => console.log((advertencia`ID: ${p.getIdProveedor()} - Nombre: ${p.getNombre()} - Teléfono: ${p.getTelefono()}`)));
        } else {
          console.log(advertencia("No hay proveedores registrados."));
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

// Submenú para gestionar Clientes
async function submenuClientes(veterinaria: Veterinaria) {
  let salir = false;

  while (!salir) {

    console.log(`Gestión de Clientes:
    1.📋 Registrar Cliente
    2.📋 Modificar Cliente
    3.❌ Eliminar Cliente
    4.✅ Listar Clientes
    5.✍🏻 Registrar Visita de Cliente
    0.⭕ Volver al menú principal`);
   

    const opcion = readlineSync.question("Seleccione una opción: ");
    console.log("---------------------------");

    switch (opcion) {
      case "1": // Registrar Cliente
        const nombreCliente = solicitarSoloLetras("Ingrese el nombre del cliente: ");
        const telefonoCliente = Number(solicitarSoloNumeros("Ingrese el teléfono del cliente: "));
        const nuevoCliente = new Cliente(nombreCliente, telefonoCliente);
        veterinaria.darAltaCliente(nuevoCliente);
        console.log("---------------------------");
        console.log("Cliente registrado con éxito.");
        break;
      case "2": // Modificar Cliente
        const idModCliente = Number(solicitarSoloNumeros("Ingrese el ID del cliente a modificar: "));
        const clienteModificar = veterinaria.obtenerClientes().find(c => c.getIdCliente() === idModCliente);
        if (clienteModificar) {
          const nuevoNombreCliente = solicitarSoloLetras("Ingrese el nuevo nombre del cliente: ");
          const nuevoTelefonoCliente = Number(solicitarSoloNumeros("Ingrese el nuevo teléfono del cliente: "));
          console.log("---------------------------");
          const nuevoVipStatus = solicitarSoloLetras("¿El cliente será VIP? (Sí/No): ").toLowerCase() === "sí";
          clienteModificar.setNombre(nuevoNombreCliente);
          clienteModificar.setTelefono(nuevoTelefonoCliente);
          clienteModificar.setEsVip(nuevoVipStatus);
          console.log("Cliente modificado con éxito.");
          console.log("---------------------------");
        } else {
          console.log("Cliente no encontrado.");
          console.log("---------------------------");
        }
        break;
      case "3": // Eliminar Cliente
        const idDelCliente = Number(solicitarSoloNumeros("Ingrese el ID del cliente a eliminar: "));
        veterinaria.eliminarCliente(idDelCliente);
        console.log("---------------------------");
        console.log("Cliente eliminado con éxito.");
        break;
      case "4": // Listar Clientes
        const clientes = veterinaria.obtenerClientes();
        if (clientes.length > 0) {
          clientes.forEach(c => c.mostrarInformacionCliente());
        } else {
          console.log("---------------------------");
          console.log("No hay clientes registrados.");
        }
        break;
      case "5": // Registrar Visita de Cliente
        const idVisitaCliente = Number(solicitarSoloNumeros("Ingrese el ID del cliente que realizó la visita: "));
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

   
    console.log(`Gestión de Pacientes:
    1.🐾 Registrar Paciente
    2.❕❗ Modificar Paciente
    3.❌ Eliminar Paciente
    4.✅ Listar Pacientes
    0.⭕ Volver al menú principal`);
   
    const opcion = readlineSync.question("Seleccione una opción: ");
    console.log("---------------------------");

    switch (opcion) {
      case "1": // Registrar Paciente
        const nombrePaciente = solicitarSoloLetras("Ingrese el nombre del paciente: ");
        const especiePaciente = solicitarSoloLetras("Ingrese la especie del paciente: ");
        const edadPaciente = Number(solicitarSoloNumeros("Ingrese la edad del paciente: "));
        const idClientePaciente = Number(solicitarSoloNumeros("Ingrese el ID del cliente asociado: "));

        const clienteAsociado = veterinaria.buscarClientePorId(idClientePaciente);
        if (!clienteAsociado) {
          console.log("---------------------------");
          console.log("No se encontró un cliente con ese ID.");
          console.log("---------------------------");
          break;
        }

        const nuevoPaciente = new Paciente(idClientePaciente, nombrePaciente, especiePaciente, edadPaciente, clienteAsociado);
        veterinaria.darAltaPaciente(nuevoPaciente);
        console.log("Paciente registrado con éxito.");
        break;
      case "2": // Modificar Paciente
        const idModPaciente = Number(solicitarSoloNumeros("Ingrese el ID del paciente a modificar: "));
        const pacienteModificar = veterinaria.obtenerPaciente().find(p => p.getIdCliente() === idModPaciente);
        if (pacienteModificar) {
          const nuevoNombrePaciente = solicitarSoloLetras("Ingrese el nuevo nombre del paciente: ");
          const nuevaEspeciePaciente = solicitarSoloLetras("Ingrese la nueva especie del paciente: ");
          const nuevaEdadPaciente = Number(solicitarSoloNumeros("Ingrese la nueva edad del paciente: "));
          pacienteModificar.setNombre(nuevoNombrePaciente);
          pacienteModificar.setEspecie(nuevaEspeciePaciente);
          pacienteModificar.setEdad(nuevaEdadPaciente);
          console.log("---------------------------");
          console.log("Paciente modificado con éxito.");
        } else {
          console.log("---------------------------");
          console.log("Paciente no encontrado.");
        }
        break;
      case "3": // Eliminar Paciente
        const idDelPaciente = Number(solicitarSoloNumeros("Ingrese el ID del paciente a eliminar: "));
        veterinaria.eliminarPaciente(idDelPaciente);
        console.log("---------------------------");
        console.log("Paciente eliminado con éxito.");
        break;
      case "4": // Listar Pacientes
        const pacientes = veterinaria.obtenerPaciente();
        if (pacientes.length > 0) {
          pacientes.forEach(p => console.log(`ID: ${p.getIdCliente()} - Nombre: ${p.getNombre()} - Especie: ${p.getEspecie()} - Edad: ${p.getEdad()}`));
        } else {
          console.log("---------------------------");
          console.log("No hay pacientes registrados.");
          console.log("---------------------------");
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
