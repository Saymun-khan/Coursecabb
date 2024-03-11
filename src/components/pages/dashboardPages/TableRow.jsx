import React from 'react'

const TableRow = ({examNumber,examDetails,examTopic,AchievedNumber,PercentNumber,ExamNumber}) => {
  return (
    <tr className='border-t border-gray-200'>
    <td>
        <div className='p-2'>{examNumber}</div>
    </td>
    <td>
        <div className='flex'>
            <div className='w-48 h-10 overflow-y-hidden overflow-x-scroll flex-wrap'>
                {examDetails}
            </div>
        </div>
    </td>
    <td>
        <div className='text-sm flex flex-x-col space-y-1 max-w-lg'>
        {examTopic}
        </div>
    </td>
    <td>
        <div className='flex flex-col items-stretch space-y-1'>
            <div className='flex
            items-center justify-between'>
                <strong>{PercentNumber}%</strong>
                <small className='text-muted'>{AchievedNumber}/{ExamNumber}</small>
            </div>
        </div>
    </td>
    <td className='text-sm text-gray-900'>26 JUL 2022</td>
</tr>
  )
}

export default TableRow