import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import {ShowRightMenu, CloseRightMenu} from '../ducks/rightMenuReducer.js';

import NavigationBar from './nav.js'

import HomeIcon from '../assets/avatar-z.png';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Filter3 from '@material-ui/icons/Filter3';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

class Header extends React.Component
{
  handleClick = (event) => {
    this.props.showRightMenu(event);
    //console.log(this.props);
    //console.log(event.currentTarget);
  };

  handleClose = () => {
    this.props.closeRightMenu();
  };

  loopMenu(content) {
    let menu = [];
    for( let i in content) {
      menu.push(<a href={content[i].link} key={content[i].label} target="_blank" rel="noopener noreferrer"><MenuItem key = {content[i].label}>{content[i].label}</MenuItem></a>);
    }
    return(
      <div>
        {menu}
      </div>
    )
  }

  render() {
    const {anchorEl} = this.props;
    const {rightContent} = this.props;
    let output = this.loopMenu(rightContent);
    return (
      <div className = "root">
        <AppBar className="appbar">
          <Toolbar>

            <div>
              <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={()=>{this.props.SideBarOpen()}}>
                <MenuIcon />
              </IconButton>
            </div>

            <div className = "home-icon">
              <NavLink to="/">
                <Avatar src = {HomeIcon}/>
              </NavLink>
            </div>

            <Typography variant="h6" className = "grow">
              <span className = "titleColor"><b>hang</b>' s Design</span>
            </Typography>

            <div className = "rightMenuButton">
              <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
                <Filter3 />
              </IconButton>
            </div>

            <Menu  className="rightMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              {output}
            </Menu>

          </Toolbar>
        </AppBar>
        <div>
          <List>
            <Collapse in={this.props.listOpenState} timeout="auto" unmountOnExit>
              <div className="list">
              <List component="div">
                <NavigationBar/>
              </List>
              </div>
            </Collapse>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    anchorEl: state.rightMenuReducer.anchorEl,
    rightContent: state.rightMenuReducer.rightContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    showRightMenu: (event) => {dispatch(ShowRightMenu(event))},
    closeRightMenu: () => {dispatch(CloseRightMenu())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);