import Image from "next/image";

export default function Bannerpage() {
  return (
    <main className="w-full justify-center gap-20 md:h-[calc(100vh-92px)] items-center p-20 max-md:px-7 flex max-md:grid bg-white">
      <div className="text-black max-w-lg text-4xl font-bold">
        <h1>
          Pusat Resmi Pengajaran dan Penyebaran Pranic Healing di Indonesia
        </h1>
        <button className="btn bg-rose-500 text-white my-10">Selengkapnya</button>
      </div>
      <div className="max-w-xl max-md:w-80">
        <Image
          src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711784867/bannerpranic_mwavcx.png"
          width={1000}
          height={100}
          alt="image"
          className="select-none"
        />
      </div>
    </main>
  );
}
