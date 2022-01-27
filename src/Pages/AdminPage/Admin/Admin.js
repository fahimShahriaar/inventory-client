import React from 'react';
import AdminBody from './AdminBody/AdminBody';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const Admin = () => {
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    <AdminBody />
                </div>
            </div>
        </div>
    );
};

export default Admin;