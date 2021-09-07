import Image from "next/image"

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                
                    <button className="bg-white px-10 py-4 rounded-full shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">
                       <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-650 to-pink-650 font-bold"> I’m flexible</span>
                    </button>
            </div>
        </div>
    )
}

export default Banner
