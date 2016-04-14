

How to start a project like this one ;-)

Prerequisites
```
sudo npm install webpack-dev-server webpack babel -g

```


```
cd ~/projects/[your-project-name-here]
npm init
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react webpack --save-dev
```

Now for the things our application will need (we can add more later)
```
npm install react react-dom --save
```

```
mkdir public
mkdir dist
touch public/index.html
touch webpack.config.js
```

Launch the atom editor with this directory as a project
```
atom .
```


put the following in the webpack.config.js file
```
module.exports = {
  entry: './main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
```

add the following line to the package.json that was created by the npm install command earlier
(right after the "test": line --- the test line will need a comma added)
```
"start": "webpack-dev-server -content-base public/"
```
**Notice:** -content-base public/ ** switch here matches the output: { path: './public' above. **


now we are ready to start up the builder

```
npm start
```

To the our application open your browser to [http://localhost:8080](http://localhost:8080)
