import React from 'react'

const ClassesCount = (
  { classesData, setClassesData }
) => {
  return (



    <div className="flex ">
      <div>
        <label>Mon</label>
        <input type="number" value={classesData.Mon} onChange={(e) => setClassesData({ ...classesData, Mon: parseInt(e.target.value) })} />
      </div>
      <div>
        <label>Tue</label>
        <input type="number" value={classesData.Tue} onChange={(e) => setClassesData({ ...classesData, Tue: parseInt(e.target.value) })} />
      </div>
      <div>
        <label>Wed</label>
        <input type="number" value={classesData.Wed} onChange={(e) => setClassesData({ ...classesData, Wed: parseInt(e.target.value) })} />
      </div>
      <div>
        <label>Thu</label>
        <input type="number" value={classesData.Thu} onChange={(e) => setClassesData({ ...classesData, Thu: parseInt(e.target.value) })} />
      </div>
      <div>
        <label>Fri</label>
        <input type="number" value={classesData.Fri} onChange={(e) => setClassesData({ ...classesData, Fri: parseInt(e.target.value) })} />
      </div>
      <div>
        <label>Sat</label>
        <input type="number" value={classesData.Sat} onChange={(e) => setClassesData({ ...classesData, Sat: parseInt(e.target.value) })} />
      </div>
      <div>
        <label>Sun</label>
        <input type="number" value={classesData.Sun} onChange={(e) => setClassesData({ ...classesData, Sun: parseInt(e.target.value) })} />
      </div>
    </div>
  )
}

export default ClassesCount