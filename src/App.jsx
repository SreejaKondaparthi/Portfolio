import { Routes, Route, Link, NavLink, useSearchParams } from "react-router-dom";
import RoleFilter from "./components/RoleFilter.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import list from "./data/projects.json";

function Nav(){
  const base = "px-3 py-2 rounded-md hover:bg-neutral-800";
  const active = ({isActive}) => (isActive ? base + " bg-neutral-800" : base);
  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold">Sreeja Kondaparthi</Link>
        <nav className="flex gap-2 text-sm">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Page({ title, children }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  );
}

function Home(){ 
  return <Page title="Home">Router shell OK.</Page>;
}

function Projects(){ 
  const [params] = useSearchParams();
  const role = params.get("role");
  const filtered = role ? list.filter(p => p.tags.includes(role)) : list;
  return (
    <Page title={role ? `Projects — ${role}` : "Projects"}>
      <RoleFilter />
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </Page>
  );
}

function Contact(){
  return <Page title="Contact">Good</Page>;
}

export default function App(){
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
