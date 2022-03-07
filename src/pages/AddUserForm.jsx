import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddUserForm = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobNumber, setMobNumber] = useState("");

    const submitFormHandler = (e) => {

        // stop reloading the page
        e.preventDefault();

        // console.log(firstName, lastName, email, mobNumber);

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobNumber: mobNumber
        }

        console.log(data);

        axios.post("http://localhost:5000/users", data)
            .then(res => {
                alert("User Added Successfully!");
                // window.location.href = "/";
                navigate("/");
            })
            .catch(err => alert(err));

    }

    return (
        <div>
            <h2 className="text-center m-3">ADD NEW USER</h2>

            <form onSubmit={submitFormHandler}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" required
                        value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" required
                        value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter Email Address" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" required
                        value={mobNumber} onChange={(e) => setMobNumber(e.target.value)} />
                </div>

                <input type="submit" value="Add User" className="btn btn-success" />
            </form>
        </div>
    )
}

export default AddUserForm;