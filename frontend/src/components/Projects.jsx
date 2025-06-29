import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center mt-50">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Projects
        </h2>

        {/* Animated line */}
        <div className="relative w-16 h-1 bg-blue-600 mx-auto mt-4 overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-blue-700 animate-fillLine"></div>
        </div>

        {/* Card */}
        <div className="mt-20 w-280 bg-blue-200 rounded-xl shadow-lg border-t-4 border-blue-700 p-8 max-w-xl mx-auto h-180">
          <img
            src="/src/assets/projects.png"
            alt="Coming Soon"
            className="w-20 h-20 mx-auto mb-4"
          />

          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Amazing Projects Coming Soon!
          </h3>

          <p className="text-gray-700 text-l mb-4">
           I’m currently developing a diverse portfolio of projects that reflect my passion for full-stack development, innovative product research, and modern market analysis.

Each project is an opportunity to solve real-world problems through clean, scalable code and thoughtful design. I love turning ideas into working solutions that are both efficient and user-friendly.

From creating intuitive web applications to conducting in-depth product research that uncovers market opportunities, my goal is to build solutions that make an impact.

I believe in continuous learning and experimenting with emerging technologies to stay ahead of the curve. This approach helps me deliver results that are not only technically sound but also aligned with real market needs.

This section will soon feature detailed case studies, live demos, and behind-the-scenes insights into my process. I’m excited to share the stories, challenges, and breakthroughs that shape my work.
          </p>

          <p className="text-blue-700 text-sm">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Updates coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
