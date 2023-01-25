const container = document.getElementById("movies-container");


window.addEventListener("DOMContentLoaded", () => {
    generateItems();
})

const generateItems = () => {
  return (container.innerHTML = data.map((x) => {
    return ` <div id=${x.id} class="movies-card">
            <img src=${x.image} alt="">
            <div class="movies-details">
                <p class="movie-name">${x.imgName}</p>
            </div>
        </div>`;
  }).join(""));
};


const search = () => {
    const inputValue = document.getElementById('input-val').value.toUpperCase();
    const container = document.getElementById("movies-container");
    const movies = document.querySelectorAll('.movies-card');
    const moviesName = document.querySelectorAll('.movie-name');

 
    for(let i = 0; i<moviesName.length;i++){
      let match = movies[i].querySelectorAll('.movie-name')[0];
 
      if(match){
         let textValue = match.innerHTML || match.textContent;
 
         if(textValue.toUpperCase().indexOf(inputValue) > -1){
             movies[i].style.display = "";
         }else{
           movies[i].style.display = "none"
         }
      }
    }
 }
