import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const EndSemDate = ({semEndDate,setSemEndDate}) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  const router = useRouter()
  if(semEndDate === undefined || semEndDate === null || semEndDate === '') {
    const date = new Date();
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    const endDate = [
      endOfYear.getFullYear(),
      padTo2Digits(endOfYear.getMonth() + 1),
      padTo2Digits(endOfYear.getDate()),
    ].join('-');
    setSemEndDate(endDate)
  }
  const [toggle, setToggle] = useState(false)
  const handleSave = async () => {
    setToggle(!toggle)
    await axios.post('/api/update-endsem',  {semEndDate} );
    router.refresh()
  }

  return (
    <div className="md:mt-4 w-full  gap-4">
      <div className='flex flex-wrap justify-center xl:justify-start'>
        <h1 className="text-2xl font-semibold ml-6">Sem End Date</h1>
        {!toggle ?
          <button onClick={() => setToggle(!toggle)} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-1 px-3 mx-4 rounded-lg' >Edit</button>
          : <button onClick={handleSave} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-1 px-3 mx-4 rounded-lg'>Save</button>
        }
      </div>
      <div className='border shadow-lg border-black p-3 mt-3 rounded-xl flex flex-col  justify-center items-center '>
        {toggle ?
            <input type="date" value={semEndDate} onChange={(e) => setSemEndDate(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md mr-2" />
          :
          <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-2xl font-semibold'>{semEndDate}</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default EndSemDate