# 🥓 dayli-diet Mobile App 🥕

🔰 Aplicação Mobile (React Native) do desafio 02 do Ignite da Rocketseat

  🔗 [requisitos](https://efficient-sloth-d85.notion.site/Desafio-02-Daily-Diet-98b7d85ec7e9428aa0f9f3bceed4380f)

  🔗 [protótipo](https://www.figma.com/file/KE3ZA17HLAzs1YL0EQbAoS/Daily-Diet-(Copy)?node-id=0%3A1&t=T4B71NxOS3JnGdhb-0)

## ❗Tecnologias usadas

> [🔗 `React`](https://pt-br.reactjs.org/) | [🔗 `React Native`](https://reactnative.dev/) | [🔗 `Typescript`](https://devdocs.io/typescript/) | [🔗 `Expo`](https://docs.expo.dev/) | [🔗 `Styled Component`](https://styled-components.com/)

## ❗Recursos utilizados

- .editorconfig
- Path Mapping

## ❗Como este projeto foi construído

1. Comando de construção/criação de um projeto usando o `expo cli`:

  ```sh
    expo init dayli-diet --npm
  ```

  > __TEMPLATE:__ `Managed workflow` em `blank (TypeScript)`

1. A imagem da logo foi exportada diretamente pelo `Figma` com os sufixos `default`, `@2x` e `@3x` e adicionada na pasta `src/assets` no formato `.png`

1. Realizado o Path Mapping com a biblioteca [🔗 `babel-plugin-module-resolver`](https://github.com/tleunen/babel-plugin-module-resolver):

    ```sh
      npm install --save-dev babel-plugin-module-resolver
    ```

    > babel.config.js:

    ```js
      module.exports = function (api) {
        api.cache(true);
        return {
          presets: ['babel-preset-expo'],
          plugins: [
            [
              'module-resolver',
              {
                root: ['./src'],
                alias: {
                  '@assets': './src/assets',
                  '@components': './src/components',
                  '@routes': './src/routes',
                  '@screens': './src/screens',
                  '@storage': './src/storage',
                  '@theme': './src/theme',
                  '@utils': './src/utils',
                }
              }
            ]
          ]
        };
      };
    ```

    > tsconfig.json:

    ```json
      {
        "extends": "expo/tsconfig.base",
        "compilerOptions": {
          "strict": true,
          "baseUrl": "./",
          "paths": {
            "@assets/*": [
              "./src/assets/*"
            ],
            "@components/*": [
              "./src/components/*"
            ],
            "@routes/*": [
              "./src/routes/*"
            ],
            "@screens/*": [
              "./src/screens/*"
            ],
            "@storage/*": [
              "./src/storage/*"
            ],
            "@theme/*": [
              "./src/theme/*"
            ],
            "@utils/*": [
              "./src/utils/*"
            ]
          }
        }
      }
    ```
