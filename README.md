# Desafio Técnico Samba Tech

> O desafio consiste em desenvolver uma aplicação consumindo a ​ API pública de
> Breaking Bad( https://breakingbadapi.com/Documentation )

## Aplicação

Disponível em:

> https://guilnorth.github.io/breaking-bad-samba/

![](src/assets/screen.png)

## Instalação Local

Após clonar o repositório, dentro da pasta do projeto execute:

```sh
# Através do yarn
yarn install
yarn start

# Ou com npm
npm install
npm start
```

## Testes

Execute: `npm test` ou `yarn test`

A pasta dentro de `src/__tests__` possui os testes principais da aplicação.

## Arquitetura

- **React Hooks:** Hooks são a nova funcionalidade adicionada ao React 16.8 que permite trabalhar com o State e outros recursos sem a necessidade de se construir classes.

- **React Redux:** Redux é uma biblioteca para gerenciamento de estados que facilita o gerenciamento das ações de todo o sistema.

- **Redux-Saga:** O Redux-Saga trabalha com os side effects do Redux como controle de fluxo de chamadas assíncronas.

- **[Duck Pattern:][duck]** Duck Pattern é uma maneira de se escrever códigos React Redux onde toda a parte de Actions, Reducer e Creators fica em um único arquivo, separando-se por funcionalidades.

- **Axios:** Axios é a famosa e útil biblioteca para se trabalhar com chamadas Api de forma simples e de fácil configuração.

## Observações
- **Página de Busca:** Para a busca de personagens, como a Api só faz a busca por nome completo, utilizei uma lista de nomes `src/utils/namesCharacters.json` obtidos a partir do endpoint que retorna todas os personagens e, a partir dela, checo se o nome está presente para realizar buscas separadas com cada nome no Saga.

- **Paginação:** Para a paginação, era necessário que a Api retornasse o número total de itens. Como isso não acontece decidi por fixar de acordo com o número de personagens existentes no arquivo `src/utils/namesCharacters.json` (uma vez que a série já chegou ao fim, considerei que muito provavelmente esse número não deve se alterar). Havia outras opções, como buscar todos os personagens no endpoint de /character e a partir dele construir a paginação porém, isto seria mais custoso pois é uma requisição maior.

<!-- Markdown link & img dfn's -->

[duck]: https://github.com/erikras/ducks-modular-redux
