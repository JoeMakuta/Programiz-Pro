import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";


export default function rightMain() {
   const [search_input, set_search_input] = useState('Goma')
   const city = 'Goma'
   const [lon_and_lat, set_lon_and_lat] = useState([])


   useEffect(() => {
      let lon_lat = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search_input}&appid=2c5b563bf97fb0d2b733d6a2a7409cd7`)
         .then((data) => data.json())
         .then((data) => { console.log(data) })
   }, [search_input])

   return (
      <div className="w-[35%] h-full bg-black bg-opacity-10 backdrop-blur-sm p-10 ">
         <div className="flex items-center justify-start pt-6 ">
            <div>
               <input type="text" className=" w-full h-14 text-lg outline-none bg-inherit " placeholder="Another location" onKeyPress={() => {
                  if (event.key === 'Enter') {
                     set_search_input(event.target.value)
                  }
               }
               } />
               <div className="h-[1px] bg-white bg-opacity-50 ">
               </div>
            </div>

            <button className=" w-24 h-20 scale-75 bg-[orange] rounded-r-3xl flex items-center justify-center " >
               <BsSearch size={20} />
            </button>
         </div>
         <div className="flex flex-col gap-6 items-start pt-2 text-gray-500 ">
            <button>Goma</button>
            <button>Bukavu</button>
            <button>Kinshasa</button>


         </div>
         <div className="h-[1px] bg-white bg-opacity-50 mt-4 ">
         </div>

         <div className="flex flex-col gap-6 items-start pt-6">
            <h1 className="font-bold text-lg ">Weather Details</h1>


            <div className="w-full text-gray-300 flex gap-4 flex-col">
               <div className="flex justify-between w-full ">
                  <p>Cloudy</p>
                  <p>60%</p>
               </div>
               <div className="flex justify-between w-full ">
                  <p>Humidity</p>
                  <p>40%</p>
               </div>
               <div className="flex justify-between w-full ">
                  <p>Temperature</p>
                  <p>0%</p>
               </div>
            </div>
         </div>
         <div className="h-[1px] bg-white bg-opacity-50 mt-4 ">
         </div>


      </div>
   )
}
