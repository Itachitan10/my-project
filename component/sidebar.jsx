
import React, { useState } from "react"



const Sidebar = ({labels}) => {
  const [open ,setopen] = useState(true)
  console.log(open);
  
  return (
    <div className='w-20 justify-start'>
      <div className="hidden md:flex">
       <ul className='p-18 border-r-1 shadow-amber-200 h-screen rounded-r-2xl px-30'>
         <h1 className="flex justify-center font-extrabold text-yellow-500 text-3xl pb-5">Ramen</h1>
        {labels.map((links , index)=> (
          <li className='text-blue-700 items-center flex justify-center' key={index}>
            <a className='p-5' href="{links.to}">
              {links.icon}
            </a>
          </li> 
        ))}
      </ul> 
       </div>
        <div className="flex md:hidden p-5 justify-between  text-white bg-black  w-screen ">
          <h1 className="flex mx-10 justify-center font-extrabold text-yellow-500 text-3xl">Ramen</h1>
          <ul className="flex justify-center">
            <button onClick={()=> setopen(!open) } className="md:hidden text-2xl mr-10" >{!open ? "✖" : "☰"}</button>
          </ul>
        </div>

          {!open && ( 
          <div >
            <div className=" flex w-screen  justify-center bg-neutral-600">
              <ul className="transition-all  duration-500  flex m-3 flex-col gap-2">
               {labels.map((p , index)=>( 
                <li key={index}><a href="">{p.icon}</a></li>
               ))}
              </ul>
            </div>
            </div>
          )}  
      

    </div>
  )
}

export default Sidebar















// import React from "react";

// const Sidebar = ({ links }) => {
//   return (
//     <aside className="w-60 h-screen bg-gray-900 text-white p-5 sticky top-0">
//       <h2 className="text-xl font-bold mb-6">My Sidebar</h2>

//       <ul className="space-y-3">
//         {links.map((item, index) => (
//           <li key={index}>
//             <a
//               href={item.to}
//               className="block p-2 rounded hover:bg-gray-700 transition"
//             >
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
