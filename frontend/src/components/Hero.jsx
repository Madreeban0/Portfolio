import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-screen h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden"
    >
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-90 md:h-90 rounded-full overflow-hidden bg-gray-300">
          <img
            src="/src/assets/prophoto.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-center md:text-left max-w-xl">
          <p className="text-xl font-medium mb-2">Hello I’m</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Reeban Austrive P
          </h1>
          <div className="w-180 h-1 bg-blue-600 mb-4"></div>
          <p className="text-xl font-semibold mb-2">
            Aspired Full-Stack Developer | Freelancer | Business Enthusiast
          </p>
          <p className="text-gray-400 mb-4">
            Coimbatore, Tamil Nadu, India
          </p>

          {/* ✅ Profile Summary */}
          <h3 className="text-2xl font-bold mb-2">Summary</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Passionate about building scalable web applications and innovative
            solutions. With a strong foundation in MERN stack and cloud
            technologies, I aim to deliver clean, maintainable code and
            contribute to impactful projects. I thrive on learning, freelancing,
            and exploring new business opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-6 py-2 rounded-full border border-blue-600 hover:bg-white hover:text-black transition"
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/reeban-austrive-11019a254/" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-12 h-12 object-cover cursor-pointer hover:opacity-80 transition" />
            </a>
            <a href="https://github.com/Madreeban0" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/github.png" alt="GitHub" className="w-12 h-12 object-cover cursor-pointer hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/moxey_00/" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/instagram.png" alt="Instagram" className="w-12 h-12 object-cover cursor-pointer hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
