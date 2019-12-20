import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { initMenu, openMenu, closeMenu } from "../actions/side-menu";
import SideMenu from "../components/side-menu";
import { RootState } from "../reducer";

interface DispatchProps {
  initMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

// eslint-disable-next-line
const mapStateToProps = (state: RootState): any => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, any>
): DispatchProps => ({
  initMenu: () => dispatch(initMenu()),
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
