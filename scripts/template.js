function renderDialog(pokemon) {
  return `
          <section data-id="overlay-pokemon-name" class="pokemon_card_big" onclick="event.stopPropagation()" >
            <div class="card_header">
              <p>#${pokemon.id}</p>
              <h2>${makeFirstLetterUpperCase(pokemon.name)}</h2>
            </div>
            <div class="img_container_big ${getPrimaryType(pokemon.types)}">
              <img data-id="dialog-image" class="pokemon_img_big" src="${pokemon.sprites.front_default}" alt="pokemonbild" />
            </div>
            <div class="card_footer_big">
              <ul class="type_list">
                ${setPokemonTypes(pokemon.types)}
              </ul>
             </div>
             <div class="chart-wrapper">
                <canvas id="myChart"></canvas>
             </div>
             </ul>
             <div class="button_wrapper">
                <button data-id="prev-button" onclick="previousPokemon(${pokemon.id})"><img class="rotate180" src="./assets/img/image.png" alt="pfeil" /></button>
                <button data-id="next-button" onclick="nextPokemon(${pokemon.id})"><img src="./assets/img/image.png" alt="pfeil" /></button>
             </div>
          </section>
        `;
}

function renderPokemonCards(pokemon) {
  return `
    <button aria-haspopup="dialog" aria-controls="dialog" data-id="card" class="pokemon_card" onclick="openDialog(${pokemon.id})">
      <div class="card_header">
        <p>#${pokemon.id}</p>
        <h2 id="dialogTitle">${makeFirstLetterUpperCase(pokemon.name)}</h2>
      </div>
      <div class="img_container ${getPrimaryType(pokemon.types)}">
        <img data-id="card-image" class="pokemon_img" src="${pokemon.sprites.other.showdown.front_default}" alt="pokemonbild" />
      </div>
      <div class="card_footer">
        <ul>
          ${setPokemonTypes(pokemon.types)}
        </ul>
      </div>
    </button>
  `;
}
