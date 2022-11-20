export const getAllUsers = async () => {
    const res = await fetch("http://localhost:5000/all-users")
    const data = await res.json()
    return data
}

export const makeHost = async (user) => {
    delete user._id;
    const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
        method: "PUT", 
        headers: {
            "content-type" : "application/json"
        }, 
        body: JSON.stringify({...user, role: "host"})
    })
    const data = await res.json();
    return data; 
}