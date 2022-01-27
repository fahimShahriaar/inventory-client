import React from 'react';

const ProductDescriptionForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="p-4">
            <h3 className="text-xl mb-4">Provide product description</h3>
            <form onSubmit={handleSubmit} className="w-6/12">
                <input type="text" placeholder="Item Code" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Name" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Barcodes" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Serial" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Category" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Model" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Color" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Batch" className='border w-6/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Description" className='border w-full my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Height" className='border w-4/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Width" className='border w-4/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Weight" className='border w-4/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Branch" className='border w-4/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="Store" className='border w-4/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <input type="text" placeholder="BIN" className='border w-4/12 my-2 p-1 px-3 focus:outline-gray-400 placeholder:text-gray-600 placeholder:text-sm' />
                <div className="text-right">
                    <button type="submit" className="text-sm bg-emerald-600 text-gray-50 px-6 py-1 my-2 rounded">Save</button>
                </div>
            </form>
        </div>
    );
};

export default ProductDescriptionForm;