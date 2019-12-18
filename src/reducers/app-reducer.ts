import { Reducer } from "redux";
import {
  SideMenuAction,
  FETCHING_LOCATIONS,
  SUCCEED_LOCATIONS,
  FAILED_LOCATIONS
} from "../actions/side-menu";
import {
  RoomsAction,
  FETCHING_ROOMS,
  SUCCEED_ROOMS,
  FAILED_ROOMS
} from "../actions/rooms";

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

const appReducer: Reducer<AppState, SideMenuAction | RoomsAction> = (
  state: AppState = initialState,
  action: SideMenuAction | RoomsAction
): AppState => {
  switch (action.type) {
    case FETCHING_LOCATIONS:
    case FETCHING_ROOMS:
      return {
        ...state,
        isFetching: true
      };
    case SUCCEED_LOCATIONS:
    case SUCCEED_ROOMS:
      return {
        ...state,
        isFetching: false,
        error: false
      };
    case FAILED_LOCATIONS:
    case FAILED_ROOMS:
      return {
        ...state,
        isFetching: false,
        message: action.payload.error.message,
        error: true
      };
    default:
      return state;
  }
};

export default appReducer;
