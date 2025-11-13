let nameComplete = prompt("Digite o seu nome completo:");

let initials = nameComplete
    .split(" ")
    .map(name => name.charAt(0).toUpperCase())
    .join("");

console.log(initials)