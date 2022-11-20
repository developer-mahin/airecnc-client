import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { hostImageData } from '../../../api/hostImage';
import { AuthContext } from '../../../contexts/AuthProvider';
import BecomeAHostForm from './BecomeAHostForm';

const BecomeAHost = () => {

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [role, setRole] = useState("")
    const [roleLoading, setRoleLoading] = useState(false)

    useEffect(() => {
        setRoleLoading(true)
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role)
                setRoleLoading(false)
            })

    }, [user?.email])
    console.log(role);


    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const location = e.target.location.value
        const image = e.target.image.files[0]

        hostImageData(image).then(data => {
            const hostData = {
                location,
                documentImg: data.data.display_url,
                email: user?.email,
                role: "requested"
            }

            fetch(`http://localhost:5000/user/${user?.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(hostData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.acknowledged) {
                        toast.success("Request sent successfully")
                        e.target.reset()
                        console.log(data);
                        setLoading(false)
                    }
                })
                .catch((err) => {
                    if (err) {
                        setLoading(false)
                    }
                })
        })


    }

    return (
        <div>
            {
                role ? <><h2 className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'> Request Sent, wait for admin approval</h2></> : <>
                    {!roleLoading && <BecomeAHostForm loading={loading} handleSubmit={handleSubmit}></BecomeAHostForm>}
                </>
            }

        </div>
    );
};

export default BecomeAHost;