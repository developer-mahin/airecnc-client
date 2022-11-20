import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Sidebar from '../Pages/Dashboard/Dashboard/Sidebar';

const DashboardLayout = () => {


    const { user } = useContext(AuthContext)
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

    return (
        <div className='md:flex relative min-h-screen'>
            {
                roleLoading ? "" : <><Sidebar role={role} />
                    <div className='flex-1 md:ml-64'>
                        <div className='p-5'>
                            <Outlet />
                        </div>
                    </div></>
            }
        </div>
    );
};

export default DashboardLayout;