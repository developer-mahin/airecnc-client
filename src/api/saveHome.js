export const hostHome = async (homeData) =>{
    const res = await fetch("http://localhost:5000/homes", {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        }, 
        body: JSON.stringify(homeData)
    })
    const data = await res.json()
    return data;
}