import { Reducer } from "redux";

export interface LocationState {
  locaitonId: number;
  locationName: string;
}
export interface LocationsState {
  locations: Array<LocationState>;
}

const initialState: LocationsState = {
  locations: []
};

const locationsReducer: Reducer<LocationsState> = (
  state: LocationsState = initialState
): LocationsState => {
  return state;
};

export default locationsReducer;
