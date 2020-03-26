
export default function userReducer(state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: "",
    user: {}

}, action) {
    switch (action.type) {
        case "SET_LOGIN_PENDING":
            return Object.assign({}, state, {isLoginPending: true});

        case "SET_LOGIN_SUCCESS":
            return Object.assign({}, state, {isLoginSuccess: true, user: action.user});

        case "SET_LOGIN_ERROR":
            return Object.assign({}, state, { isLoginPending: false, loginError: action.loginError})

        case "LOGOUT":
            return Object.assign({}, state, { user: { }} )

        default:
            return state;
    }
}