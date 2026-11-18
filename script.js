const API_BASE_URL = "https://pokeapi.co/api/v2";
let typeEnum;
let pokemonList = [];
let next = "";

async function init() {
  typeEnum = await getAllTypes();
  await loadNextPokemons();
  loadNextPokemons();
}

async function getDataFromAPI(path = "") {
  const resObject = await fetch(API_BASE_URL + path);
  const resJsonObject = await resObject.json();
  return resJsonObject;
}

async function getDataByUrl(url) {
  const resObject = await fetch(url);
  const resJsonObject = await resObject.json();
  return resJsonObject;
}

async function getAllTypes() {
  let res = await getDataFromAPI("/type");
  let typeNames = res.results.map((entry) => entry.name);
  while (res.next != null) {
    res = await getDataByUrl(res.next);
    typeNames.push(...res.results.map((entry) => entry.name));
  }
  return Object.freeze(Object.fromEntries(typeNames.map((name) => [name.toUpperCase(), name])));
}

async function loadNextPokemons() {
  if (next == "") {
    let nextPokemons = await getDataFromAPI("/pokemon");
    const allPokeDataFromThisFetch = await Promise.all(
      nextPokemons.results.map((pokemon) => getDataByUrl(pokemon.url)),
    );
    pokemonList.push(...allPokeDataFromThisFetch);
    next = nextPokemons.next;
  } else {
    let nextPokemons = await getDataByUrl(next);
    const allPokeDataFromThisFetch = await Promise.all(
      nextPokemons.results.map((pokemon) => getDataByUrl(pokemon.url)),
    );
    pokemonList.push(...allPokeDataFromThisFetch);
    next = nextPokemons.next;
  }
}
