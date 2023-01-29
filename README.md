# 🥓 dayli-diet Mobile App 🥕

🔰 Aplicação Mobile (React Native) do desafio 02 do Ignite da Rocketseat

  🔗 [requisitos](https://efficient-sloth-d85.notion.site/Desafio-02-Daily-Diet-98b7d85ec7e9428aa0f9f3bceed4380f)

  🔗 [protótipo](https://www.figma.com/file/KE3ZA17HLAzs1YL0EQbAoS/Daily-Diet-(Copy)?node-id=0%3A1&t=T4B71NxOS3JnGdhb-0)

## ❗Tecnologias usadas

> [🔗 `React`](https://pt-br.reactjs.org/) | [🔗 `React Native`](https://reactnative.dev/) | [🔗 `Typescript`](https://devdocs.io/typescript/) | [🔗 `Expo`](https://docs.expo.dev/) | [🔗 `Styled Components`](https://styled-components.com/) | [🔗 `React Navigation`](https://styled-components.com/) | [🔗 `Javascript`](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ❗Recursos utilizados

- Editorconfig
- Path Mapping
- Import Alias
- Default Themes
- Themes Provider
- Typing Image (.png)
- Fonts Loader
- ActivityIndicator
- Global Loading Component
- Overrides or Resolutions
- TypeScript Translator (VSCode Extension)
- CSS Helper (Styled Component)
- React Native Screens
- React Native Safe Area Context
- Stack Navigation
- Navigator and NavigationContainer
- Typing Routes
- React Hooks (useState / useEffect / useRef)
- React Native Hooks (useFocusEffect)
- Navigations Hooks (useNavigation / useRoute)
- SafeAreaView
- Route Params
- Glitch Prevent
- Local Storage
- Async Storage
- Custom Error Class
- Handling Exceptions
- Prevent Prop Drilling
- Blur or Keyboard Dimiss

## ❗Como este projeto foi construído

1. Comando de construção/criação de um projeto usando o `expo cli`:

  ```sh
    expo init dayli-diet --npm
  ```

  > __TEMPLATE:__ `Managed workflow` em `blank (TypeScript)`

1. A imagem da logo foi exportada diretamente pelo `Figma` em 🔗 <https://www.figma.com/file/lQGwNVWVCdlIh71ZxEFt3K/Daily-Diet-(Copy)?node-id=0%3A1&t=7YzLS2t1uYH7R0ix-0> com os sufixos `default`, `@2x` e `@3x` e adicionada na pasta `src/assets` no formato `.png`

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

1. Instalação e configuração do `styled-components` e suas tipagens:

    ```sh
      npm install --save styled-components
    ```

    ```sh
      npm install --save-dev @types/styled-components @types/styled-components-react-native
    ```

1. Instalação da fonte `Nunito Sans`:

    ```sh
      npx expo install @expo-google-fonts/nunito-sans expo-font expo-app-loading
    ```

1. Configuração do tema default em `src/theme/index.ts` seguindo o style guide e design system do `Figma` disponibilizados em: 🔗 <https://www.figma.com/file/lQGwNVWVCdlIh71ZxEFt3K/Daily-Diet-(Copy)?node-id=2%3A1297&t=7YzLS2t1uYH7R0ix-0>

1. Instalação da biblioteca de ícone `phosphoricons` disponível em: 🔗 <https://phosphoricons.com/>

    ```sh
      npm install --save phosphor-react-native
    ```

1. Instalação da biblioteca `react-native-svg` disponível em: 🔗 <https://docs.expo.dev/versions/latest/sdk/svg/>

    ```sh
      npx expo install react-native-svg
    ```

1. Configuração das tipagens do `Styled Components` no arquivo `package.json`:

    > Para projetos `npm`

    ```json
      "overrides": {
        "@types/react": "~18.0.14"
      },
    ```

    > Para projetos `yarn`

    ```json
      "resolutions": {
        "@types/react": "~18.0.14"
      },
    ```

    __*NOTA:__ _deve ser usada a versão atual do `React` no projeto, ou seja, a mesma versão que está em "dependencies" no `package.json`_

    __*NOTA:__ _exclua a pasta `node_modules/` e reinstale as dependência do projeto com o comando `npm install`_

1. Instalação do `React Navigation`:

    ```sh
      npm install @react-navigation/native
    ```

    ```sh
      npx expo install react-native-screens react-native-safe-area-context
    ```

    > para uso da estratégia de navagação do tipo Stack Navigation:

    ```sh
      npm install @react-navigation/native-stack
    ```

1. Instalação do `Asyc Storage`:

    ```sh
      npx expo install @react-native-async-storage/async-storage
    ```

## 🤳 Algumas telas do aplicativo
