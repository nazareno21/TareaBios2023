document.getElementById('reverseForm').addEventListener('submit', function (event) {
  event.preventDefault(); 
  var input = document.getElementById('cadenaInput').value;
  var reversed = reverseString(input);

  document.getElementById('reverseResult').textContent = reversed;

  alert("La cadena invertida es: " + reversed);
});

function reverseString(str) {
  return str.split('').reverse().join('');
}




function cantidadVocales() {
  const palabra = document.getElementById("vocales").value;
  const vocales = "aáeéiíoóuú";
  let cantidadVocales = 0;
  for (const letra of palabra) {
    if (vocales.includes(letra.toLowerCase())) {
      cantidadVocales++;
    }
  }
  document.getElementById(
    "resultado_vocales"
  ).innerHTML = `<span>La cantidad de vocales es ${cantidadVocales}</span>`;
  return false;
}

