# TALLER NUMERO 1 DE FUNDAMENTOS DE LENGUAJE DE PROGRAMACION

En el presente proyecto vamos a dar a conocer el lenguaje de programacion 
a estudiar y de como enlazarlo a la base de datos elegida, este proyecto esta 
elaborado de tal madnera que se pueda entender el procedimiento de la creacion de este.





## Programas a utilizar 

 - [Visual Studio Code](https://code.visualstudio.com)
Es donde vamos a desarrollar nuestro  proyecto.
 - [JavaScript](https://www.javascript.com)
Es el lenguaje elegido para la programacion del proyecto.
 - [Node.js](https://nodejs.org/en/)
Es el entorno de tiempo de ejecucion de javascript. 
- [npm](https://www.npmjs.com/package/database-js)
Es un gestor de paquetes de Nodejs, un entorno de ejecucion multiplataforma para ejecutar JavaScript
nos permite instalar de forma muy sencilla y automatica paqutes de javascript.
 - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
Sirve para ejecutar cualquier tipo de codigo y prodcuir los resultados en el Output de VS code.
 - [WampServer](https://www.wampserver.com/en/)
Que actua como un servidor virtual en la computadora (al instalarlo se instalan automaticamente los 2 siguentes links).
 - [phpmyadmin](https://www.phpmyadmin.net).
 - [MySQL](https://www.mysql.com).
 



## Instalacion de los programas a utilizar

- Visual Studio Code
1) Ve a la página de Microsoft Visual Studio Code y haz clic en el botón ‘Descargar Visual Studio Code’ acorde a tu sistema operativo para descargar el archivo de instalación.
2) Abre el archivo de instalación en tu carpeta de descargas para iniciar la instalación.
3) Lee y acepta el acuerdo de licencia. Haz clic en Next para continuar.
4) Puedes cambiar la ubicación de la carpeta de instalación o mantener la configuración predeterminada. Haz clic en Next para continuar.
5) Elige si deseas cambiar el nombre de la carpeta de accesos directos en el menú Inicio o si no deseas instalar accesos directos en absoluto. Haz clic en Next.
6) Selecciona las tareas adicionales, por ej. crear un icono en el escritorio o añadir opciones al menú contextual de Windows Explorer. Haz clic en Next.
7) Haz clic en Install para iniciar la instalación, ya el programa está instalado y listo para usar. Haz clic en Finish para finalizar la instalación y comenzar a usar el programa.


- Para JavaScripts
1) Instalas node.js en tu sistema operativo.
2) Instala la extensión de code runner en tu vs code.
3) Con tu archivo js abierto, seleccionando el bloque de código deseado, click derecho y luego click en run code.
4) La terminal integrada en vs code mostrará el código en ejecución.

- Node.js
1) Ir a la pagina de Node.js y descargar la versions segun el sistema operativo.
2) Abirr el archvio de instalacion en la carpeta de descarga para iniciar la instalacion.
3) Lee y acepta los acuerdo de licencia. Haz clic en next para continuar. 
4) Se puede cambiar la ubicacion de la carpeta de instalacion o manternelo predeterminado. clic en next para continuar.
5) Lo siguente mostrara instalaciones personalizadas. en este caso le daremos a lo predeterminado por lo que paretamos siguente.
6) Seguimoos con la intalacion predeterminada y le damos clic a siguente.
7) Hacemos clic en Install para iniciar la instalacion. luego le damos a finalizar.
8) Para verificar la instalacion le damos a "Windows + R", escibrimos cmd, le damos enter y escribimos "Node --version" y para comprobar la version de npm, el mismo procedimiento pero ahora escribimos " npm --versions". (si aparece algo es porque estan correctamente instaladas).

- Las intalacion de CodeRunner y npm se hacer desde VS code
1) Para CodeRunner nos iremos a las extenciones de VS Code para luego buscar CodeRunner y darle install.
2) Para instalar npm, en un archivo .js vamos a apretar F1 y le daremos a crear una nueva terminal para alli escibir.
```bash
  npm i database-js 
```
3) Para instalar mysql , en un archivo .js vamos apretar F1 y le daremos a crea una nueva terminal para luego escibir.
```bash
   nmp install mysql 
```