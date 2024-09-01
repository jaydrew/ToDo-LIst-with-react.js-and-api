import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
     <div className="flex justify-between items-center border border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
        <div className="flex justify-between  w-full items-center">
       <div className="flex justify-between w-64 gap-3">
       <div className="rounded-lg bg-slate-400 h-5 w-6 col-span-1"></div>
       <div className=" rounded-lg bg-slate-400 h-5 col-span-1 w-full"></div>
       </div>
        <div className=" rounded-lg  bg-slate-400 h-8 w-8"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
        <div className="flex justify-between  w-full items-center">
       <div className="flex justify-between w-64 gap-3">
       <div className="rounded-lg bg-slate-400 h-5 w-6 col-span-1"></div>
       <div className=" rounded-lg bg-slate-400 h-5 col-span-1 w-full"></div>
       </div>
        <div className=" rounded-lg  bg-slate-400 h-8 w-8"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
        <div className="flex justify-between  w-full items-center">
       <div className="flex justify-between w-64 gap-3">
       <div className="rounded-lg bg-slate-400 h-5 w-6 col-span-1"></div>
       <div className=" rounded-lg bg-slate-400 h-5 col-span-1 w-full"></div>
       </div>
        <div className=" rounded-lg  bg-slate-400 h-8 w-8"></div>
        </div>
      </div>
     </div>
  )
}

export default SkeletonLoader
