import React from 'react';
import AdminHeader from '../../../../AdminHeader/AdminHeader';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';

const Delivery = () => {
    return (
        <div>
            <AdminHeader />
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    {/* Delivery body */}
                    <div className="px-4 mt-8">

                        <div className="bg-gray-200 pb-2">
                            {/* recieve section */}
                            <section className="">
                                <form className="">
                                    <div className="flex flex-wrap justify-between items-center px-4 py-2 bg-emerald-600 text-white">
                                        <div className="w-1/2">
                                            <h1 className="">Delivery</h1>
                                        </div>
                                        <div className="w-1/2">
                                            <label htmlFor="branch">Hub/Branch </label>
                                            <select id="branch" className="text-black ml-4 focus:outline-gray-400 px-2 text-sm" name="branchlist" form="branchfrom">
                                                <option value="dhaka">Dhaka</option>
                                                <option value="khulna">Khulna</option>
                                                <option value="rajshahi">Rajshahi</option>
                                                <option value="ctg">CTG</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="bg-gray-300">
                                        <div className="flex flex-wrap justify-between p-4">
                                            <div className="">
                                                <label className="mr-1 text-sm">SL</label>
                                                <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                            </div>
                                            <div className="">
                                                <label className="mr-1 text-sm">Date </label>
                                                <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                            </div>
                                            <div className="">
                                                <label className="mr-1 text-sm">Ref </label>
                                                <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                            </div>
                                            <div className="">
                                                <label className="mr-1 text-sm">Delivery to</label>
                                                <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="p-4 text-left container mx-auto">
                                        <label className="px-2 custom-text-color1">Notes</label>
                                        <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                    </div>

                                    <div className="flex items-center justify-center border-t-2 border-b-2 border-gray-400">
                                        <div className="p-4 text-left">
                                            <label className="px-2 ">Quick Scan</label>
                                            <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                        </div>
                                        <div className="p-4">
                                            <label className="px-2 ">QTY</label>
                                            <input type="number" className="w-18 text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                        </div>
                                        <div className="p-4 flex items-center">
                                            <label htmlFor="myCheck" className="mr-1">Auto</label>
                                            <input type="checkbox" id="myCheck"></input>
                                        </div>
                                    </div>

                                    {/* receive table  */}
                                    <section className=" mt-8 mb-4 px-4">
                                        <table className="w-full text-center">
                                            <thead className="border border-gray-400 text-gray-800 font-normal">
                                                <tr className="">
                                                    <th className="border border-gray-400">Code</th>
                                                    <th className="border border-gray-400">Name</th>
                                                    <th className="border border-gray-400">Batch/Expire</th>
                                                    <th className="border border-gray-400">Serial</th>
                                                    <th className="border border-gray-400">QTY</th>
                                                    <th className="border border-gray-400">BIN</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr className="">
                                                    <td className="border border-gray-400">b1235</td>
                                                    <td className="border border-gray-400">Water</td>
                                                    <td className="border border-gray-400">02-2023</td>
                                                    <td className="border border-gray-400">11122255521</td>
                                                    <td className="border border-gray-400">15</td>
                                                    <td className="border border-gray-400">r962</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-400">b1235</td>
                                                    <td className="border border-gray-400">Water</td>
                                                    <td className="border border-gray-400">02-2023</td>
                                                    <td className="border border-gray-400">11122255521</td>
                                                    <td className="border border-gray-400">15</td>
                                                    <td className="border border-gray-400">r962</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-400">b1235</td>
                                                    <td className="border border-gray-400">Water</td>
                                                    <td className="border border-gray-400">02-2023</td>
                                                    <td className="border border-gray-400">11122255521</td>
                                                    <td className="border border-gray-400">15</td>
                                                    <td className="border border-gray-400">r962</td>
                                                </tr>
                                            </tbody>
                                        </table >

                                        <button className="bg-emerald-700 text-gray-100 text-sm px-4 py-1 mt-6" type="submit">Confirm & Post</button>

                                    </section >
                                </form >
                            </section >



                        </div >

                    </div >
                </div>
            </div>
        </div>




    );
};

export default Delivery;