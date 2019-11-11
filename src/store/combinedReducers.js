import { combineReducers } from "redux";
import userReducer from "./user/reducers/userReducer";
import authReducer from "./auth/reducers/authReducer";

export default combineReducers({
    users: userReducer,
    auth: authReducer
});
