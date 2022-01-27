import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../../../../../App';

const BranchList = () => {
    const { branchListState } = useContext(AppContext); // Get data from context
    const [branchList] = branchListState;
    console.log(branchList);
    // const handleBranchDelete = () => {
    //     alert("Are you sure?")
    // }

    return (
        <div className="w-3/12">
            {
                branchList.map((branch, i) =>
                    <div key={i}
                        className={(i % 2 === 0 ? "bg-gray-200 p-2" : "bg-gray-300 p-2")}>
                        <div className="flex justify-between">
                            <div>{branch.branchName}</div>
                            <Link to={`/admin/settings/store/${branch._id}`}>
                                <button className="bg-emerald-700 px-2 py-1 text-white text-xs">Store</button>
                            </Link>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default BranchList;