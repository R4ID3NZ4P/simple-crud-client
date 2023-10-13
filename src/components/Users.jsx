import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedData = useLoaderData();
    const [users, setUsers] = useState(loadedData);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(typeof data.deletedCount);
            if(data.deletedCount > 0){ 
                alert("Deleted Successfully!");
                const updatedUsers = users.filter(user => user._id !== id);
                setUsers(updatedUsers);
            }
        });

    }

    return (
        <div>
            {users.map(user => <p key={user._id}>
                    {user._id}. {user.name} 
                    <button onClick={() => handleDelete(user._id)}>x</button>
                    <Link to={`/users/${user._id}`}><button>Update</button></Link>
                </p>)}
        </div>
    );
};

export default Users;