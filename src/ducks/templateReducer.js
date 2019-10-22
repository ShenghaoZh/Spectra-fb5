const SWITCH_TABS = "Switch_Tabs";
const RESET_TABS_VALUE = "Reset_Tabs_Value";

const SwitchTabs = (event, value) => {
  return {
    type: SWITCH_TABS,
    event: event,
    value: value
  };
};
const ResetValue = () => {
  return{
    type: RESET_TABS_VALUE
  };
};

export {SwitchTabs, ResetValue};
