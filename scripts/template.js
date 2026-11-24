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
            <div class="card_footer_big">
              <ul class="type_list">
                ${setPokemonTypes(pokemon.types)}
              </ul>
             </div>
             <ul class="stats_list" id="statsList">
             </ul>
             <div class="button_wrapper">
                <button onclick="previousPokemon(${pokemon.id})"><img class="rotate180" src="./assets/img/image.png" alt="pfeil" /></button>
                <button onclick="nextPokemon(${pokemon.id})"><img src="./assets/img/image.png" alt="pfeil" /></button>
             </div>
          </section>
        `;
}

function renderPokemonCards(pokemon) {
  return `
    <button class="pokemon_card" onclick="openDialog(${pokemon.id})">
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
    </button>
  `;
}
