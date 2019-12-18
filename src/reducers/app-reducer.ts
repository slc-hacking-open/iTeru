import { Reducer } from "redux";
import {
  SideMenuAction,
  FETCHING_LOCATIONS,
  SUCCEED_LOCATIONS,
  FAILED_LOCATIONS
} from "../actions/side-menu";

export interface AppState {
  isFetching: boolean;
  error: boolean;
  message: string;
}

const initialState: AppState = {
  isFetching: false,
  error: false,
  message: ""
};

const appReducer: Reducer<AppState, SideMenuAction> = (
  state: AppState = initialState,
  action: SideMenuAction
): AppState => {
  switch (action.type) {
    case FETCHING_LOCATIONS:
      return {
        ...state,
        isFetching: true
      };
    case SUCCEED_LOCATIONS:
      return {
        ...state,
        isFetching: false,
        error: false
      };
    case FAILED_LOCATIONS:
      return {
        ...state,
        message: action.payload.error.message,
        error: true
      };
    default:
      return state;
  }
};

export default appReducer;
