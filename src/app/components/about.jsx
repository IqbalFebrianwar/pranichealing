const video =
  "https://res.cloudinary.com/dt9lwenxb/video/upload/v1711788290/pranicassets/video/645845df-6bc4-4f54-a7a8-e038e7e39c20_zaljyy.mp4";

export default function About() {
  return (
    <main className="w-full bg-gray-50 justify-center gap-48 max-lg:gap-5 py-20 items-center p-14 max-md:px-7 flex max-md:grid text-gray-900">
      <div className="max-w-xl space-y-10">
        <h1 className="text-gray-900 text-4xl font-bold">Pranic Healing itu apa?</h1>
        <h1 className="text-gray-700 text-xl">
          Pranic Healing adalah sebuah teknik penyembuhan energi yang dilakukan
          tanpa menyentuh dan tanpa obat. Pranic Healing sangat mudah
          dipelajari, hanya dibutuhkan sedikit konsentrasi seperti kita membaca
          buku. Diperbolehkan hanya untuk usia 16 tahun keatas.
        </h1>
      </div>
      <div className="w-48">
        <video controls width="100%" className=" rounded-2xl">
          <source src={video} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </main>
  );
}
