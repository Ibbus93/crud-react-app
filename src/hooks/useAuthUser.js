import {useDispatch, useSelector} from "react-redux";
import postAuth from "../store/auth/actions/postAuth";

const useAuthUser = (username, password) => {
    const dispatch = useDispatch();
    const {data, isFetching, error} = useSelector(state => state.auth);

    const authenticateUser = () => dispatch(postAuth(username, password));

    return {isAuthenticated: data.isLoggedIn, isFetching, error, authenticateUser};

};

export default useAuthUser;
