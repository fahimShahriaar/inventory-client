import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='h-full bg-gray-700 text-gray-50 border-r-2 border-gray-700'>
            <ul>
                <li className='hover:bg-gray-400'>
                    <span className='block p-2'>Settings</span>
                    <ul className='bg-gray-700 text-sm'>
                        <Link to="/admin/settings/branch">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Branch</li>
                        </Link>
                        {/* <Link to="/admin/settings/store">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Store</li>
                        </Link> */}
                        <Link to="/admin/settings/bin">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Bin</li>
                        </Link>
                        <Link to="/admin/settings/user">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>User</li>
                        </Link>
                    </ul>
                </li>
                <li className='hover:bg-gray-400'>
                    <span className='block p-2'>Branch Operation</span>
                    <ul className='bg-gray-700 text-sm'>
                        <Link to="/admin/branch-operation/receive">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Receive</li>
                        </Link>
                        <Link to="/admin/branch-operation/delivery">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Delivery</li>
                        </Link>
                        <Link to="/admin/branch-operation/adjustment">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Adjustment</li>
                        </Link>
                        <Link to="/admin/branch-operation/internal-transfer">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Internal Transfer</li>
                        </Link>
                    </ul>
                </li>
                <li className='hover:bg-gray-400'>
                    <span className='block p-2'>Product Management</span>
                    <ul className='bg-gray-700 text-sm'>
                        <Link to="/admin/product-management/manage-products">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Manage Products</li>
                        </Link>
                        <Link to="/admin/product-management/all-products">
                            <li className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>All Products</li>
                        </Link>
                    </ul>
                </li>
                <Link to="link4">
                    <li className='hover:bg-gray-400 p-2'>Coming soon...</li>
                </Link>
                <Link to="link5">
                    <li className='hover:bg-gray-400 p-2'>Coming soon...</li>
                </Link>
            </ul>
        </div >
    );
};

export default AdminSidebar;