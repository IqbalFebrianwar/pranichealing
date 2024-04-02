import Image from "next/image";

export default function Dokumentasi() {
  const listImage = [
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711823966/pranicassets/0F893FE2-EDC4-4EBB-9195-FE44F139BCDD_csjsvn.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711823945/pranicassets/494BFE6E-9466-4383-991E-7AA9581E0814_nt8ypa.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711823960/pranicassets/2801E100-6ABA-4E91-821D-8506CA224488_pxv5t3.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711823965/pranicassets/C67DE10F-74EF-4081-9526-0184863BB0E5_bq028d.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711823966/pranicassets/9F47C819-9EE6-4B6A-AAF4-E62EFE62A651_vmig5q.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711823981/pranicassets/IMG_4765_VSCO_ejrp7e.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711824020/pranicassets/IMG_4766_VSCO_fr0u56.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711824023/pranicassets/Photo_2024-03-21_04.16.03_PM_wkixnq.jpg",
      alt: "image",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1711824028/pranicassets/IMG_4769_VSCO_avfmsv.jpg",
      alt: "image",
    },
  ];
  const Foodforth = [
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1712023051/pranicassets/Copy_of_C593DD24-3F06-4D99-A8CF-EC2E038C61E6_uani5x.jpg",
    },
    {
      src: "https://res.cloudinary.com/dt9lwenxb/image/upload/v1712023054/pranicassets/Copy_of_2D9297F0-7683-4298-B774-9C4BB3C3386F_kdi90y.jpg",
    },
  ];
  const videoffth = "https://res.cloudinary.com/dt9lwenxb/video/upload/v1712024390/pranicassets/video/copy-of-waka-waka_zAUEv5iq_fjnkt8.mp4"

  return (
    <main className="w-full justify-center grid p-10">
      <h1 className="font-bold text-gray-900 text-center text-3xl">
        Memori Semua Perjalanan Pranic Healing
      </h1>
      <div className="gap-5 w-full grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-center py-20 grid">
        {listImage.map((e, index) => (
          <Image
            key={index}
            src={e.src}
            width={1000}
            height={1000}
            alt={e.alt}
            className="w-96 rounded-lg"
            loading="lazy"
          />
        ))}
      </div>
      <h1 className="font-bold text-gray-900 text-center text-3xl">
        Food for The Hungry
      </h1>
      <div className="gap-5 w-full grid-cols-2 max-md:grid-cols-1 justify-center pt-20 max-md:grid flex">
        {Foodforth.map((e, index) => (
          <Image
            key={index}
            src={e.src}
            width={1000}
            height={1000}
            alt="image"
            className="w-96 rounded-lg"
            loading="lazy"
          />
        ))}
      </div>
      <div className="w-full justify-center grid mt-10">
        <div className="w-64">
          <video controls width="100%" className=" rounded-2xl">
            <source src={videoffth} type="video/mp4" />
            Sorry, your browser doesnt support embedded videos.
          </video>
        </div>
      </div>
    </main>
  );
}
