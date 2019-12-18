import { Reducer } from "redux";
import { SideMenuAction, SUCCEED_LOCATIONS } from "../actions/side-menu";

export interface LocationState {
  locaitonId: number;
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
        locations: action.payload.result.locations.map(item => {
          // LocationState is Not equals to Array<{locationId, locationName}>
          // 無駄なmapな気がするけど、APIの結果とStateが常に一致するとは限らないのでこれでいいかj
          const location: LocationState = {
            locaitonId: item.locationId,
            locationName: item.locationName
          };

          return location;
        })
      };
    default:
      return state;
  }
};

export default locationsReducer;
