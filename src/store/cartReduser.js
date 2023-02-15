const { createSlice } = require('@reduxjs/toolkit');


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
      
        let idx=0;
        for(;idx<state.length;idx++){
            if(state[idx].id===action.payload.id){
                break;
            }
        }
        if(idx<state.length){
            state[idx].count++;
        }else{
            let item={...action.payload, count:1};
            state.push(item);
        }
        
        },
        remove(state, action) {
         
            return state.filter((item) => item.id !== action.payload);
        },
        clear(state) {
           
            return [];
          }
      
    },
});

export const { add, remove,clear } = cartSlice.actions;
export default cartSlice.reducer;


