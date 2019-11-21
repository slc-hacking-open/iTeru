import { Reducer } from "redux";

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

const appReducer: Reducer<AppState> = (
  state: AppState = initialState
): AppState => {
  return state;
};

export default appReducer;
