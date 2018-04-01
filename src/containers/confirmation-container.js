import { connect } from 'react-redux';
import Confirmation from '../components/viewTwo/Confirmation';


function mapStateToProps(state) {

  return {
    isChange: state.isChange,

  }
}
 
export default connect(mapStateToProps)(Confirmation)