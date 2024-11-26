import {configureStore, createSlice} from '@reduxjs/toolkit';

const reducerFn = (state={cash: 1000},action) => {
    return state;
}

const cashSlice = createSlice({
    name: 'counter',
    initialState: {cash: 1000},
    reducers: {
        increment(state,action){
            state.cash++;
        },
        decrement(state, action){
            state.cash--
        },
        addBy(state,action){
            state.cash += 10
        }
    }
})

export const actions = cashSlice.actions

const store = configureStore({
    reducer: cashSlice.reducer
}
)

export default store