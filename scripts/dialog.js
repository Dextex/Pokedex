const dialogRef = document.getElementById("dialog");
function openDialog(pokemonID) {
  dialogRef.showModal();
  console.log(pokemonID);
  const indexOfPokemon = findPokemonByID(pokemonID);
  setupPokemon(indexOfPokemon);
}

function closeDialog() {
  dialogRef.close();
}

function setupPokemon(pokemonID) {
  let pokemon = currentPokemonList[pokemonID];
  console.log(pokemon);
  dialogRef.innerHTML = renderDialog(pokemon);
  let stats = pokemon.stats;
  let statsListRef = document.getElementById("statsList");
  for (let i = 0; i < stats.length; i++) {
    statsListRef.innerHTML += renderStatList(stats[i]);
  }
}

function renderDialog(pokemon) {
  return `
          <section class="pokemon_card_big" onclick="event.stopPropagation()" >
            <div class="card_header">
              <p>#${pokemon.id}</p>
              <h2>${makeFirstLetterUpperCase(pokemon.name)}</h2>
            </div>
            <div class="img_container_big ${getPrimaryType(pokemon.types)}">
              <img class="pokemon_img_big" src="${pokemon.sprites.other.showdown.front_default}" alt="pokemonbild" />
            </div>
            <div class="card_footer">
              <ul>
                ${setPokemonTypes(pokemon.types)}
              </ul>
             </div>
             <ul id="statsList">
             </ul>
             <div class="button_wrapper">
                <button><img class="rotate180" src="./assets/img/image.png" alt="pfeil" /></button>
                <button onclick="nextPokemon(${pokemon.id})"><img src="./assets/img/image.png" alt="pfeil" /></button>
             </div>
          </section>
        `;
}

function renderStatList(stat) {
  return `
    <li>${stat.stat.name} : ${stat.base_stat}</li>
  `;
}

function findPokemonByID(pokemonID) {
  const indexOfPokemon = currentPokemonList.findIndex((pokemon) => pokemon.id === pokemonID);
  return indexOfPokemon;
}

function nextPokemon(pokemonID) {
  let indexOfPokemon = findPokemonByID(pokemonID);
  indexOfPokemon++;
  if (indexOfPokemon >= currentPokemonList.length) {
    indexOfPokemon = 0;
  }

  dialogRef.innerHTML = renderDialog(currentPokemonList[indexOfPokemon]);
  setupPokemon(indexOfPokemon);
}

function previousPokemon() {}
