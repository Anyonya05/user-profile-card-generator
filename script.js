const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
input.addEventListener("input", updateCard);
});

function updateCard(){

let name = document.getElementById("name").value;
let role = document.getElementById("role").value;
let bio = document.getElementById("bio").value;
let image = document.getElementById("image").value;

document.getElementById("preview-name").innerText = name;
document.getElementById("preview-role").innerText = role;
document.getElementById("preview-bio").innerText = bio;

if(image){
document.getElementById("preview-img").src = image;
}

}

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});
