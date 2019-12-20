import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { getRooms } from "../actions/rooms";
import { RoomState } from "../reducers/rooms-reducer";
import Rooms from "../components/rooms";
import { RootState } from "../reducer";

export interface StateProps {
  rooms: RoomState[];
  locationName: string;
}

interface DispatchProps {
  getRooms: (locationName: string) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  rooms: state.rooms.rooms,
  locationName: state.rooms.locationName
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): DispatchProps => ({
  getRooms: locationName => dispatch(getRooms(locationName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
