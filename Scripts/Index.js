let eventos = data.events
// console.log(data.events)

let contenedorCards = document.getElementById("contenedor")
// console.log(contenedorCards)

let fragmento = document.createDocumentFragment()

let fechaActual = "2022-01-01";

for (let evento of eventos) {
  let tarjeta = document.createElement("div")
  tarjeta.className = "tarjeta"
  // console.log(tarjeta)
  let imagen = document.createElement("img")
  imagen.src = evento.image
  tarjeta.appendChild(imagen)
  let texto = document.createElement("div")
  texto.className = "texto"
  // console.log(texto)
  let h2 = document.createElement("h2")
  h2.textContent = evento.name
  tarjeta.appendChild(h2)
  let p = document.createElement("p")
  p.textContent = evento.description
  tarjeta.appendChild(p)
  let price = document.createElement("price")
  price.textContent = evento.price
  tarjeta.appendChild(price)
  let boton = document.createElement("boton")
  boton.className = "boton"
  tarjeta.appendChild(boton)
  let a = document.createElement("a")
  boton.textContent = evento.a
  a.href = "./details.html"
  boton.appendChild(a)

  fragmento.appendChild(tarjeta)
}

contenedorCards.appendChild(fragmento)

const mostrarTarjetas = (eventos, tarjeta) => {

  let contenedorCards = []

  for (item of eventos) {
    if (item.tarjeta) tarjeta.push(item)
  }

  return contenedorCards
}

eventos.forEach(function (tarjetas) {
  console.log(tarjetas)
});