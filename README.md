# Rick y Morty

## Enunciado

1. Al arrancar la página hay que coger los datos desde https://rickandmortyapi.com/documentation/#get-all-characters
1. Pintar los personajes (foto, nombre y especie).
1. Filtrar por nombre desde un input de texto.
1. Al clickar en un personaje abrir el detalle de la ficha del personaje en una ruta nueva. (Datos que aparecen: nombre, foto, especie,  planeta de origen, nº de episodios en los que aparece y si está vivo/muerto )
1. Guardar en el local storage los datos de los personajes y los datos del input del formulario.

### Datos

- Los personajes del API. Arranca con un array vacío >>> en el estado.
- El campo del formulario >>> en el estado
- Identificador del personaje >>> en la ruta

### Acciones

- Al arrancar la página:
  - Comprobar si hay personajes en el local storage
    - Sí hay >>>> Cojo y los guardo en el estado.
    - No hay >>> Llamar a la API y limpiar los datos.
  - Comprobar si hay datos del filtro en el local storage
    - Sí hay >>> Guardar el filtro en el estado.
    - No hay >>> Nada.
  - Pintarlos.
  - Escuchar el filtro.
    - Guardar el filtro en el estado.
    - Pintar los personajes filtrados.
  - Al cambiar de ruta:
    - Pinto el detalle del personaje.

### Pasos

1. Fetch / API
  1. Limpiar datos
1. Pintar
   1. Maquetar el HTML
   1. Programar el App
   1. Dividir en componentes
1. Filtrar:
  1. Escuchar los filtros
  1. Guardar el filtro en el estado
  1. Pintar filtrando los personajes
1. Pintar el detalle del personaje
1. Local storage:
  1. Guardar
  1. Leer