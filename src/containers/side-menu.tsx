import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { openMenu, closeMenu } from "../actions/side-menu";
import SideMenu from "../components/side-menu";
import { RootState } from "../reducer";

interface DispatchProps {
  openMenu: () => void;
  closeMenu: () => void;
}

// eslint-disable-next-line
const mapStateToProps = (state: RootState): any => ({});

const mapDispatchToProps = (
  // eslint-disable-next-line
  dispatch: ThunkDispatch<any, any, any>
): DispatchProps => ({
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
