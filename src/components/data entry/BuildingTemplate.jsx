import React, { useState } from 'react';
import { RiDownloadCloud2Fill, RiUploadCloud2Fill } from 'react-icons/ri';
import BUILDINGDATADUMMY from '../../lib/const/DataEntryDummy'

export default function BuildingTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState('mandatory'); // State to manage selected template
  const [selectedBuildings, setSelectedBuildings] = useState([]); // State to manage selected buildings
  const data = [
    { id: 1, name: 'JTC Space @ Buroh55 Ayer Rajah Crescent' },
    { id: 2, name: '62 Loyang Way' },
    { id: 3, name: 'Bugis Village - 64 Queen Street' },
    { id: 4, name: 'JTC Aerospace @ Seletar Aerospace Park' }
  ];

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const handleBuildingSelect = (buildingId) => {
    if (selectedBuildings.includes(buildingId)) {
      setSelectedBuildings(selectedBuildings.filter(id => id !== buildingId)); // Deselect building if already selected
    } else {
      setSelectedBuildings([...selectedBuildings, buildingId]); // Select building if not selected
    }
  };

  const handleDownload = () => {
    // Implement download functionality based on selected template or selected buildings
    // For simplicity, let's just log the selected template/buildings for now
    console.log('Selected Template:', selectedTemplate);
    console.log('Selected Buildings:', selectedBuildings);
  };

  const [dragging, setDragging] = useState(false);

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

  const screenHeight = window.innerHeight;
  // console.log('Screen height:', screenHeight);
  const newHigh = screenHeight - 200;
  return (


    <div style={{ height: `${newHigh}px` }} className='flex-1 overflow-y-auto flex flex-col px-3 py-3 h-screen p-4 bg-white'>
      <div className="mb-4">
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
        <div className="mt-2 text-neutral-500 text-sm">
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


      <div className="mb-4">
        <h2 className="text-md text-c-dark-grayish font-semibold">Select Building</h2>
        <table className="mt-2 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Building Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedBuildings.length === 0} // Check all if no building selected
                  onChange={() => setSelectedBuildings([])} // Deselect all buildings
                  className="form-checkbox h-4 w-4 text-c-teal checked:bg-c-teal"
                />
              </td>
              <td className="px-4 py-2">All Buildings</td>
            </tr>
            {/* Render building rows from data */}
            {data.map((building) => (
              <tr key={building.id}>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedBuildings.includes(building.id)}
                    onChange={() => handleBuildingSelect(building.id)}
                    className="form-checkbox h-4 w-4 text-c-teal checked:bg-c-teal"
                  />
                </td>
                <td className="px-4 py-2">{building.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="flex items-center justify-center text-center">
        {/* Download */}
        <div className="max-w-md min-w-72 bg-neutral-100 border border-sm shadow-lg rounded-lg overflow-hidden mx-4 my-8 cursor-pointer hover:bg-white">
          <div className="p-6" onClick={handleDownload}>
            <div className="flex items-center justify-center">
              {/* Download Icon */}
              <RiDownloadCloud2Fill fontSize={60} className='text-yellow-400' />
            </div>
            <div className="text-center mt-4">
              <p className="text-xl font-semibold text-gray-800">Download</p>
              <p className="text-sm text-gray-500">Description for downloading files</p>
            </div>
          </div>
        </div>

        {/* Upload */}
        <label
          htmlFor="file-upload"
          className={`max-w-md min-w-72 bg-neutral-100 border border-sm shadow-lg rounded-lg overflow-hidden mx-4 my-8 cursor-pointer hover:bg-white ${dragging ? 'border-blue-500' : ''}`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input id="file-upload" type="file" className="hidden" onChange={handleUpload} />
          <div className="p-6 flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              {/* Upload Icon */}
              <RiUploadCloud2Fill fontSize={60} className='text-yellow-400' />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">Upload</p>
              <p className="text-sm text-gray-500">Select or drag file here</p>
            </div>
          </div>
        </label>
      </div>
      {/*       
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>  */}

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Building Name</th>
              <th className="px-4 py-2">Postal Code</th>
              <th className="px-4 py-2">Building Owner</th>
              <th className="px-4 py-2">Land Area Remark</th>
            </tr>
          </thead>
          <tbody>
            {BUILDINGDATADUMMY.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border px-4 py-2">{item.buildingName}</td>
                <td className="border px-4 py-2">{item.postalCode}</td>
                <td className="border px-4 py-2">{item.buildingOwner}</td>
                <td className="border px-4 py-2">{item.landAreaRemark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
