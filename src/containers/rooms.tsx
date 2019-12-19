import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { getRooms } from "../actions/rooms";
import { RoomState } from "../reducers/rooms-reducer";
import Rooms from "../components/rooms";
import { RootState } from "../reducer";

export interface StateProps {
  rooms: RoomState[];
}

interface DispatchProps {
  getRooms: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  rooms: state.rooms.rooms
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): DispatchProps => ({
  getRooms: () => dispatch(getRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
