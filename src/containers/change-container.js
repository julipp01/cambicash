import { connect } from 'react-redux';
import ChangeOnline from '../components/viewOne/ChangeOnline';
import { solesToDolar, dolarToSoles, buyingDolar, buyingSoles } from '../actions/action';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    isChange: state.isChange,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clickOne: solesToDolar,
    clickTwo: dolarToSoles,
    operationBuy1: buyingDolar,
    operationBuy2: buyingSoles,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeOnline)