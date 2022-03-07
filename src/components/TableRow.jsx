// import axios from "axios"
import { Link } from "react-router-dom"

const TableRow = ({ user, deleteUserHandler }) => {

    // const deleteUserHandler = () => {

    //     axios.delete(`http://localhost:5000/users/${user._id}`)
    //         .then(res => {
    //             // alert("User Deleted Successfully!");
    //             window.location.reload();
    //         })
    //         .catch(err => alert(err));
    // }

    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.mobNumber}</td>
            <td>
                <Link to={`/edit-user/${user._id}`} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteUserHandler(user._id)}>Delete</button>
            </td>
        </tr>
    )
}

export default TableRow;