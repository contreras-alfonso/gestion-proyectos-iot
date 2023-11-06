import React from 'react'

export const Navegacion = ({secciones}) => {
  return (
    <div className='w-72 bg-white py-5 pr-5'>
        {/* <h2 className='font-medium text-lg'>Vivero Plantas y flores</h2> */}
        <ul className='text-sm font-medium flex flex-col gap-1'>
            {secciones.map(e=>(
                <li key={e} className=''>
                    <a href="/" className="w-full gap-3 bg-white py-3 rounded-r-xl relative inline-flex items-center justify-start overflow-hidden transition-all group">
                    <span className="w-0 rounded bg-emerald-500 absolute ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-1"></span>
                    <span className=" text-black w-full group-hover:text-white z-10 px-5 flex items-center gap-3">
                        <i class="fa-regular fa-gauge text-gray-400"></i> 
                        <p className='text-[13px]'>{e}</p>
                    </span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}
