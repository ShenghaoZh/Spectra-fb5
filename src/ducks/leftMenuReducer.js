const SHOW_LEFT_MENU = "Show_Left_Menu";

const initState = {
  ifLeftOpen: false,
};
const leftMenuReducer = (state = initState, action = {}) =>{
  if(action.type === SHOW_LEFT_MENU) {
    return {
      ...state,
      ifLeftOpen: !state.ifLeftOpen,
    };
  }
  return state;
};

const ShowLeftMenu = () =>{
  return {
    type: SHOW_LEFT_MENU,
  };
};

export default leftMenuReducer;
export {ShowLeftMenu};
