import { useState } from 'react';

// Sample data for random approvals
const randomApprovals = [
  { name: 'Aarav Patel', email: 'aarav.patel@email.com', document: 'Income Certificate' },
  { name: 'Riya Sharma', email: 'riya.sharma@email.com', document: 'Caste Certificate' },
  { name: 'Vihaan Singh', email: 'vihaan.singh@email.com', document: 'Marksheet' },
  { name: 'Sneha Gupta', email: 'sneha.gupta@email.com', document: 'Domicile Certificate' },
  { name: 'Priya Kumar', email: 'priya.kumar@email.com', document: 'Bank Statement' },
];

function ApprovalsPage() {
  const [approvals, setApprovals] = useState(randomApprovals);

  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold mb-4'>Approval Entries</h2>
      <div className='space-y-4'>
        {approvals.map((approval, index) => (
          <div className='flex items-center justify-between p-4 bg-gray-800 rounded-md' key={index}>
            <div className='flex items-center'>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none text-white'>{approval.name}</p>
                <p className='text-sm text-gray-400'>{approval.email}</p>
              </div>
            </div>
            <div className='text-white'>{approval.document}</div>
            <div className='ml-4'>
              <label className='text-white'>
                <input type='checkbox' name='accepted' className='mr-2' /> Accepted
              </label>
            </div>
            <div className='ml-4'>
              <label className='text-white'>
                <input type='checkbox' name='declined' className='mr-2' /> Declined
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApprovalsPage;
