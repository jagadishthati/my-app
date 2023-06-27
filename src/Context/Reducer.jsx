const CardReducer = (state,action)=> {
    switch(action.type){
        case"FILTER_BY_SEARCH":
        return{
            ...state,searchQuery:action.payload
        }
        default:
            return state;
    }
}

export default CardReducer