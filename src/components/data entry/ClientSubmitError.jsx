import React, { useEffect, useState } from 'react';
import { SPACEDATADUMMY } from '../../lib/const/DataEntryDummy';
import { useNavigate } from 'react-router-dom';

export default function ClientSubmitError() {
    const [sectionHeight, setSectionHeight] = useState(0);
    const [templateSearchTerm, setTemplateSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(true); // Show modal on page load

    const navigate = useNavigate();
    // const location = useLocation();

    const handleTemplateSearchChange = (event) => setTemplateSearchTerm(event.target.value);

    const handleSubmit = (path) => {
        navigate(path);
    };

    const filteredTemplates = SPACEDATADUMMY.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(templateSearchTerm.toLowerCase())
        )
    );

    useEffect(() => {
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            const newHeight = screenHeight - 100; // Adjust this value as needed
            setSectionHeight(newHeight);
        };

        // Set initial height
        handleResize();

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleEdit = (id) => {
        // Placeholder for handling edit action
        console.log(`Editing item with ID: ${id}`);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div style={{ height: `${sectionHeight}px` }} className="flex-1 overflow-y-auto flex flex-col px-5 py-5 h-screen p-4 bg-white">
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-lg font-semibold text-red-600 mb-4">Error(s) detected</h2>
                        <p className="text-sm text-gray-700 mb-4">
                            Please check the entries and correct any errors before submitting.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-c-dark-grayish text-white px-4 py-2 rounded-lg"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white shadow-sm border-b border-sm p-6">
                <h2 className="text-c-dark-grayish font-semibold text-md">Error(s)/Warning(s) detected, please amend and check the entry below before submitting!</h2>
            </div>

            <div className="bg-white shadow-lg p-6">
                <div className="relative mb-2 w-72 ">
                    <label htmlFor="table-search" className="sr-only">Search building...</label>
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        placeholder="Search..."
                        value={templateSearchTerm}
                        onChange={handleTemplateSearchChange}
                        className="w-full px-10 py-1 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:border-c-teal"
                    />
                </div>
                <div className="overflow-x-auto max-h-60">
                <table className="w-full">
                            <thead className="sticky top-0 bg-white border">
                                <tr className="bg-c-light-grayish text-white">
                                    <th className="px-6 py-3 text-left font-semibold">Space Name</th>
                                    <th className="px-6 py-3 text-left font-semibold">Floor</th>
                                    <th className="px-6 py-3 text-left font-semibold">Unit No</th>
                                    <th className="px-6 py-3 text-left font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTemplates.map((item, index) => (
                                    <tr key={index} className={`hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                        <td className="border px-6 py-3">{item['Space Name']}</td>
                                        <td className="border px-6 py-3">{item.Floor}</td>
                                        <td className="border px-6 py-3">{item['Unit No']}</td>
                                        <td className="border px-6 py-3">
                                            <button onClick={() => handleEdit(item.id)} className="text-blue-600 hover:underline">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={() => handleSubmit('/data-entry-portal/mass-upload/client/submit')}
                        className="w-32 mx-2 py-2 mt-3 bg-neutral-200 text-c-dark-grayish hover:text-white hover:bg-c-teal focus:outline-none shadow-md"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
