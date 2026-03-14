let portfolioImages = [];
let portfolioGallery = document.getElementById("portfolioGallery");
getImages();
function getImages(){
    for(let i = 0; i < 10; i++)
    {
        portfolioImages[i] = document.createElement("img");
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
        portfolioImages[i].src = data.message;
        porfolioImages[i].alt = "Image of a dog."
        })
        portfolioGallery.appendChild(portfolioImages[i]);
    }
}
