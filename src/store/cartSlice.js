
const { createSlice } = require('@reduxjs/toolkit')

//intial state create karty jo by default empty hoti
// createSlice ka method call karty jo humein reduxjs toolkit sy mil jati aur object pass karty 
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    // reducers ky andr banani hai function jisky andr jiski madat sy hamra jo state hai usko change karsakein gien 
    reducers: {
        //reducer
        add(state, action) {
            // empty array state is ky andr push kar rahy array ky andr 
            state.push(action.payload);
        },
        remove(state, action) {
            // current state ko filter kareingein
            return state.filter((item) => item.id !== action.payload);
            //    state = state.filter((item) => item.id !== action.payload);
            // state is a local property main state ka reference break hojayega
        },
    },
});

export const { add, remove } = cartSlice.actions;  // jis ky andr action nam ki property milti hai actions bhi export kardi action hoga reducer ko call karega 
export default cartSlice.reducer;  //reducer bhi 