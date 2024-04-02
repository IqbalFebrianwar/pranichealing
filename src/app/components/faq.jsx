import Link from "next/link";

export default function Faqpage() {
  return (
    <main className="bg-white w-full justify-center space-y-5 py-10 flex flex-col px-48 max-md:px-5">
      <h1 className="text-gray-900 text-center font-bold py-10 text-3xl">
        Pertanyaan Yang Sering Muncul
      </h1>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Apa Itu Pranic Healing?
        </div>
        <div className="collapse-content">
          <p>
            Pranic Healing merupakan ilmu dan seni penyembuhan kuno yang
            menggunakan prana atau ki atau energi kehidupan untuk penyembuhan
            tubuh fisik.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p>Apa fungsi prana dan ki bagi kita?</p>
        </div>
        <div className="collapse-content">
          <p>
            Fungsi prana atau ki merupakan energi kehidupan atau napas
            kehidupan, yaitu untuk mempertahakan kehidupan dan kesehatan tubuh.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p>Bilamana proses penyembuhan dengan prana</p>
        </div>
        <div className="collapse-content">
          <p>
            Si penyembuh memproyeksikan prana atau energi kehidupan pada
            penderita, dan demikian menyembuhkan penderita. Proses inilah apa
            yang sering disebut dengan Penyembuhan Ajaib dicapai.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p>Apa Manfaat Pranic Healing</p>
        </div>
        <div className="collapse-content">
          <p>
            Menurunkan Suhu tubuh menghilangkan sakit kepala, kembung, gigi dan
            otot. Batuk dan salesma, bisa sembuh dalam beberapa hari, diare
            dalam beberapa Penyakit berat, Sembuh dalam beberapa bulan.
            Penyembuhan prana meningkatkan laju penyembuhan tiga kali atau lebih
            ketimbang laju penyembuhan yang normal dll.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p>
            Apakah setelah disembuhkan dengan Pranic Healing, pasien bisa
            seketika sembuh?
          </p>
        </div>
        <div className="collapse-content">
          <p>
            Pranic Healing mengenal adanya prinsip keterlambatan waktu, artinya
            bahwa laju penyembuhan tubuh energi jauh lebih cepat ketimbang tubuh
            fisik. Karena itu, pada sebagian kasus pengurangan gejala atau
            penyembuhan tidak terjadi dengan segera karena kecepatan penyembuhan
            tubuh fisik lebih lambat ketimbang tubuh energi. Tingkat
            keterlambatan waktu bergantung pada tingkat kerusakan organ-organ
            tubuh, usia, kondisi fisik serta daya penerimaan pasien.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p>Siapa penemu Pranic Healing Modern?</p>
        </div>
        <div className="collapse-content">
          <p>
            Penemu motede Pranic Healing Modern, ialah Grand Master Choa Kok
            Sui. ia mempelajari, meneliti dan menemukan, serta memformulasikan
            sedemikian rupa teknik-teknik esoretik tentang energi sehingga mudah
            dipelajari dan diaplikasikan di kehidupan sehari-hari oleh siapapun
            dari kalangan manapun.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow shadow bg-white text-gray-900">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p>Siapa Grand Master Choa Kok Sui?</p>
        </div>
        <div className="collapse-content">
          <p>
            Grand Master Choa Kok Sui adalah seorang Filipina berdarah china.
            telah mempersembahkan banyak waktunya untuk melakukan studi dan
            eksperimen selama bertahun-tahun di bidang energi kehidupan atau
            prana, dan bagaimana itu bisa di manfaatkan untuk penyembuhan
            penyakit fisik.
          </p>
        </div>
      </div>
      <Link href="https://drive.google.com/drive/folders/1jePMYs6wCjCd0XS2bFEpuzO5IDEQFT8h?usp=sharing" className="btn btn-outline outline-green-600 text-green-900 ">Lainnya</Link>
    </main>
  );
}
