import Image from "next/image"

export default function Aktifitas (){
    return(
        <main className="w-full justify-center gap-20 max-md:py-10 items-center text-white bg-rose-500 p-4 flex max-md:grid">
            <div className="flex max-md:flex-col justify-center text-center items-center space-x-5">
                <Image 
                    src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711804104/pranicassets/hungry_pbjrab.svg"
                    alt="image"
                    width={100}
                    height={100}
                />
                <h1 className="font-bold text-xl">Food For The Hungry</h1>
            </div>
            <div className="flex max-md:flex-col justify-center text-center items-center space-x-5">
                <Image 
                    src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711803153/pranicassets/meditasi_vymdjm.svg"
                    alt="image"
                    width={100}
                    height={100}
                />
                <h1 className="font-bold text-xl">Full Moon Meditation</h1>
            </div>
            <div className="flex max-md:flex-col justify-center text-center items-center space-x-5">
                <Image 
                    src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711803738/pranicassets/pranic_ndoeu1.svg"
                    alt="image"
                    width={100}
                    height={100}
                />
                <h1 className="font-bold text-xl">Mobile Pranic Healing</h1>
            </div>
        </main>
    )
}