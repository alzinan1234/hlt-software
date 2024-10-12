import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-blue-600 py-6 text-white flex items-center justify-center gap-9">
        <div className="container  text-center   w-[500px]">
          <h1 className="text-3xl font-bold">Help & Live Together (HLT)</h1>
          <p className="mt-2">
            Membership-based organization for mutual support
          </p>
        </div>

        <div>
          <Link href="/" className="text-xl">
            Home
          </Link>
        </div>
        <div>
          <Link href="/dashboard" className="text-xl">
            Dashboard
          </Link>
        </div>
        <div>
          <Link href="/admin" className="text-xl">
            AdminDashboard
          </Link>
        </div>
        <div>
          <Link
            href="/login"
            className="text-lg bg-red-700 text-cyan-100 p-3 px-8"
          >
            Login
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
