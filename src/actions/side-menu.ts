import { Dispatch } from "redux";
import { fetchLocations, Locations } from "../modules/api";

// async actions
export const FETCHING_LOCATIONS = "FETCHING_LOCATIONS";
export const SUCCEED_LOCATIONS = "SUCCESS_LOCATIONS";
export const FAILED_LOCATIONS = "FAILED_LOCATIONS";

// immutable actions
export const OPEN_SIDE_MENU = "OPEN_SIDE_MENU";
export const CLOSE_SIDE_MENU = "CLOSE_SIDE_MENU";

export const fetchingLocations = () => ({
  type: FETCHING_LOCATIONS as typeof FETCHING_LOCATIONS
});

export const succeedLocations = (result: Locations) => ({
  type: SUCCEED_LOCATIONS as typeof SUCCEED_LOCATIONS,
  payload: {
    result
  }
});

export const failedLocations = (error: Error) => ({
  type: FAILED_LOCATIONS as typeof FAILED_LOCATIONS,
  payload: {
    error
  },
  error: true
});

export const openMenu = () => ({
  type: OPEN_SIDE_MENU as typeof OPEN_SIDE_MENU
});

export const closeMenu = () => ({
  type: CLOSE_SIDE_MENU as typeof CLOSE_SIDE_MENU
});

export const initMenu = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchingLocations());
      const result = await fetchLocations();
      console.log(result);
      dispatch(succeedLocations(result));
    } catch (error) {
      dispatch(failedLocations(error));
    }
  };
};

export type SideMenuAction =
  | ReturnType<typeof fetchingLocations>
  | ReturnType<typeof succeedLocations>
  | ReturnType<typeof failedLocations>
  | ReturnType<typeof openMenu>
  | ReturnType<typeof closeMenu>;
