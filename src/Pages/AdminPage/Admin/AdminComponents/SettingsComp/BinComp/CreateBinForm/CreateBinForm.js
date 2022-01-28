import React, { useRef, useState } from 'react';

const CreateBinForm = ({ branch, storeid }) => {
    // console.log('storeid', storeid);
    const binNameRef = useRef(null);
    const binIDRef = useRef(null);

    // console.log(branch);
    const { branchID, branchName, stores } = branch;
    // const store = stores.find(store => store._id.toString() === storeid.toString());
    // console.log(stores);
    // let storeID, storeName = '';

    let store = {}
    if (stores) {
        store = stores.find(store => store._id === storeid);
        console.log(store);
    }

    // const [newBinState, setNewBinState] = useState({
    //     branchID: '',
    //     branchName: '',
    //     storeID: '',
    //     storeName: '',
    //     binID: '',
    //     binName: ''
    // })

    const handleSubmit = (e) => {
        const newBin = {
            branchID: branchID,
            branchName: branchName,
            storeID: store.storeID,
            storeName: store.storeName,
            binID: binIDRef.current.value,
            binName: binNameRef.current.value,
        }
        console.log(newBin);
        // setNewBinState(newBin);

        // POST FORM DATA 
        fetch(`http://localhost:5000/admin/branch/${branch._id}/${store._id}`, {
            method: 'PUT', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(newBin) // We send data in JSON format
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))



        // Reset form data
        binIDRef.current.value = '';
        binNameRef.current.value = '';
        e.preventDefault();
    }
    // console.log(newBinState);
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full">
                <div className='mt-2'>
                    <div className="w-1/2 inline-block">
                        <label className='text-sm font-semibold'>Branch ID</label>
                        <input type="text" disabled value={branchID} className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                    <div className='w-1/2 inline-block'>
                        <label className='text-sm font-semibold'>Branch Name</label>
                        <input type="text" disabled value={branchName} className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <div className="w-1/2 inline-block">
                        <label className='text-sm font-semibold'>Store ID</label>
                        <input type="text" disabled value={store.storeID} className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                    <div className='w-1/2 inline-block'>
                        <label className='text-sm font-semibold'>Store Name</label>
                        <input type="text" disabled value={store.storeName} className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <div className='w-1/2 inline-block mt-4'>
                        <label className='text-sm font-semibold'>BIN ID</label>
                        <input type="text" ref={binIDRef} placeholder="Store ID" className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>
                    <div className='w-1/2 inline-block'>
                        <label className='text-sm font-semibold'>BIN Name</label>
                        <input type="text" ref={binNameRef} placeholder="Store name" className='border w-full block my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                    </div>

                    <button type="submit" className="text-sm bg-emerald-600 text-gray-50 px-4 py-1 my-2 rounded">Create Store</button>

                </div>
            </form>
        </div>
    );
};

export default CreateBinForm;