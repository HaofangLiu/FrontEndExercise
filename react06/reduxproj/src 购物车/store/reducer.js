function reducer(state=[{
    id: 0,
    name: "苹果",
    price: 7,
    nub: 2 
},{
    id: 1,
    name: "栗子",
    price: 16,
    nub: 1 
},{
    id: 2,
    name: "梨",
    price: 4,
    nub: 1 
}],action){
    switch(action.type){   
        case "add": //添加一项商品
            state.push({
                id:Date.now(),
                nub: 1,
                ...action.data,
            });
            return [...state]
        case "minus": // 件数减一
            state.forEach(item=>{
                if(item.id === action.id){
                    item.nub = item.nub>0?item.nub-1:item.nub
                }
            })
            return [...state];
        case "plus":// 件数加一
            state.forEach(item=>{
                if(item.id === action.id){
                    item.nub = item.nub+1;
                }
            })
            return [...state];
    }   
    return state;
}

export default reducer;