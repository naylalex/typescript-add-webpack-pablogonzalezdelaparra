# Añade webpack a un proyecto de TypeScript

Instala webpack
`npm install --save-dev webpack`

Instala webpack CLI
`npm install --save-dev webpack-cli`

Genera una plantilla de webpack.config.js
`npx webpack-cli init`

Would you like to install '@webpack-cli/generators' package? (That will run 'npm install -D @webpack-cli/generators') (Y/n)
`Y`

? Which of the following JS solutions do you want to use? 
`Typescript`
? Do you want to use webpack-dev-server? 
`Yes`
? Do you want to simplify the creation of HTML files for your bundle?
`Yes`
? Do you want to add PWA support?
`No`
? Which of the following CSS solutions do you want to use?
`none`
? Do you like to install prettier to format generated configuration?
`No`
? Pick a package manager:
`npm`

? Overwrite package.json?
`d`

? Overwrite package.json?
`overwrite`

En package.json actualizar los atributos name y description del proyecto
```json
{
  "name": "typescript-add-webpack",
  "description": "Sample for adding webpack to a TypeScript project",
}
```
? Overwrite README.md?
`No`

Resolver las advertencias de seguridad por medio de
`npm audit fix --force`

Implementar la operación de resta en ./src/subtraction.ts
```ts
function subtraction(x: number, y: number) {
    return x - y;  
}

export default subtraction;
```

Importar subtraction en ./src/main.ts
```ts
import subtraction from './subtraction';
```

En index.html, añadir un elemento span con id="sub_result"

```html
<span id="sub_result"></span>
```

Invocar subtraction y mostrar el resultado en el HTML interno de sub_result
```ts
result = subtraction(10, 2);
output = document.querySelector('#sub_result');
if (output) {
    output.innerHTML = result.toString();
}
```


Construir en modalidad desarrollo
`npm run build:dev`

Ejecutar el proyecto
`npm run serve`

