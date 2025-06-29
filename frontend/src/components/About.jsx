// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    
    <section id="about" className="py-16 px-4 bg-black">
          
        <h1 className="ml-250 mb-5 mt-20 text-blue-600 font-bold">About me</h1>
         <div className="relative w-16 h-1 mb-20 bg-blue-600 mx-auto mt-4 overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-red-700 animate-fillLine"></div>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1 */}
        <div className="relative bg-blue-200 rounded-lg shadow-lg p-6 h-75">
          <div className="animated-line absolute top-0 left-0 w-full h-1 bg-blue-600 overflow-hidden">
            <div className="line-fill h-full bg-blue-500"></div>
          </div>
          <h3 className="text-xl font-bold text-blue-800 mb-4 mt-4">My Journey</h3>
          <p className="text-gray-700">
           I’m an aspiring full-stack developer with a strong interest in building solutions that solve real market problems.
Alongside development, I enjoy diving deep into product research and market analysis to understand what people truly need.
My journey so far has combined hands-on coding with practical business insights, helping me look at projects from both a technical and strategic perspective.
I believe that blending technology with smart research can create products that truly make an impact.


          </p>
        </div>

        {/* Card 1-2 */}
        <div className="relative bg-blue-200 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
          <div className="animated-line absolute top-0 left-0 w-full h-1 bg-blue-600 overflow-hidden">
            <div className="line-fill h-full bg-blue-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-blue-800 mb-2">2+</h2>
          <p className="text-gray-600 uppercase tracking-wide">Years Learning</p>
        </div>

         {/* Card 2-1 */}
        <div className="relative bg-blue-200 rounded-lg shadow-lg p-6 h-75">
          <div className="animated-line absolute top-0 left-0 w-full h-1 bg-blue-600 overflow-hidden">
            <div className="line-fill h-full bg-blue-500"></div>
          </div>
          <h3 className="text-xl font-bold text-blue-800 mb-4 mt-4">What I do</h3>
          <p className="text-gray-700">
            I build full-stack web applications that are clean, scalable, and user-friendly.
I combine development with product research and market analysis to create solutions people actually need.
I enjoy working on real-world projects that turn ideas into valuable products and experiences.


          </p>
        </div>

         {/* Card 2-2 */}
        <div className="relative bg-blue-200 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center">
          <div className="animated-line absolute top-0 left-0 w-full h-1 bg-blue-600 overflow-hidden">
            <div className="line-fill h-full bg-blue-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-blue-800 mb-2">6+</h2>
          <p className="text-gray-600 uppercase tracking-wide">Technologies</p>
        </div>

        {/* Card 3-1 */}
        <div className="relative bg-blue-200 rounded-lg shadow-lg p-6 h-75">
          <div className="animated-line absolute top-0 left-0 w-full h-1 bg-blue-600 overflow-hidden">
            <div className="line-fill h-full bg-blue-500"></div>
          </div>
          <h3 className="text-xl font-bold text-blue-800 mb-4 mt-4">My Goals</h3>
          <p className="text-gray-700">
           My goal is to grow as a well-rounded full-stack developer who can turn ideas into impactful products.
I want to combine clean, scalable development with thoughtful product research and market analysis.
I aim to understand what people truly need and build solutions that solve real problems.
In the long run, I hope to contribute to projects that create real value for businesses and communities while expanding my skills every step of the way.


          </p>
        </div>

         {/* Card 3-2 */}
        <div className="relative bg-blue-200 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center">
          <div className="animated-line absolute top-0 left-0 w-full h-1 bg-blue-600 overflow-hidden">
            <div className="line-fill h-full bg-blue-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-blue-800 mb-2">5+</h2>
          <p className="text-gray-600 uppercase tracking-wide">Goals achieved</p>
        </div>


        {/* Add more cards as needed */}
      </div>
    </section>
  );
}
