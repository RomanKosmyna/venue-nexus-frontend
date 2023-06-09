const urls = {
    auth: {
        login: "/auth/login",
        registration: "/auth/registration",
        validateAccessToken: (token: string) => `/auth/validateAccessToken/${token}`
    }
}

export {urls};