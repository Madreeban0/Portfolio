import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed w-full h-25 bg-gradient-to-r from-blue-600 via-pink-500  text-black shadow z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
    <h1 className="text-4xl mr-90 font-bold">Reeban Austrive</h1>
    <div className="space-x-4">
      <Link to="home" smooth duration={500}>Home</Link>
      <Link to="about" smooth duration={500}>About</Link>
      <Link to="skills" smooth duration={500}>Skills</Link>
      <Link to="projects" smooth duration={500}>Projects</Link>
      <Link to="contact" smooth duration={500}>Contact</Link>
    </div>
  </div>
</nav>

  );
}
