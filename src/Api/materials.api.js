export async function MaterialsApi() {
  try {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials"
    );
    const data = await response.json();
    return data; // Asegura que retornas la respuesta correctamente
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    return null; // Evita que la app crashee si hay un error
  }
}
