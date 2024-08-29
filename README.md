# Pokémon Viewer

Pokémon Viewer es una aplicación web que permite a los usuarios ver una lista de Pokémon, explorar sus evoluciones y editar la información de estas evoluciones. La aplicación está construida utilizando componentes web con LitElement.

## Características

- Ver una lista de Pokémon con sus tipos.
- Explorar los detalles y evoluciones de cada Pokémon.
- Editar la información de las evoluciones.
- Navegar entre la lista de Pokémon y los detalles de un Pokémon específico.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- json-server

## Instalación server Json

1. **Levantar el Servidor de Datos**    

Para servir el archivo `pokemon.json` y simular una API RESTful, sigue estos pasos:

1. **Instalar json-server**

   Si aún no lo has hecho, instala `json-server` globalmente:

Sigue estos pasos para configurar y ejecutar la aplicación localmente:

- **Instalar `json-server`**

   npm install -g json-server

- **Iniciar el Servidor**

Dentro del proyecto se encutnra la carpeta "recursos", abre una terminal unica para esto.
Ejecuta el siguiente comando en el directorio donde se encuentra pokemon.json:

cd recursos
json-server --watch pokemon.json --port 3002
Esto levantará un servidor en http://localhost:3002 que servirá los datos de pokemon.json.

- **Verificar el Servidor**

Abre tu navegador y visita http://localhost:3002/pokemon para asegurarte de que los datos se están sirviendo correctamente.

## Instalación pokemon viewer


1. **Clonar el Repositorio**

   git clone https://github.com/lams1989/prueba-ingreso-samtel.git
   cd prueba-ingreso-samtel

3. **Instalar Dependencias**  

Asegúrate de estar en el directorio raíz del proyecto y ejecuta:

npm install

4. **Instalar Polymer CLI**

Si aún no lo has hecho, instala Polymer CLI globalmente:

npm install -g polymer-cli

5. **Iniciar el Servidor de Desarrollo**

Usa Polymer CLI para iniciar el servidor de desarrollo:

polymer serve

6. **Ver la Aplicación**

Abre tu navegador y visita http://localhost:8081 para ver la aplicación en acción.


*****************************************************************************
Estructura del Proyecto

src/
components/
pokemon-list.js: Componente que muestra la lista de Pokémon.
pokemon-detail.js: Componente que muestra los detalles y evoluciones de un Pokémon.
evolution-form.js: Componente de formulario para editar evoluciones.
index.html: Archivo HTML principal.
main.js: Archivo JavaScript de entrada que importa y registra los componentes.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor crea un fork del repositorio y envía un pull request con tus cambios.

Contacto
Para más información o preguntas, por favor contacta a [luisalejandromunozsierra@gmail.com].
