import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../../../../../App';

const BranchList = () => {
    const { branchListState } = useContext(AppContext); // Get data from context
    const [branchList, setBranchList] = branchListState;
    // console.log(branchList);

    // GET all branches
    useEffect(() => {
        fetch('http://localhost:5000/admin/branches')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBranchList(data);
            })
            .catch(err => console.log(err))
    }, [setBranchList])

    const handleBranchDelete = () => {
        alert("Are you sure?")
    }

    return (
        <div>
            {
                branchList.map((branch, i) =>
                    <div key={i}
                        className={(i % 2 === 0 ? "bg-gray-200 p-2" : "bg-gray-300 p-2")}>
                        <div className="flex justify-between">
                            <div>{branch.branchName}</div>
                            <button onClick={handleBranchDelete} className="bg-red-500 px-2 py-1 text-white text-xs">Delete</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default BranchList;