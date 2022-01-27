import React from 'react';
import AdminHeader from '../../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';
import CreateStoreForm from '../CreateStoreForm/CreateStoreForm';

const Store = () => {
    return (
        <>
            <div>
                <AdminHeader />
                <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                    <div className='w-2/12'>
                        <AdminSidebar />
                    </div>
                    <div className='w-10/12'>
                        {/* Store body */}
                        <div className="my-6">
                            <div className='w-6/12'>
                                <CreateStoreForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Store;