import { Reducer } from "redux";
import { SideMenuAction, OPEN, CLOSE } from "../actions/side-menu";

export interface UIState {
  isOpeningSideMenu: boolean;
  isMonitorWide: boolean;
}

const initialState: UIState = {
  isOpeningSideMenu: false,
  isMonitorWide: false
};

const uiReducer: Reducer<UIState, SideMenuAction> = (
  state: UIState = initialState,
  action: SideMenuAction
): UIState => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpeningSideMenu: true
      };
    case CLOSE:
      return {
        ...state,
        isOpeningSideMenu: false
      };
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const check: never = action.type;

      return state;
  }
};

export default uiReducer;
