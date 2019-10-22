import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

import AppBar from '@material-ui/core/AppBar';

import MyTemplete  from '../Template';
import CodeBlock from '../';
import ReactMarkdown from 'react-markdown';

class MyAvatar extends React.Component {
  renderAvatar() {
    return (
      <div>

        <div className="avatar-title">
          <h1>Letters</h1>
        </div>
        <div className="avatar-block" class="avatar-block">
          <Grid container justify="center" alignItems="center">
            <Avatar style={{backgroundColor:'#ff5722', margin:20}}>W</Avatar>
            <Avatar style={{backgroundColor:'#ff5722', margin:20}}>H</Avatar>
            <Avatar style={{backgroundColor:'#0ccf40', margin:10}}>A</Avatar>
            <Avatar style={{backgroundColor:'#360fd1', margin:10}}>T</Avatar>
            <Avatar style={{backgroundColor:'#f511de', margin:10}}>E</Avatar>
            <Avatar style={{backgroundColor:'#f50a0a', margin:10}}>V</Avatar>
            <Avatar style={{backgroundColor:'#0af5ed', margin:10}}>E</Avatar>
            <Avatar style={{backgroundColor:'#ff6f00', margin:10}}>R</Avatar>
          </Grid>
        </div>
        <div className="avatar-title">
          <h1>Icons</h1>
        </div>
        <div className="avatar-block">
          <Grid container justify="center" alignItems="center">
            <Avatar style={{backgroundColor:'#457ab2', margin:10}}>
              <FolderIcon />
            </Avatar>
            <Avatar style={{backgroundColor:'#33ebff', margin:10}}>
              <PageviewIcon />
            </Avatar>
            <Avatar style={{backgroundColor:'#ffd9d9', margin:10}}>
              <AssignmentIcon/>
            </Avatar>
          </Grid>
        </div>
        <div className="avatar-title">
            <h1>External Image</h1>
        </div>
        <div className="avatar-block">
          <Grid container justify="center" alignItems="center">
            <Avatar style={{margin:10}} alt="Remy Sharp" src="http://www.iconbeast.com/images/iconBeast-logo.jpg" />
            <Avatar style={{margin:10}} alt="Remy Sharp" src="http://www.iconbeast.com/images/iconBeast-logo.jpg"/>
            <Avatar style={{margin:10}} alt="Remy Sharp" src="http://www.iconbeast.com/images/iconBeast-logo.jpg"/>
          </Grid>
        </div>

      </div>
    );
  };
  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar";
    let string = `
      import Avatar from '@material-ui/core/Avatar';
       <div>
         <Avatar src="your link"/>
         <Avatar>
           <Your Icon>
         </Avatar>
         <Avatar>
           Your Text
         </Avatar>
       </div>
     `;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default MyAvatar;
