import { Reducer } from "redux";
import { SideMenuAction, SUCCEED_LOCATIONS } from "../actions/side-menu";

export interface LocationState {
  locationId: number;
  locationName: string;
}
export interface LocationsState {
  locations: LocationState[];
}

const initialState: LocationsState = {
  locations: []
};

const locationsReducer: Reducer<LocationsState, SideMenuAction> = (
  state: LocationsState = initialState,
  action: SideMenuAction
): LocationsState => {
  switch (action.type) {
    case SUCCEED_LOCATIONS:
      return {
        ...state,
        locations: action.payload.result.locations
      };
    default:
      return state;
  }
};

export default locationsReducer;
