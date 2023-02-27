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

function Mostrar(){
  document.getElementsByClassName("contenedor").style.display = "flex";
}

function Ocultar(){
  document.getElementsByClassName("contenedor").style.display = "none";
}

function filtrarPorFecha (eventos, date){

  let arrayEventosPasados = []

  for (let date of eventos){
    if(eventos[date]>fechaActual){
    console.log(Ocultar())
    }else if(eventos[date]<fechaActual){
    console.log(Mostrar())
    arrayEventosPasados.push(item)
    };
  }
    
  return arrayEventosPasados
}

/* PROBÉ HACER UN FILTRADO PERO NO LOGRÉ PUSHEAR LOS ELEMENTOS EN EL NUEVO ARRAY, IGUAL DECIDÍ DEJARLO PARA QUE LO VEAN

const eventosPasados = eventos.filter(date => {
  if(eventos.date>fechaActual){
    return false;
    console.log(Ocultar())
    }else if(eventos.date<fechaActual){
    return true;
    console.log(Mostrar())
    };
});

console.log(eventosPasados)

/* aquí se filtran los eventos según la fecha, la idea es que se muestren los eventos pasados */