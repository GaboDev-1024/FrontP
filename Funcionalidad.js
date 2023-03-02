//Generando especialidad
const especialidades = ["Programador","Desarrollador de Software","Ingeniero de DevOps","Profesional de Seguridad","Data Science y Business Intelligence","Diseñador de Experiencia de Usuario","Especialista en Redes"]
let value = Math.floor(Math.random() * 7);
document.querySelector('#especializacion').textContent = especialidades[value];

//data de la api
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const profile_data = data.results[0];
    document.querySelector('#nombre').textContent = profile_data.name.first;
    document.querySelector('#apellido').textContent = profile_data.name.last;
    document.querySelector('#profile_picture').setAttribute('src', profile_data.picture.large);
    document.querySelector(".fa-phone").textContent = " "+profile_data.phone
    document.querySelector(".fa-envelope").textContent = " "+profile_data.email
    document.querySelector(".fa-location-dot").textContent = " "+profile_data.location.street.name + profile_data.location.street.number
    //insercion en elementos responsive ocultos
    document.querySelector('#nombre_responsive').textContent = profile_data.name.first;
    document.querySelector('#apellido_responsive').textContent = profile_data.name.last;
    document.querySelector('#especializacion_responsive').textContent = especialidades[value];
    document.querySelector("#r_phone").textContent = " "+profile_data.phone
    document.querySelector("#r_envelope").textContent = " "+profile_data.email
    document.querySelector("#r_location").textContent = " "+profile_data.location.street.name + profile_data.location.street.number
});

//EVENTOS DE LOS LINK NAV
document.querySelector('#youtube').addEventListener("mouseover",(event)=>{
  document.querySelector('#youtube').style.background = 'red'
});

document.querySelector('#instagram').addEventListener("mouseover",(event)=>{
  document.querySelector('#instagram').style.background = 'rgb(131, 58, 180)'
});

document.querySelector('#facebook').addEventListener("mouseover",(event)=>{
  document.querySelector('#facebook').style.background = 'rgb(47, 85, 164)'
});

document.querySelector('#youtube').addEventListener("mouseout", (event) => {
  document.querySelector('#youtube').style.background = 'none'
});

document.querySelector('#instagram').addEventListener("mouseout", (event) => {
  document.querySelector('#instagram').style.background = 'none'
});

document.querySelector('#facebook').addEventListener("mouseout", (event) => {
  document.querySelector('#facebook').style.background = 'none'
});

//EVENTOS DE PRESENTACION DE PROYECTOS 
let contador = 0;
let img_preject = ["proyecto00","proyecto01","proyecto02","proyecto03","proyecto04"]

document.querySelector('#previous').addEventListener('click',()=>{
  console.log("evento previo")
  if (contador>=0 && contador<=4) {
    if (contador>=1) {
      contador = contador -1;
    }
    document.querySelector("#project_img").setAttribute("src","proyecto"+0+contador+".png");
    document.querySelector("#project_link").setAttribute("href","project"+0+contador+".html");
    console.log(contador)
  }
});

document.querySelector('#next').addEventListener('click',()=>{
  console.log("evento next")
  if (contador>=0 && contador<=4) {
    if (contador<=3) {
      contador = contador +1;
    }
    document.querySelector("#project_img").setAttribute("src","proyecto"+0+contador+".png");
    document.querySelector("#project_link").setAttribute("href","project"+0+contador+".html");
    console.log(contador)
  }
});

/////

let contador_r = 0;

document.querySelector('#previous_resp').addEventListener('click',()=>{
  console.log("evento previo")
  if (contador_r>=0 && contador_r<=4) {
    if (contador_r>=1) {
      contador_r = contador_r -1;
    }
    document.querySelector("#project_img_resp").setAttribute("src","proyecto"+0+contador_r+".png");
    document.querySelector("#project_link_resp").setAttribute("href","project"+0+contador_r+".html");
    console.log(contador_r)
  }
});

document.querySelector('#next_resp').addEventListener('click',()=>{
  console.log("evento next")
  if (contador_r>=0 && contador_r<=4) {
    if (contador_r<=3) {
      contador_r = contador_r +1;
    }
    document.querySelector("#project_img_resp").setAttribute("src","proyecto"+0+contador_r+".png");
    document.querySelector("#project_link_resp").setAttribute("href","project"+0+contador_r+".html");
    console.log(contador_r)
  }
});













