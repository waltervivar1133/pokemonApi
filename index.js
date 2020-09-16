async function getPokemon(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let data = await response.json();
  return data
}

async function init() {
  
  const Pokemon = await getPokemon(1);
  updatePokemon(Pokemon)
  console.log(Pokemon);

}

init(); // correr la funcion

function updatePokemon(pokemon) {
  window.nombre.textContent = pokemon.name
  window.imagen.setAttribute('src', pokemon.sprites.front_default)
}

function limpiar() {
  document.getElementById("buscar").value = "";
}

window.buscar.addEventListener('change', async (event) => {
  try {
    const pokemon = await getPokemon(window.buscar.value)
    updatePokemon(pokemon);
    limpiar();
  } catch (error) {
    alert('Ese Pokemon no existe , busca otro!')
    limpiar();
  }

  
})


