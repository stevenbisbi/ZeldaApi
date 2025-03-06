# The Legend of Zelda: Breath of the Wild API

Este proyecto es una aplicación web que muestra información sobre los objetos del juego "The Legend of Zelda: Breath of the Wild". Utiliza React para la interfaz de usuario y Bootstrap para el diseño y los componentes.

## Características

- Lista de objetos del juego, incluyendo criaturas, equipo, materiales, monstruos y tesoros.
- Búsqueda en tiempo real de objetos por nombre.
- Modal para mostrar detalles de cada objeto.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

 Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/zelda-botw-api.git
   cd zelda-botw-api

## Estructura del Proyecto

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── Api
│   │   ├── creatures.api.js
│   │   ├── equipment.api.js
│   │   ├── materials.api.js
│   │   ├── monsters.api.js
│   │   └── treasure.api.js
│   ├── components
│   │   ├── ModalZeldaCard.jsx
│   │   ├── Navigation.jsx
│   │   ├── ZeldaCard.jsx
│   │   └── ZeldaList.jsx
│   ├── Pages
│   │   ├── Creatures.jsx
│   │   ├── Equipment.jsx
│   │   ├── Home.jsx
│   │   ├── Materials.jsx
│   │   ├── Monsters.jsx
│   │   └── Treasure.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Uso

- Navega a través de las diferentes páginas utilizando la barra de navegación.
- Utiliza el campo de búsqueda para filtrar objetos por nombre.
- Haz clic en una tarjeta de objeto para ver más detalles en un modal.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
