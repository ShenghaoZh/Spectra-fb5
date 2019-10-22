import Data from "./data.js";

const SHOW_SUBLIST = "Show_Sublist";
const SET_STATE = "Set_State";
const SWITCH_TABS = "Switch_Tabs";
const RESET_TABS_VALUE = "Reset_Tabs_Value";

const initState = {
  data : Data.navItems,
  value: 0,
  event: null
}
const navReducer = (state = initState, action = {}) => {
  if(action.type === SHOW_SUBLIST) {
      return{
        ...state,
        [action.oneState]:  !state[action.oneState]
      }
  }
  else if(action.type === SET_STATE)
  {
    if(action.bool && state[action.oneState] === undefined)
    {
      return{
        ...state,
        [action.oneState]:  action.bool
      }
    }
  }
  else if(action.type === SWITCH_TABS)
  {
    return{
      ...state,
      value: action.value,
      event: action.event
    }
  }
  else if(action.type === RESET_TABS_VALUE)
  {
    return{
      ...state,
      value: 0
    }
  }
  return state;
}

const ShowSublist = (oneState) => {
  return{
    type: SHOW_SUBLIST,
    oneState: oneState
  };
};
const SetState = (oneState,bool) => {
  return{
    type: SET_STATE,
    oneState: oneState,
    bool: bool
  };
};

export default navReducer;
export {ShowSublist, SetState};
