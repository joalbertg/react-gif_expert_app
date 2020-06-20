# Gif Expert App

- [Estructura de archivos][structure]
- [Structuring projects and naming components in React][structuring-projects-and-naming-components]

[structure]: https://es.reactjs.org/docs/faq-structure.html
[structuring-projects-and-naming-components]: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

### Install

> run `docker-compose run app yarn`

### Project Structure

> run `tree -I "node_modules|public"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── GifExpertApp.js
│   ├── index.css
│   ├── index.js
│   └── setupTests.js
└── yarn.lock

1 directory, 9 files
```

### Scripts

#### Start

> run `docker-compose up`

#### Tests

> run `docker-compose run app yarn test`

