import { BsCloudSunFill } from 'react-icons/bs'
import { WiDaySleet } from 'react-icons/wi'

const Weather = [
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
]

export default function LeftMain() {
   return (
      <div className="w-[65%] flex flex-col justify-around h-full bg-black bg-opacity-30 p-20 ">
         <div className="flex gap-[3%]">
            <h1 className=" font-bold text-9xl ">16°</h1>
            <div className="flex flex-col justify-center">
               <h1 className="font-bold text-4xl">GOMA</h1>
               <p>06:05 - Monday, 9 Sept </p>
            </div>
            <div className="flex flex-col items-center justify-center ">
               <BsCloudSunFill size={70} color="orange" />
               
            </div>

         </div>
         <div>
            <div className='flex flex-wrap gap-5 scale-100 '>
               {Weather.map((weather) => {
                  return (
                     <div className=' flex flex-col items-center w-20   rounded-lg h-32 '>
                        <p className='' >{weather.icon}</p>
                        <p className='text-xl'>{weather.temperature}°</p>
                        <p className=' text-xs '>{weather.time}:00</p>

                     </div>
                  )

               })}

            </div>
            <h1>The Weather</h1>
         </div>



      </div>
   )
}

