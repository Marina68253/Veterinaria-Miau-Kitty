import * as readlineSync from "readline-sync";
// Función para validar entrada de solo letras
function solicitarSoloLetras(mensaje:string) {
  let entrada;
  do {
    entrada = readlineSync.question(mensaje).trim();
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(entrada)) {
      console.log("Entrada inválida. Por favor, ingrese solo letras.");
    }
  } while (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(entrada));
  return entrada;
}
// Función para validar entrada de solo números
function solicitarSoloNumeros(mensaje:number) {
    let entrada;
    do {
      entrada = readlineSync.question(mensaje).trim();
      if (!/^\d+$/.test(entrada)) {
        console.log("Entrada inválida. Por favor, ingrese solo números.");
      }
    } while (!/^\d+$/.test(entrada));
    return parseInt(entrada, 10);
  }
  module.exports = { solicitarSoloLetras, solicitarSoloNumeros };