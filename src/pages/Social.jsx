"use client"
import React, { useState } from 'react'
import ProfileSection from '../components/ProfileSection'
import ConnectionCard from '../components/Cards/ConnectionCard'

const Page = () => {

    const tabStates = {
        first: 1,
        second: 2
    }

    const [activeTab, setActivTab] = useState(tabStates.first)

  return (
    <>
    <div className='w-full flex justify-center gap-8 relative pt-4 px-[5%]'>
        <div className='w-[30rem] bg-blue-50 p-4 h-[35rem] sticky top-20 flex flex-col border rounded-lg'>
            <div role="tablist" className="tabs tabs-boxed flex gap-2 overflow-x-auto mb-4">
                <a onClick={() => setActivTab(tabStates.first)} role="tab" className={`tab ${activeTab === tabStates.first ? 'bg-blue-600 text-white': 'bg-white text-black'}`}>Recommendations</a>
                <a onClick={() => setActivTab(tabStates.second)} role="tab" className={`tab ${activeTab === tabStates.second ? 'bg-blue-600 text-white' : 'bg-white text-black' }`}>connections</a>
            </div>
            <div className='flex-1 overflow-auto'>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
            </div>
        </div>
        <ProfileSection/>
    </div>
    </>
  )
}

export default Page