import React, { useEffect, useState } from 'react';

export default function AccAndConSearch() {
  const [accountName, setAccountName] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [parentAccount, setParentAccount] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('contacts');
  const [formData, setFormData] = useState({
    contactName: '',
    propertyName: '',
    account: '',
    parentAccount: '',
    showAllCountriesAccounts: false,
    clientType: 'all',
    country: 'China',
    stateProvince: '',
    city: '',
    street: '',
    phone: '',
    industryType: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const renderFields = () => {
    switch (type) {
      case 'contacts':
        return (
          <>
            <div className="bg-white p-2">
              {/* Content of Property Search Result Section */}
              <div className="ml-3 mb-6">
                {/* <h3 className="text-xl font-semibold mb-4">Account Information</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div >
                    <label className="block text-sm font-medium text-gray-700">Top Parent Account</label>
                    <input type="text" className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm" readOnly disabled />
                  </div>
                  <div>

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account Name</label>
                    <input type="text"
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Parent Account</label>
                    <input value={parentAccount}
                      onChange={(e) => setParentAccount(e.target.value)}
                      className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company Type</label>
                    <select className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal">
                      <option value="">--None--</option>
                      <option>Select 2</option>
                      <option>Select 3</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <input type="checkbox" className="mr-2" />
                    <label className="block text-md font-medium text-gray-700">Headquarters</label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text" value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fax</label>
                    <input type="text" className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Client Type</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    >
                      <option value="">--None--</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Industry Type Tier 1</label>
                    <select className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    >
                      <option value="">--None--</option>
                      <option>Select 2</option>
                      <option>Select 3</option>                                </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Industry Type Tier 2</label>
                    <select className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    >
                      <option value="">--None--</option>
                      <option>Select 2</option>
                      <option>Select 3</option>                                </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-1 block w-full p-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-c-teal hover:ring-1 hover:ring-c-teal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'accounts':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Account</label>
              <input
                type="text"
                name="account"
                value={formData.account}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Parent Account</label>
              <input
                type="text"
                name="parentAccount"
                value={formData.parentAccount}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="China">China</option>
                {/* Add other country options as needed */}
              </select>
            </div>
          </>
        );
      case 'activity':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Account</label>
              <input
                type="text"
                name="account"
                value={formData.account}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Parent Account</label>
              <input
                type="text"
                name="parentAccount"
                value={formData.parentAccount}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="China">China</option>
                {/* Add other country options as needed */}
              </select>
            </div>
          </>
        );
      case 'event':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Account</label>
              <input
                type="text"
                name="account"
                value={formData.account}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Parent Account</label>
              <input
                type="text"
                name="parentAccount"
                value={formData.parentAccount}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="China">China</option>
                {/* Add other country options as needed */}
              </select>
            </div>
          </>
        );
      default:
        return null;
    }
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: `${sectionHeight}px` }} className="flex-1 overflow-y-auto flex flex-col px-5 py-5 h-screen p-4 bg-white border-t border-neutral-200 border-sm">
      <div className="bg-white shadow-md p-6 px-8 py-5 mb-5">

        <div className="mb-4">
          <div className="flex space-x-4">
            <div>
              <input
                type="radio"
                id="contacts"
                name="type"
                value="contacts"
                checked={type === 'contacts'}
                onChange={(e) => setType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="contacts" className="text-sm font-medium text-gray-700">Contacts</label>
            </div>
            <div>
              <input
                type="radio"
                id="accounts"
                name="type"
                value="accounts"
                checked={type === 'accounts'}
                onChange={(e) => setType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="accounts" className="text-sm font-medium text-gray-700">Accounts</label>
            </div>
            <div>
              <input
                type="radio"
                id="activity"
                name="type"
                value="activity"
                checked={type === 'activity'}
                onChange={(e) => setType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="activity" className="text-sm font-medium text-gray-700">activity</label>
            </div>
            <div>
              <input
                type="radio"
                id="event"
                name="type"
                value="event"
                checked={type === 'event'}
                onChange={(e) => setType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="event" className="text-sm font-medium text-gray-700">event</label>
            </div>
          </div>
        </div>
        {renderFields()}
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Export To Excel</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">New Account</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">New Contact</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Save Search</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Search</button>
      </div>
    </div>
  );
}
