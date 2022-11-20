import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { hostImageData } from '../../../api/hostImage';
import { hostHome } from '../../../api/saveHome';
import AddServiceForm from '../../../Components/Form/AddServiceForm';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddHome = () => {
    const { user } = useContext(AuthContext)
    const [arrivalDate, setArrivalDate] = useState(new Date())
    const [departureDate, setDepartureDate] = useState(
        new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
    )
    const [loading, setLoading] = useState(false)

    const handleSubmit = event => {
        setLoading(true)
        event.preventDefault()
        const location = event.target.location.value
        const title = event.target.title.value
        const from = format(arrivalDate, 'P')
        const to = format(departureDate, 'P')
        const price = event.target.price.value
        const total_guest = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const description = event.target.description.value
        const image = event.target.image.files[0]

        hostImageData(image)
            .then(data => {
                const homeData = {
                    location,
                    title,
                    from,
                    to,
                    price,
                    total_guest,
                    bedrooms,
                    bathrooms,
                    description,
                    image: data.data.display_ur,
                    host: {
                        name: user?.displayName,
                        email: user?.email,
                        image: user?.photoURL
                    }
                }

                hostHome(homeData)
                    .then(data => {
                        if (data.acknowledged) {
                            setLoading(false)
                            event.target.reset()
                            toast.success("Successfully home added")
                        }
                    })
                    .catch(err => {
                        if (err) {
                            toast.error(err.message)
                            setLoading(false)
                        }
                    })

            })


    }

    return (
        <>
            <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
                Add Home
            </h1>
            <AddServiceForm
                loading={loading}
                handleSubmit={handleSubmit}
                arrivalDate={arrivalDate}
                setArrivalDate={setArrivalDate}
                departureDate={departureDate}
                setDepartureDate={setDepartureDate}
            />
        </>
    );
};

export default AddHome;