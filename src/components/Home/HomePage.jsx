"use client"

import { useEffect } from "react";
import { useState } from "react"
import { useCallback } from "react";
import DateRange from './DateRange';
import ClassesCount from './ClassesCount';
import AttendencePrint from './AttendencePrint';
import BunkCount from './BunkCount';
import CurrentAttendence from "./CurrentAttendence"
import DateArray from './DateArray';
import HolidaysArray from './HolidaysArray';

function HomePage({ currentUser }) {

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const formatDate = useCallback((date = new Date()) => {
    const currentHour = date.getHours();
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);

    if (currentHour >= 17) {
      return [
        tomorrow.getFullYear(),
        padTo2Digits(tomorrow.getMonth() + 1),
        padTo2Digits(tomorrow.getDate()),
      ].join('-');
    }

    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }, []);

  const [currentAttendence, setCurrentAttendence] = useState({ attended: null, total: null });
  const [classesData, setClassesData] = useState(currentUser.classesData || { Mon: 6, Tue: 6, Wed: 5, Thu: 5, Fri: 5, Sat: 5, Sun: 0 });
  const [dateRange, setDateRange] = useState({ startDate: formatDate(), endDate: null });
  const [dateArray, setDateArray] = useState([]);
  const [holidayArray, setHolidayArray] = useState([]);
  const [requiredAttendence, setRequiredAttendence] = useState(75);
  const [result, setResult] = useState(0);
  const [attendCount, setAttendCount] = useState({});

  const [MaxAttendenceCanSecure, setMaxAttendenceCanSecure] = useState();

  useEffect(() => {
    setMaxAttendenceCanSecure((currentAttendence.attended + attendCount.totalWillAttendedClasses) * 100 / (currentAttendence.total + attendCount.totalClassesTillEndDate));
  }, [currentAttendence, attendCount])

  useEffect(() => {
    const generateDateArray = () => {
      const start = new Date(dateRange.startDate);
      const end = new Date(dateRange.endDate);
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const tempResultArray = [];

      let currentDate = new Date(start);

      while (currentDate <= end) {
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const classesCount = classesData[dayOfWeek];

        tempResultArray.push({
          Date: [
            currentDate.getDate(),
            currentDate.getMonth() + 1,
            currentDate.getFullYear(),
            dayOfWeek,
          ],
          ClassesCount: classesCount,
          AttendCount: classesCount
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      setDateArray(tempResultArray);
    };
    generateDateArray();
  }, [dateRange, classesData]);

  useEffect(() => {
    // set public holidays ClassesCount to 0
    const tempResultArray = [...dateArray];
    holidayArray.forEach((item) => {
      const index = tempResultArray.findIndex((date) => date.Date[0] == item.Date[0] && date.Date[1] == item.Date[1] && date.Date[2] == item.Date[2]);
      if (index != -1) {
        tempResultArray[index].ClassesCount = 0;
        tempResultArray[index].AttendCount = 0;
      }
    }
    );
    setDateArray(tempResultArray);
  }, [holidayArray])

  const handleChangeClassCount = (index) => {
    const tempDateArray = [...dateArray];
    const res = parseInt(window.prompt("Enter new class count", tempDateArray[index].ClassesCount));
    if (!res) return;
    tempDateArray[index].ClassesCount = res;
    tempDateArray[index].AttendCount = tempDateArray[index].ClassesCount;
    setDateArray(tempDateArray);
  }

  useEffect(() => {
    handleCalculate();
  }, [dateArray, requiredAttendence, classesData, currentAttendence, MaxAttendenceCanSecure])


  const handleCalculate = useCallback(() => {
    let totalClassesTillEndDate = 0; //a 
    let totalWillAttendedClasses = 0;
    dateArray.forEach((item) => {
      totalClassesTillEndDate += parseInt(item.ClassesCount);
      totalWillAttendedClasses += parseInt(item.AttendCount);
    });

    const newAttendCount = {
      totalWillAttendedClasses: parseInt(totalWillAttendedClasses),
      totalClassesTillEndDate: parseInt(totalClassesTillEndDate)
    }; newAttendCount

    setAttendCount(newAttendCount);

    const ClassesCanSkip = parseInt(attendCount.totalWillAttendedClasses - (((currentAttendence.total + attendCount.totalClassesTillEndDate) * (requiredAttendence / 100)) - (currentAttendence.attended)));

    setResult(ClassesCanSkip);
  }, [dateArray, requiredAttendence, classesData, requiredAttendence, attendCount]);

  return (
    <div className="flex flex-col md:grid grid-cols-12 h-full mt-4 p-5">
      {/* small devices */}
      <div className=" md:hidden flex pb-5 gap-5 items-center flex-wrap justify-center ">
        <ClassesCount classesData={classesData} setClassesData={setClassesData} />
        {/* <HolidaysArray holidayArray={holidayArray} setHolidayArray={setHolidayArray} /> */}
      </div>
      {/* large Devices */}
      <div className="col-span-12  md:col-span-9 md:pr-4">
        <div className=" flex flex-wrap justify-center md:justify-around items-center  border shadow-lg border-black p-3 rounded-xl">
          <DateRange dateRange={dateRange} setDateRange={setDateRange} />
          <div className="w-full border-b border-zinc-700 my-3 md:hidden" />
          <CurrentAttendence currentAttendence={currentAttendence} setCurrentAttendence={setCurrentAttendence} MaxAttendenceCanSecure={MaxAttendenceCanSecure} setRequiredAttendence={setRequiredAttendence} requiredAttendence={requiredAttendence} />
        </div>
        <div className="mt-7">
          <AttendencePrint requiredAttendence={requiredAttendence} currentAttendence={currentAttendence} setCurrentAttendence={setCurrentAttendence} />
          <DateArray dateArray={dateArray} setDateArray={setDateArray} handleChangeClassCount={handleChangeClassCount} attendCount={attendCount} />
          <div className=" md:hidden flex pb-5 mt-4 gap-5 items-center flex-wrap justify-center ">
            {/* <ClassesCount classesData={classesData} setClassesData={setClassesData} /> */}
            <HolidaysArray holidayArray={holidayArray} setHolidayArray={setHolidayArray} />
          </div>
          <BunkCount result={result} currentAttendence={currentAttendence} attendCount={attendCount} dateRange={dateRange} />
        </div>
      </div>
      <div className="hidden md:block col-span-3">
        <ClassesCount classesData={classesData} setClassesData={setClassesData} />
        <HolidaysArray holidayArray={holidayArray} setHolidayArray={setHolidayArray} />
      </div>
    </div>
  )
}

export default HomePage
