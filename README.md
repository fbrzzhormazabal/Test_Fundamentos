# TALLER NUMERO 1 DE FUNDAMENTOS DE LENGUAJE DE PROGRAMACIÓN

En el presente proyecto vamos a dar a conocer el lenguaje de programación a estudiar y de como enlazarlo a la base de datos elegida, este proyecto esta  elaborado de tal manera que se pueda entender el procedimiento de la creación de este.

## Programas a utilizar 

 - [Visual Studio Code](https://code.visualstudio.com)
Es donde vamos a desarrollar nuestro  proyecto.
 - [JavaScript](https://www.javascript.com)
Es el lenguaje elegido para la programacion del proyecto.
 - [Node.js](https://nodejs.org/en/)
Es el entorno de tiempo de ejecucion de javascript. 
- [npm](https://www.npmjs.com/package/database-js)
Es un gestor de paquetes de Nodejs, un entorno de ejecución multiplataforma para ejecutar JavaScript, nos permite instalar de forma muy sencilla y automática paquetes de JavaScript.
 - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
Sirve para ejecutar cualquier tipo de codigo y mostrar los resultados en el Output de VS code.
 - [WampServer](https://www.wampserver.com/en/)
Que actúa como un servidor virtual en la computadora (al instalarlo se instalan automaticamente los 2 siguentes links).
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


- JavaScript
1) Instalas node.js en tu sistema operativo.
2) Instala la extensión de code runner en tu vs code.
3) Con tu archivo js abierto, seleccionando el bloque de código deseado, click derecho y luego click en run code.
4) La terminal integrada en vs code mostrará el código en ejecución.

- Node.js
1) Ir a la pagina de Node.js y descargar la versions segun el sistema operativo.
2) Abrir el archivo de instalacion en la carpeta de descarga para iniciar la instalacion.
3) Lee y acepta los acuerdo de licencia. Haz clic en Next para continuar. 
4) Se puede cambiar la ubicacion de la carpeta de instalación o mantenerlo predeterminado. Haz clic en Next para continuar.
5) Lo siguente mostrará instalaciones personalizadas, en este caso le daremos a lo predeterminado por lo que presionamos Siguente.
6) Seguimos con la intalación predeterminada y le damos clic a siguente.
7) Hacemos clic en Install para iniciar la instalacion, luego le damos a finalizar.
8) Para verificar la instalación le damos a las teclas "Windows + R", escribimos "cmd", le damos a Enter y escribimos: 
```bash
node -v
```
9) Luego para comprobar la version de npm, el mismo procedimiento pero ahora escribimos(si aparece algo es porque estan correctamente instaladas, si tira error o archivo no encontrado, realiza nuevamente los pasos):
```bash
npm -v
```
- Instalación de CodeRunner y librerias de npm
1) Para CodeRunner nos iremos a las extenciones de VS Code para luego buscar CodeRunner y darle install.
2) Para instalar npm, utilizaremos nuevamente la terminal "cmd", presionamos las teclas "Windows + R" y escribimos "cmd", le damos a Enter y en la terminal escribimos: 
```bash
  npm i database-js 
```
3) Para instalar mysql , el mismo procedimiento realizado en el paso anterior lo repetimos, abrimos el terminal para luego escribir:
```bash
   nmp install mysql 
```
- Instalacion de WampServer 
- WampServer
1) Primero tenemos que ir a la pagina de WarmpServer y vamos a descargar Wamp haciendo clic en Download.
2) Tendras que seleccionar la version de Wamp adecuada segun tu sistema operativo.
3) Al descargar el intalador, debes darle clic a download directly para descargar el instalador de Wamp para la descarga automatica.
4) Una vez descargado el instalador debes ejecutarlo, y darles los permisos del administrador.
5) Seleccionaras el idioma de su preferencia y le daras a ok.
6) Aceptas los terminos y condiciones y para luego darle a next.
7) La siguiente ventana son los requisitos dale a next.
8) Introducir el nombre del directorio donde se va a instalar Wamp para luego darle a Next.
9) Intrudece la carpeta del menu de inicuio donde esta el acceso directo a Wamp dale a Next.
10) al terminar la instalacion veras un mensaje de confirmacion, haz clic en Finish para cerrar el instalador.

## Lluvia de preguntas

- Dentro de las preguntas vistas para la realizacion del formulario se tomo la desición de utilizar el criterio del "Test de Goldberg" y una variedad de preguntas que ajustaremos al proceso final. Dentro de las preguntas investigadas están:
```bash
- Preguntas iniciales

1.¿Se ha sentido con poca energía últimamente?
2.¿Ha perdido el interés por las cosas?
3.¿Ha perdido la confianza en sí mismo?
4.¿Se ha sentido desesperanzado?

- Si hay respuesta positiva a cualquiera de las preguntas anteriores, continúa:

5.¿Ha tenido dificultades para concentrarse?
6.¿Ha perdido peso a causa de su falta de apetito?
7.¿Se despierta demasiado temprano?
8.¿Se nota más lento de lo habitual?
9.¿Se siente triste o afligido?
10.¿Llora o tiene ganas de llorar?
11.¿Duerme mal de noche?
12.¿En la mañana se siente peor?
13.¿Le cuesta trabajo concentrarse?
14.¿Le ha disminuido el apetito?
15.¿Se siente obsesivo o repetitivo?
16.¿Ha disminuido su interés sexual? 
17.¿Considera que su rendimiento en el trabajo es menor?
18.¿Siente presión en el pecho?
19.¿Se siente nervioso, angustiado o ansioso?
20.¿Se siente cansado o decaído?
21.¿Se siente pesimista, piensa que las cosas le van a salir mal?
22.¿Le duele con frecuencia la cabeza?
23.¿Está más irritable o enojón que antes?
24.¿Se siente inseguro, con falta de confianza en usted mismo?
25.¿Siente que le es menos útil a su familia?
26.¿Siente miedo de algunas cosas?
27.¿Siente deseos de morir?
28.¿Se siente apático, sin interés en las cosas?
```

## Escala de ponderación

- Nos regiremos por este margen de puntuación para mayor libertad del usuario al momento de la votación:
```bash
-Totalmente de acuerdo (1)
-Un poco de acuerdo (0.5)
-Completamente en desacuerdo (0)
```