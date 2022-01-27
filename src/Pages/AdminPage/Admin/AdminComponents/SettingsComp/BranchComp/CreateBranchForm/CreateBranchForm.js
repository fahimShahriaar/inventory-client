import React, { useRef } from 'react';

const CreateBranchForm = () => {
    const branchNameRef = useRef();
    const branchIDRef = useRef();
    const branchDescRef = useRef();

    // Handle Create Branch Form Submit
    const handleSubmit = (e) => {
        console.log(branchNameRef.current.value, branchIDRef.current.value, branchDescRef.current.value);
        const newBranch = {
            branchName: branchNameRef.current.value,
            branchID: branchIDRef.current.value,
            branchDesc: branchDescRef.current.value
        }

        fetch('http://localhost:5000/admin/branch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBranch)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));


        branchNameRef.current.value = '';
        branchIDRef.current.value = '';
        branchDescRef.current.value = '';
        // e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full">
                <input type="text" ref={branchNameRef} placeholder="Branch name" className='border w-6/12  my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                <input type="text" ref={branchIDRef} placeholder="Branch ID" className='border w-6/12  my-2 p-2 focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                <textarea ref={branchDescRef} className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600 text-sm' placeholder="Description..."></textarea>
                <button type="submit" className="text-sm bg-emerald-600 text-gray-50 px-4 py-1 my-2 rounded">Create Branch</button>
            </form>
        </div>
    );
};

export default CreateBranchForm;