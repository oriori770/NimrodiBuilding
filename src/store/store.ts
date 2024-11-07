import FloorReducer from './features/Floor/FloorSlice';
import RoleReducer from './features/Role/RoleSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        role: RoleReducer,
        floorAccess: FloorReducer
    }    
})  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch