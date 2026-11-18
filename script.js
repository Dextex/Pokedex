const API_BASE_URL = "https://pokeapi.co/api/v2";
let typeEnum;

async function init() {
  getDataFromAPI();
  getDataFromAPI("/pokemon");
  typeEnum = await getAllTypes();
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
  typeEnum = Object.freeze(Object.fromEntries(typeNames.map((name) => [name.toUpperCase(), name])));
  return typeEnum;
}
