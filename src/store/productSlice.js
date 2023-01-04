const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
//enums 
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
}); 
// hum ni chaty koi string change kare tou hum is obj ko freeze kardety read only hochuka hai 
// yeh jo object hai hum multiple jagah use karsakty jitni bhi api calls hongi sabky liye humein yeh call hogi
const productSlice = createSlice({
    name: 'product',
    initialState: {
        /* api call karty hain usmn boht sari problems hosakti api call 
        lambi hosakti time laga sakti tou humein kisi tarah sy uska status maintain karna parta
        track karna hoga status request jarahi hai ky ni check karny ky liye is obj ky 
        andr sara status rakheingein 
        */
        data: [],     //products ki list 
        status: STATUSES.IDLE,  // req status  loading,error,idle(sab kuch theek hai ),success value deni hoti hai tou enums  mn pass karty
    }, 
    reducers: {
        setProducts(state, action) {
            /*donot do this koi bhi async call hum reducers ky andr
             ni kar sakty kyunky hamry reducers wo sync call hoty hain 
             aur wo pure functions hoty hain jiska matlab unka koi bhi side effect ni hona chahiye api call ap sideeffect bhi bol sakty ho 
             agr hum yahn req ni send karsakty tou kahan par kareingein to data get karny ky liye hum use karty thunk middleware
             */
            //const res = await fetch('https://fakestoreapi.com/products');
            state.data = action.payload;  // jab bhi hum data ko get kareingein payload ko miljayega aur yeh data ky upr set krega
        },
        setStatus(state, action) {
          
            state.status = action.payload; 
        },
        
        // extraReducers: (builder) => {
        //     builder
        //         .addCase(fetchProducts.pending, (state, action) => {  //action 
        //             state.status = STATUSES.LOADING;
        //         })
        //         .addCase(fetchProducts.fulfilled, (state, action) => {
        //             state.data = action.payload;
        //             state.status = STATUSES.IDLE;
        //         })
        //         .addCase(fetchProducts.rejected, (state, action) => {
        //             state.status = STATUSES.ERROR;
        //         });
        // },
    },

},
)
export const { setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks
/*
thunk middleware hai redux phele version mn jab bhi hum store create karty thy humein thunk bhi karna parta 
lakin ab redux toolkit mn already inbuilt aata hai yeh alg sy configure karny ki 
zaroorat ni  yeh ik normal func 
The word thunk is a programming term that piece of code that does some delayed work rather than execute some logic
now we can write a function body or code 
 



*/
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {  //better error handling promises ky alag alg states hoty hain  isky acc actions automatic dispatch karty hamry liye teen action generate karta hai 
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     return data;
// });


export function fetchProducts() {
     // thunk is a function jo func return karta hai async hona chahiye 
      return async function fetchProductsThunk(dispatch,getstate){ // getstate is use to get current state hosakta hai humein multiple req karni parhti hain e.g koi bhi parameter hosakta hai usko use karkty req karni hai tou getstate sy karsakty phir use karky agye req bhej sakty hain
        dispatch(setStatus(STATUSES.LOADING)) //loading state ko update kardia 
        try { 
            // req start hogi
            const res = await fetch('https://fakestoreapi.com/products');
            const data= await res.json(); 
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch(err){
               console.log(err)
               dispatch(setStatus(STATUSES.ERROR))
        }

      }
}