import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import MyTemplate  from '../Template';
import CodeBlock from '../';
import ReactMarkdown from 'react-markdown';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const themeA = createMuiTheme({
  palette: {
    primary: {
      main: "#404040",
    },
    secondary: {
      main: "#000000"
    }
  },
});

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  progress: {
    padding: theme.spacing.unit * 5,
    marginLeft: 300,
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: 700,
  },
});

function MyProgress(props) {
  const { classes } = props;
  
  let output = (<div className={classes.root}>
    <ThemeProvider theme={themeA}>
      <LinearProgress className={classes.progress}/>
      <LinearProgress className={classes.progress} color="secondary"/>
      <LinearProgress className={classes.progress}/>
      <LinearProgress className={classes.progress} color="secondary"/>
    </ThemeProvider>
  </div>
  );
  let myName = "Progress";
  let string = `
    import LinearProgress from '@material-ui/core/LinearProgress';
    function LinearIndeterminate(props) {
    return (
      <div>
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </div>
     );
    }
  `;

  let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

  return (
    <div>
    <MyTemplate content = {output} name = {myName} sampleUsage={code}/>
    </div>
  );
}

MyProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProgress);
