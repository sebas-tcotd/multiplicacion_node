# Multiplicación con NodeJS
Esta es una aplicación simple hecha en NodeJS para mostrar en consola la tabla de multiplicar o para crear un archivo de texto donde se guarde la tabla de multiplicar solicitada.

## Instalación
Antes de iniciar este programa, es necesario que ejecutes lo siguiente en tu terminal (y estando también en el directorio local donde tengas este repositorio):

```
npm install
```

## Ejecución
La aplicación tiene dos comandos en su haber: `listar` y `crear`.

Para ambos, se usa la siguiente sintaxis:

```
node app <listar | crear> <--base | -b> <--limite | -l> 
```
Donde el flag `base` es el número base para la tabla y `limite` para establecer el límite de la tabla; es decir, hasta dónde se querrá multiplicar.

El comando `listar` es usado para mostrar en consola la tabla de multiplicación solicitada; `crear`, para crear un archivo donde se registre la tabla.

### Ejemplos

Muestra en consola la tabla de multiplicar de 3 con límite en 20
```
node app listar --base=3 --limite=20
```

Crea un archivo que tenga la tabla de multiplicar del 4 con límite en 15
```
node app crear -b 4 -l 15
```