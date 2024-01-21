import Image from 'next/image'
import { Button } from '../ui/button'
export default function Hero() {
    return (
        <div className="h-screen flex flex-col w-full md:flex-row bg-background text-foreground ">
            <div className="w-full  flex bg-opacity-60  px-3   items-center justify-center flex-col gap-6  ">
                <h1 className="text-6xl   md:7xl lg:text-8xl font-bold  ">Recruitify</h1>
                <p className=''>Want a new Job, You are at right Place</p>
                <div>
                    <Button >Start Now!!</Button>
                </div>
            </div>
            <div className='w-full flex justify-center items-center '>
                <div className=' rounded-lg  '>
                    
                        <Image
                            src="/assets/Hero.png"
                            width={800}
                            height={500}
                            alt="Picture of the author"
                            layout="fixed"
                        />
                  
                </div>

            </div>

        </div>
    )
}