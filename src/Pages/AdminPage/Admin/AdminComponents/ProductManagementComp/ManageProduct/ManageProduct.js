import React from 'react';
import AdminHeader from '../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../AdminSidebar/AdminSidebar';
import ProductDescriptionForm from '../ProductDescriptionForm/ProductDescriptionForm';

const ManageProduct = () => {
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    {/* manage product body */}
                    <ProductDescriptionForm />
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;