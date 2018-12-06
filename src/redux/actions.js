export const actionsTypes = {
    AUTH: "AUTH"
};

export const doLogin = (credentials) => ({type: actionsTypes.AUTH, credentials});