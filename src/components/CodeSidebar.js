import React from 'react'

function CodeSidebar() {
    return (
        <div className="h-screen overflow-hidden flex flex-col border-t border-r border-gray-200">
            <button src="#"><div className="box-border flex items-center justify-center flex-col h-20 w-20 active:bg-gray-300 focus:gray-300 hover:text-blue-600">
                <div className=" bg-blue-500 h-7 w-7 border-2 rounded-full border-blue-600">

                </div>
                <div className='text-sm'>Motion</div>
            </div></button>
            <button><div className="box-border flex items-center justify-center flex-col  h-20 w-20  hover:bg-gray-300 hover:text-blue-600">
                <div className="bg-purple-700 h-7 w-7 border-2 rounded-full border-purple-800"></div>
                <div className='text-sm'>Looks</div></div>
            </button>
            <button><div className="box-border flex items-center justify-center flex-col  h-20 w-20 hover:bg-gray-300 hover:text-blue-600">
                <div className="bg-yellow-500 h-7 w-7 border-2 rounded-full border-yellow-600"></div>
                <div className='text-sm'>Events</div></div>
            </button>
            <button><div className="box-border flex items-center justify-center flex-col  h-20 w-20  hover:bg-gray-300 hover:text-blue-600">
                <div className="bg-yellow-600 h-7 w-7 border-2 rounded-full border-yellow-700"></div>
                <div className='text-sm'>Control</div></div>
            </button>
        </div>
    )
}

export default CodeSidebar