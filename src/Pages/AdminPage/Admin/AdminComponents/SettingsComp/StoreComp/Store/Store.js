import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../../../../../App';
import AdminHeader from '../../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';
import CreateStoreForm from '../CreateStoreForm/CreateStoreForm';
import StoreList from '../StoreList/StoreList';

const Store = () => {
    const { id } = useParams();
    console.log(id);

    // get state from context
    const { branchListState } = useContext(AppContext);
    const [branchList, setBranchList] = branchListState;

    useEffect(() => {
        if (branchList.length < 1) {
            fetch('http://localhost:5000/admin/branches')
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setBranchList(data);
                })
                .catch(err => console.log(err))
        }
    }, [branchList.length, setBranchList]);


    // const branch = branchList.length ? branchList.find(branch => branch._id.toString() === id.toString()) : { _id: '', branchID: '', branchName: '', branchDesc: '' };

    const branch = branchList.find(branch => branch._id.toString() === id.toString());
    console.log(branch);

    return (
        <>
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
                                    <h2 className="text-2xl my-4">Create Store</h2>
                                    {branch?._id && <CreateStoreForm branch={branch} />}
                                </div>
                            </div>
                            <div className="w-full p-4 mt-8">
                                <div className="ml-4">
                                    <h2 className="text-2xl my-4">Store List</h2>
                                    {branch?._id && <StoreList stores={branch?.stores} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Store;