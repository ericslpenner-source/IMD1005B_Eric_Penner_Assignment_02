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
        })
        portfolioGallery.appendChild(portfolioImages[i]);
    }
}
