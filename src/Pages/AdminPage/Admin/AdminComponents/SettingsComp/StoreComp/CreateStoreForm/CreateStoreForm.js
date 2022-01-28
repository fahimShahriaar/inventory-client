import React, { useEffect, useRef, useState } from 'react';

const CreateStoreForm = ({ branch }) => {
    const storeNameRef = useRef(null);
    const storeIDRef = useRef(null);

    console.log(branch);

    const [newStoreState, setNewStoreState] = useState({
        branchID: '',
        branchName: '',
        storeID: '',
        storeName: ''
    })

    const handleSubmit = (e) => {
        const newStore = {
            branchID: branch.branchID,
            branchName: branch.branchName,
            storeID: storeIDRef.current.value,
            storeName: storeNameRef.current.value,
        }
        // console.log(newStore);
        setNewStoreState(newStore);

        storeIDRef.current.value = '';
        storeNameRef.current.value = '';

        // e.preventDefault();
    }

    newStoreState.storeID && newStoreState.storeName && console.log(newStoreState);

    useEffect(() => {
        // Create New Store in DB
        newStoreState.storeID && newStoreState.storeName &&
            fetch(`http://localhost:5000/admin/branch/${branch._id}`, {
                method: 'PUT', // Method itself
                headers: {
                    'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                },
                body: JSON.stringify(newStoreState) // We send data in JSON format
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
    }, [newStoreState, branch?._id]);

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full">
                <div className='mt-2'>
                    <div className="w-1/2 inline-block">
                        <label className='text-sm font-semibold'>Branch ID</label>
                        <input type="text" disabled value={branch?.branchID} className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                    <div className='w-1/2 inline-block'>
                        <label className='text-sm font-semibold'>Branch Name</label>
                        <input type="text" disabled value={branch?.branchName} className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <div className='w-1/2 inline-block mt-4'>
                        <label className='text-sm font-semibold'>Store ID</label>
                        <input type="text" ref={storeIDRef} placeholder="Store ID" className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <div className='w-1/2 inline-block'>
                        <label className='text-sm font-semibold'>Store Name</label>
                        <input type="text" ref={storeNameRef} placeholder="Store name" className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <button type="submit" className="text-sm bg-emerald-600 text-gray-50 px-4 py-1 my-2 rounded">Create Store</button>

                </div>
            </form>
        </div>
    );
};

export default CreateStoreForm;