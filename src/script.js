window.onload = getInfoUser();

const elContainerCard = document.querySelector(".container-card");
const btnGenerateBg = document.querySelector("#generate-bg");

btnGenerateBg.addEventListener('click', (element) => {
    elContainerCard.style.backgroundColor = generatesColor();
})

function generatesColor(opacidade = 1) {

    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 
}

async function getInfoUser() {

    const location = document.querySelector("#location");
    const company = document.querySelector("#company");
    const repository = document.querySelector("#repository");
    const followers = document.querySelector("#followers");
    const following = document.querySelector("#following");

    const url = "https://api.github.com/users/thuliomartins";
    const profileReponse = await fetch(url);
    const profile = profileReponse.json();

    profile.then((res) => {
        location.innerHTML = res.location;
        company.innerHTML = res.company;
        repository.innerHTML = `${res.public_repos} Repositórios`;
        followers.innerHTML = `${res.followers} Seguindo`;
        following.innerHTML = `${res.followers} Seguidores`;
    })
    .catch((e) => {
        console.log(e);
    }) 
    
}

