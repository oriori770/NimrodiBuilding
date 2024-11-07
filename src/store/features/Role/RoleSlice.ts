import { createSlice } from "@reduxjs/toolkit";
type Roles = "Unknown Personnel"| "Guest"| "Student" | "Developer" | "Executive Personnel";
interface IRoleState {
    currentRole: Roles
}

const initialState: IRoleState = {
    currentRole: "Unknown Personnel"

}

const RoleSlice = createSlice({
    name: 'Role',
    initialState,
    reducers: {
        setRole: (state, action) => {

        }
    }
})

export const { setRole} = RoleSlice.actions
export default RoleSlice.reducer