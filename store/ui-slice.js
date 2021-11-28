import {createSlice} from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name:'ui',
    initialState:{notification:null},
    reducers:{
        showNotfication(state,action){
            state.notification = {
                status:action.payload.status,
                title:action.payload.title,
                mesage:action.payload.mesage
            }
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice