# News Verification App

<p>
  Este é um aplicativo de verificação de notícias desenvolvido em React Native. O aplicativo permite que o usuário insira uma notícia para verificar sua autenticidade. A resposta simula uma verificação automática, retornando se a notícia está correta (exibido em verde) ou incorreta (exibido em vermelho).

## Funcionalidades
- **Envio de mensagens**: O usuário pode inserir uma notícia e enviá-la para verificação.
- **Simulação de verificação**: O aplicativo simula a verificação da notícia, retornando aleatoriamente se a notícia está correta ou incorreta.
- **Cores indicativas**: O resultado da verificação é exibido com cores:
  - **Verde** para notícias verificadas como corretas.
  - **Vermelho** para notícias verificadas como incorretas.
  - **Marrom** para as mensagens enviadas pelo usuário.

## 🚀 How to use

```sh
npx create-expo --example with-typescript
```

#### Creating a new project

- Create a project: `npx create-expo --example with-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Create a blank TypeScript config: `touch tsconfig.json`
- Run `yarn start` or `npm run start` to automatically configure TypeScript
- Rename files to TypeScript, `.tsx` for React components and `.ts` for plain typescript files

> 💡 You can disable the TypeScript setup in Expo CLI with the environment variable `EXPO_NO_TYPESCRIPT_SETUP=1 expo start`

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)
