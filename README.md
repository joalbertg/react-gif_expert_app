# Gif Expert App

- [Developers Giphy][giphy]
- [Animate CSS][animate_css]
- [Estructura de archivos][structure]
- [Structuring projects and naming components in React][structuring-projects-and-naming-components]

[structure]: https://es.reactjs.org/docs/faq-structure.html
[structuring-projects-and-naming-components]: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
[giphy]: https://developers.giphy.com/
[animate_css]: https://animate.style/

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
│   ├── components
│   │   ├── AddCategory.js
│   │   ├── GifGrid.js
│   │   ├── GifGridItem.js
│   │   ├── ListCategories.js
│   │   └── index.js
│   ├── helpers
│   │   ├── getGifs.js
│   │   └── index.js
│   ├── hooks
│   │   └── useFetchGifs.js
│   ├── index.css
│   ├── index.js
│   └── setupTests.js
└── yarn.lock

4 directories, 17 files
```

### Scripts

#### Start

> run `docker-compose up`

#### Tests

> run `docker-compose run app yarn test`

#### Build

> run `docker-compose run app yarn build`, install `yarn global http-server` to test.
> run `http-server build`

