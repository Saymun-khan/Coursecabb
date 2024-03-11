const AuthReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false,
                mock:null
            }
        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                isFetching:false,
                error:false
            }
        case "LOGIN_FAILURE":
            return{
                user:null,
                isFetching:false,
                error:action.payload,
                mock:null
            }
        default:
            return state;
    }
}


export default AuthReducer