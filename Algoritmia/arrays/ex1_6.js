let countries = ["Portugal", "Espanha", "Ingla", "Angola", "França"]

for (country of countries) {
    if (country.endsWith("a"))
        console.log(country);

    if (country.charAt(country.length - 1) === "a") {
        console.log(country);
    }
}

alert(countries.sort())