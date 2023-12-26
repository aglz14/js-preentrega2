function getPositiveIntegerInput(promptMessage) {
  let input;
  do {
    input = parseInt(prompt(promptMessage));
  } while (isNaN(input) || input < 0);
  return input;
}

// Definir los días de la semana
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

// Crear un objeto para almacenar los pasos diarios, el peso y el tiempo de caminata
let usuario = {
  pasos: {},
  peso: 0,
  tiempoCaminata: 0
};

// Recopilar la información de pasos por cada día
dias.forEach(dia => {
  usuario.pasos[dia] = getPositiveIntegerInput(`¿Cuántos pasos caminaste el ${dia}?`);
});

// Recopilar información adicional del usuario
usuario.peso = getPositiveIntegerInput("Ingrese su peso en kilogramos");
usuario.tiempoCaminata = getPositiveIntegerInput("Ingrese la cantidad de minutos que camina por día");

// Función para obtener el total de pasos
const getActualSteps = () => {
  return Object.values(usuario.pasos).reduce((total, pasosDia) => total + pasosDia, 0);
};

// Función para obtener los pasos ideales
const getIdealSteps = () => {
  return 10000 * 7; // 10,000 pasos ideales por día durante 7 días
};

// Calcular y mostrar el resumen de pasos
const calculateSteps = () => {
  const actualSteps = getActualSteps();
  const idealSteps = getIdealSteps();

  let mensaje1; // Define la variable fuera para poder usarla en ambos, console.log y alert

  if (actualSteps === idealSteps) {
    mensaje1 = "¡Caminaste la cantidad perfecta para mantenerte sano!";
  } else if (actualSteps > idealSteps) {
    mensaje1 = `Caminaste ${actualSteps - idealSteps} pasos extras, sigue así.`;
  } else {
    mensaje1 = `Deberías caminar un poco más, caminaste ${idealSteps - actualSteps} pasos menos de los que deberías.`;
  }
  console.log(mensaje1);
  alert(mensaje1);
};

calculateSteps();
const mensaje2 = getActualSteps() + " pasos en total.";
console.log(mensaje2);
alert(mensaje2);

// Calcular y mostrar las calorías quemadas
const calcularCalorias = () => {
  const calorias = 0.029 * (usuario.peso * 2.2) * usuario.tiempoCaminata;
  let mensajeCalorias;
  switch (true) {
    case usuario.tiempoCaminata === 60:
      mensajeCalorias = `Quemas ${calorias} calorías al día. Caminas el tiempo suficiente para mantenerte sano.`;
      console.log(mensajeCalorias);
      alert(mensajeCalorias);
      break;
    case usuario.tiempoCaminata < 60:
      mensajeCalorias = `Quemas ${calorias} calorías al día. Te recomendamos caminar por lo menos 1 hora al día.`;
      console.log(mensajeCalorias);
      alert(mensajeCalorias);
      break;
    case usuario.tiempoCaminata > 60:
      mensajeCalorias = `Quemas ${calorias} calorías al día. Felicidades, eres un deportista.`;
      console.log(mensajeCalorias);
      alert(mensajeCalorias);
      break;
    default:
      console.log("Error");
      alert("Error");
      break;
  }
};

calcularCalorias();