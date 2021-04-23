import { combineReducers } from 'redux';
import product from './productReducers';
import cart from './cartReducer'
export default combineReducers({
    product,
    cart

});