import React from 'react'

function CodeSidebar() {
    return (
        <div className="h-screen overflow-hidden flex flex-col bg-white border-t border-r border-gray-200">
            <a href="#motion"><div className="box-border flex items-center justify-center flex-col h-20 w-20 active:bg-gray-300 focus:gray-300 hover:text-blue-600">
                <div className=" bg-blue-500 h-7 w-7 border-2 rounded-full border-blue-600">

                </div>
                <div className='text-sm'>Motion</div>
            </div></a>
            <a href="#looks"><div className="box-border flex items-center justify-center flex-col  h-20 w-20  hover:bg-gray-300 hover:text-blue-600">
                <div className="bg-purple-700 h-7 w-7 border-2 rounded-full border-purple-800"></div>
                <div className='text-sm'>Looks</div></div>
            </a>
            <a href="#control"><div className="box-border flex items-center justify-center flex-col  h-20 w-20  hover:bg-gray-300 hover:text-blue-600">
                <div className="bg-yellow-600 h-7 w-7 border-2 rounded-full border-yellow-700"></div>
                <div className='text-sm'>Control</div></div>
            </a>
            <a href="#events"><div className="box-border flex items-center justify-center flex-col  h-20 w-20 hover:bg-gray-300 hover:text-blue-600">
                <div className="bg-yellow-500 h-7 w-7 border-2 rounded-full border-yellow-600"></div>
                <div className='text-sm'>Events</div></div>
            </a>

        </div>
    )
}

export default CodeSidebar