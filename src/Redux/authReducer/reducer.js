
const initState =
{
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "auth":
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                username: action.payload.username,
                mobile: action.payload.mobile,
                description: action.payload.description
            }

        default:
            return state
    }
}