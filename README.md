## Build Setup

``` bash
# install dependencies
npm install

# serve with live reloading at localhost:8080
npm run dev

# build for production with transpilation / minification
npm run build

# serve your production build at localhost:5000
npm run serve
```

## Creating Builds For Clients

1. In `main.js` ensure `Vue.prototype.$language` returns `english` or `spanish` for the desired build
2. At the command line run `npm run build`
