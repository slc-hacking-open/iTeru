import { Dispatch } from "redux";
import { fetchRooms, Rooms } from "../modules/api";

// async actions
export const FETCHING_ROOMS = "FETCHING_ROOMS";
export const SUCCEED_ROOMS = "SUCCESS_ROOMS";
export const FAILED_ROOMS = "FAILED_ROOMS";

export const fetchingRooms = () => ({
  type: FETCHING_ROOMS as typeof FETCHING_ROOMS
});

export const succeedRooms = (result: Rooms) => ({
  type: SUCCEED_ROOMS as typeof SUCCEED_ROOMS,
  payload: {
    result
  }
});

export const failedRooms = (error: Error) => ({
  type: FAILED_ROOMS as typeof FAILED_ROOMS,
  payload: {
    error
  },
  error: true
});

export const getRooms = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchingRooms());
      const result = await fetchRooms(0);
      console.log(result);
      dispatch(succeedRooms(result));
    } catch (error) {
      dispatch(failedRooms(error));
    }
  };
};

export type RoomsAction =
  | ReturnType<typeof fetchingRooms>
  | ReturnType<typeof succeedRooms>
  | ReturnType<typeof failedRooms>;
