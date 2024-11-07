import { createSlice } from "@reduxjs/toolkit";
// type Roles = "Unknown Personnel" | "Guest" , "Student" , "Developer" , "Executive Personnel"
import optionalroles from "../../../data/roles.json";

// interface IRoleState {
//     currentRole: string
// }

const initialState: string = optionalroles[0]

const RoleSlice = createSlice({
    name: 'Role',
    initialState,
    reducers: {
        setRole: (state, action) => {
            return optionalroles[action.payload]
        }
    }
})

export const { setRole} = RoleSlice.actions
export default RoleSlice.reducer