
fetch('./res.json')
.then*(res=>res.json())
.then(a=>{console.log(a);})

console.log(document.getElementById("cards-area").innerHTML);
var area=document.getElementById("cards-area");

getCharacters(ar);

function getCharacters(params) {
  area.innerHTML="";
ar.forEach(elem => {
   area.innerHTML   += `
   <div class="col-md-3"><div class="card">
   <img src="${ar.image}" class="card-img-top" alt="${ar.name}"/>
   <div class="card-body">
     <h5 class="card-title">${ar.name}</h5>
     <p class="card-text">${ar.name} ${ar.country} ${ar.imdb}</p>
     <a href="#!" class="btn btn-primary" data-mdb-ripple-init>About</a>
   </div>
   `;
})
}
