<p align="center">
  <a href="https://girlscode.netlify.app/">
    <img alt="Website de Girls Code" src="https://pbs.twimg.com/profile_images/1188603250288840704/16W27Bsc_400x400.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  Website de Girls Code 
</h1>

## 🤖 Trabajar con un repo remoto 

Trabajar sobre un fork del proyecto. Hacer los PRs desde el fork. 

Documentación de cómo hacer fork del proyecto aqui.  https://help.github.com/es/github/getting-started-with-github/fork-a-repo

Comandos para setear repositorio localmente

```shell
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
git remote add girlscodepy https://github.com/GirlsCodePy/girls-code-web.git
```
## Prerequisitos

- Node (Versión v8.2.0 o mayor)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## 🚀 Instalar dependencias y correr localmente

Ejecutar los comandos en la consola 

```shell
yarn install 
yarn start 
```

Se levanta el proyecto localmente en http://localhost:8000/

## Estructura del Proyecto
```
├── src
│   └── components // Carpeta de componentes
│   │  └── Component // Un folder para cada componente (si necesita estilos propios)
│   │    │   └── index.js // Archivo para exponer el default export
│   │    │   └── Component.js // Componente
│   │    │   └── styles.sass // Estilos del componente, importados en el .js del componente
├── styles
│   └── _base.sass // Titulos, botones, texto con colores, etc.
│   └── _fonts.sass // Font imports
│   └── _helpers.sass // Helpers
│   └── _layout.sass // Estilos de layout (flex, cssgrid, estilos de layout que se reusan) 
│   └── _variables.sass // Variables, disponible sin importar en todos los archivos
│   └── main.sass // Bulma e internal imports

```

## 🤝 Licencia

Este proyecto está licenciado bajo los términos de la Licencia Pública General GNU v3.0 - vea el archivo [LICENSE](./LICENSE) para más detalles
