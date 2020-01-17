import { Reducer } from "redux";
import { RoomsAction, SUCCEED_ROOMS } from "../actions/rooms";
import { RoomState } from "../constants";

export interface RoomsState {
  rooms: RoomState[];
}

const initialState: RoomsState = {
  rooms: []
};

const roomsReducer: Reducer<RoomsState, RoomsAction> = (
  state: RoomsState = initialState,
  action: RoomsAction
): RoomsState => {
  switch (action.type) {
    case SUCCEED_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms
      };
    default:
      return state;
  }
};

export default roomsReducer;
