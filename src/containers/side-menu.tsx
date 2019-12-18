import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { initMenu, openMenu, closeMenu } from "../actions/side-menu";
import { LocationState } from "../reducers/locations-reducer";
import SideMenu from "../components/side-menu";
import { RootState } from "../reducer";

export interface StateProps {
  locationNames: Array<string>;
}

interface DispatchProps {
  initMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  locationNames: state.locations.locations.map(
    (location: LocationState) => location.locationName
  )
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): DispatchProps => ({
  initMenu: () => dispatch(initMenu()),
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
