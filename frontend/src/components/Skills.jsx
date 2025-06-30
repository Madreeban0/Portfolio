import React from "react";

const skills = [
  { name: "React", icon: "react.svg" },
  { name: "Data Entry", icon: "data.svg" },
  { name: "Node.js", icon: "/public/nodejs.png" },
  { name: "Product Research", icon: "product.svg" },
  {name: "Market Research", icon:"market.svg" },
  { name: "MongoDB", icon: "/public/mongodb.png" },
  {name: "Github", icon:"/public/github.png"},
  { name: "Java", icon: "/public/java.png" },
  { name: "C++", icon: "/public/c.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          Skills &amp; Technologies
        </h2>

        {/* Animated line */}
        <div className="relative w-16 h-1 bg-blue-600 mx-auto mt-4 overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-red-700 animate-fillLine"></div>
        </div>

        <p className="mt-4 text-gray-600">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Grid */}
        <div className="h-95 mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-8 bg-blue-100 rounded-xl shadow hover:shadow-lg transition"
            >
              <img src={skill.icon} alt={skill.name} className="h-17 mb-17" />
              <span className="text-blue-700 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Professional Stack Note */}
        <div className="h-30 mt-50 mx-auto max-w-3xl bg-blue-100 border border-red-200 rounded-xl p-6 text-gray-700 text-sm">
          <span className="font-semibold text-blue-600">💡 Professional Technology Stack:</span> These are the core technologies I use to build robust, scalable applications and solve complex problems.
        </div>
      </div>
    </section>
  );
}
