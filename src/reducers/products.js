import * as Types from './../constants/ActionType';



var initialState =[];

const products = ( state = initialState, action ) => {
    var {id} = action;
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];

        case Types.DELETE_PRODUCT:
            for(let i = 0; i < state.length; i ++ ) {
                if(state[i].id === id) {
                    state.splice(i,1);
                    break;
                }
            }
            return [...state];

        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state];

        case Types.UDPATE_PRODUCT:
        for(let i = 0; i < state.length; i ++ ) {
            if(state[i].id === action.product.id) {
                state[i] = action.product;
                break;
            }
        }
            return [...state];
        default: 
            return [...state];
    }
};

export default products;