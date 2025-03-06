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

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/zelda-botw-api.git
   cd zelda-botw-api
   ```

├── public
│ ├── index.html
│ └── ...
├── src
│ ├── Api
│ │ ├── creatures.api.js
│ │ ├── equipment.api.js
│ │ ├── materials.api.js
│ │ ├── monsters.api.js
│ │ └── treasure.api.js
│ ├── components
│ │ ├── ModalZeldaCard.jsx
│ │ ├── Navigation.jsx
│ │ ├── ZeldaCard.jsx
│ │ └── ZeldaList.jsx
│ ├── Pages
│ │ ├── Creatures.jsx
│ │ ├── Equipment.jsx
│ │ ├── Home.jsx
│ │ ├── Materials.jsx
│ │ ├── Monsters.jsx
│ │ └── Treasure.jsx
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md
