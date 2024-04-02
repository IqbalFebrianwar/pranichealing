import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar justify-between py-5 px-48 max-md:px-8 bg-white">
      <div className="navbar-start max-md:right-0">
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
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-gray-900 menu-horizontal px-1">
          <li>
            <Link href="/dokumentasi">Dokumentasi</Link>
          </li>
          <li>
            <Link href="/testimoni">Testimoni</Link>
          </li>
          <li>
            <Link href="/infokelas">Info Kelas</Link>
          </li>
        </ul>
      </div>
      <div className=" navbar-end w-10 md:hidden">
        <label htmlFor="my-drawer">
          <Image
            src="https://res.cloudinary.com/dt9lwenxb/image/upload/v1711786077/burger_menmpo.svg"
            alt="burger"
            width={100}
            height={100}
          />
        </label>
      </div>
    </nav>
  );
};
export default Navbar;
