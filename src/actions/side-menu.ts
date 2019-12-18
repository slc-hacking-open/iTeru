import { Dispatch } from "redux";

export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

const fetchLocations = () => {
  return fetch(
    "https://f4o3plnc4j.execute-api.ap-northeast-1.amazonaws.com/Prod/iterulocations"
  );
};

export const openMenu = () => ({
  type: OPEN as typeof OPEN
});

export const closeMenu = () => ({
  type: CLOSE as typeof CLOSE
});

export const initMenu = () => {
  return (dispatch: Dispatch) => {
    fetchLocations()
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(openMenu());
      })
      .catch(reason => {
        console.log("error");
      });
  };
};

export type SideMenuAction =
  | ReturnType<typeof openMenu>
  | ReturnType<typeof closeMenu>;
