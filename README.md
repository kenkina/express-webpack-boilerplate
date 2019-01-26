# Express Webpack Boilerplate

A boilerplate for express using webpack and babel.


## Scripts

Install dependencies
```
npm i
```

Starts webpack with watch mode and serves build/index.js with NodemonPlugin at [http://localhost:3000]
```
npm start
```

Serves build/index.js with nodemon at [http://localhost:3000]
```
npm run start-dev
```

Starts webpack and use UglifyJsPlugin for minification
```
npm run build-prod
```

Serves dist/index.js with node at [http://localhost:3000]
```
node dist/index.js
```


## Built With

* [Express](https://github.com/expressjs/express) - A web framework for node.
* [Webpack](https://github.com/webpack/webpack) - A module bundler for JavaScript.
* [Babel](https://github.com/babel/babel) - A JavaScript compiler