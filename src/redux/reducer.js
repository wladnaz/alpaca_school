import {actionsTypes} from './actions';

const initialState = {
    login: ""
};

const mainReducer = (state = initialState, action) =>{
    switch (action.type){
        case actionsTypes.AUTH:
            return {...state, login: action.credentials}
        default:
            return state;
    }
}

export default mainReducer;