"use client"

import React from 'react'
import useFeaturesModel from '@/hooks/useFeaturesModel'
import { useCallback } from 'react';
import { IoMdClose } from "react-icons/io";

const FeaturesModel = () => {
  const featuresModel = useFeaturesModel();
  const onToggle = useCallback(() => {
    featuresModel.onClose();
  }, [featuresModel])
  return (
    featuresModel.isOpen &&
    <div
      className="flex justify-center items-center p-2 w-full h-full bg-black bg-opacity-50 z-50"
    >
      {/* add fixed */}
      <div
        className="bg-slate-100 rounded-xl w-full h-full overflow-hidden border-2 border-slate-800 shadow-lg max-w-xl "
      >
        <div className="flex justify-between items-center px-4 py-2 bg-slate-200">
          <div className="text-lg font-semibold">Features</div>
          <div
            onClick={onToggle}
            className="text-lg font-semibold cursor-pointer"
          >
            <IoMdClose />
          </div>
        </div>
        <div className="p-2 bg-red-500 text-white text-center">
          <p>Warning: You are responsible for any misuse of this app. I am not.</p>
        </div>
        <div className="p-4">
          <div className="text-lg font-semibold p-5">
            <ul>
              <li>You can install this as an app for offline access
                <ul>
                  <li> -- On desktop, click the install button in the address bar</li>
                  <li> -- On mobile, click the install button in the browser menu</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="border-t-2 border-slate-800"></div>
          <div className="text-lg font-semibold p-5">
            <ul>
              <li> You can set a password for your account in the profile page for login without google</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesModel