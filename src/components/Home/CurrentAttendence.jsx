import React from 'react'

const CurrentAttendence = (
  { currentAttendence, setCurrentAttendence, requiredAttendence, setRequiredAttendence, MaxAttendenceCanSecure }
) => {
  const Max = +(MaxAttendenceCanSecure)
  return (
    <div className=" flex flex-col max-w-full sm:w-auto ">
      <div className='' >
        <div className="mb-4 flex items-center justify-between">
          <label className="text-base font-semibold mr-2 ">Attended Classes</label>
          <input type="number" value={currentAttendence.attended} onChange={(e) => setCurrentAttendence({ ...currentAttendence, attended: parseInt(e.target.value) })} className="border border-gray-300 rounded-md px-2 w-[100px] text-center" />
        </div>
        {
          currentAttendence.attended === null && <p className="text-red-500 text-xs">* please enter attended classes</p>
        }
      </div>
      <div className='' >
        <div className="mb-4 flex items-center justify-between">
          <label className="text-base font-semibold mr-2 ">Total Classes</label>
          <input type="number" value={currentAttendence.total} onChange={(e) => setCurrentAttendence({ ...currentAttendence, total: parseInt(e.target.value) })} className="border border-gray-300 rounded-md px-2 w-[100px] text-center" />
        </div>
        {
          currentAttendence.total === null && <p className="text-red-500 text-xs">* please enter total classes</p>
        }
        {
          currentAttendence.total < currentAttendence.attended && currentAttendence.total != null && <p className="text-red-500 text-xs">*  Total classes should be greater than attended classes</p>
        }
      </div>
      <div className="w-full border-b border-zinc-700 my-3 md:hidden" />
      <div>
        <div className=' flex items-center justify-between' >
          <label className="text-base font-semibold mr-2 ">Required Attendance</label>
          <input type="number" value={requiredAttendence} max={Max.toFixed(0)} onChange={(e) => setRequiredAttendence(parseInt(e.target.value))} className="border border-gray-300 rounded-md px-2 w-[100px] text-center" />
        </div>
        {/* <span>%</span> */}

        {
          requiredAttendence > Max && <p className="text-red-500 text-xs">* please enter less than {Max.toFixed(0)}%</p>
        }
      </div>
    </div>
  )
}

export default CurrentAttendence