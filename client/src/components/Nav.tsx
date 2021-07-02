import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Nav = () => {
    const [user, setUser] = useState({
        first_name: ''
    })

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get('user', { withCredentials: true })

                setUser(data)
            }
        )()
    }, [])

    const logout = async () => {
        await axios.post('logout', {})
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

            <ul className="my-2 my-md-0 mr-md-3">
                <Link to="/profile" className="p-2 text-white text-decoration-none">{user?.first_name}</Link>
                <Link to="login" className="p-2 text-white text-decoration-none"
                    onClick={logout}
                >
                    Sign out</Link>
            </ul>
        </nav>
    )
}

export default Nav