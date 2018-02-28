## Step 1

    $ npm init y
    $ npm i --save-dev webpack@3
    $ npm i webpack-cli -D
    $ npm i webpack-dev-server@2 --save-dev
    
## Step 2

    $ npm install css-loader node-sass sass-loader extract-text-webpack-plugin
    
## Step 3

    $ npm i jquery --save
    
## How to run on dev

    $ webpack-dev-server
    
## How to compile

    $ npx webpack --config webpack.config.js
 
## On any problems first try

    $ rm -rf node_modules/
    $ npm i