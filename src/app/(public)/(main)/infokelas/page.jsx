import dynamic from "next/dynamic";
import Image from "next/image";

const Table = dynamic(() => import("@/app/components/infokelas/table"));

export default function Infokelas() {
  return (
    <main className="w-full justify-center grid p-10">
      <h1 className="font-bold text-gray-900 text-center text-3xl">
        Mari Mengetahui Lebih Lanjut Tentang Kelas Pranic Healing
      </h1>
      <div className="w-full justify-center grid mt-10">
        <Table />
        <Image 
         src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711957033/pranicassets/f7d23b14-c062-4947-85c6-a5848cfa0f94_bugroc.jpg"
         width={700}
         height={700}
         alt="image"
         loading="lazy"
         className="mt-10"
        />
      </div>
    </main>
  );
}
