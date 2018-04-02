import { combineReducers } from 'redux';
import ChangeReducers from './change-reducer';

 


const rootReducer = combineReducers({
    isChange: ChangeReducers,


});

export default rootReducer;