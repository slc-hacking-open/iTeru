import { Dispatch } from "redux";
import { fetchLocations } from "../modules/api";

export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const openMenu = () => ({
  type: OPEN as typeof OPEN
});

export const closeMenu = () => ({
  type: CLOSE as typeof CLOSE
});

export const initMenu = () => {
  return async (dispatch: Dispatch) => {
    try {
      const locations = await fetchLocations();
      console.log(locations);
      dispatch(openMenu());
    } catch (error) {
      console.log(error);
    }
    //        dispatch(openMenu());
  };
};

export type SideMenuAction =
  | ReturnType<typeof openMenu>
  | ReturnType<typeof closeMenu>;
