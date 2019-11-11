import {login} from '../../../shared/API';
import {AUTH_POST, AUTH_RESPONSE, AUTH_INVALIDATE} from "../../actionTypes";

/*
 * User login POST
 */
const authPost = () => ({
    type: AUTH_POST
});

/*
 * Login request response
 */
const authResponse = (user) => ({
    type: AUTH_RESPONSE,
    payload: {user}
});

/*
 * Login did invalidate
 */
const authInvalidate = (error) => ({
    type: AUTH_INVALIDATE,
    error
});

/*
 * POST an Authorization login request
 */

const postAuth = (username, password) =>
    (dispatch) => {
        dispatch(authPost());

        login(username, password)
            .then(response => response.data)
            .then(data => dispatch(authResponse(data)))
            .catch(error => dispatch(authInvalidate(error.message)))
    };

export default postAuth;
