import { configureStore } from "@reduxjs/toolkit";
import data from'./slice.jsx'




const store = configureStore({
    reducer: {
        values:data
    }
})


export default store