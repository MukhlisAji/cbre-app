import React from 'react'
import { BsPersonFillAdd, BsPersonFillExclamation } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ClientMassUpload() {
    const navigate = useNavigate()
    const location = useLocation();


    const handleCardClick = (path, action) => {
        const currentPath = location.pathname;
        const newPath = `${currentPath}${path}?action=${action}`;
        navigate(newPath);
    };

    return (
        <div className="flex justify-center bg-white">
            <div className="max-w-md bg-neutral-100 border border-sm border-neutral-200 shadow-lg rounded-lg overflow-hidden mx-4 my-8 cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleCardClick('/template', 'new')}>
                <div className="p-6">
                    <div className="flex items-center justify-center">
                        {/* Building Icon */}
                        <BsPersonFillAdd fontSize={60} className='text-yellow-400' />
                        {/* <img fontSize={60} className='text-yellow-400' src={`${process.env.PUBLIC_URL}/spaceIcon.png`} alt="spaceIcon" /> */}
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-xl font-semibold text-gray-800">New Client</p>
                        <p className="text-sm text-gray-500">Description for adding new clients</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md bg-neutral-100 border border-sm border-neutral-200 shadow-lg rounded-lg overflow-hidden mx-4 my-8 cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleCardClick('/template', 'update')}>
                <div className="p-6">
                    <div className="flex items-center justify-center">
                        {/* Building Icon */}
                        <BsPersonFillExclamation fontSize={60} className='text-yellow-400' />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-xl font-semibold text-gray-800">Update Client</p>
                        <p className="text-sm text-gray-500">Description for updating clients</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
