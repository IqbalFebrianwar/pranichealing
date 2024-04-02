import Link from "next/link";

export default function Further (){
    return(
        <main className="w-full justify-center flex bg-white">
            <div className="w-full rounded-3xl text-center mx-28 max-md:px-5 bg-emerald-700 space-y-5 p-14 text-white">
                <h1 className="text-2xl font-bold">Untuk Informasi Lebih Lanjut Silahkan Klik Di bawah ini.</h1>
                <Link href="https://wa.me/628818020066" className="btn px-28 bg-teal-400 border-0 text-white">Lanjutkan</Link>
            </div>
        </main>
    )
}