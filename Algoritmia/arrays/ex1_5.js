let countries = ["Portugal", "Espanha", "Ingla", "Angola", "França"]

for (let i = 0; i < countries.length; i++){
    console.log(countries.at(i));
}

for (let country of countries) {
    console.log(country);
}

//forEach

countries.forEach(logCountry);

function logCountry (country) {
    console.log(country);
}

//forEach (funcao anonima)

countries.forEach(function(c) {
    console.log(c);
});

//forEach (com funcao arrow)

countries.forEach( (singleCountry) => console.log(singleCountry) );

for (country of countries) {
    if (country.endsWith("a"))
        console.log(country)
}

alert(countries.sort())