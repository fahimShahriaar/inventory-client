import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminHeader from '../../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';
import BinList from '../BinList/BinList';
import CreateBinForm from '../CreateBinForm/CreateBinForm';

const Bin = () => {
    const { branchid, storeid } = useParams();
    console.log(branchid, storeid);
    const [branch, setBranch] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/admin/branch/${branchid}`)
            .then(res => res.json())
            .then(data => setBranch(data));
    }, [branchid])
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    {/* BIN body */}
                    <div className="my-6">
                        <div className="w-1/2">
                            <div className="ml-6 p-4 shadow-lg">
                                <h2 className="text-2xl my-4">Create BIN</h2>
                                <CreateBinForm branch={branch} storeid={storeid} />
                                {/* {branch?._id && <CreateStoreForm branch={branch} />} */}
                            </div>
                        </div>
                        <div className="w-full p-4 mt-8">
                            <div className="ml-4">
                                <h2 className="text-2xl my-4">BIN List</h2>
                                <BinList />
                                {/* {branch?._id && <StoreList branch={branch} />} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bin;