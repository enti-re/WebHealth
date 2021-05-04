import React from 'react'

function LogOut() {
    localStorage.removeItem("username")
    window.location = "/";
}

export default LogOut
