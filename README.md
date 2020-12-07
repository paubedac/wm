# Descripión
El siguiente proyecto las apliaciones frontend, backend y base de datos para visualizar el listado de productos y carro de compra.

# Instrucciones
Para ejecutar este proyecto se debe tener instalado:
- Docker
- Docker-Compose

Para levantar el proyecto en docker containers locales ejecutar:

docker-compose up -d --build

Este comando ejecutara el docker-compose.yml que levantará los siguientes contenedores:
- front_wm: container que contiene la aplicación frontend que muestra el listado de productos y el carro de compra.
- back_mw: container que contiene la aplicación backend que permite consultar la el listado de productos y descuentos en la base de datos.
- my-mongo: container que contiene la base de datos donde se encuentran alojados los productos y descuentos.

Adicionalmente se ejecuta mongoImport que permite hacer la carga de datos en la base de datos my-mongo. 
