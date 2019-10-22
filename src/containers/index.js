import React  from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import "../../node_modules/react-vis/dist/style.css";

import {ShowLeftMenu} from '../ducks/leftMenuReducer.js'

import Header  from './header.js';
import Footer from './footer.js';

import MyColor from '../components/colors.js';
import MyIconography from '../components/iconography.js';
import MyHome from '../components/home.js';
import MyMarkdown from '../components/Units/markdown.js';
import Error from '../components/error.js';
import MyPanel from '../components/Units/panel.js';

import MyAvatar from '../components/Units/avatar.js';
import MyButtons from '../components/Units/buttons.js';
import MyTables from '../components/Units/tables.js';
import MyTabs from '../components/Units/tabs.js';
import MySpinner from '../components/Units/spinner.js';
import MyInfoCard from '../components/Units/infoCard.js';
import MyChips from '../components/Units/chips.js';
import MyProgress from '../components/Units/progress.js';
import MyMessageBar from '../components/Units/messageBar.js';
import MyDialog from '../components/Units/dialog.js';
import MyNotification from '../components/Units/notification.js';
import MySearchField from '../components/Units/searchField.js';
import MyNestedList from '../components/Units/nestedList.js';
import MyLine from '../components/Charts/line.js';
import MyCircularGridLine from'../components/Charts/circularGridLine.js';
import MyHorizontalBar from '../components/Charts/horizontalBar.js';
import MyVerticalBar from '../components/Charts/verticalBar.js';
import MyStackedBar from '../components/Charts/stackedBar.js';
import MyArea from '../components/Charts/area.js';
import MyPie from '../components/Charts/pie.js';
import MyLineSeries from '../components/Charts/lineSeries.js';
import MyLineMark from '../components/Charts/lineMark.js';
import MyScatterplot from '../components/Charts/scatterplot.js';

class App extends React.Component {

  handleNavOpen = () => {
    this.props.showLeftMenu();
  };

  render() {
    return(
      <HashRouter >
      <div className= 'App' >
        <div>
          <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.props.ifLeftOpen}/>
        </div>

        <div className = {this.props.ifLeftOpen ? "move-right" : "default"}>
          <div className = "content">
            <Switch>
              <Route path = "/" component = {MyHome}  key = "/home" exact/>
              <Route path = "/my-app" component = {MyHome} key = "/my-app" exact/>
              <Route path = "/colors" component = {MyColor} key = "/colors"/>
              <Route path = "/icons" component = {MyIconography} key = "/icons"/>
              <Route path = "/components/button" component = {MyButtons} key = "/components/button"/>
              <Route path = "/components/table" component = {MyTables} key = "/components/table"/>
              <Route path = "/components/tabs" component = {MyTabs} key = "/components/tabs"/>
              <Route path = "/components/spinner" component = {MySpinner} key = "/components/spinner"/>
              <Route path = "/components/progress" component = {MyProgress} key = "/components/progress"/>
              <Route path = "/components/infocard" component = {MyInfoCard} key = "/components/infocard"/>
              <Route path = "/components/dialog" component = {MyDialog} key = "/components/dialog"/>
              <Route path = "/components/chips" component = {MyChips} key = "/components/chips"/>
              <Route path = "/components/notification" component = {MyNotification} key = "/components/notification"/>
              <Route path = "/components/avatar" component = {MyAvatar} key = "/components/avatar"/>
              <Route path = "/components/searchfield" component = {MySearchField} key = "/components/searchfield"/>
              <Route path = "/components/markdown" component = {MyMarkdown} key = "/components/markdown"/>
              <Route path = "/components/panel" component = {MyPanel} key = "/components/panel"/>
              <Route path = "/components/nestedlist" component = {MyNestedList} key = "/components/nestedlist"/>
              <Route path = "/charts/line" component = {MyLine} key = "/charts/line"/>
              <Route path = "/charts/linemark" component = {MyLineMark} key = "/charts/linemark"/>
              <Route path = "/charts/horizontalbar" component = {MyHorizontalBar} key = "/charts/horizontalbar"/>
              <Route path = "/charts/circulargridline" component = {MyCircularGridLine} key = "/charts/circulargridline"/>
              <Route path = "/charts/verticalbar" component = {MyVerticalBar} key = "/charts/verticalbar"/>
              <Route path = "/charts/stackbar" component = {MyStackedBar} key = "/charts/stackbar"/>
              <Route path = "/charts/area" component = {MyArea} key = "/charts/area"/>
              <Route path = "/charts/pie" component = {MyPie} key = "/charts/pie"/>
              <Route path = "/charts/scatterplot" component = {MyScatterplot} key = "/charts/scatterplot"/>
              <Route path = "/charts/lineSeries" component = {MyLineSeries} key = "/charts/lineSeries"/>
              <Route  component = {Error} key = "error"/>
            </Switch>
          </div>
      </div>
      <Footer />

      </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ifLeftOpen: state.leftMenuReducer.ifLeftOpen,
    data: state.leftMenuReducer.data
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    showLeftMenu: () => {dispatch(ShowLeftMenu())},
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
