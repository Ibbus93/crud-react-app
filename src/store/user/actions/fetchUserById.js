import {USER_GET, USER_RESPONSE, USER_INVALIDATE} from "../../actionTypes";
import {getUserById} from "../../../shared/API";

const userGet = () => ({
    type: USER_GET
});

const userResponse = (data) => ({
   type: USER_RESPONSE,
   payload: { userId: data.id, isLoggedIn: data.logged }
});

const userInvalidate = (error) => ({
    type: USER_INVALIDATE,
    error
});

const fetchUserById = (id) => (
    (dispatch) => {
        dispatch(userGet());

        getUserById(id)
            .then(data => dispatch(userResponse(data)))
            .catch(error => dispatch(userInvalidate(error)));
    }
);

export default fetchUserById;
