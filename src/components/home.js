import React from 'react';
import Paper from '@material-ui/core/Paper';

class MyHome extends React.Component
{
  render() {
    return (
      <Paper className = "home" elevation = {20}>
        <div className = "text">
          <h1>Yarn</h1>
          <br/>
          <h2>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            yarn create react-app REACT-UI
          </h2>
          <br/>
          <h1>React</h1>
          <br/>
           <h2>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            react-vis &emsp;
            react-router-dom &emsp;
          </h2>
          <br/>
          <h1>Redux</h1>
          <br/>
          <h2>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            react-redux &emsp; // &emsp; MVC-Pattern &emsp; or &emsp; Ducks-Pattern 
          </h2>
          <br/>
          <h1>@Material-ui</h1>
          <br/>
          <h2>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            /core &emsp;
            /icons &emsp;
             react-markdown &emsp;
            react-syntax-highlighter &emsp;
          </h2>
          <br/>
          <h1>stylus</h1>
          <br/>
          <h2>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            yarn global add stylus &emsp; // &emsp; edit script: yarn stylus : "stylus -w src/stylus/index.styl -o src"
          </h2>
          <h2>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            yarn add npm-run-all // edit script: <br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            "build-css": "stylus -c src/stylus/ --out src",<br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            "watch-css": "yarn run build-css && stylus -c -w src/stylus/ --out src",<br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            "start-js": "react-scripts start",<br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            "start": "npm-run-all -p watch-css start-js",<br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            "build-js": "react-scripts build",<br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            "build": "npm-run-all build-css build-js react-scripts build",
          </h2>
          <br/>
        </div>
      </Paper>
    )
  }
}
export default MyHome
