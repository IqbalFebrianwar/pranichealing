"use client";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/app/components/navbar"));
const Footer = dynamic(() => import("@/app/components/footer"));
const Sidebar = dynamic(()=> import("@/app/components/sidebar"))

export default function AllLayout({ children }) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <main className="bg-white text-gray-900">{children}</main>
          <Footer />
        </div>
        <Sidebar />
      </div>
    </>
  );
}
