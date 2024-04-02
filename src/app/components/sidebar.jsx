import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li>
          <Link href="/dokumentasi" className="p-5 font-semibold text-md">Dokumentasi</Link>
        </li>
        <li>
          <Link href="/testimoni" className="p-5 font-semibold text-md">Testimoni</Link>
        </li>
        <li>
          <Link href="/infokelas" className="p-5 font-semibold text-md">Info Kelas</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar
