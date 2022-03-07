import React, { useState, useEffect } from "react"
import axios from "axios"
import TableRow from "../components/TableRow"
import { Link } from "react-router-dom"

const Home = () => {

    // state lifting example
    // (function for deleting user data [called from TableRow component])
    const deleteUserHandler = (userId) => {

        axios.delete(`http://localhost:5000/users/${userId}`)
            .then(res => {
                // alert("User Deleted Successfully!");
                window.location.reload();
            })
            .catch(err => alert(err));
    }

    // to store user data from api
    const [userData, setUserData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/users")
            .then(res => {

                console.log(res.data)

                setUserData(res.data);

            }).catch(err => alert(err));

    }, []);

    return (
        <>
            <h1 className="text-center">
                REACT, NODE, EXPRESS JS & MONGO DB CRUD APP
            </h1>

            <Link to="/add-user" className="btn btn-success text-white float-right mb-3">Add User</Link>

            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.map((user) => {
                            return (
                                <TableRow key={user._id} user={user} deleteUserHandler={deleteUserHandler} />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Home;