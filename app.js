
const disminuirBtn = document.getElementById("bajar-logitud");
const aumentarBtn = document.getElementById("aumentar-logitud");
const longitudSpan = document.getElementById("longitud");
const btnGenerar = document.getElementById("btn-generar");
const outputContraseña = document.getElementById("contraseña");

const incluirMin = document.getElementById("incluir-min");
const incluirMay = document.getElementById("incluir-may");
const incluirNum = document.getElementById("incluir-num");
const incluirSimbolos = document.getElementById("incluir-simbolos");


const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-={}[]|:;<>,.?/~";


let longitud = 8;

aumentarBtn.addEventListener("click", () => {
  if (longitud < 20) {
    longitud++;
    longitudSpan.textContent = longitud;
  }
});

disminuirBtn.addEventListener("click", () => {
  if (longitud > 8) {
    longitud--;
    longitudSpan.textContent = longitud;
  }
});


btnGenerar.addEventListener("click", () => {
  let caracteres = "";

  if (incluirMin.checked) caracteres += minusculas;
  if (incluirMay.checked) caracteres += mayusculas;
  if (incluirNum.checked) caracteres += numeros;
  if (incluirSimbolos.checked) caracteres += simbolos;

  if (caracteres.length === 0) {
    outputContraseña.textContent = "Seleccioná al menos una opción.";
    return;
  }

  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[randomIndex];
  }

  outputContraseña.textContent = contraseña;
});
