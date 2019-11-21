import { connect } from "react-redux";
import { Dispatch } from "redux";

import { open, close } from "../actions/side-menu";
import { LocationState } from "../reducers/locations-reducer";
import SideMenu from "../components/side-menu";
import { RootState } from "../reducer";

export interface StateProps {
  locationNames: Array<string>;
}

interface DispatchProps {
  open: () => void;
  close: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  locationNames: state.locations.locations.map(
    (location: LocationState) => location.locationName
  )
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  open: () => dispatch(open()),
  close: () => dispatch(close())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
