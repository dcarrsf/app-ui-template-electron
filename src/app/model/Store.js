import { createStore, combineReducers } from 'redux';
import nav from './StoreReducer';

const model = combineReducers({
    nav
});
const store = createStore(model);

export default store;
