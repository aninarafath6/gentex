const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
};
const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
};
const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
};

const setTheme = (mode) => {
    let theme = {
        mode: mode
    }
    localStorage.setItem("theme", JSON.stringify(theme));
}

const getTheme = () => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    return theme?.mode
}

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};
const removeUser = () => {
    localStorage.removeItem("user");
};
const getUserName = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.username
}
const storageService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
    getUserName,
    getTheme,
    setTheme,
};
export default storageService;