import React, { useState } from "react";

const Profile = () => {
    const [name, setName] = useState("Backbencher");
    const [age, setAge] = useState(23);

    const onNameChange = (e) => {
        // stop reloading the page
        e.preventDefault();
        setName(e.target.value);
    }

    const onAgeChange = () => {
        // stop reloading the page
        e.preventDefault();
        setAge(e.target.value);
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={onNameChange} />

                <input
                    type="text"
                    value={age}
                    onChange={onAgeChange} />

                <h2>Name: {name}, Age: {age}</h2>
            </form>
        </div>
    );
}