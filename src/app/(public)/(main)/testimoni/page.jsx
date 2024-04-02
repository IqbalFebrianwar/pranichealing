const video = "https://res.cloudinary.com/dt9lwenxb/video/upload/v1712021046/pranicassets/video/testimoni/copy-of-revisi-3_YjYZlyX7_peprxx.mp4"

export default function Testimoni() {
  return (
    <main className="w-full justify-center grid p-10">
      <h1 className="font-bold text-gray-900 text-center text-3xl">
        Ikuti Perjalanan Kesembuhan Melalui Testimoni Pranic Healing
      </h1>
      <div className="w-full justify-center grid mt-10">
        <div className="max-w-2xl">
          <video controls width="100%" className=" rounded-2xl">
            <source src={video} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </main>
  );
}
