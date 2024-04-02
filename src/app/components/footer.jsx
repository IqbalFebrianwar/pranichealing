import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-20 py-10 max-md:px-2 bg-white">
      <footer className="footer justify-between max-md:px-5 px-32 p-10 bg-white text-black">
        <aside>
          <Link href="/">
            <div className="w-32">
              <Image
                src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711787135/logo_xgj4cg.jpg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </Link>
          <p className="font-bold mt-5">Alamat</p>
          <p>Jl. Kali Pasir No.7, Menteng, Jakarta</p>
          <p className="font-bold">No Telp</p>
          <p>0881 8020 066</p>
          <p className="font-bold">Email</p>
          <p>gmcksprana@gmail.com</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.youtube.com/@indonesiapranichealing9115">
              <Image 
                src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711824595/pranicassets/yt_awbkbu.svg"
                alt="yt"
                height={40}
                width={40}
              />
            </Link>
            <Link href="https://www.instagram.com/pranichealingindonesia/">
              <Image 
                src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711824594/pranicassets/insta_ppyv6w.svg"
                alt="insta"
                height={40}
                width={40}
              />
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-white text-gray-900">
        <aside>
          <p>Copyright © 2024 - Website by Pranic Healing</p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
