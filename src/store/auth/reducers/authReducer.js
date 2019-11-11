import {AUTH_POST, AUTH_RESPONSE, AUTH_INVALIDATE} from "../../actionTypes";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_POST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                error: null
            };
        case AUTH_RESPONSE:
            return {
              ...state,
              isFetching: false,
              data: action.payload.user
            };
        case AUTH_INVALIDATE:
            return {
              ...state,
              didInvalidate: true,
              error: action.error
            };
        default:
            return state;
    }
};

export default authReducer;
