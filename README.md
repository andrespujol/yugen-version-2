# Yugen
## Productos de decoración


***
## Descripción 
Se realiza una nueva versión de la página de Yugen.

# Deploy 


***
## Construido con 🛠️

* [React](https://es.reactjs.org/) - Biblioteca de JavaScript utilizada.

* [Node Js](https://nodejs.org/es/) - Entorno de desarrollo.

* [NPM](https://www.npmjs.com/) - Sistema de gestión de paquetes.

***

## Dependencias utilizadas 

* [Tailwindcss](https://tailwindcss.com/) 
* [DaisyUI](https://daisyui.com/) 
* [react-router-dom](https://reactrouter.com/docs/en/v6) 
* [react-icons](https://react-icons.github.io/react-icons)
***

## Versionado 📌

Usé [GitHub](https://github.com/) para el versionado. 
***

## Instalación 

git clone https://github.com/andrespujol/yugen-version-2
cd yugen
npm install 
npm start

## Estructura de la tienda 

# Header 

El header es fijo para facilitar la navegación, contiene:
* Logo: se muestra fijo en el header y su vinculo lleva al home(route:'/')
Un navBar con los siguientes vínculos: 
* ¿Quiénes somos?: contiene la información de Yugen.
* Porqué elegirnos: contiene la información de Yugen.
* Nuestros productos: muestra las diferentes categorías de los productos. 
* Contacto: contiene accesos directos a instagram, facebook y whatsapp de la tienda. 

# Body 

Es el lugar donde se despliega el contenido de las diferentes secciones. Su ruta es ' / ' y muestra el catálogo completo de la tienda.

# Footer

Al igual que el header, es persistente a lo largo de toda la navegación a través de las diferentes secciones. Muestra las redes sociales.

# Navegación 

El contenido que se muestra por default es el home de la tienda (al cual también se puede acceder por los métodos mencionados anteriormente).

# Menú de categorías

El catálogo muestra en su parte superior, un menú de navegación para filtrar los productos (ítems) por categorías.

# Ítem

Cada producto se presenta en un bloque que contiene: título, descripción e imagen. Se puede acceder al detalle del ítem al clickear el título o la imagen.

# Detalle del ítem

En esta sección se filtra el catálogo por el id del producto que se desea ver. Se muestra: imagen en un mayor tamaño (o más imágenes si las hubiere), título, descripción y un botón "confirmar". 
Una vez presionado el botón "confirmar", es reemplazado por otro botón que dice: "terminar compra", donde podrás comunicarte directamente con el/la responsable de venta.

## Autor ✒️


* **Andrés Pujol** - [Linkedin](https://www.linkedin.com/in/andrespujol/)
