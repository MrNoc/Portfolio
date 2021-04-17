const initialState = {
    data:{},
    loading:false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE_DATA":
            return{
                ...state,
                data: { ...action.data}
            };
            default:
            return state;
    }
};