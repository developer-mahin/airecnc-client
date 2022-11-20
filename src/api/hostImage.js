export const hostImageData = async (image) => {
    const formData = new FormData()
    formData.append("image", image)
    
    const url = "https://api.imgbb.com/1/upload?key=e6715828d226108de92f2bc703211a4e"


    const response = await fetch(url, {
        method: "POST",
        body: formData
    })
    const data = await response.json()
    return data
}