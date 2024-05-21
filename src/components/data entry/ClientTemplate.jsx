import React, { useEffect, useState } from 'react';
import { RiDownloadCloud2Fill, RiUploadCloud2Fill } from 'react-icons/ri';
import { SPACEDATADUMMY } from '../../lib/const/DataEntryDummy';
import { useNavigate } from 'react-router-dom';

export default function ClientTemplate() {
    const [selectedTemplate, setSelectedTemplate] = useState('mandatory');
    const [selectedBuildings, setSelectedBuildings] = useState([]);
    const [buildingSearchTerm, setBuildingSearchTerm] = useState('');
    const [templateSearchTerm, setTemplateSearchTerm] = useState('');
    const [dragging, setDragging] = useState(false);

    const navigate = useNavigate();
    // const location = useLocation();

    const buildingData = [
        { id: 1, name: 'JTC Space @ Buroh55 Ayer Rajah Crescent' },
        { id: 2, name: '62 Loyang Way' },
        { id: 3, name: 'Bugis Village - 64 Queen Street' },
        { id: 4, name: 'JTC Aerospace @ Seletar Aerospace Park' },
        { id: 5, name: '62 Loyang Way' },
        { id: 6, name: 'JTC Aerospace @ Seletar Aerospace Park' },
        { id: 7, name: '62 Loyang Way' },
        { id: 8, name: 'Bugis Village - 64 Queen Street' },
        { id: 9, name: 'JTC Aerospace @ Seletar Aerospace Park' },
        { id: 10, name: '62 Loyang Way' },
        { id: 11, name: 'JTC Aerospace @ Seletar Aerospace Park' }
    ];

    const handleTemplateChange = (e) => setSelectedTemplate(e.target.value);

    const handleBuildingSearchChange = (event) => setBuildingSearchTerm(event.target.value);
    const handleTemplateSearchChange = (event) => setTemplateSearchTerm(event.target.value);

    const filteredBuildings = buildingData.filter((building) =>
        building.name.toLowerCase().includes(buildingSearchTerm.toLowerCase())
    );

    const filteredTemplates = SPACEDATADUMMY.filter((item) =>
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
        // const file = e.target.files[0];
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
        // const file = e.dataTransfer.files[0];
        // Logic for uploading file
    };

    const handleSubmit = (path) => {
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

                    <div className="mt-2 text-c-dark-grayish text-md">

                        <div className='items-centered flex flex-row gap-4 border-b border-md'>

                            <div className='flex flex-col w-2/4'>
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
                                <div className="mt-2 pb-3 text-neutral-500 text-sm">
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
                            </div>
                            <div className="flex flex-row items-start mb-4 w-2/4 px-2">
                                <label className="text-md whitespace-nowrap font-semibold pr-3 items-start">Select Building :</label>
                                <div className="relative border-b border-gray-400 w-full items-start">
                                    <select className="px-1.5 text-sm border-none w-full bg-white">
                                        <option className='text-sm'>Building A</option>
                                        <option className='text-sm'>Building B</option>
                                        <option className='text-sm'>Building C</option>
                                        <option className='text-sm'>Building D</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='py-3 flex flex-row gap-4'>
                        <div className="min-w-[16rem] mb-4 bg-white w-full md:w-1/2">
                            <h2 className="text-md text-c-dark-grayish font-semibold mb-4">List of existing spaces (tier 1) for the selected building:</h2>
                            <div className="relative overflow-hidden border border-gray-300 shadow-sm">
                                <div className="min-h-70 max-h-72"> {/* Add max-height to make it scrollable */}
                                    <table className="w-full">
                                        <thead className="text-white w-full">
                                            <tr className="flex w-full bg-c-light-grayish">
                                                <th className="mx-1.5 py-3 px-2.5 w-1/8"></th>
                                                <th className="w-7/8">Building Name</th>
                                            </tr>
                                            <tr className="flex w-full bg-white">
                                                <th className="mx-2 py-0 px-2.5 w-1/8 relative">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedBuildings.length === 0}
                                                        onChange={() => setSelectedBuildings([])}
                                                        className="form-checkbox h-3 w-3 text-c-teal checked:bg-c-teal border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                    />
                                                </th>
                                                <th className="w-full py-0 px-0">
                                                    <div className="relative h-full">
                                                        <label htmlFor="table-search" className="sr-only">Search building...</label>
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="table-search"
                                                            placeholder="Search..."
                                                            value={templateSearchTerm}
                                                            onChange={handleBuildingSearchChange}
                                                            className="w-full pl-10 py-2 h-full border border-white text-sm font-thin focus:outline-none focus:ring-c-teal focus:border-c-teal hover:border-blue-500"
                                                        />
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "200px" }}>
                                            {filteredBuildings.map((building, index) => (
                                                <tr key={building.id} className={`flex w-full hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                                    <td className="mx-2 w-1/8 relative">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedBuildings.includes(building.id)}
                                                            onChange={() => handleBuildingSelect(building.id)}
                                                            className="form-checkbox h-3 w-3 text-c-teal checked:bg-c-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                        />
                                                    </td>
                                                    <td className="w-7/8 text-c-dark-grayish">{building.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>



                                </div>
                            </div>

                        </div>





                        <div className=" flex flex-col pt-0 items-center justify-center text-center min-w-[16rem] w-full md:w-1/2">
                            <div className="w-full min-w-[16rem] justify-start bg-white border-2 border-sm border-neutral-300 shadow-sm  overflow-hidden mx-4 my-5 md:my-5 cursor-pointer hover:bg-neutral-100">
                                <div className="p-2" onClick={handleDownload}>
                                    <div className="flex items-center justify-center">
                                        <RiDownloadCloud2Fill fontSize={60} className="text-green-700" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p className="pointer-none text-gray-500 "><span class="text-sm">Downlod selected template</span></p>
                                        {/* <p className="text-sm text-gray-500">Description for downloading files</p> */}
                                    </div>
                                </div>
                            </div>

                            <label
                                htmlFor="file-upload"
                                className={`flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center ${dragging ? 'border-blue-500' : ''}`}
                                onDragOver={handleDragOver}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                    <div className="items-center flex items-center max-h-48 mx-auto -mt-10">
                                        <RiUploadCloud2Fill fontSize={60} className="text-yellow-400" />
                                    </div>
                                    <p className="pointer-none text-gray-500 "><span class="text-sm">Drag and drop files here <br /> or </span> <span class="text-blue-600 hover:underline cursor-pointer">select a file</span> <span className='font-sm'>from your computer</span></p>
                                </div>
                                <input id="file-upload" type="file" className="hidden" onChange={handleUpload} />
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
                            placeholder="Search..."
                            value={templateSearchTerm}
                            onChange={handleTemplateSearchChange}
                            className="w-full px-10 py-1 text-sm font-thin rounded-lg border border-neutral-200 focus:outline-none focus:border-c-teal hover:border-blue-500"
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
                            onClick={() => handleSubmit('/data-entry-portal/mass-upload/space/submit/error')}
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


