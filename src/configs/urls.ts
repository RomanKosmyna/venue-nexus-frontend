const urls = {
    auth: {
        login: "/auth/login",
        registration: "/auth/registration",
        validateAccessToken: (token: string) => `/auth/validateAccessToken/${token}`
    },
    venue: {
        getAllVenues: "/venue",
        getVenueById: (id: number) => `/venue/${id}`,
    }
}

export {urls};