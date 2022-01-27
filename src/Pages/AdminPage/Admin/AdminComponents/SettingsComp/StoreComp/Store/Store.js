import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    const [branchList] = branchListState;

    // IF BranhList is empty for page reload, it will navigate to Branch Page
    const navigate = useNavigate();
    useEffect(() => {
        if (branchList.length < 1) {
            navigate('/admin/settings/branch')
        }
    }, [branchList.length, navigate])

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
                                    <CreateStoreForm branch={branch} />
                                </div>
                            </div>
                            <div className="w-full p-4 mt-8">
                                <div className="ml-4">
                                    <h2 className="text-2xl my-4">Store List</h2>
                                    <StoreList />
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