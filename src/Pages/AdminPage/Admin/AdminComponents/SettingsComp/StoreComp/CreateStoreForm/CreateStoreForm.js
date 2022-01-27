import React, { useContext, useEffect, useRef, useState } from 'react';

const CreateStoreForm = () => {
    const [dropdown, setDropdown] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState({
        branchID: '',
        branchName: ''
    });
    const [newStoreState, setNewStoreState] = useState({
        storeID: '',
        storeName: ''
    })

    // const { branchListState } = useContext(AppContext);
    // const [branchList] = branchListState;  // get state from context
    // console.log(branchList);
    const branchList = []

    const storeNameRef = useRef();
    const storeIDRef = useRef();



    const handleSelectedBranch = (branch) => {
        console.log(branch._id);
        setDropdown(!dropdown);
        setSelectedBranch(branch);
    }

    const handleSubmit = (e) => {
        const newStore = {
            storeID: storeIDRef.current.value,
            storeName: storeNameRef.current.value,
        }
        // console.log(newStore);
        setNewStoreState(newStore);

        storeIDRef.current.value = '';
        storeNameRef.current.value = '';

        e.preventDefault();
    }

    // console.log(newStoreState);

    // useEffect(() => {
    //     newStoreState.storeID && newStoreState.storeName &&
    //         fetch(`http://localhost:5000/admin/branch/${selectedBranch._id}`, {
    //             method: 'PUT', // Method itself
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    //             },
    //             body: JSON.stringify(newStoreState) // We send data in JSON format
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //             .catch(err => console.log(err))
    // }, [newStoreState]);

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full shadow rounded p-4">
                <button onClick={() => setDropdown(!dropdown)} className='bg-sky-600 text-gray-100 px-6 py-1'>Create Store under</button>

                {
                    dropdown &&
                    <div className='w-4/12'>
                        {
                            branchList.map((branch, i) =>
                                <div
                                    className="border border-gray-300 bg-gray-200 hover:bg-gray-300"
                                    key={branch._id}
                                    onClick={() => handleSelectedBranch(branch)}>
                                    <button className='p-2'>{branch.branchName}</button>
                                </div>)
                        }
                    </div>
                }

                <div className='mt-6'>
                    <div>
                        <label className='text-sm font-semibold'>Branch ID</label>
                        <input type="text" disabled value={selectedBranch.branchID} className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                    <div>
                        <label className='text-sm font-semibold'>Branch Name</label>
                        <input type="text" disabled value={selectedBranch.branchName} className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <div>
                        <label className='text-sm font-semibold'>Store Name</label>
                        <input type="text" ref={storeNameRef} placeholder="Store name" className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                    <div>
                        <label className='text-sm font-semibold'>Store ID</label>
                        <input type="text" ref={storeIDRef} placeholder="Store ID" className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                </div>


                <button type="submit" className="text-sm bg-emerald-600 text-gray-50 px-4 py-1 my-2 rounded">Create Store</button>
            </form>
        </div>
    );
};

export default CreateStoreForm;