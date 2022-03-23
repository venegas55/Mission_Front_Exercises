const stat1 = document.getElementById("stats1");
const stat2 = document.getElementById("stats2");
const stat3 = document.getElementById("stats3");
const stat4 = document.getElementById("stats4");
const stat5 = document.getElementById("stats5");
const stat6 = document.getElementById("stats6");


const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const pokeapi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(pokeapi).then((objetoPokeapi) => {
        if (objetoPokeapi.status != "200") {
            console.log(objetoPokeapi);
            pokeImage("./Assets/pikachu-sad2.gif");
            nombrePokemon("");
            tipoPokemon("");
            numeroPokemon("");
            stat1.innerHTML = '';
            stat2.innerHTML = '';
            stat3.innerHTML = '';
            stat4.innerHTML = '';
            stat5.innerHTML = '';
            stat6.innerHTML = '';    
        }
        else {
            return objetoPokeapi .json();
        }
    }).then((datos) => {
        if (datos) {
            console.log(datos);
            let pokeImg = datos.sprites.front_default;
            pokeImage(pokeImg);
            let pokeNombre = datos.name;
            nombrePokemon(pokeNombre.toUpperCase())
            let pokeNumero = `# ${datos.id}`;
            numeroPokemon(pokeNumero)
            let pokeTipo = `  Type: ${datos.types[0].type.name}`;
            tipoPokemon(pokeTipo.toUpperCase())
            console.log(pokeImg);
            stat1.innerHTML = `HP:  ${datos.stats[0].base_stat}`;
            stat2.innerHTML = `ATTACK:  ${datos.stats[0].base_stat}`;
            stat3.innerHTML = `DEFENSE:  ${datos.stats[0].base_stat}`;
            stat4.innerHTML = `SPECIAL ATTACK:  ${datos.stats[0].base_stat}`;
            stat5.innerHTML = `SPECIAL DEFENSE:  ${datos.stats[0].base_stat}`;
            stat6.innerHTML = `SPEED:  ${datos.stats[0].base_stat}`;

            
        }
    });
}
pokeName.addEventListener(
    'keydown',
    (event) => event.key === 'Enter' && buscarEnter.click()
);
buscarEnter.addEventListener("click", () => fetchPokemon(searchInput.vaalue));
//Esto sirve para mandar los datos del api a los ids del html

const pokeImage = (pokeapi) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = pokeapi;
}
const nombrePokemon = (pokeapi) => {
    const nombre = document.getElementById("nombrePokemon");
    nombre.innerText = pokeapi;
}
const numeroPokemon = (pokeapi) => {
    const numero = document.getElementById("numeroPokemon");
    numero.innerText = pokeapi;
}
const tipoPokemon = (pokeapi) => {
    const tipo = document.getElementById("tipoPokemon");
    tipo.innerText = pokeapi;
}




