
const initState =
{
    // name: "",
    // email: "",
    // password: "",
    // username: "",
    // mobile: "",
    // description: ""
    data: []
}

export const authReducer = (state = initState, action) => {
    
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case "auth": {
            return {
                ...state,
                data: payload
                // name: action.payload.name,
                // email: action.payload.email,
                // password: action.payload.password,
                // username: action.payload.username,
                // mobile: action.payload.mobile,
                // description: action.payload.description
            }
        }
        default:
            return state
    }
}