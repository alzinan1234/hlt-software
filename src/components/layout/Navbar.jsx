import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-blue-600 py-6">
        {/* Organization Name */}
        <div className="maxWidth text-white flex flex-wrap items-center justify-center sm:justify-between">
          <div className="text-center w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Help & Live Together (HLT)
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              Membership-based organization for mutual support
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 items-center">
            <Link href="/" className="text-lg sm:text-xl hover:underline">
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-lg sm:text-xl hover:underline"
            >
              Dashboard
            </Link>
            <Link href="/admin" className="text-lg sm:text-xl hover:underline">
              AdminDashboard
            </Link>
            <Link
              href="/login"
              className="text-lg bg-red-700 text-cyan-100 p-2 sm:px-4 rounded-md hover:bg-red-800"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
