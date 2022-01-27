import React from 'react';
import AdminHeader from '../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../AdminSidebar/AdminSidebar';

const AllProducts = () => {
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    {/* All products body */}
                    All products
                </div>
            </div>
        </div>
    );
};

export default AllProducts;