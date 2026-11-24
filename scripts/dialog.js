const dialogRef = document.getElementById("dialog");
const bodyRef = document.getElementById("body");
function openDialog(pokemonID) {
  bodyRef.classList.add("display_open");
  bodyRef.appendChild;
  dialogRef.showModal();
  const indexOfPokemon = findPokemonByID(pokemonID);
  setupPokemon(indexOfPokemon);
  createRadarChart(indexOfPokemon);
}

function closeDialog() {
  bodyRef.classList.remove("display_open");
  dialogRef.close();
}

function setupPokemon(pokemonID) {
  let pokemon = currentPokemonList[pokemonID];
  dialogRef.innerHTML = renderDialog(pokemon);
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
  createRadarChart(indexOfPokemon);
}

function previousPokemon(pokemonID) {
  let indexOfPokemon = findPokemonByID(pokemonID);
  indexOfPokemon--;
  if (indexOfPokemon < 0) {
    indexOfPokemon = currentPokemonList.length - 1;
  }

  dialogRef.innerHTML = renderDialog(currentPokemonList[indexOfPokemon]);
  setupPokemon(indexOfPokemon);
  createRadarChart(indexOfPokemon);
}

function createRadarChart(indexOfPokemon) {
  const pokemon = currentPokemonList[indexOfPokemon];

  const data = {
    labels: [
      pokemon.stats[0].stat.name,
      pokemon.stats[1].stat.name,
      pokemon.stats[2].stat.name,
      pokemon.stats[3].stat.name,
      pokemon.stats[4].stat.name,
      pokemon.stats[5].stat.name,
    ],
    datasets: [
      {
        label: "",
        data: [
          pokemon.stats[0].base_stat,
          pokemon.stats[1].base_stat,
          pokemon.stats[2].base_stat,
          pokemon.stats[3].base_stat,
          pokemon.stats[4].base_stat,
          pokemon.stats[5].base_stat,
        ],
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "rgb(190, 12, 12)",
        pointBackgroundColor: "rgb(255, 0, 0)",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#072a52",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "radar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Schaltet die Legende komplett aus
        },
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          pointLabels: {
            color: "#ffffff", // z. B. Rot, Hex, RGB oder rgba(...)
            font: {
              size: 14,
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.5)",
          },
          angleLines: {
            color: "rgba(172, 171, 171, 0.5)",
            pointLabels: {
              color: "#ffffff",
              size: 14,
            },
          },
          ticks: {
            stepSize: 25,
            color: "#ffffff",
            backdropColor: "transparent",
            font: {
              size: 14,
            },
          },
        },
      },
    },
  });
}
