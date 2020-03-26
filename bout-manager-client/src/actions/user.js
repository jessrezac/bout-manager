export const setLoginPending = () => {
    return { type: "SET_LOGIN_PENDING" };
};

export const setLoginSuccess = user => {
    return { type: "SET_LOGIN_SUCCESS", 
        user: user
    }
}

export const setLoginError = loginError => {
    return { type: "SET_LOGIN_ERROR",
        loginError: loginError
    }
}

export const logout = () => {
    return { type: "LOGOUT" }
}