import React from "react"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import App from "./App";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <h2 style={{ backgroundColor: 'white' }}>My Blog App</h2> 
        <Outlet/>
        </>
        )
    }
}

export default Home