import { useLoaderData } from "react-router-dom";

const Update = () => {
    
    const loadedUser = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const updatedUser = {name, email};
        console.log(updatedUser);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <h1>Update User</h1>
            <p>{loadedUser._id}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser.email}/>
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;