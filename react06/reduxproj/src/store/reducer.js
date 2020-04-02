function reducer(state={
    loading:true,
    data:[]
},action){
    switch(action.type){ 
        case "loading":
            return {
                loading:true,
                data:[]
            } 
        case "loadover":
            return {
                loading:false,
                data:action.data
            }
    }   
    return state;
}

export default reducer;