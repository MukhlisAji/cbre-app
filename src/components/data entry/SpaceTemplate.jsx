import React, { useEffect, useState } from 'react';
import { RiDownloadCloud2Fill, RiUploadCloud2Fill } from 'react-icons/ri';
import BUILDINGDATADUMMY from '../../lib/const/DataEntryDummy';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SpaceTemplate() {
    const [selectedTemplate, setSelectedTemplate] = useState('mandatory');
    const [selectedBuildings, setSelectedBuildings] = useState([]);
    const [buildingSearchTerm, setBuildingSearchTerm] = useState('');
    const [templateSearchTerm, setTemplateSearchTerm] = useState('');
    const [dragging, setDragging] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const buildingData = [
        { id: 1, name: 'JTC Space @ Buroh55 Ayer Rajah Crescent' },
        { id: 2, name: '62 Loyang Way' },
        { id: 3, name: 'Bugis Village - 64 Queen Street' },
        { id: 4, name: 'JTC Aerospace @ Seletar Aerospace Park' },
        { id: 5, name: '62 Loyang Way' },
        { id: 7, name: 'JTC Aerospace @ Seletar Aerospace Park' },
    ];

    const handleTemplateChange = (e) => setSelectedTemplate(e.target.value);

    const handleBuildingSearchChange = (event) => setBuildingSearchTerm(event.target.value);
    const handleTemplateSearchChange = (event) => setTemplateSearchTerm(event.target.value);

    const filteredBuildings = buildingData.filter((building) =>
        building.name.toLowerCase().includes(buildingSearchTerm.toLowerCase())
    );

    const filteredTemplates = BUILDINGDATADUMMY.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(templateSearchTerm.toLowerCase())
        )
    );

    const handleBuildingSelect = (buildingId) => {
        setSelectedBuildings((prev) =>
            prev.includes(buildingId) ? prev.filter((id) => id !== buildingId) : [...prev, buildingId]
        );
    };

    const handleDownload = () => {
        // Implement download functionality based on selected template or selected buildings
        console.log('Selected Template:', selectedTemplate);
        console.log('Selected Buildings:', selectedBuildings);
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        // Logic for uploading file
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        // Logic for uploading file
    };

    const handleSubmit = (path) => {
        const currentPath = location.pathname;
        navigate(path);
    };

    const [sectionHeight, setSectionHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            const newHeight = screenHeight - 100; // Subtract 200px for any other fixed content
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
    return (
        <div>
            {/* <div className='bg-white border-b border-md p-6 py-3'>
  
        </div> */}
            <div style={{ height: `${sectionHeight}px` }} className="flex-1 overflow-y-auto flex flex-col px-5 py-5 h-screen p-4 bg-white">

                <div className="bg-white shadow-md p-6 px-3 py-3 mb-5">
                    <h2 className="text-c-dark-grayish font-semibold text-md">Select Template</h2>

                    <div className="mt-2 text-neutral-500 text-sm">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                value="mandatory"
                                checked={selectedTemplate === 'mandatory'}
                                onChange={handleTemplateChange}
                                className="form-radio text-teal-600 checked:bg-teal-500 checked:hover:bg-teal-600 active:text-teal-700 checked:active:bg-teal-700 checked:focus:bg-teal-700 focus:outline-none h-4 w-4"
                            />
                            <span className="ml-2">Mandatory Columns</span>
                        </label>
                    </div>
                    <div className="mt-2 pb-3 text-neutral-500 text-sm border-b border-md">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                value="allFields"
                                checked={selectedTemplate === 'allFields'}
                                onChange={handleTemplateChange}
                                className="form-radio h-4 w-4 text-c-teal checked:text-c-teal"
                            />
                            <span className="ml-2">All Fields</span>
                        </label>
                    </div>

                    <div className='py-3 flex flex-row gap-4'>
                        <div className="min-w-[16rem] mb-4 bg-white w-full md:w-1/2">
                            <h2 className="text-md text-c-dark-grayish font-semibold mb-4">Select Building</h2>
                            <div className="relative overflow-hidden border border-gray-300 shadow-sm">

                                <div class="overflow-x-auto  min-h-75">
                                    <table className="w-full">
                                        <thead className="sticky top-0 text-white bg-c-light-grayish">
                                            <tr>
                                                <th className="px-2 py-1 text-left"></th>
                                                <th className="px-2 py-2 text-left">
                                                    Building Name

                                                </th>
                                            </tr>
                                            <tr className='bg-white text-c-dark-grayish border border-sm'>
                                                <th className="px-2 py-1 text-left"></th>
                                                <th className="px-2 py-1 text-left relative">
                                                    <label htmlFor="table-search" className="sr-only">Search building...</label>
                                                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="table-search"
                                                        placeholder="Search building..."
                                                        value={templateSearchTerm}
                                                        onChange={handleBuildingSearchChange}
                                                        className="w-full px-10 py-1 text-sm font-normal border border-neutral-200 focus:outline-none focus:border-c-teal"
                                                    />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-2 py-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedBuildings.length === 0}
                                                        onChange={() => setSelectedBuildings([])}
                                                        className="form-checkbox h-3 w-3 text-c-teal checked:bg-c-teal"
                                                    />
                                                </td>
                                                <td className="px-2 py-1 text-neutral-700">All Buildings</td>
                                            </tr>
                                            {filteredBuildings.map((building) => (
                                                <tr key={building.id} className="hover:bg-gray-100">
                                                    <td className="px-2 py-1">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedBuildings.includes(building.id)}
                                                            onChange={() => handleBuildingSelect(building.id)}
                                                            className="form-checkbox h-3 w-3 text-c-teal checked:bg-c-teal"
                                                        />
                                                    </td>
                                                    <td className="px-2 py-1 text-c-dark-grayish">{building.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>





                        <div className="mt-3 flex flex-col pt-1 items-center justify-center text-center min-w-[16rem] w-full md:w-1/2">
                            <div className="w-full min-w-[16rem] justify-start bg-white border border-sm border-neutral-300 shadow-sm  overflow-hidden mx-4 my-5 md:my-5 cursor-pointer hover:bg-neutral-100">
                                <div className="p-1" onClick={handleDownload}>
                                    <div className="flex items-center justify-center">
                                        <RiDownloadCloud2Fill fontSize={60} className="text-green-700" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p className="text-xl font-semibold text-gray-700">Download</p>
                                        {/* <p className="text-sm text-gray-500">Description for downloading files</p> */}
                                    </div>
                                </div>
                            </div>

                            <label
                                htmlFor="file-upload"
                                className={`w-full min-w-[16rem] justify-start bg-white border border-dashed border-lg border-neutral-300 shadow-sm overflow-hidden mx-4 my-4 md:my-4 cursor-pointer hover:bg-neutral-100 ${dragging ? 'border-blue-500' : ''}`}
                                onDragOver={handleDragOver}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input id="file-upload" type="file" className="hidden" onChange={handleUpload} />
                                <div className="p-1 flex flex-col items-center">
                                    <div className="flex items-center justify-center mb-4">
                                        <RiUploadCloud2Fill fontSize={60} className="text-yellow-400" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl font-semibold text-gray-700">Upload File</p>
                                        <p className="text-sm text-gray-500">Click or drag a file here to upload</p>
                                    </div>
                                </div>
                            </label>

                        </div>
                    </div>

                </div>

                <div className="bg-white shadow-lg py-3 px-3">
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
                            placeholder="Search templates..."
                            value={templateSearchTerm}
                            onChange={handleTemplateSearchChange}
                            className="w-full px-10 py-1 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:border-c-teal"
                        />
                    </div>
                    <div className="overflow-x-auto max-h-60">
                        <table className="w-full">
                            <thead className="sticky top-0 bg-white border">
                                <tr className="bg-c-light-grayish text-white">
                                    <th className="px-6 py-3 text-left font-semibold">Building Name</th>
                                    <th className="px-6 py-3 text-left font-semibold">Postal Code</th>
                                    <th className="px-6 py-3 text-left font-semibold">Building Owner</th>
                                    <th className="px-6 py-3 text-left font-semibold">Land Area Remark</th>
                                    <th className="px-6 py-3 text-left font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTemplates.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                        <td className="border px-6 py-3">{item.buildingName}</td>
                                        <td className="border px-6 py-3">{item.postalCode}</td>
                                        <td className="border px-6 py-3">{item.buildingOwner}</td>
                                        <td className="border px-6 py-3">{item.landAreaRemark}</td>
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
                            onClick={() => handleSubmit('/data-entry-portal/mass-upload/building/building-submit/error')}
                            className="w-32 mx-2 py-2 mt-3 bg-neutral-200 text-c-dark-grayish hover:text-white hover:bg-c-teal focus:outline-none shadow-md"
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}