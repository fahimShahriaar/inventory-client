import React from 'react';
import AdminHeader from '../../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';

const User = () => {
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    {/* USER body */}
                    <div className="text-2xl my-6">
                        USER body
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;