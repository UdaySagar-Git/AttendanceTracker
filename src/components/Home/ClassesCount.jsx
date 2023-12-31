"use client"

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ClassesCount = (
  { classesData, setClassesData,currentUser }
) => {
  const router = useRouter()
  const [toggle, setToggle] = useState(false)
  // const [isopen , setIsopen] = useState(true)
  const handleSave = async () => {
    setToggle(!toggle)
    await axios.post('/api/update-data', { classesData });
    router.refresh()
  }
  return (
    <div className="flex flex-col w-full ">
      <div className='flex flex-wrap justify-center xl:justify-start  '>
        <h1 className="text-2xl font-semibold ml-6">Classes Count</h1>
        {!toggle ?
          <button onClick={() => setToggle(!toggle)} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-1 px-3 mx-4 rounded-lg' >Edit</button>
          : <button onClick={handleSave} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-1 px-3 mx-4 rounded-lg'>Save</button>
        }
      </div>
      {
        !toggle ?
          <div className="flex mt-4 border shadow-lg border-black p-1 rounded-xl  justify-center flex-wrap flex-grow ">
            <div className="my-2 flex-1 text-center">
              <label>Mon</label>
              <p>{classesData.Mon}</p>
            </div>
            <div className="my-2 flex-1 text-center">
              <label>Tue</label>
              <p>{classesData.Tue}</p>
            </div>
            <div className="my-2 flex-1 text-center">
              <label>Wed</label>
              <p>{classesData.Wed}</p>
            </div>
            <div className="my-2 flex-1 text-center">
              <label>Thu</label>
              <p>{classesData.Thu}</p>
            </div>
            <div className="my-2 flex-1 text-center">
              <label>Fri</label>
              <p>{classesData.Fri}</p>
            </div>
            <div className="my-2 flex-1 text-center">
              <label>Sat</label>
              <p>{classesData.Sat}</p>
            </div>
            <div className="my-2 flex-1 text-center">
              <label>Sun</label>
              <p>{classesData.Sun}</p>
            </div>
          </div>
          :
          <div className="flex mt-4  border shadow-lg border-rose-600 p-1 rounded-xl bg-slate-100 justify-center flex-wrap flex-grow ">
            <div className="my-2 flex-1  text-center max-w-max">
              <label>Mon</label>
              <input type="number" className='w-[80%] text-center '  value={classesData.Mon} onChange={(e) => setClassesData({ ...classesData, Mon: (e.target.value) })} />
            </div>
            <div className="my-2 flex-1  text-center max-w-max">
              <label>Tue</label>
              <input type="number" className='w-[80%] text-center '  value={classesData.Tue} onChange={(e) => setClassesData({ ...classesData, Tue: (e.target.value) })} />
            </div>
            <div className="my-2 flex-1 text-center max-w-max">
              <label>Wed</label>
              <input type="number" className='w-[80%] text-center ' value={classesData.Wed} onChange={(e) => setClassesData({ ...classesData, Wed: (e.target.value) })} />
            </div>
            <div className="my-2 flex-1 text-center max-w-max">
              <label>Thu</label>
              <input type="number" className='w-[80%] text-center ' value={classesData.Thu} onChange={(e) => setClassesData({ ...classesData, Thu: (e.target.value) })} />
            </div>
            <div className="my-2 flex-1 text-center max-w-max">
              <label>Fri</label>
              <input type="number" className='w-[80%] text-center ' value={classesData.Fri} onChange={(e) => setClassesData({ ...classesData, Fri: (e.target.value) })} />
            </div>
            <div className="my-2 flex-1 text-center max-w-max">
              <label>Sat</label>
              <input type="number" className='w-[80%] text-center ' value={classesData.Sat} onChange={(e) => setClassesData({ ...classesData, Sat: (e.target.value) })} />
            </div>
            <div className="my-2 flex-1 text-center max-w-max">
              <label>Sun</label>
              <input type="number" className='w-[80%] text-center ' value={classesData.Sun} onChange={(e) => setClassesData({ ...classesData, Sun: (e.target.value) })} />
            </div>
          </div>
      }
    </div >
  )
}

export default ClassesCount