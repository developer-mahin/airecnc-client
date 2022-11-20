export const saveBookings = async (bookingData) => {
    const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    return data;
}


export const getBookingByEmail = async (email) => {
    const res = await fetch(`http://localhost:5000/bookings?email=${email}`)
    const data = await res.json()
    return data;
}


export const getAllBookings = async () => {
    const res = await fetch("http://localhost:5000/all-bookings")
    const data = await res.json()
    return data;
}