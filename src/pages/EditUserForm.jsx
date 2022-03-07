import { useState, useEffect } from "react"
import axios from "axios"

import { useNavigate, useParams } from "react-router-dom"

const EditUserForm = () => {

    const navigate = useNavigate();
    const { userId } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobNumber, setMobNumber] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userId}`)
            .then(res => {

                setFirstName(res.data[0].firstName);

                setLastName(res.data[0].lastName);

                setEmail(res.data[0].email);

                setMobNumber(res.data[0].mobNumber);

            }).catch(err => alert(err));
    }, []);

    // to edit/update the user data
    const updateUserFormHandler = (e) => {

        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobNumber: mobNumber
        }

        console.log(data);

        axios.put(`http://localhost:5000/users/${userId}`, data)
            .then(res => {
                alert("User Details Updated Successfully!")
                navigate("/")
            })
            .catch(err => alert(err));

    }

    return (
        <div>
            <h2 className="text-center m-3">EDIT USER INFO</h2>

            <form onSubmit={updateUserFormHandler}>
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

                <input type="submit" value="Save Changes!" className="btn btn-success" />
            </form>
        </div>
    )
}

export default EditUserForm;