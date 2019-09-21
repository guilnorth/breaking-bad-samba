# Desafio Técnico Samba Tech
> O desafio consiste em desenvolver uma aplicação consumindo a ​ API pública de
Breaking Bad( https://breakingbadapi.com/Documentation )



## Aplicação 

Disponível em:
> https://guilnorth.github.io/breaking-bad-samba/

![](src/assets/screen.png)

## Instalação Local

Após clonar o reposítio, dentro da pasta do projeto execute: 

```sh
# Através do yarn
yarn install
yarn start

# Ou com npm
npm install
npm start
```
## Testes

Execute:  `npm test` or `yarn test`

A pasta dentro de `src/__tests__` possui os testes principais da aplicação.

## Arquitetura

- **React Hooks:** Hooks são a nova funcionalidade adicionada ao React 16.8 que permite trabalhar com o State e outros recursos sem a necessidade de se construir classes.

- **React Redux:** Redux é uma biblioteca para gerenciamento de estados que facilita o gerenciamento das ações de todo o sistema.

- **Redux-Saga:** O Redux-Saga trabalha com os side effcts do Redux como controle de fluxo de chamadas assíncronas.

- **[Duck Pattern:][duck]** Duck Pattern é uma maneira de se escrever códigos React Redux onde toda a parte de Actions, Reducer e Creators fica em um único arquivo, separando-se por funcionalidades.

- **Axios:** Axios é a famosa e útil biblioteca para se trabalhar com chamadas Api de forma simples e de fácil configuração.





<!-- Markdown link & img dfn's -->
[duck]: https://github.com/erikras/ducks-modular-redux
