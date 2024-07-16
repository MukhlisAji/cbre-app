import React from 'react';

export default function Account() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="text-xl font-semibold mb-4">Accounts</div>
      <div className="mb-2 text-gray-600">Recently Viewed</div>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-4 p-2"></th>
            <th className="p-2 text-left">Account Name</th>
            <th className="p-2 text-left">Account Status With Site</th>
            <th className="p-2 text-left">Local Account Name</th>
            <th className="p-2 text-left"># of Active Opportunities</th>
            <th className="p-2 text-left">SPOC</th>
            <th className="p-2 text-left">Billing City</th>
            <th className="p-2 text-left">Billing State/Province</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Testbrc', status: '60 Paya Lebar Road, Singapore, Singapore', local: '', opportunities: '', spoc: '', city: 'Singapore', state: '' },
            { name: 'test.louyun', status: 'Unknown, Jb, Singapore', local: '', opportunities: '', spoc: '', city: 'jb', state: '' },
            { name: 'cbretest', status: 'South Woodlands Drive, Singapore, Singapore', local: 'cbretest', opportunities: '', spoc: '', city: 'Singapore', state: '' },
            { name: 'AEW - Global (RA)', status: '...', local: '', opportunities: '0', spoc: '✓', city: 'Singapore', state: '' },
            { name: 'OneApp1 Cbre Account', status: '60 Paya Lebar Road, Singapore, Singapore', local: '', opportunities: '3', spoc: '', city: 'Singapore', state: '' },
            { name: 'Test123', status: ', Singapore', local: '', opportunities: '', spoc: '', city: 'Singapore', state: '' },
            { name: 'test', status: 'Unknown, Singapore', local: '', opportunities: '1', spoc: '', city: 'Singapore', state: '' },
          ].map((account, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 text-center"><input type="checkbox" /></td>
              <td className="p-2">{account.name}</td>
              <td className="p-2">{account.status}</td>
              <td className="p-2">{account.local}</td>
              <td className="p-2">{account.opportunities}</td>
              <td className="p-2">{account.spoc}</td>
              <td className="p-2">{account.city}</td>
              <td className="p-2">{account.state}</td>
              <td className="p-2 text-center">
                <button className="p-1 bg-gray-200 rounded hover:bg-gray-300">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
