import { createStore } from 'redux';
import productionLineReducer from '../reducers/productionLineReducer'

const store = createStore(productionLineReducer)

export default store