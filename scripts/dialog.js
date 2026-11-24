const dialogRef = document.getElementById("dialog");
const bodyRef = document.getElementById("body");
function openDialog(pokemonID) {
  bodyRef.classList.add("display_open");
  bodyRef.appendChild;
  dialogRef.showModal();
  const indexOfPokemon = findPokemonByID(pokemonID);
  setupPokemon(indexOfPokemon);
}

function closeDialog() {
  bodyRef.classList.remove("display_open");
  dialogRef.close();
}

function setupPokemon(pokemonID) {
  let pokemon = currentPokemonList[pokemonID];
  dialogRef.innerHTML = renderDialog(pokemon);
  let stats = pokemon.stats;
  let statsListRef = document.getElementById("statsList");
  for (let i = 0; i < stats.length; i++) {
    statsListRef.innerHTML += renderStatList(stats[i]);
  }
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

function previousPokemon(pokemonID) {
  let indexOfPokemon = findPokemonByID(pokemonID);
  indexOfPokemon--;
  if (indexOfPokemon < 0) {
    indexOfPokemon = currentPokemonList.length - 1;
  }

  dialogRef.innerHTML = renderDialog(currentPokemonList[indexOfPokemon]);
  setupPokemon(indexOfPokemon);
}
