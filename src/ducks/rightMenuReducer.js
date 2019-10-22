import Data from "./data.js";

const SHOW_RIGHT_MENU = "Show_Right_Menu";
const CLOSE_RIGHT_MENU = "Close_Right_Menu";

const initState = {
  anchorEl : null,
  rightContent: Data.rightMenu,
}
const rightMenuReducer = (state = initState, action = {}) => {
  //console.log(state);
  //console.log(action);
  if(action.type === SHOW_RIGHT_MENU)
  {
    return {
      ...state,
      anchorEl: action.event.currentTarget,
    }
  }
  else if(action.type === CLOSE_RIGHT_MENU)
  {
    return {
      ...state,
      anchorEl: null,
    }
  }
  return state;
}

const ShowRightMenu = (event) => {
  return {
    type: SHOW_RIGHT_MENU,
    event: event,
  };
};
const CloseRightMenu = () => {
  return{
    type: CLOSE_RIGHT_MENU,
  };
};

export default rightMenuReducer;
export {ShowRightMenu, CloseRightMenu};