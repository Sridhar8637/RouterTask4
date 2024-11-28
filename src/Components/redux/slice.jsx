
import {createSlice} from '@reduxjs/toolkit'

let slice = createSlice({
    name: 'slice',
    initialState: {
        studentDetails:[]
    },
    reducers: {
        addStudent(state, action) {
            state.studentDetails.push(action.payload);
        },
    }
}
);

export default slice.reducer

export const { addStudent } = slice.actions



