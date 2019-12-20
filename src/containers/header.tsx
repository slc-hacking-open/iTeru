import { connect } from "react-redux";

import Header from "../components/header";
import { RootState } from "../reducer";

export interface StateProps {
  showingLocationName: string;
}

interface DispatchProps {
  openSlideMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  showingLocationName: state.app.showingLocationName
});

export default connect(mapStateToProps)(Header);
