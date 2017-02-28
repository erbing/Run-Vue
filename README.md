# Vuecn

> A Vue.js Spa

## Build Setup

``` bash
# install dependencies
npm run init

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##About this project
``` bash

vue-cli, 

vue 2.1.0

vue-router,

vue-resource ( axios 考虑ing);

vuex

然后针对 css 兼容 做了  postcss 兼容处理
```

## install dependencies
``` bash
1、First of all need to add runvue to development depend on
 
    "runvue": "^1.0.x"
```

``` bash
2、In the place where you need to use the introduction
 
    import RunVue form 'runvue'
    import 'runvue/style.css'
 
    Vue.use(RunVue)
``` 

``` bash
3、 tpl or html 
    <uiButton type="success"> test </uiButton>
```
    
