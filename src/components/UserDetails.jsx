"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/userDetails')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


  return (
    <div>
      <h1>User Details</h1>
      <table className='border-collapse w-full'>
        <thead>
          <tr>
            <th className='text-start'>Email</th>
            <th className='text-start'>Name</th>
            <th className='text-start'>Role</th>
            <th className='text-start'>Organisation</th>
            <th className='text-start'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.filter((user) => user.role !== "disabled" ).map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.organisation}</td>
              <td>
                <Link href={`admin/editUser/${user.id}`}>
                  <button className='bg-rose-500 hover:bg-rose-700 text-white font-bold py-[5px] px-4 rounded' >
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className='mt-9'>Disabled Users</h1>
      <table className='border-collapse w-full'>
        <thead>
          <tr>
            <th className='text-start'>Email</th>
            <th className='text-start'>Name</th>
            <th className='text-start'>Role</th>
            <th className='text-start'>Organisation</th>
            <th className='text-start'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.filter((user) => user.role === "disabled" ).map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.organisation}</td>
              <td>
                <Link href={`admin/editUser/${user.id}`}>
                  <button className='bg-rose-500 hover:bg-rose-700 text-white font-bold py-[5px] px-4 rounded' >
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div >
  );
};

export default UserDetails;
