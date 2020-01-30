import { ADD_PRODUCTION_LINE } from '../actions/productionLineActions'

const initialState = {
    productionLines: []
};

function productionLineReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCTION_LINE:
            return Object.assign({}, state, {
                productionLines: state.productionLines.concat(action.payload)
            })
        default:
            return state;
    };    
};

export default productionLineReducer;