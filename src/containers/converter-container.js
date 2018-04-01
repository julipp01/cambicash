import { connect } from 'react-redux';
import ChangeOnline from '../components/viewOne/ChangeOnline';
import { selectTypeBuy, selectTypeSale ,converterBuy, converterSale } from '../actions/action-index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {

  return {
    isChange: state.isChange,

  }
}
 

function mapDispatchToProps (dispatch){
 
  return bindActionCreators({ handleClick1 : selectTypeBuy,
                              handleClick2 : selectTypeSale,
                              onConverterBuy :converterBuy,
                              onConverterSale :converterSale,
                            }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeOnline)