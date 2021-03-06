import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Searched from "./Searched"
import Channel from "./Channel"
import Login from "./Login"
import Profile from "./Profile"


function Page({userObj ,refreshUser}) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/searched/:input" element={<Searched/>}/>
                <Route path="/channel/:id" element={<Channel/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser}/>}/>
            </Routes>
        </div>
    )
}

export default Page