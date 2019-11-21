import { Reducer } from "redux";

export interface LocationsState {
  locations: Array<LocationState>;
}

export interface LocationState {
  locaitonId: number;
  locationName: string;
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
