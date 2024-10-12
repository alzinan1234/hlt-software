import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <main className="maxWidth mx-auto py-8">
          <section>
            <h2 className="text-2xl text-black font-bold mb-4">
              Latest Notices
            </h2>
            <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-6">
              {/* Map notices here */}
              <div className=" p-6 shadow rounded">
                <h3 className="font-bold text-lg">Notice Title</h3>
                <p className="mt-2">This is the description of the notice.</p>
                <span className="text-gray-500 text-sm">
                  Posted on: 12 Oct, 2024
                </span>
              </div>
            </div>
          </section>

          <section className="mt-12 text-black">
            <h2 className="text-2xl font-bold py-10">Important Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/register"
                className="bg-blue-500 text-white p-6 shadow rounded text-center"
              >
                Register as a Member
              </a>
              <a
                href="/notice"
                className="bg-green-500 text-white p-6 shadow rounded text-center"
              >
                View All Notices
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomeSection;
