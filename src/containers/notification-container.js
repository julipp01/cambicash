import { connect } from 'react-redux';
import Notification from '../components/viewThree/Notification';

function mapStateToProps(state) {
  return {
    isChange: state.isChange,
  }
}

export default connect(mapStateToProps)(Notification)