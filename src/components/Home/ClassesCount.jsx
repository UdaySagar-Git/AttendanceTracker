"use client"

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ClassesCount = (
  { classesData, setClassesData }
) => {
  const router = useRouter()
  const [toggle, setToggle] = useState(false)
  const handleSave = async () => {
    setToggle(!toggle)
    await axios.post('/api/update-data', { classesData });
    router.refresh()
  }
  return (
    <div className="flex flex-col">
      <div className='flex  '>
        <h1 className="text-2xl font-bold">Classes Count</h1>
        {!toggle ?
          <button onClick={() => setToggle(!toggle)}>Edit</button>
          : <button onClick={handleSave}>Save</button>
        }
      </div>
      {
        !toggle ?
          <div className="flex mt-4">
            <div className="m-2">
              <label>Mon</label>
              <p>{classesData.Mon}</p>
            </div>
            <div className="m-2">
              <label>Tue</label>
              <p>{classesData.Tue}</p>
            </div>
            <div className="m-2">
              <label>Wed</label>
              <p>{classesData.Wed}</p>
            </div>
            <div className="m-2">
              <label>Thu</label>
              <p>{classesData.Thu}</p>
            </div>
            <div className="m-2">
              <label>Fri</label>
              <p>{classesData.Fri}</p>
            </div>
            <div className="m-2">
              <label>Sat</label>
              <p>{classesData.Sat}</p>
            </div>
            <div className="m-2">
              <label>Sun</label>
              <p>{classesData.Sun}</p>
            </div>
          </div>
          :
          <div className="flex mt-4">
            <div className="m-2">
              <label>Mon</label>
              <input type="number" value={classesData.Mon} onChange={(e) => setClassesData({ ...classesData, Mon: parseInt(e.target.value) })} />
            </div>
            <div className="m-2">
              <label>Tue</label>
              <input type="number" value={classesData.Tue} onChange={(e) => setClassesData({ ...classesData, Tue: parseInt(e.target.value) })} />
            </div>
            <div className="m-2">
              <label>Wed</label>
              <input type="number" value={classesData.Wed} onChange={(e) => setClassesData({ ...classesData, Wed: parseInt(e.target.value) })} />
            </div>
            <div className="m-2">
              <label>Thu</label>
              <input type="number" value={classesData.Thu} onChange={(e) => setClassesData({ ...classesData, Thu: parseInt(e.target.value) })} />
            </div>
            <div className="m-2">
              <label>Fri</label>
              <input type="number" value={classesData.Fri} onChange={(e) => setClassesData({ ...classesData, Fri: parseInt(e.target.value) })} />
            </div>
            <div className="m-2">
              <label>Sat</label>
              <input type="number" value={classesData.Sat} onChange={(e) => setClassesData({ ...classesData, Sat: parseInt(e.target.value) })} />
            </div>
            <div className="m-2">
              <label>Sun</label>
              <input type="number" value={classesData.Sun} onChange={(e) => setClassesData({ ...classesData, Sun: parseInt(e.target.value) })} />
            </div>
          </div>
      }
    </div >
  )
}

export default ClassesCount