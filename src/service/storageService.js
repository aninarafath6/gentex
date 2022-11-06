const getLocalToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.token;
};
const updateLocalToken = (token) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.token = token;
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
    getLocalToken,
    updateLocalToken,
    getUser,
    setUser,
    removeUser,
    getUserName,
    getTheme,
    setTheme,
};
export default storageService;