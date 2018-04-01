import { combineReducers } from 'redux';
import ConverterReducers from './converter-reducer';

 


const rootReducer = combineReducers({
    isChange: ConverterReducers,


});

export default rootReducer;