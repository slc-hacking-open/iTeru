import { Dispatch } from "react";
import { connect } from "react-redux";
import { RootState } from "../reducer";
import Overlay from "../components/overlay";

interface StateProps {
  isOverlaying: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOverlaying: state.ui.isOpeningSideMenu
});

export default connect(mapStateToProps)(Overlay);
