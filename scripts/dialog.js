const dialogRef = document.getElementById("dialog");
function openDialog(pokemonID) {
  dialogRef.showModal();
  let pokemon = pokemonList[pokemonID - 1];
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
          <section class="pokemon_card" onclick="openDialog()">
            <div class="card_header">
              <p>#${pokemon.id}</p>
              <h2>${makeFirstLetterUpperCase(pokemon.name)}</h2>
            </div>
            <div class="img_container ${getPrimaryType(pokemon.types)}">
              <img class="pokemon_img" src="${pokemon.sprites.other.showdown.front_default}" alt="pokemonbild" />
            </div>
            <div class="card_footer">
              <ul>
                ${setPokemonTypes(pokemon.types)}
              </ul>
             </div>
             <ul id="statsList">
             </ul>
          </section>
        `;
}

function renderStatList(stat) {
  return `
    <li>${stat.stat.name} : ${stat.base_stat}</li>
  `;
}
