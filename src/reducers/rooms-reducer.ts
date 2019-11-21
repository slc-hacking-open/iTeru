import { Reducer } from "redux";

export interface RoomsState {
  rooms: Array<RoomState>;
}

export interface RoomState {
  roomId: number;
  roomName: string;
  isUsing: boolean;
  elapsedMinutes: number;
}

const initialState: RoomsState = {
  rooms: []
};

const roomsReducer: Reducer<RoomsState> = (
  state: RoomsState = initialState
): RoomsState => {
  return state;
};

export default roomsReducer;
