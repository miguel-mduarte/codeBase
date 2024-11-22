const itensMenu = [
    "Web",
    "Python",
    "Java",
    "Design"
];

const post = {
    titulo: "codeBase"
}

const filter = document.querySelector ("#filter");

itensMenu.forEach(item => {
    const button = document.createElement ("button");
    button.innerHTML = `${item}`;
    filter.appendChild(button);
})

