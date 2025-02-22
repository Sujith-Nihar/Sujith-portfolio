import { useState } from "react"


export const Navbar = () => {
    const [state, setState] = useState(false);
    const navigation = [
        { title: "Work", path: "/Sujith-portfolio/" },
        { title: "Service", path: "/Sujith-portfolio/" },
        { title: "Portfoilo", path: "/Sujith-portfolio/" },
        { title: "About ", path: "/Sujith-portfolio/" }
    ]
  return (
    <div className=""> 
       <div className="w-[99vw]  flex justify-center relative items-center">
       <nav className="bg-white w-full border-b md:border-0 ">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex justify-between relative space-x-4  py-3 md:py-5 md:block">
                    <a href="/">
                       <h1  className="font-Ibm font-bold text-2xl">Sujith's Studio</h1>
                    </a>
                  <div  className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                      
                  </div>
              </div>
              <div  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-end items-center   space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li  key={idx} className="font-Ibm text-lg hover:text-indigo-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                                
                              )
                          })
                      }
                       <div className=" md:inline-block">
                <a href="/Sujith-portfolio/" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full font-Ibm text-lg  shadow">
                    Say hello
                </a>
              </div>
                  </ul>
              </div>
             
          </div>
      </nav>
      </div>
    </div>
  )
}
