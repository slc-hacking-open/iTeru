import { Reducer } from "redux";

export interface UIState {
  isOpeningSideMenu: boolean;
  isMonitorWide: boolean;
}

const initialState: UIState = {
  isOpeningSideMenu: false,
  isMonitorWide: false
};

const uiReducer: Reducer<UIState> = (
  state: UIState = initialState
): UIState => {
  return state;
};

export default uiReducer;
