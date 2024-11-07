import { ReactNode, useEffect, useState, } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router";


interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    const floorAccess = useSelector(
        (state: {
          floorAccess: {
            floorAccess: [boolean, boolean, boolean, boolean, boolean];
          };
        }) => state.floorAccess.floorAccess
    );
    const {floorIndex} = useParams();
    const allowedToEnter:boolean = floorAccess[parseInt(floorIndex || "0")];
    return allowedToEnter ? component : <Navigate to="/Forbidden"/>;

};

export default PrivateRoute