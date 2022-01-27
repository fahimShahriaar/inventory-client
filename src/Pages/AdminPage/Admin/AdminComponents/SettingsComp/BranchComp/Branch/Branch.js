import React from 'react';
import AdminHeader from '../../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';
import BranchList from '../BranchList/BranchList';
import CreateBranchForm from '../CreateBranchForm/CreateBranchForm';

const Branch = () => {
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    <div className="my-6">
                        <div className="w-1/2">
                            <div className="ml-6 p-4 shadow-lg">
                                <h2 className="text-2xl my-4">Create Branch</h2>
                                <CreateBranchForm />
                            </div>
                        </div>
                        <div className="w-full p-4 mt-8">
                            <div className="ml-4">
                                <h2 className="text-2xl my-4">Branch List</h2>
                                <BranchList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Branch;