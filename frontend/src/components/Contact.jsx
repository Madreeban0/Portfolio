import React from "react";
// import email from "./public/email.png";
// import location from "./public/location.png";
// import availability from "./public/availability.png"
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Let&apos;s Connect
        </h2>

        {/* Animated line */}
        <div className="relative w-16 h-1 bg-blue-600 mx-auto mt-4 overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-blue-700 animate-fillLine"></div>
        </div>

        <p className="mt-4 text-gray-700">
          Ready to collaborate? Let&apos;s discuss your next project or opportunity.
        </p>

        {/* Cards & Form */}
        <div className="mt-12 ml-80 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-200 rounded-xl shadow-md p-8">
              <img
                src="/email.png"
                alt="Email"
                className="w-8 h-8 mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold text-blue-700">Email</h3>
              <p className="mt-1 text-gray-700">reebanaustrive@gmail.com</p>
            </div>

            <div className="bg-blue-200 rounded-xl shadow-md p-8">
              <img
                src="/location.png"
                alt="Location"
                className="w-8 h-8 mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold text-blue-700">Location</h3>
              <p className="mt-1 text-gray-700">Coimbatore, Tamil Nadu</p>
            </div>

            <div className="bg-blue-200 rounded-xl shadow-md p-8">
              <img
                src="/availability.png"
                alt="Availability"
                className="w-8 h-8 mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Availability
              </h3>
              <p className="mt-1 text-gray-700">Open for opportunities</p>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}
