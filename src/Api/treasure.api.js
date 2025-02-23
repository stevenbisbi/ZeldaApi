export async function TreasureApi() {
  try {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure"
    );
    const data = await response.json();
    return data; // Asegura que retornas la respuesta correctamente
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    return null; // Evita que la app crashee si hay un error
  }
}
