import {USER_GET, USER_INVALIDATE, USER_RESPONSE} from "../../actionTypes";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_GET:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                error: null
            };
        case USER_RESPONSE:
            return {
                ...state,
                isFetching: false,
                data: action.payload.user
            };
        case USER_INVALIDATE:
            return {
                ...state,
                didInvalidate: true,
                error: action.error
            };
        default:
            return state;
    }
};

export default userReducer;
