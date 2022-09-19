

const loadCountries = () =>{
    const url = `https://restcountries.com/v3.1/all`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries);

    const countriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(countriesHTML[0]);


    const container = document.getElementById('countries');

    container.innerHTML = countriesHTML.join(` `);
}

const getCountryHTML = country => {
    return `
        <div>
                <h2>${country.name.common}</h2>
                <h3>${country.region}</h3>
                <h3>${country.startOfWeek}</h3>
                <img src="${country.flags.png}">
                <h3>${country.fifa}</h3>
                <h3>Is It Independent: ${country.independent}</h3>
        </div>
    `;
}

loadCountries();