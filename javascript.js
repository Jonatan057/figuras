function mostrarFormulario() {
  const opcion = document.getElementById("menu").value;
  const contenedor = document.getElementById("formulario");
  contenedor.innerHTML = "";

  switch (opcion) {
    case "cuadrado":
      contenedor.innerHTML = `
        <h3>Cuadrado</h3>
        <input type="number" id="lado" placeholder="Lado">
        <button onclick="calcularCuadrado()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;

    case "rectangulo":
      contenedor.innerHTML = `
        <h3>Rectángulo</h3>
        <input type="number" id="base" placeholder="Base">
        <input type="number" id="altura" placeholder="Altura">
        <button onclick="calcularRectangulo()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;

    case "triangulo":
      contenedor.innerHTML = `
        <h3>Triángulo</h3>
        <input type="number" id="base" placeholder="Base">
        <input type="number" id="altura" placeholder="Altura">
        <button onclick="calcularTriangulo()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;

    case "esfera":
      contenedor.innerHTML = `
        <h3>Esfera</h3>
        <input type="number" id="radio" placeholder="Radio">
        <button onclick="calcularEsfera()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;

    case "vector":
      contenedor.innerHTML = `
        <h3>Vector</h3>
        <input type="number" id="x" placeholder="X">
        <input type="number" id="y" placeholder="Y">
        <button onclick="calcularVector()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
  }
}

function calcularCuadrado() {
  const lado = parseFloat(document.getElementById("lado").value);
  const area = lado * lado;
  const perimetro = 4 * lado;
  document.getElementById("resultado").textContent = `Área: ${area}, Perímetro: ${perimetro}`;
}

function calcularRectangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const area = base * altura;
  const perimetro = 2 * (base + altura);
  document.getElementById("resultado").textContent = `Área: ${area}, Perímetro: ${perimetro}`;
}

function calcularTriangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const area = (base * altura) / 2;
  document.getElementById("resultado").textContent = `Área: ${area}`;
}

function calcularEsfera() {
  const radio = parseFloat(document.getElementById("radio").value);
  const pi = 3.1416;
  const area = 4 * pi * radio * radio;
  document.getElementById("resultado").textContent = `Área superficial: ${area.toFixed(2)}`;
}

function calcularVector() {
  const x = parseFloat(document.getElementById("x").value);
  const y = parseFloat(document.getElementById("y").value);
  const magnitud = Math.sqrt(x * x + y * y);
  document.getElementById("resultado").textContent = `Magnitud: ${magnitud.toFixed(2)}`;
}

function invertirVector() {
  const entrada = document.getElementById("numeros").value;
  const vector = entrada.split(",").map(n => parseFloat(n.trim()));
  if (vector.length !== 10) {
    document.getElementById("resultadoVector").textContent = "Debes ingresar exactamente 10 números.";
    return;
  }
  const invertido = vector.reverse();
  document.getElementById("resultadoVector").textContent = `Vector invertido: ${invertido.join(", ")}`;
}